import { storage } from "@services/storage/mmkv";
import { delay } from "@utils/delay";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { User } from "src/@types/user";

const USER_DATA_STORE_KEY = "@MyApp:user_data";

type AuthContextData = {
  isLoggedIn: boolean;
  isLoading: boolean;
  signIn: (data: User) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
  readonly children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storedData = storage.getString(USER_DATA_STORE_KEY);

      if (storedData) {
        setIsLoggedIn(true);
      }

      await delay(200);

      setIsLoading(false);
    }

    loadStoragedData();
  }, []);

  async function signIn(userData: User) {
    await delay(300);

    storage.set(USER_DATA_STORE_KEY, JSON.stringify(userData));

    setIsLoggedIn(true);
  }

  async function signOut() {
    await delay(300);

    storage.delete(USER_DATA_STORE_KEY);

    setIsLoggedIn(false);
  }

  const value = useMemo(
    () => ({
      isLoggedIn,
      isLoading,
      signIn,
      signOut,
    }),
    [isLoggedIn, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
