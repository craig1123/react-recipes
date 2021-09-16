import { act, renderHook } from '@testing-library/react-hooks';
import useQueryParams from '../src/useQueryParams';

describe('useQueryParams', () => {
  it('should be able to set query params', () => {
    const newParams = { page: '1', order: 'ASC' };
    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setParams(newParams);
    });
    const params = result.current.getParams();
    expect(params).toStrictEqual(newParams);
  });

  it('should be able to clear query params', () => {
    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setParams({});
    });
    const params = result.current.getParams();
    expect(params).toStrictEqual({});
  });

  it('should be able to read query params', () => {
    delete window.location;
    window.location = new URL('https://test.com/testing?param1=test&testing=true');

    const { result } = renderHook(() => useQueryParams());
    let params;
    act(() => {
      params = result.current.getParams();
    });
    expect(params).toStrictEqual({ param1: 'test', testing: 'true' });
  });
});
