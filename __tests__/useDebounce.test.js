import { act } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import useDebounce from '../src/useDebounce';

describe('useDebounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  function getHook(val = '', ms = 5) {
    return renderHook(({ value = 'test', delay = 5 }) => useDebounce(value, delay), {
        initialProps: {
          delay: ms,
          value: val,
        },
      });
  }

  it('should cancel function call on unmount', () => {
    const hook = getHook('', 5);

    expect(hook.result.current).toBe('');
    act(() => {
      hook.unmount();
    });
    act(() => {
      hook.rerender({ value: 'delayed' });
    });
    act(() => {
      jest.advanceTimersByTime(5);
    });
    expect(hook.result.current).toBe('');
  });

  it('should reset timeout on delay change', () => {
    const hook = getHook('', 50);

    expect(hook.result.current).toBe('');
    act(() => {
      hook.rerender({ delay: 5, value: 'delayed' });
    });
    expect(hook.result.current).toBe('');
    act(() => {
      jest.advanceTimersByTime(5);
    });
    expect(hook.result.current).toBe('delayed');
  });

  it('should reset timeout on value change', () => {
    const hook = getHook('test', 50);

    jest.advanceTimersByTime(45);
    expect(hook.result.current).toBe('test');
    act(() => {
      hook.rerender({ delay: 55, value: 'try again' });
    });
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(hook.result.current).toBe('test');
    act(() => {
      jest.advanceTimersByTime(5);
    });
    expect(hook.result.current).toBe('try again');
  });
});