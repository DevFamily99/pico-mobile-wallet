/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Api, JsonRpc } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Login: NavigatorScreenParams<LoginStackParamList> | undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

//Login Tabs
export type LoginStackParamList = {
  SplashScreen: undefined;
  Welcome: undefined;
  LoginScreen: undefined;
  LoginSplit: undefined;
  Restore: undefined;
  RestoreSeedPhrase: undefined;
  RestoreQR: undefined;
  RestoreNewPassword: { name: string };
  RestorePicture: { name: string };
  Referral: undefined;
  ReferralSearch: undefined;
  SeedPhrase: undefined;
  SeedReveal: undefined;
  SeedVerify: { phrase: string[] };
  SelectName: { phrase: string[] };
  UploadPicture: { name: string };
  NewPassword: { name: string };
  SaveBackup: { name: string };
  SaveBackupCloud: { name: string };
  AlmostThere: { name: string };
  Success: { name?: string };
  NotFound: undefined;
};
export type LoginStackScreenProps<Screen extends keyof LoginStackParamList> = NativeStackScreenProps<
  LoginStackParamList,
  Screen
>;


export type MainAppTabParamList = {
  Home: undefined;
  Whitepaper: undefined;
  Governance: undefined;
  FAQ: undefined;
};

export type MainTabScreenProps<Screen extends keyof MainAppTabParamList> = CompositeScreenProps<
  MaterialTopTabScreenProps<MainAppTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;


export type HomeParamList = {
  Faucet: undefined;
  Vote: undefined;
  Savings: undefined;
  Transfer: undefined;
  Exchange: undefined;
  Chats: undefined;
  WhitePaper: undefined;
  Governance: undefined;
  RoadMap: undefined;
  FAQ: undefined;
  Drawer: undefined;
};

export type HomeScreenProps<Screen extends keyof HomeParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<HomeParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type User = {
  name: string;
};

export interface useProviderAuthInterface {
  user: User | null;
  signin: any;
  signout: any;
}

export interface UserInfoProviderInterface {
  name: string | undefined;
  setName: (name: string | undefined) => void;
  avatar: string;
  mnemonic: string;
  publicKey: string;
  privateKey: string;
  balance: number;
  updateBalance: () => Promise<number | undefined>;
}

export interface RPCProviderInterface {
  rpc: JsonRpc;
  api: Api | undefined;
}

export interface RPCResponse {
  success: boolean
  data: any
}

export type ChatStackPramList = {
  Chats: undefined
  ChatsPage: undefined
  Chat: {
    chatUser: string
  }
}