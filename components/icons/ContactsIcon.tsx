import React from "react";
import { SvgXml } from "react-native-svg";
import { LogoProps, View } from '../Themed';

const ContactsIcon = (props: LogoProps) =>{
  const svgMarkup = `
  <svg width="198" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M63.1053 47.2903C63.1053 46.7043 63.5804 46.2293 64.1664 46.2293H143.294C143.88 46.2293 144.356 46.7043 144.356 47.2903V151.801C144.356 152.387 143.88 152.862 143.294 152.862H64.1664C63.5804 152.862 63.1053 152.387 63.1053 151.801V47.2903Z" fill="url(#paint0_linear_1320_3408)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30 27.3607C30 21.5006 34.7506 16.75 40.6107 16.75H158.389C164.249 16.75 169 21.5006 169 27.3607V171.202C169 177.062 164.249 181.812 158.389 181.812H40.6107C34.7506 181.812 30 177.062 30 171.202V149.609C30 148.504 30.8954 147.609 32 147.609H38.4229C41.353 147.609 43.7283 145.233 43.7283 142.303C43.7283 139.373 41.353 136.998 38.4229 136.998H32C30.8954 136.998 30 136.102 30 134.998V106.171C30 105.067 30.8954 104.171 32 104.171H38.4229C41.353 104.171 43.7283 101.796 43.7283 98.8658C43.7283 95.9357 41.353 93.5604 38.4229 93.5604H32C30.8954 93.5604 30 92.665 30 91.5604V62.7336C30 61.629 30.8954 60.7336 32 60.7336H38.4229C41.353 60.7336 43.7283 58.3583 43.7283 55.4283C43.7283 52.4982 41.353 50.1229 38.4229 50.1229H32C30.8954 50.1229 30 49.2275 30 48.1229V27.3607ZM64.1664 35.6186C57.7203 35.6186 52.4947 40.8442 52.4947 47.2903V151.801C52.4947 158.247 57.7203 163.473 64.1664 163.473H143.294C149.741 163.473 154.966 158.247 154.966 151.801V47.2903C154.966 40.8442 149.741 35.6186 143.294 35.6186H64.1664Z" fill="url(#paint1_linear_1320_3408)"/>
  <defs>
  <linearGradient id="paint0_linear_1320_3408" x1="99.5" y1="16.75" x2="99.5" y2="181.812" gradientUnits="userSpaceOnUse">
  <stop stop-color="#F9A01F"/>
  <stop offset="1" stop-color="#F25D10"/>
  </linearGradient>
  <linearGradient id="paint1_linear_1320_3408" x1="99.5" y1="16.75" x2="99.5" y2="181.812" gradientUnits="userSpaceOnUse">
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

export default ContactsIcon;