
import { createContext, FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { AuthService } from '../services/auth/auth.service';
import { jwtDecode } from "jwt-decode";

interface IAuthContextData {
  isAuthenticated: boolean,
  login: (encode: string) => Promise<string | void>,
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

  const handleLogout = useCallback(() => {
    // localStorage.removeItem('TOKEN');
    // localStorage.removeItem('USER');

    setToken(undefined);
  }, []);

  useEffect(() => {
    // const token = localStorage.getItem('TOKEN');
    // const user = localStorage.getItem('USER');

    // if (user) setUser(JSON.parse(user!));

    if (token) {
      setToken(JSON.parse(JSON.stringify(token)));
    }

    // if (!user || !token) {
    //   localStorage.removeItem('TOKEN');
    //   localStorage.removeItem('USER');

    //   setToken(undefined);
    // }
  }, [handleLogout, token]);

  const handleLogin = useCallback(async (encode: string) => {
    const result = await AuthService.login(encode);

    if (result instanceof Error) return result.data.message;

    const token: string = result.data.token;

    const user: IAuthUserProps = jwtDecode(result.data.token);

    // localStorage.setItem('TOKEN', token);
    // localStorage.setItem('USER', JSON.stringify(user));

    setUser(user);

    setToken(token);
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
