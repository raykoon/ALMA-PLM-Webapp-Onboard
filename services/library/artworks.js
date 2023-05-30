import axios from "../../utils/axios";


//查询艺术品列表
export const artworkList = (data) => axios.post(`/styles/artwork/list`, data);


//查询艺术品详细
export const artworkDetails = (id) => axios.get(`/styles/artwork/${id}`);

 
// /styles/artwork/batch/{idList}   艺术品批量删除


export const artworkBatch = (data) => axios.post(`/styles/artwork/batch/${data}`);


//
export const SrikeOffList1 = (data) => axios.post(`/styles/style/fabrics/fabricListSubs/SrikeOff/artwork`, data);


///styles/artwork/update   更新

export const artworkUpdate = (data) => axios.post(`/styles/artwork/update`, data);


//fabricsAdd 

//新增favrics   /styles/fabrics

export const fabricsAdd = (data) => axios.post(`/styles/artwork`,data);

///styles/type    艺术品类型新增

export const stylesType = (data) => axios.post(`/styles/type`,data);

///styles/type/list

export const stylesList = (data) => axios.post(`/styles/type/list`,data);
