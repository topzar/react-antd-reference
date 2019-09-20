import React from "react";

import MainLayout from "./components/main-layout/";

export default function HomePage() {
  return (
    <MainLayout
      leftNav="leftNav"
      header="Header"
      mainFrame="mainFrame"
      footer="Footer"
    />
  );
}
