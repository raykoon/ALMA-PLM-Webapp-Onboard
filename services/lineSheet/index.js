import axios from "../../utils/axios";


//查询styleList列表
export const styleList = (data) => axios.post(`/styles/style_library/list`, data);





// 批量获取style详情
export const getStyle = (idList) => axios.post(`/styles/style_library/getStyle/idList`,idList);



// /styles/sheet


// 批量获取style详情
export const stylesSheet = (data) => axios.post(`/styles/sheet`,data);



// styles/sheet/list  查询lineSheet列表
export const sheetList = (data) => axios.post(`/styles/sheet/list`,data);




//sheetDetails 查询详情
export const sheetDetails = (data) => axios.post(`/styles/context/list/`,data);


