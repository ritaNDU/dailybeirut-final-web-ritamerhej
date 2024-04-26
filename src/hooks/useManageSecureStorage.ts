import UserData from "../data/user.type";
import secureLocalStorage from "react-secure-storage";

export default function useManageSecureStorage() {
  function storeUserInfo(accessToken: string, refreshToken: string) {
    const access = JSON.stringify(accessToken);
    const refresh = JSON.stringify(refreshToken);

    try {
      secureLocalStorage.setItem("accessToken", access);

      secureLocalStorage.setItem("refreshToken", refresh);
    } catch (err) {
      console.log(err);
    }
  }

  function getStoredUserInfo() {
    try {
      const accessToken: string = secureLocalStorage.getItem(
        "accessToken"
      ) as string;
      const refreshToken: string = secureLocalStorage.getItem(
        "refreshToken"
      ) as string;

      const userInfo: UserData = {
        accessToken: accessToken ? accessToken : "",
        refreshToken: refreshToken ? refreshToken : "",
      };
      console.log(accessToken);
      return userInfo;
    } catch (e) {
      console.log(e);
    }
  }

  function removeUserInfo() {
    try {
      secureLocalStorage.setItem("accessToken", "");
      secureLocalStorage.setItem("refreshToken", "");
    } catch (err) {
      console.log(err);
    }
  }

  return { storeUserInfo, getStoredUserInfo, removeUserInfo };
}
