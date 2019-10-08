import axios from "@axios";

/**
 *@description 登录接口
 */
export const userLogin = ({ userName, userPass }) => {
  return axios.request({
    method: "post",
    url: "/api/user/login",
    data: {
      userName,
      userPass
    }
  });
};
