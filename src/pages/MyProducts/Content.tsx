import { Button, Image, Input } from "antd";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Commentupdate } from "../api/Query/Mutation";

const Content = ({ commentValue, setCommentValue, id }: any) => {
  const [edit, setEdit] = useState(false);
  const [commenterror, setcommenterror] = useState(false);
  const [messageupdater, { data: data3 }] = useMutation(Commentupdate);

  const commentcheck = () => {
    if (commentValue.length >= 3) {
      setEdit(false);
      setcommenterror(false);
      messageupdater({
        variables: { id: id, comment: commentValue },
      });
    } else {
      setcommenterror(true);
    }
  };
  return (
    <div>
      {edit && (
        <>
          {" "}
          <Input
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
          />
          <Button
            type="primary"
            onClick={() => {
              commentcheck();
            }}
            style={{ marginTop: "10px" }}
          >
            save
          </Button>{" "}
          {commenterror && (
            <p style={{ color: "red" }}>Minimum 3 characters should be added</p>
          )}
        </>
      )}
      {edit == false && (
        <p className="contentp">
          {commentValue}
          <button
            className="editbtn"
            onClick={() => setEdit(true)}
            style={{ border: "none", marginLeft: "5px" }}
          >
            <Image
              className="editbtnpic"
              src="/btnimg.png"
              preview={false}
              width={"12"}
            ></Image>
          </button>
        </p>
      )}
    </div>
  );
};

export default Content;
