import axios from "../utils/axios";

//查询颜色列表
export const colorList = (data) => axios.post(`/styles/color/list`, data);

//颜色修改
export const colorUpdate = (data) => axios.post(`/styles/color/update`, data);

//获取颜色选择框列表
export const colorOption = () => axios.get(`/upms/dict/data/type/style_colorway`);

//查询颜色详细
export const colorDetails = (id) => axios.get(`/styles/color/${id}`);

//获取season选择框列表
export const colorSeason = () => axios.get(`/upms/dict/data/type/style_taxonomy_season`);


//获取collection选择框列表
export const collection = () => axios.get(`/upms/dict/data/type/style_palette_collection`);

//创建调色板   /styles/palette

export const colorPalette = (data) => axios.post(`/styles/palette`, data);

//批量删除COLORS   /styles/color/batch/{idList}
export const colorBatch = (idList) => axios.post(`/styles/color/batch/${idList}`);


//查询颜色库列表 /styles/books/list

export const colorbooksList = (data) => axios.post(`/styles/books/list`, data);


//颜色分类的对应关系
export const colorTypeName = () => axios.get(`/upms/dict/data/type/style_color_type`);

///styles/color  颜色新增
export const colorAdd = (data) => axios.post(`/styles/color`, data);

// /styles/style_library/listMerge/ca   color-artwork库关联列表

export const colorListMerge = (data) => axios.post(`/styles/style_library/listMerge/ca `, data);


//color    /styles/style/fabrics/fabricListSub/labdip/color
export const colorLabdip = (data) => axios.post(`/styles/style/fabrics/fabricListSub/labdip/color`, data);

export const paletteSort = (data) => axios.post(`/styles/color/palette/sort/update`, data);


//查询季节  /styles/seasons/list/drop

export const listDrop = (data) => axios.post(`/styles/seasons/list/drop`, data);

