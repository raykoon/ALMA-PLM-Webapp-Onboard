import axios from "../utils/axios";


//产品库管理 - 附件列表
export const fileList = (styleId,data) => axios.post(`/styles/style_library/image/list/${styleId}`,data);



//产品库管理 - 获取默认模板
export const getDefaultStyleTemplate = (data) => axios.post(`/styles/style_library/getDefaultStyleTemplate`,data);



//产品库管理 - 获取style指定图片详情
export const getImageInfo = (styleId,imageId) => axios.get(`/styles/style_library/getImageInfo/${styleId}/${imageId}`);
export const getImageInfo1 = (imageId) => axios.get(`/styles/style_library/getImageInfo/${imageId}`);


// /styles/file/getInfo

export const getImageInfoNew = (imageId) => axios.get(`/styles/file/getInfo/${imageId}`);

//产品库管理 - 修改
export const update = (data) => axios.post(`/styles/style_library/update`,data);

//产品库管理 - 获取文件请求列表
export const getRequests = (fileId) => axios.get(`/styles/style_library/getRequests/${fileId}`);


///styles/style/spec/sheet/batchRemove/{idList}   删除SpecSheet阶段

export const batchRemove = (idList) => axios.post(`styles/style/spec/sheet/batchRemove/${idList}`);

