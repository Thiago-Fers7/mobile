import { DefaultLayout } from "@components/layouts/default-layout";
import { Typography } from "@components/typography";

import { styles } from "./styles";

export function ContactDetails() {
  return (
    <DefaultLayout>
      <Typography variant="heading" style={styles.title}>
        Detalhes do contato
      </Typography>

      <Typography variant="heading" style={styles.title}>
        Todos os contatos
      </Typography>
    </DefaultLayout>
  );
}
