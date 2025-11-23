const colors = {
  primary: {
    50: "#E6F0FF",
    100: "#B3D3FF",
    200: "#80B7FF",
    300: "#4D9AFF",
    400: "#1A7EFF",
    500: "#0056D2",
    600: "#0041A3",
    700: "#002C73",
    800: "#001744",
    900: "#000B22",
  },

  neutral: {
    50: "#FAFAFA",
    100: "#FFFFFF",
    200: "#F5F5F5",
    300: "#E5E5E5",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#121214",
  },

  success: {
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16A34A",
  },

  warning: {
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
  },

  danger: {
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
  },
} as const;

export const theme = {
  colors,
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
  },
  textVariants: {
    heading: { fontSize: 24, fontWeight: "bold", color: colors.neutral[900] },
    body: { fontSize: 16, color: colors.neutral[900] },
    caption: { fontSize: 12, color: "#666" },
  },
} as const;
