import { act, renderHook } from '@testing-library/react-hooks';
import useLocation from '../src/useLocation';

describe('useLocation', () => {
  it('should push to the desired route', () => {
    const { result } = renderHook(() => useLocation());
    expect(window.location.pathname).toBe('/');
    act(() => {
      result.current.push('/test');
    });
    expect(window.location.pathname).toBe('/test');
    act(() => {
      result.current.push('/');
    });
    expect(window.location.pathname).toBe('/');
  });

  it('should replace to the desired route', () => {
    const { result } = renderHook(() => useLocation());
    expect(window.location.pathname).toBe('/');
    act(() => {
      result.current.push('/replace-test');
    });
    expect(window.location.pathname).toBe('/replace-test');

    act(() => {
      result.current.push('/');
    });
    expect(window.location.pathname).toBe('/');
  });

  it('should get search params', () => {
    let search;
    const mockLocation = new URL('https://test.com/testing?param1=test&testing=true');
    delete window.location;
    window.location = mockLocation;

    const { result } = renderHook(() => useLocation());
    act(() => {
      search = result.current.search;
      console.log(search);
    });
    expect(search).toBe('?param1=test&testing=true');
  });

  it('should get pathname', () => {
    let pathname;
    const mockLocation = new URL('https://test.com/testing?param1=test&testing=true');
    delete window.location;
    window.location = mockLocation;

    const { result } = renderHook(() => useLocation());
    act(() => {
      pathname = result.current.pathname;
      console.log(pathname);
    });
    expect(pathname).toBe('/testing');
  });
});
