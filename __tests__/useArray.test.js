import { renderHook, act } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import useArray from '../src/useArray';

afterEach(cleanup);

describe('useArray', () => {
  it('should add item', () => {
    const { result } = renderHook(() => useArray([]));
    const { add } = result.current;
    expect(result.current.value.length).toBe(0);

    act(() => {
      add('test');
    });

    expect(result.current.value.length).toBe(1);
  });

  it('should remove item by index', () => {
    const { result } = renderHook(() => useArray(['test', 'test1', 'test2']));
    const { removeIndex } = result.current;
    expect(result.current.value.length).toBe(3);

    act(() => removeIndex(1));

    expect(result.current.value.length).toBe(2);
    expect(result.current.value[1]).toBe('test2');
  });

  it('should remove item by id', () => {
    const { result } = renderHook(() => useArray([{ id: 1 }, { id: 2 }]));
    const { removeById } = result.current;
    expect(result.current.value.length).toBe(2);

    act(() => removeById(2));

    expect(result.current.value.length).toBe(1);
  });

  it('should clear the array', () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5]));
    const { clear } = result.current;

    expect(result.current.value.length).toBe(5);

    act(() => clear());

    expect(result.current.value.length).toBe(0);
  });
});
