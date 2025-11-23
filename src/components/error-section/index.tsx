import { Button } from "@components/button";
import { Typography } from "@components/typography";
import { theme } from "@theme";
import { View } from "react-native";

type ErrorSectionProps = {
  message?: string;
  description?: string;
  onRetry?: () => void;
};

export function ErrorSection({
  message = "Ocorreu um erro ao carregar os dados.",
  description,
  onRetry,
}: ErrorSectionProps) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Typography variant="body">{message}</Typography>

      {description && (
        <Typography variant="caption" style={{ marginTop: 2 }}>
          {description}
        </Typography>
      )}

      {onRetry && (
        <View style={{ marginTop: theme.spacing.s24 }}>
          <Button onPress={onRetry} size="sm">
            Tentar novamente
          </Button>
        </View>
      )}
    </View>
  );
}
