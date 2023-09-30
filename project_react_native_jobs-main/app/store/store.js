import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStoreStorage = create()(devtools(persist((set, get) => {
    return {
        token: '',
        setToken: async (token) => set({ token: token }),
        getToken: () => get().token
    }
}, {
    name: 'store',
    storage: {
        setItem: async (name, value) => {
            const str = JSON.stringify({
                state: {
                    ...value.state,
                    token: value.state.token
                }
            })

            await AsyncStorage.setItem(name, str);
        },
        getItem: async (name) => {
            const str = await AsyncStorage.getItem(name);

            if (!str) 
                return null;

            const { state } = JSON.parse(str);

            return {
                state: {
                    ...state,
                    token: state.token
                }
            }
        },
        removeItem: async (name) => await AsyncStorage.removeItem(name)
    }
})));