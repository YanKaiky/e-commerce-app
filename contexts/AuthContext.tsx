
import { createContext, FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { AuthService } from '../services/auth/auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface IAuthContextData {
  isAuthenticated: boolean,
  login: (encode: string) => Promise<string | number | void>,
  logout: () => void,
  user: IAuthUserProps | undefined,
  setUser: (user: IAuthUserProps) => void,
  setToken: (token: string) => void,
}

export const AuthContext = createContext({} as IAuthContextData);

interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthUserProps {
  _id: string,
  name: string,
  username: string,
  email: string,
  location: string,
  createdAt: Date,
  updatedAt: Date,
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<IAuthUserProps>();

  const handleLogout = useCallback(async () => {
    await AsyncStorage.removeItem('TOKEN');
    await AsyncStorage.removeItem('USER');

    setToken(undefined);
  }, []);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('TOKEN');
      const user = await AsyncStorage.getItem('USER');

      if (user) setUser(JSON.parse(user));

      if (token) {
        setToken(JSON.parse(JSON.stringify(token)));
      }

      if (!user || !token) {
        await AsyncStorage.removeItem('TOKEN');
        await AsyncStorage.removeItem('USER');

        setToken(undefined);
      }
    })()
  }, [handleLogout, token]);

  const handleLogin = useCallback(async (encode: string) => {
    try {
      const response = await AuthService.login(encode);

      const data = JSON.parse(JSON.stringify(response.data));

      const token = data.token;
      const user = data.user;

      await AsyncStorage.setItem('TOKEN', token);
      await AsyncStorage.setItem('USER', JSON.stringify(user));

      setUser(user);

      setToken(token);
    } catch (error: any) {
      Alert.alert(
        "Invalid Form",
        error.response.data.message,
      );

      const status: number = error.response.status;

      return status;
    }
  }, []);

  const isAuthenticated = useMemo(() => !!token, [token]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        login: handleLogin,
        logout: handleLogout,
        user,
        setUser,
        setToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
