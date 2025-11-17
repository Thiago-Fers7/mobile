import { Button } from "@components/button";
import { Input } from "@components/input";
import { DefaultLayout } from "@components/layouts/default-layout";
import { Switch } from "@components/switch";
import { useAuth } from "@contexts/AuthContext";
import { useRef, useState } from "react";
import { ScrollView, Text, TextInput } from "react-native";

import { styles } from "./styles";

export function LoginScreen() {
  const { signIn } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordInputRef = useRef<TextInput | null>(null);

  const emailText = useRef("");
  const passwordText = useRef("");

  async function handleSubmit() {
    if (!emailText || !passwordText) {
      return;
    }

    setIsSubmitting(true);

    console.log({
      emailText: emailText.current,
      passwordText: passwordText.current,
    });

    await signIn({
      id: "1",
      name: "Luiz Thiago",
      email: "email",
      avatarUrl: "https://github.com/Thiago-Fers7.png",
    });

    setIsSubmitting(false);
  }

  function handleChangeEmail(text: string) {
    emailText.current = text;
  }

  function handleChangePassword(text: string) {
    passwordText.current = text;
  }

  const confirmButtonText = isSubmitting ? "Entrando..." : "Entrar";

  return (
    <DefaultLayout>
      <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Entre com sua conta</Text>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
          returnKeyType="next"
          onChangeText={handleChangeEmail}
        />

        <Input
          placeholder="Senha"
          secureTextEntry
          onSubmitEditing={handleSubmit}
          onChangeText={handleChangePassword}
          ref={passwordInputRef}
        />

        <Button onPress={handleSubmit} disabled={isSubmitting}>
          {confirmButtonText}
        </Button>

        <Switch />
      </ScrollView>
    </DefaultLayout>
  );
}
