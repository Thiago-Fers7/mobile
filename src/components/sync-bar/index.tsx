import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface SyncBarProps {
  visible: boolean;
}

export const SyncBar = ({ visible }: SyncBarProps) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      opacity.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 600, easing: Easing.ease }),
          withTiming(0.4, { duration: 600, easing: Easing.ease })
        ),
        -1,
        true
      );
    } else {
      opacity.value = withTiming(0);
    }
  }, [opacity, visible]);

  // A lógica de "esconder" vai TODA aqui dentro
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      // Se a opacidade for 0, zeramos a altura para não ocupar espaço
      // Aqui dentro PODE ler o .value pois roda na UI thread
      height: opacity.value === 0 ? 0 : 4,
      marginTop: opacity.value === 0 ? 0 : 0, // Opcional: ajustar margens se tiver
    };
  });

  // ✅ CORREÇÃO: Removemos o "if return null"
  // O componente sempre renderiza, mas o estilo o torna invisível/sem tamanho
  return <Animated.View style={[styles.bar, animatedStyle]} />;
};

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    // height fixa removida daqui e controlada pelo animatedStyle
    backgroundColor: "#fdd700ff",
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  },
});
