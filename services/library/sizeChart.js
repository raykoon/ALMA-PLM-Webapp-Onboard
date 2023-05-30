import axios from "../../utils/axios";


///styles/size/chart/list   SizeChart列表

export const chartList = (data) => axios.post(`/styles/size/chart/list`,data);

///styles/size/chart/add   新增

export const chartAdd = (data) => axios.post(`/styles/size/chart/add`,data);


////styles/size/chart/item/add    新增Item

export const chartItemAdd = (data) => axios.post(`/styles/size/chart/item/add`,data);

///styles/size/chart/item/update   编辑Item

export const chartItemUpdate = (data) => axios.post(`/styles/size/chart/item/update`,data);


// sizeChat  排序  /styles/size/chart/updateSort
export const chartUpdateSort = (data) => axios.post(`/styles/size/chart/updateSort`,data);

