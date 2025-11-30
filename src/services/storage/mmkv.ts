import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

const clientStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve();
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export const mmkvPersister = createAsyncStoragePersister({
  storage: clientStorage,
  key: "REACT_QUERY_OFFLINE_CACHE",
  throttleTime: 1000,
});
