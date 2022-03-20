import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { login, logout } from "../store/actions/auth";
import { IAuthContext, ILogin } from "../interfaces/auth";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const {
    token,
    user,
    loading
  } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const signIn = async ({email, password}: ILogin) => {
    dispatch(login({ email, password }));
  }

  const signOut = async () => {
    dispatch(logout());
  }


  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        token,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}