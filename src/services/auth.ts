import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AuthService {
  private token: string | null = null;
  private user: any | null = null;

  public async getToken(): Promise<any | null> {
    if (this.token) {
      return this.token;
    } else {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          this.token = token;
          return this.token;
        }
      } catch (error) {
        console.log('Error getting token', error);
        return error;
      }
    }
  }

  public async getUser(): Promise<any | null> {
    if (this.user) {
      return this.user;
    } else {
      try {
        const user = await AsyncStorage.getItem("user");
        if (user) {
          this.user = JSON.parse(user);
          return this.user;
        }
      } catch (error) {
        console.log('Error getting user', error);
        return error
      }
    }
  }

  public async setToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem("token", token);
      this.token = token
    } catch (error) {
      console.log('Error saving token', error);
    }
  }

  public async setUser(user: any): Promise<void> {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      this.user = user;
    } catch (error) {
      console.log('Error saving user', error);
    }
  }

  public async removeToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem("token");
      this.token = null;
    } catch (error) {
      console.log('Error removing token', error);
    }
  }

  public async removeUser(): Promise<void> {
    try {
      await AsyncStorage.removeItem("user");
      this.user = null;
    } catch (error) {
      console.log('Error removing user', error);
    }
  }

  public async logout(): Promise<void> {
    await this.removeToken();
    await this.removeUser();
  }

  public async isLoggedIn(): Promise<boolean> {
    const token = await this.getToken();
    return token !== null;
  }
}