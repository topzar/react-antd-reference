import Mock from "mockjs";
export const userLogin = req => {
  let { userName, userPass } = JSON.parse(req.body);
  if (userName === "admin" && userPass === "123456") {
    return {
      code: 0,
      message: "操作成功了",
      data: {
        id: 1,
        user: Mock.Random.name(),
        age: 28
      }
    };
  } else {
    return {
      code: 1,
      message: "账户或者密码有误",
      data: {}
    };
  }
};
