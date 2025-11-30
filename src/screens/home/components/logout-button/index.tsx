import { Button } from "@components/button";
import { useAuth } from "@contexts/AuthContext";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { contactsKeys } from "@hooks/queries/contacts/contactsKeys";
import { useQueryClient } from "@tanstack/react-query";
import { theme } from "@theme";
import { Settings2 } from "lucide-react-native";
import React, { useCallback, useRef, useState } from "react";
import { Pressable } from "react-native";

import { styles } from "./styles";

function BackDrop(props: BottomSheetBackdropProps) {
  return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />;
}

export function LogoutButton() {
  const { signOut } = useAuth();
  const queryClient = useQueryClient();

  const [isLoadingSignOut, setIsLoadingSignOut] = useState(false);

  async function handleLogout() {
    setIsLoadingSignOut(true);

    await signOut();

    queryClient.removeQueries({
      queryKey: contactsKeys.all,
    });

    setIsLoadingSignOut(false);
  }

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <Pressable style={styles.iconButton} onPress={handlePresentModalPress} hitSlop={20}>
        <Settings2 color={theme.colors.primary[500]} size={24} />
      </Pressable>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enableDynamicSizing={true}
        backdropComponent={BackDrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Button onPress={handleLogout} disabled={isLoadingSignOut}>
            Sair da conta
          </Button>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}
