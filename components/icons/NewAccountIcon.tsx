import React from "react";
import { SvgXml } from "react-native-svg";
import { LogoProps, View } from '../Themed';

const NewAccountIcon = (props: LogoProps) =>{
  const svgMarkup = `
  <svg width="172" height="171" viewBox="0 0 172 171" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M140.333 151.104C125.49 163.524 106.368 171 85.5 171C64.9205 171 46.0392 163.729 31.2847 151.616C43.6702 134.863 63.5665 124 86 124C108.204 124 127.923 134.642 140.333 151.104ZM147.653 144.214C133.383 125.83 111.073 114 86 114C60.6638 114 38.149 126.08 23.901 144.794C9.10064 129.423 0 108.524 0 85.5C0 38.2795 38.2797 0 85.5 0C100.405 0 114.418 3.81372 126.619 10.5186C131.151 4.15234 138.59 0 147 0C160.807 0 172 11.1929 172 25C172 33.5562 167.702 41.1084 161.147 45.6152C167.438 57.5229 171 71.0955 171 85.5C171 108.236 162.126 128.898 147.653 144.214ZM143.5 9C143.5 6.79077 145.291 5 147.5 5C149.709 5 151.5 6.79077 151.5 9V21.5H164C166.209 21.5 168 23.2908 168 25.5C168 27.7092 166.209 29.5 164 29.5H151.5V42C151.5 44.2092 149.709 46 147.5 46C145.291 46 143.5 44.2092 143.5 42V29.5H131C128.791 29.5 127 27.7092 127 25.5C127 23.2908 128.791 21.5 131 21.5H143.5V9ZM86 95C100.912 95 113 82.9116 113 68C113 53.0884 100.912 41 86 41C71.0883 41 59 53.0884 59 68C59 82.9116 71.0883 95 86 95ZM86 105C106.435 105 123 88.4346 123 68C123 47.5654 106.435 31 86 31C65.5655 31 49 47.5654 49 68C49 88.4346 65.5655 105 86 105Z" fill="url(#paint0_linear_1626_1232)"/>
  <defs>
  <linearGradient id="paint0_linear_1626_1232" x1="86" y1="0" x2="86" y2="171" gradientUnits="userSpaceOnUse">
  <stop stop-color="#F99F1F"/>
  <stop offset="1" stop-color="#F25E11"/>
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

export default NewAccountIcon;