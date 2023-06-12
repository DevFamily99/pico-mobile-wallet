import React from "react";
import { SvgXml } from "react-native-svg";
import Colors from "../constants/Colors";
import { LogoProps, View } from './Themed';

const PicoWalletIcon = (props: LogoProps) =>{
  const svgMarkup = `
  <svg width="112" height="133" viewBox="0 0 112 133" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stop-color=${Colors.light.gradient_end}/>
        <stop offset="100%" stop-color=${Colors.light.gradient_middle}/>
      </linearGradient>
    </defs>
    ${props.gradient?
      `<path fill-rule="evenodd" clip-rule="evenodd" d="M94.071 34.8694C103.478 34.8694 111.103 27.2438 111.103 17.8371C111.103 8.43047 103.478 0.804871 94.071 0.804871C84.6643 0.804871 77.0387 8.43047 77.0387 17.8371C77.0387 27.2438 84.6643 34.8694 94.071 34.8694ZM51.4903 0.96627C22.9083 3.14054 0.393555 27.0209 0.393555 56.1598C0.393555 57.5925 0.447985 59.0125 0.554891 60.4178H0.393555V132.805H34.4581V107.272C41.012 110.005 48.2039 111.515 55.7484 111.515C86.32 111.515 111.103 86.7314 111.103 56.1598H81.2968C81.2968 70.2698 69.8584 81.7082 55.7484 81.7082C41.6384 81.7082 30.2 70.2698 30.2 56.1598C30.2 43.5006 39.4072 32.9918 51.4903 30.9646V0.96627Z" fill="url(#gradient)"/>`
    :
      `<path fill-rule="evenodd" clip-rule="evenodd" d="M94.071 34.8694C103.478 34.8694 111.103 27.2438 111.103 17.8371C111.103 8.43047 103.478 0.804871 94.071 0.804871C84.6643 0.804871 77.0387 8.43047 77.0387 17.8371C77.0387 27.2438 84.6643 34.8694 94.071 34.8694ZM51.4903 0.96627C22.9083 3.14054 0.393555 27.0209 0.393555 56.1598C0.393555 57.5925 0.447985 59.0125 0.554891 60.4178H0.393555V132.805H34.4581V107.272C41.012 110.005 48.2039 111.515 55.7484 111.515C86.32 111.515 111.103 86.7314 111.103 56.1598H81.2968C81.2968 70.2698 69.8584 81.7082 55.7484 81.7082C41.6384 81.7082 30.2 70.2698 30.2 56.1598C30.2 43.5006 39.4072 32.9918 51.4903 30.9646V0.96627Z" fill=${props.color || Colors.light.text}/>`
    }
  </svg>`
  return (
    <View style={[{padding:2, marginRight: 0}, props.style]}>
      <SvgXml xml={svgMarkup} width={props.size || 20} height={props.size || 20}  />
    </View>
  );
}

export default PicoWalletIcon;