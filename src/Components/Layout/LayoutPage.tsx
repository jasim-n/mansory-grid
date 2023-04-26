import { Col, Layout, Row } from "antd";
import { Router } from "next/router";
import React from "react";
import HeaderComponent from "../MainHeader/HeaderComponent";

const LayoutPage = ({ children }:any) => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: "0", background: "white" }}>
        <HeaderComponent />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default LayoutPage;
