# 🍡 `useAdjustColor`

Shade, blend, or convert a color to another color.
https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)

## Arguments

- `percentage: Number`: A number between -1 and 1. Positive equals a lighter shade. Negative equals a darker shade.
- `color1: String`: A hex or rbg color value
- `color2?: String`: A hex or rbg color value. Optional
- `linearBlend?: Boolean`: A hex or rbg color value. Default is false

## Returns

- `color: String`: An updated hex or rbg color value according to the percentage

## Usage

```jsx
import { useAdjustColor } from 'react-recipes';

const App = () => {
  const lightGray = useAdjustColor(0.7, '#000');
  const darkerWhite = useAdjustColor(-0.1, '#fff');
  const hexToRGB = useAdjustColor(0.42, '#fff', 'c'); // 'c' stand for "convert hex <--> RBG
  const blend = useAdjustColor(-0.5, 'rgb(20,60,200)', 'rgb(200,60,20)');
  const linerBlend = useAdjustColor(-0.5, 'rgb(20,60,200)', 'rgb(200,60,20)', true);

  return (
    <div>
      <div style={{ background: lightGray, height: '50px', width: '50px' }} />
      <div style={{ background: darkerWhite, height: '50px', width: '50px' }} />
      <div style={{ background: blend, height: '50px', width: '50px' }} />
      <div style={{ background: linerBlend, height: '50px', width: '50px' }} />
    </div>
  );
};
```
