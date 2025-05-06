import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  IntroScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
};

export type GeneralNavigationProp = NavigationProp<RootStackParamList>;
