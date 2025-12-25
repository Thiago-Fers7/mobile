import { UserRound } from "lucide-react-native";
import React, { useMemo } from "react";
import { Image, Text, TextStyle, View, ViewStyle } from "react-native";

interface UserAvatarProps {
  /** Nome completo do usuário para extração das iniciais */
  name: string;
  /** URL da imagem (opcional - preparado para o futuro) */
  imageUri?: string | null;
  /** Diâmetro do avatar em pixels. Default: 50 */
  size?: number;
  /** Cor de fundo do círculo quando não houver imagem */
  backgroundColor?: string;
  /** Cor do texto das iniciais */
  textColor?: string;
  /** Estilos extras para o container */
  style?: ViewStyle;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  imageUri,
  size = 50,
  backgroundColor = "#E0E0E0", // Cinza padrão
  textColor = "#333333",
  style,
}) => {
  // Lógica memorizada para extrair iniciais apenas quando o nome mudar
  const initials = useMemo(() => {
    if (!name) return "";

    const cleanName = name.trim();
    const nameParts = cleanName.split(/\s+/); // Divide por qualquer espaço em branco

    if (nameParts.length === 0) return "";

    // Se tiver apenas um nome (ex: "Gabriel"), pega as duas primeiras letras
    if (nameParts.length === 1) {
      return cleanName.substring(0, 2).toUpperCase();
    }

    // Pega a inicial do primeiro e do último nome (ex: "Gabriel Silva" -> "GS")
    const firstInitial = nameParts[0][0];
    const lastInitial = nameParts[nameParts.length - 1][0];

    return (firstInitial + lastInitial).toUpperCase();
  }, [name]);

  // Cálculos dinâmicos de estilo baseados no tamanho (size)
  const containerStyle: ViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: imageUri ? "transparent" : backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Garante que a imagem respeite o círculo
  };

  const textStyle: TextStyle = {
    color: textColor,
    fontSize: size * 0.4, // A fonte ocupa 40% do tamanho do avatar
    fontWeight: "600",
  };

  return (
    <View style={[containerStyle, style]} accessibilityLabel={`Avatar de ${name}`}>
      {!name && <UserRound size={size * 0.6} color="#888888" />}

      {name && (
        <>
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          )}

          {!imageUri && (
            <Text style={textStyle} allowFontScaling={false}>
              {initials}
            </Text>
          )}
        </>
      )}
    </View>
  );
};
