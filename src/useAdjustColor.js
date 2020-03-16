import { useMemo } from 'react';
import shadeBlendConvert from '../utils/shadeBlendConvert';

const useAdjustColor = (percentage, color1, color2, linearBlend) => {
  return useMemo(() => shadeBlendConvert(percentage, color1, color2, linearBlend), [
    percentage,
    color1,
    color2,
    linearBlend,
  ]);
};

export default useAdjustColor;

// Usage

// const App = () => {
//   const lightGray = useAdjustColor(0.7, '#000');
//   const darkerWhite = useAdjustColor(-0.1, '#fff');
//   const rbg = useAdjustColor(0.42, '#fff', 'c');
//   const blend = useAdjustColor(-0.5, 'rgb(20,60,200)', 'rgb(200,60,20)');
//   const linerBlend = useAdjustColor(-0.5, 'rgb(20,60,200)', 'rgb(200,60,20)', true);

//   return (
//     <div>
//       <div style={{ background: lightGray, height: '50px', width: '50px' }} />
//       <div style={{ background: darkerWhite, height: '50px', width: '50px' }} />
//       <div style={{ background: blend, height: '50px', width: '50px' }} />
//       <div style={{ background: linerBlend, height: '50px', width: '50px' }} />
//     </div>
//   );
// };
