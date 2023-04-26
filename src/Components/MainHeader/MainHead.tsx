import { Col, Row } from "antd";
import React from "react";

function MainHead() {
  return (
    <Row
      gutter={[0, 10]}
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      <Col span={24}>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "30px",
            fontWeight: "500",
            lineHeight: "40px",
            textAlign: "center",
          }}
        >
          CheckIns
        </p>
      </Col>
      <Col span={24}>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "22px",
            textAlign: "center",
          }}
        >
          See all the checkins below, click on one, and edit it
        </p>
      </Col>
    </Row>
  );
}

export default MainHead;
