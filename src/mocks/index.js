import Mock from "mockjs";
import { userLogin } from "@mocks/user";
import { projectList } from "@mocks/project";

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
});

// 用户
Mock.mock(new RegExp("/api/user/login"), "post", userLogin);

// 项目
Mock.mock(new RegExp("/api/project/list"), "post", projectList);

export default Mock;
