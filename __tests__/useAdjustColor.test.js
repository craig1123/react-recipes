import { renderHook, act } from '@testing-library/react-hooks';
import useAdjustColor from '../src/useAdjustColor';
import pSBC from '../utils/shadeBlendConvert';

let color1 = 'rgb(20,60,200)';
let color2 = 'rgba(20,60,200,0.67423)';
let color5 = '#F3A';
let color6 = '#F3A9';
let color7 = 'rgb(200,60,20)';
let color8 = 'rgba(200,60,20,0.98631)';

describe('useAdjustColor', () => {
  it('should be defined', () => {
    expect(useAdjustColor).toBeDefined();
  });
  it('should give a new color', () => {
    const { result } = renderHook(() => useAdjustColor(0.42, color1));

    expect(result.current).toBe('rgb(166,171,225)');
  });
});

describe('shadeBlendConvert', () => {
  it('should shade blend or convert colors', () => {
    /*** Log Blending ***/
    // Shade (Lighten or Darken)
    expect(pSBC(0.42, color1)).toBe('rgb(166,171,225)');
    expect(pSBC(-0.4, color5)).toBe('#c62884');

    // Shade with Conversion (use "c" as your "to" color)
    expect(pSBC(0.42, color2, 'c')).toBe('#a6abe1ac');

    // RGB2Hex & Hex2RGB Conversion Only (set percentage to zero)
    expect(pSBC(0, color6, 'c')).toBe('rgba(255,51,170,0.6)'); // #F3A9 + [Convert] => rgba(255,51,170,0.6)

    // Blending
    expect(pSBC(-0.5, color2, color8)).toBe('rgba(142,60,142,0.83)');

    /*** Linear Blending ***/
    // Shade (Lighten or Darken)
    expect(pSBC(0.42, color1, false, true)).toBe('rgb(119,142,223)');

    // Shade with Conversion (use "c" as your "to" color)
    expect(pSBC(0.42, color2, 'c', true)).toBe('#778edfac');

    // RGB2Hex & Hex2RGB Conversion Only (set percentage to zero)
    expect(pSBC(0, color6, 'c', true)).toBe('rgba(255,51,170,0.6)');

    // Blending
    expect(pSBC(-0.5, color2, color8, true)).toBe('rgba(110,60,110,0.83)');
  });
});
