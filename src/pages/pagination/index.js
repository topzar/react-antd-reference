import React from "react";
import { Card, Pagination } from "antd";

export default function MenuDemo() {
  function handleChange(current, odl, event) {
    console.log("变量信息->: handleChange -> event", current, odl, event);
  }
  return (
    <div>
      <Card title="顶部导航">
        <Pagination
          defaultCurrent={2}
          hideOnSinglePage
          onChange={handleChange}
          total={200}
          pageSizeOptions={["10", "20", "30", "40"]}
          showLessItems
          showQuickJumper
          showSizeChanger
          showTotal={(total, range) => ` ${range}`}
        />
      </Card>
    </div>
  );
}
