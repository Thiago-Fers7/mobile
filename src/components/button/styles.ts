import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    width: "100%",
  },
  buttonActive: {
    opacity: Platform.OS === "ios" ? 0.7 : 1,
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
  buttonLabel: {
    color: "white",
    textAlign: "center",
  },
  buttonLabelDisabled: {
    color: "#dcdcdc",
  },
});

export const button_ripple_color = "darkblue";
