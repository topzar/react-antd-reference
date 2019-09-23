import React from "react";

import MainLayout from "./components/main-layout/";
import LeftNav from "./components/left-nav";
import Header from "./components/header/";
import MainFrame from "./components/main-frame/";
import Footer from "./components/footer/";

export default function HomePage() {
  return (
    <MainLayout
      leftNav={<LeftNav />}
      header={<Header />}
      mainFrame={<MainFrame />}
      footer={<Footer />}
    />
  );
}
