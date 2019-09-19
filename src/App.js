import React from "react";
import "./App.css";
import { Typography } from "antd";

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <div>
        <h1> hello project </h1>
        <h1>initial finish here</h1>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
      </div>
    </div>
  );
}

export default App;
