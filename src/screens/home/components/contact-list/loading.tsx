import { ActivityIndicator, Text, View } from "react-native";

export function LoadingContactsList() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <ActivityIndicator size="large" />
      <Text>Carregando contatos...</Text>
    </View>
  );
}
