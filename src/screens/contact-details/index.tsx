import { DefaultLayout } from "@components/layouts/default-layout";
import { Typography } from "@components/typography";
import { useGetContactDetail } from "@hooks/queries/contacts/useGetContactDetail";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/types";
import { useEffect } from "react";

import { styles } from "./styles";

type ContactDetailsProps = NativeStackScreenProps<RootStackParamList, "ContactDetails">;
export function ContactDetails({ route, navigation }: ContactDetailsProps) {
  const { contactId } = route.params;
  const { data: contact, isLoading, isFetching } = useGetContactDetail(contactId);

  useEffect(() => {
    navigation.setOptions({ title: contact ? contact.name : "Detalhes do Contato" });
  }, [contact, navigation]);

  console.log("Contact Details Rendered");

  if (isLoading || isFetching) {
    return (
      <DefaultLayout>
        <Typography variant="heading" style={styles.title}>
          Carregando...
        </Typography>
      </DefaultLayout>
    );
  }

  if (!contact) {
    return (
      <DefaultLayout>
        <Typography variant="heading" style={styles.title}>
          Contato não encontrado.
        </Typography>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Typography variant="heading" style={styles.title}>
        Nome: {contact?.name}
      </Typography>

      <Typography variant="body" style={styles.title}>
        ID: {contactId}
      </Typography>
    </DefaultLayout>
  );
}
