export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IAuthContext {
  token: string | null;
  loading: boolean;
  user: IUser | null;
  signIn(data: ILogin): Promise<void>;
  signOut(): void; 
}

export interface IAuthState {
  token: string | null;
  user: IUser | null;
  errors: any;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface IAuthResponse {
  token: string | null;
  user: IUser | null;
}