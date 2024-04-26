import userAxiosIntance from "./userAxiosInstance";
import {
  LOGIN_ENDPOINT,
  REFRESH_TOKEN_ENDPOINT,
  SIGNUP_ENDPOINT,
  TOKEN_EXPIRATION,
} from "./api.data";
import UserData, { User } from "../data/user.type";

export async function createNewUser(user: User) {
  try {
    await userAxiosIntance.post(SIGNUP_ENDPOINT, {
      ...user,
      token_expires_in: TOKEN_EXPIRATION,
    });
  } catch (e) {
    alert("Couldn't create user. You may already be registered.");
  }
}

export async function getUserTokens(user: User) {
  try {
    const res = await userAxiosIntance.post(LOGIN_ENDPOINT, {
      ...user,
      token_expires_in: TOKEN_EXPIRATION,
    });
    if (res) {
      const data = res.data;
      const userTokens: UserData = {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };
      return userTokens;
    }
  } catch (e) {
    alert(
      "Login failed. You either entered wrong credentials or are not registered yet."
    );
  }
}

export async function refreshUserToken(refreshToken: string) {
  try {
    const res = await userAxiosIntance.post(REFRESH_TOKEN_ENDPOINT, {
      refreshToken: refreshToken,
      token_expires_in: TOKEN_EXPIRATION,
    });
    if (res) {
      const data = res.data;
      const newAccessToken: string = data.accessToken;
      return newAccessToken;
    }
  } catch (e) {
    alert("An error occured. Try again or Logout.");
  }
}
