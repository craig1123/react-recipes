import { renderHook, act } from '@testing-library/react-hooks';
import useCookie from '../src/useCookie';

describe('useCookie', () => {
  beforeEach(() => {
    const document = {};
    global.document = document;
  });

  it('should be defined', () => {
    expect(useCookie).toBeDefined();
  });

  it('should return, update, and delete the cookie', () => {
    const { result } = renderHook(() => useCookie('token', '0'));
    expect(result.current[0]).toBe('0');

    act(() => {
      // updateCookie
      result.current[1]('123');
    });
    expect(result.current[0]).toBe('123');

    act(() => {
      // deleteCookie
      result.current[2]();
    });
    expect(result.current[0]).toBe(null);
  });
});
