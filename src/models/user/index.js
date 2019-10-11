import { userLogin as userLoginApi } from "@api/user/login";
import { setUserLoginStatus } from "@utils/user";

export function userLogin(userInfo) {
  const { userName, userPass } = userInfo;

  return new Promise((resolve, eject) => {
    //发起登录请求
    userLoginApi({ userName, userPass })
      .then(({ status, data: res }) => {
        //请求是否成功
        if (res.code !== 0) {
          eject(new Error(res.message));
          return false;
        }
        //作登录过的标记
        setUserLoginStatus("true");

        resolve(res);
      })
      .catch(err => {
        eject(err);
      });
  });
}
