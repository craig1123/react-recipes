import { renderHook } from '@testing-library/react-hooks';
import useOnlineStatus from '../src/useOnlineStatus';

describe('useOnlineStatus', () => {
  it('should be defined', () => {
    expect(useOnlineStatus).toBeDefined();
  });

  it('should return online status value', () => {
    const { result } = renderHook(() => useOnlineStatus());

    expect(result.current).toBe(true);
  });
});
