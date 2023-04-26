import { Col, Row } from "antd";
import React from "react";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <Row
      style={{
        alignItems: "center",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      <Col span={12}>
        <Link style={{ color: "inherit" }} href={"/"}>
          <p className="mainHeader">ProductName</p>
        </Link>
      </Col>
      <Col span={12}>
        <Row gutter={[55, 0]} style={{ justifyContent: "flex-end" }}>
          <Col>
            <p className="mainHeaderp">Feedback</p>
          </Col>

          <Col>
            <p className="mainHeaderp">Support</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderComponent;
