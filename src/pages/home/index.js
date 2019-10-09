import React from "react";
import BaseLayout from "@components/Layouts/BaseLayout";

function HomePage(props) {
  return (
    <BaseLayout>
      {/* 这里要填充内容 */}
      {props.children}
    </BaseLayout>
  );
}

export default HomePage;
