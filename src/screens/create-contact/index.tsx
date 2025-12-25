import { Button } from "@components/button";
import { ControlledInput } from "@components/controlled-input";
import { DefaultLayout } from "@components/layouts/default-layout";
import { Typography } from "@components/typography";
import { UserAvatar } from "@components/user-avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContact } from "@hooks/queries/contacts/useCreateContact";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "@routes/types";
import { useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { z } from "zod/v3";

import { Categories } from "./components/categories";
import { ControlledDatePicker } from "./components/controlled-date-picker";
import { styles } from "./styles";

export const createContactSchema = z.object({
  name: z.string().min(2, "O nome é curto demais"),
  phone: z.string().min(10, "Número de telefone inválido"),
  email: z.string().email("Digite um e-mail válido").optional().or(z.literal("")),
  dateOfBirth: z.date().max(new Date(), "Data de nascimento inválida").optional(),
  categories: z.array(z.string()).optional(),
});

export type CreateContactFormData = z.infer<typeof createContactSchema>;

export function CreateContact() {
  const { mutateAsync: createContactAsync } = useCreateContact();
  const navigation = useNavigation<RootStackNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<CreateContactFormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      dateOfBirth: undefined,
    },
    resolver: zodResolver(createContactSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: CreateContactFormData) {
    const response = await createContactAsync({
      ...data,
      createdBy: "local-user-id",
    });

    if (response.isSuccess) {
      const createdId = response.data;

      navigation.replace("ContactDetails", { contactId: createdId.toString() });
      return;
    }

    Alert.alert("Atenção", response.message);
  }

  const name = watch("name");

  return (
    <DefaultLayout style={styles.container} touchWithoutFeedback={false}>
      <View style={styles.formContainer}>
        <UserAvatar name={name} size={120} style={styles.photoContainer} />

        <Typography variant="heading" style={{ textAlign: "center" }}>
          {name}
        </Typography>

        <Categories
          onChange={(selectedCategories) => {
            setValue("categories", selectedCategories || undefined);
          }}
        />

        <View style={styles.inputItem}>
          <Typography variant="body">Nome*</Typography>

          <ControlledInput
            control={control}
            name="name"
            placeholder="Ex: João da Silva"
            error={errors.name?.message}
          />
        </View>

        <View style={styles.inputItem}>
          <Typography variant="body">E-mail</Typography>
          <ControlledInput
            control={control}
            name="email"
            placeholder="Ex: joao.silva@email.com"
            keyboardType="email-address"
            error={errors.email?.message}
          />
        </View>

        <View style={styles.doubleInputContainer}>
          <View style={styles.doubleInputItem}>
            <Typography variant="body">Telefone*</Typography>
            <ControlledInput
              control={control}
              name="phone"
              placeholder="(00) 00000-0000"
              keyboardType="phone-pad"
              error={errors.phone?.message}
            />
          </View>

          <View style={styles.doubleInputItem}>
            <Typography variant="body">Data de nascimento</Typography>
            <ControlledDatePicker control={control} errorMessage={errors.dateOfBirth?.message} />
          </View>
        </View>
      </View>

      <Button style={{ marginTop: 32 }} onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        {isSubmitting ? "Salvando..." : "Salvar contato"}
      </Button>
    </DefaultLayout>
  );
}
