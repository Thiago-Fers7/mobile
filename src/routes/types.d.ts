export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ContactDetails: { contactId: string };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
