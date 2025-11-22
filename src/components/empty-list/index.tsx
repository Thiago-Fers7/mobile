import { Typography } from "@components/typography";
import { View } from "react-native";

import { styles } from "./styles";

type EmptyListProps = {
  message?: string;
};

export function EmptyList({ message = "Nenhum item encontrado." }: EmptyListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.emptyListContainer}>
        <Typography variant="body" style={styles.message}>
          {message}
        </Typography>
      </View>
    </View>
  );
}
