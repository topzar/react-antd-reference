import Mock from "mockjs";

export const projectList = req => {
  return Mock.mock({
    code: 0,
    message: "操作成功了",
    "data|10": [
      {
        "key|1-1000": 1,
        project_name: "测试项目@key",
        "project_code|1000-10000": 32,
        project_desc: "这个项目是为了测试功能创建的"
      }
    ]
  });
};
