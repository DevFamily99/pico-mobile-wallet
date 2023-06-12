import React from "react";
import { SvgXml } from "react-native-svg";
import { LogoProps, View } from '../Themed';

const CloudIcon = (props: LogoProps) =>{
  const svgMarkup = `
  <svg width="198" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M172.724 85.713C172.724 88.7766 172.467 91.7803 171.974 94.7038C187.044 99.3318 198 113.36 198 129.947C198 150.305 181.496 166.809 161.138 166.809H36.8617C16.5035 166.809 0 150.305 0 129.947C0 110.904 14.4396 95.2343 32.9669 93.2887C29.6106 84.2362 30.6835 73.7299 36.7584 65.3133C45.4439 53.2796 61.4042 49.6049 74.2828 55.9626C83.9102 41.5173 100.349 32.0002 119.011 32.0002C148.676 32.0002 172.724 56.0483 172.724 85.713ZM103.003 81.7006C102.065 80.7629 100.793 80.2361 99.467 80.2361C98.1409 80.2361 96.8691 80.7629 95.9314 81.7006L76.7852 100.847C74.8326 102.799 74.8326 105.965 76.7852 107.918C78.7378 109.87 81.9037 109.87 83.8563 107.918L94.467 97.3072V132.868C94.467 135.63 96.7056 137.868 99.467 137.868C102.228 137.868 104.467 135.63 104.467 132.868V97.3072L115.078 107.918C117.03 109.87 120.196 109.87 122.149 107.918C124.101 105.965 124.101 102.799 122.149 100.847L103.003 81.7006Z" fill="url(#paint0_linear_1320_3401)"/>
  <defs>
  <linearGradient id="paint0_linear_1320_3401" x1="99" y1="32.0002" x2="99" y2="166.809" gradientUnits="userSpaceOnUse">
  <stop stop-color="#F9A01F"/>
  <stop offset="1" stop-color="#F25D10"/>
  </linearGradient>
  </defs>
  </svg>
  `
  return (
    <View style={[{padding:2, marginRight: 0}, props.style]}>
      <SvgXml xml={svgMarkup} width={props.size || 20} height={props.size || 20}  />
    </View>
  );
}

export default CloudIcon;