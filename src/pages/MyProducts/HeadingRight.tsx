import { Button, Image, Input } from 'antd';
import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { Nameupdater } from "../api/Query/Mutation";

const HeadingRight = ({headingValue,setHeadingValue,id}:any) => {
    const [edit, setEdit] = useState(false);
    const [nameupdate, { data: data4 }] = useMutation(Nameupdater);
    const [headingerror, setheadingerror] = useState(false);


    const headingcheck = () => {
        if (headingValue.length >= 3) {
          setEdit(false);
          setheadingerror(false);
          nameupdate({ variables: { id: id, name: headingValue } });
        } else {
          setheadingerror(true);
        }
      };

      
    return (
        <div>
        {edit && (
          <>
            {" "}
            <Input
              value={headingValue}
              onChange={(e) => setHeadingValue(e.target.value)}
            />
            <Button
              type="primary"
              onClick={() => {
                headingcheck();
              }}
              style={{ marginTop: "10px" }}
            >
              save
            </Button>{" "}
            {headingerror && (
              <p style={{ color: "red" }}>
                Minimum 3 characters should be added
              </p>
            )}
          </>
        )}
        {!edit && (
          <p
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Roboto",
              fontSize: "30px",
              lineHeight: "40px",
              fontWeight: "500",
            }}
          >
            {headingValue ? headingValue : "Checkin Title Goes Here"}
            <button
              className="editbtn"
              style={{ border: "none", marginLeft: "5px" }}
              onClick={() => setEdit(true)}
            >
              <Image
                className="editbtnpic"
                src="../btnimg.png"
                preview={false}
                width={"12"}
              ></Image>
            </button>
          </p>
        )}
      </div>
    );
};

export default HeadingRight;