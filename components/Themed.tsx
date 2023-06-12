/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react';
import {  Text as DefaultText, 
          View as DefaultView,
          TouchableHighlight as DefaultButton, 
          TextInput as DefaultTextInput,
          Image as DefaultImage
         ,ImageStyle,
         CheckBoxProps as DefaultCheckbox,
         StyleProp,
         ViewStyle,
         ModalProps,
         GestureResponderEvent,
         CheckBoxProps} from 'react-native';
         import Colors from '../constants/Colors';


         import useColorScheme from '../hooks/useColorScheme';
import { FontAwesome } from 'react-native-vector-icons';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
type InputType= "default"| "search" | "password"| "balance" | "word"
type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ButtonProps = ThemeProps &
  DefaultButton['props'] & {
    label: string;
    labelStyle?: any;
    disabled?: boolean;
    secondary?: boolean;
    gray?: boolean;
    noborder?: boolean;
    gradientStyle?: ViewStyle;
  };

export type CheckboxProps = ThemeProps & DefaultCheckbox & {
  label?:string,
  disabled?:boolean
};
export type IconButtonProps = ThemeProps & DefaultButton['props'] & {
  icon: React.ComponentProps<typeof FontAwesome>['name'] ,
  background?:boolean,
  color?:string,
  size?:number,
  parentStyle?: StyleProp<ViewStyle>,
  fontAwesome?: boolean
};
export type IconProps = ThemeProps &  {
  name: string,
  color?:string,
  size?:number,
};
export type InputProps = ThemeProps & DefaultTextInput['props'] & {
  defaultText?:string, 
  inputType?:InputType,
  multiline?:boolean,
  umberOfLines?:number,
  disabled?:boolean,
  containerStyle?: ViewStyle,
  passwordState?: boolean,
  value?:string,
  noborder?:boolean,
  onPress?:((state:boolean) => void),
  handleChange?:((text:string) => void),
};
export type SeedWordProps = ThemeProps & DefaultTextInput['props'] & {
  hidden?: boolean,
  covered?: boolean,
  id?: number,
  handleChange?: ((id:number, text: string) => void);
};
export type ImageProps = ThemeProps & DefaultImage['props'] & {
  source: any ,
  defaultText:string, 
  round?: boolean,
  size?: number,
  style?: ViewStyle
};

export type ViewProps = ThemeProps & DefaultView['props'];
export type AddressBookItemProps = ThemeProps & { 
  username: string,
  address: string
};

export type AccountActionItemProps = ThemeProps & DefaultButton['props'] & { 
  username: string, 
  address?: string, 
  balance?: string,
  action: "vote" | "exchange" | "add" | "print"
};
export type BalanceInfoProps = ThemeProps & { 
  label: string, 
  balance: string,
};
export type LogoProps = ThemeProps & {
  size?: number,
  color?: string,
  style?: ImageStyle,
  gradient?: boolean
}
export type FAQelementProps = ThemeProps & {
  question: string, 
  answer: string
}

export type StyledModalProps = ThemeProps & ModalProps & {
  changeShowModal: ButtonProps['onPress']
};

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
