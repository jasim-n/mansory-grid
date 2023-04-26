import { Button, Col, Image, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import ImgLeft from "./ImgLeft";
import HeadingRight from "./HeadingRight";
import Content from "./Content";
import { GET_LOCATIONS } from "../api/Query/Query";

const Allcheckin = () => {
  const [Imgurl, setImgUrl] = useState("text");
  const [commentValue, setCommentValue] = useState("text");
  const [headingValue, setHeadingValue] = useState("text");
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery(GET_LOCATIONS, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data?.check_in_by_pk) {
      let a = data?.check_in_by_pk;
      console.log(a);
      setCommentValue(a.comment);

      if (a.image_url == "") {
        setImgUrl("no url");
      } else {
        setImgUrl(a.image_url);
      }
      setHeadingValue(a.name);
    }
  }, [loading]);
  return (
    <div>
      <Row style={{ padding: "2rem" }}>
        <ImgLeft Imgurl={Imgurl} setImgUrl={setImgUrl} id={id} />
        <Col span={9} offset={1}>
          <HeadingRight
            headingValue={headingValue}
            setHeadingValue={setHeadingValue}
            id={id}
          />
          <Content
            commentValue={commentValue}
            setCommentValue={setCommentValue}
            id={id}
          />
         <div>
            <p className="date_time">Nov 10, 2022</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Allcheckin;
