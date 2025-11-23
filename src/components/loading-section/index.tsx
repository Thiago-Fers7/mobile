import { Typography } from "@components/typography";
import { ActivityIndicator, View } from "react-native";

type LoadingSectionProps = {
  message?: string;
  description?: string;
};

export function LoadingSection({ message = "Carregando...", description }: LoadingSectionProps) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <ActivityIndicator size="large" />
      <Typography variant="body">{message}</Typography>
      {description && <Typography variant="caption">{description}</Typography>}
    </View>
  );
}
