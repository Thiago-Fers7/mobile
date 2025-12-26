// utils/masks.ts
import { Mask } from "react-native-mask-input";

export const PHONE_MASK: Mask = (text = "") => {
  const cleanText = text.replace(/\D/g, "");

  // Se tiver mais que 10 dígitos (DDD + 9 dígitos), usa formato de celular
  if (cleanText.length > 10) {
    return ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
  }

  // Senão, usa formato de fixo
  return ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
};
