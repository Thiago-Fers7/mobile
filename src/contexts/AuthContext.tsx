import { storage } from "@services/storage/mmkv";
import { delay } from "@utils/delay";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(": AuthProvider -> isLoggedIn", isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storedData = storage.getString(USER_DATA_STORE_KEY);

      if (storedData) {
        setIsLoggedIn(true);
      }

      await delay(2000);

      setIsLoading(false);
    }

    loadStoragedData();
  }, []);

  async function signIn(userData: User) {
    await delay(1000);

    storage.set(USER_DATA_STORE_KEY, JSON.stringify(userData));

    setIsLoggedIn(true);
  }

  async function signOut() {
    await delay(1000);

    storage.delete(USER_DATA_STORE_KEY);

    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
