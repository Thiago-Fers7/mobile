import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  AllContacts: undefined;
  ContactDetails: { contactId: string };
  CreateContact: undefined;
  FavoritesContacts: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
