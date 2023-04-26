export interface DataBoxdata {
    comment:String;
    created_at:String;
    id:String;
    image_url:String;
    name:String;
    updated_at:String;
    __typename:String
}
export interface Databoxs{

    check_in:DataBoxdata[];
}
export interface dr {
    data:DataBoxdata[]
}