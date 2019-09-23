import React from "react";

import MainLayout from "./components/main-layout/";
import LeftNav from "./components/left-nav";
import Header from "./components/header/";
import Footer from "./components/footer/";

export default function HomePage(props) {
  return (
    <MainLayout leftNav={<LeftNav />} header={<Header />} footer={<Footer />}>
      {/* 主页面的内容放在这里 */}
      {props.children}
    </MainLayout>
  );
}
