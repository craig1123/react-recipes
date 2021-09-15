import { renderHook } from '@testing-library/react-hooks';
import usePrint from '../src/usePrint';

describe('usePrint', () => {
  it('mocks window.print', () => {
    window.print = jest.fn();
    const { result } = renderHook(() => usePrint());
    result.current.handlePrint();
    expect(window.print).toBeCalled();
  });
});
