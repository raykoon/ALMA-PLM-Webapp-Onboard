import axios from "../utils/axios";


//查询布料库列表
export const fabricsList = (data) => axios.post(`/styles/style/library/trims/lists`, data);

export const trimsList = (data) => axios.post(`/styles/style/library/trims/list`, data);

//查询布料库详细
export const fabricsDetails = (id) => axios.get(`/styles/style/library/trims/${id}`);

//布料库批量删除
export const fabricsDelete = (data) => axios.post(`/styles/style/library/trims/batch/${data.toString()}`);


//新增favrics   /styles/fabrics

export const fabricsAdd = (data) => axios.post(`/styles/style/library/trims`,data);


///styles/fabrics/update 布料库修改
export const fabricsUpdate = (data) => axios.post(`/styles/style/library/trims/update`,data);

///styles/fabrics/batch/{idList}  删除fabrics
// export const fabricsBatch = (data) => axios.post(`styles/fabrics/batch/${data.toString()}`);

