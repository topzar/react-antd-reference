import React from "react";

import BaseLayout from "@components/layouts/base-layout";

export default function HomePage(props) {
  return (
    <div className="home-page">
      <BaseLayout>
        {/* 这里要填充内容 */}
        {props.children}
      </BaseLayout>
    </div>
  );
}
