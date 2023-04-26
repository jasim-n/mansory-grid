import {  gql } from "@apollo/client";

export   const GET_LOCATIONS = gql`
query MyQuery($id: Int!) {
  check_in_by_pk(id:$id){
       id
       comment
       created_at
       image_url
       name
       updated_at
  }
   }
`;
export const get_all = gql`
query MyQuery {
  check_in {
    id
    comment
    created_at
    image_url
    name
    updated_at
  }
}
`;