import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { dr } from "@/Types/types";
const Databox = ({data}:dr) => {
  const router = useRouter();
  const [Loadedimg, setLoadedimg] = useState(true);
  console.log(data,'ghjk')
  const dateMoment = moment(data.created_at).format("MMMM Do ,YYYY");
  return (
    <div>
      <Row onClick={() => router.push(`/MyProducts/${data.id}`)} className="databox">
        <Col className="dataimg" span={24}>
          {Loadedimg && (
            <Image
              onLoad={() => setLoadedimg(true)}
              onError={() => setLoadedimg(false)}
              src={data.image_url}
              preview={false}
              style={{ width: "360px", borderRadius: "10px", maxWidth: "100%" }}
              height={220}
              alt=""
            />
          )}
        </Col>
        <Col span={24}>
          <p className="paragraphst">{data?.comment}</p>
        </Col>
        <Col span={24}>
          <p className="datedatabox">{dateMoment}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Databox;
