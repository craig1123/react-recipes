import { renderHook } from '@testing-library/react-hooks';
import usePrevious from '../src/usePrevious';

describe('usePrevious', () => {
  it('should return the previous value', () => {
    const { result, rerender } = renderHook(props => usePrevious(props), { initialProps: 0 });

    expect(result.current).toBe(undefined);

    rerender(1);
    expect(result.current).toBe(0);

    rerender(2);
    expect(result.current).toBe(1);
  });
});
