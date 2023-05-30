import axios from "../../utils/axios";


//查询布料库列表
export const fabricsList = (data) => axios.post(`/styles/embellishments/list`, data);
export const embList = (data) => axios.post(`/styles/embellishments/list`, data);


//查询布料库详细
export const fabricsDetails = (id) => axios.get(`/styles/embellishments/${id}`);

//布料库批量删除
export const fabricsDelete = (data) => axios.post(`/styles/embellishments/batch/${data.toString()}`);


//新增favrics   /styles/fabrics

export const fabricsAdd = (data) => axios.post(`/styles/embellishments/`,data);


///styles/fabrics/update 布料库修改
export const fabricsUpdate = (data) => axios.post(`/styles/embellishments/update/`,data);


///styles/fabrics/batch/{idList}  删除fabrics
// export const fabricsBatch = (data) => axios.post(`styles/fabrics/batch/${data.toString()}`);

//详情style   /styles/style_library/listMerge

export const fabricsListMerge = (data) => axios.post(`/styles/style_library/listMerge`,data);



// 首页导航列表 

export const menuList = (data) => axios.post(`/styles/menu/list`,data);



///styles/style/fabrics/fabricListSubs/SrikeOff  trim和fabric查询Style布料库 SrikeOff (artwork)请求列表
export const SrikeOff = (data) => axios.post(`/styles/style/fabrics/fabricListSubs/SrikeOff`,data);



///styles/style/fabrics/fabricListSub/labdip   labdip请求列表

export const SrikeLabdip = (data) => axios.post(`/styles/style/fabrics/fabricListSub/labdip`,data);




