import { QueryProvider } from "@services/query/queryProvider";

import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";

export default function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </QueryProvider>
  );
}
