const palette = {
  primary500: "#0056D2",
  primary600: "#0041A3",
  neutral100: "#FFFFFF",
  neutral200: "#F5F5F5",
  neutral900: "#121214",
  danger: "#E11D48",
} as const;

export const theme = {
  colors: {
    background: palette.neutral100,
    backgroundSubtle: palette.neutral200,
    textPrimary: palette.neutral900,
    textInverted: palette.neutral100,
    brand: palette.primary500,
    brandPressed: palette.primary600,
    error: palette.danger,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
  },
  textVariants: {
    heading: { fontSize: 24, fontWeight: "bold", color: palette.neutral900 },
    body: { fontSize: 16, color: palette.neutral900 },
    caption: { fontSize: 12, color: "#666" },
  },
} as const;
