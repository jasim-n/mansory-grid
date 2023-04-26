import {  gql } from "@apollo/client";

export  const Commentupdate = gql`
  mutation MyMutation($id: Int!, $comment: String!) {
    update_check_in_by_pk(
      pk_columns: { id: $id }
      _set: { comment: $comment }
    ) {
      id
      name
      image_url
    }
  }
`;
export const Nameupdater = gql`
mutation MyMutation($id: Int!, $name: String!) {
  update_check_in_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
    id
    name
    image_url
  }
}
`;

export const imageUpdate = gql`
mutation MyMutation($id: Int!, $Imgurl: String!) {
  update_check_in_by_pk(
    pk_columns: { id: $id }
    _set: { image_url: $Imgurl }
  ) {
    id
    name
    image_url
  }
}
`;