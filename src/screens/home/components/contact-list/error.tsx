import { Text } from "react-native";

type ContactsListErrorProps = {
  onRetry?: () => void;
};

export function ContactsListError({ onRetry }: ContactsListErrorProps) {
  return (
    <Text onPress={onRetry}>
      Erro ao carregar a lista de contatos. Toque para tentar novamente.
    </Text>
  );
}
