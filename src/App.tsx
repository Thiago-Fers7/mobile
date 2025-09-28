import { KeyboardAvoidingView, Platform, SafeAreaView, TextInput, View } from "react-native";
import { Button } from "./components/button";
import { Input } from "./components/input";

import { useRef, useState } from "react";
import { styles } from "./styles";
import { Switch } from "./components/switch";

function delay(ms: number = 1000) {
  return new Promise(r => setTimeout(() => r(0), ms))
}

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordInputRef = useRef<TextInput | null>(null);

  const emailText = useRef('');
  const passwordText = useRef('');

  async function handleSubmit() {
    if (!emailText || !passwordText) {
      return;
    }

    setIsSubmitting(true);

    console.log({
      emailText: emailText.current,
      passwordText: passwordText.current,
    })

    await delay(3000);

    setIsSubmitting(false);
  }

  function handleChangeEmail(text: string) {
    emailText.current = text;
  }

  function handleChangePassword(text: string) {
    passwordText.current = text;
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.formContainer}>
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
            {isSubmitting ? 'Entrando...' : 'Entrar' }
          </Button>

          <Switch />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
