import axios from "@axios";

/**
 *@description 获取项目列表
 */
export const projectList = data => {
  return axios.request({
    method: "post",
    url: "/api/project/list",
    data: data
  });
};
