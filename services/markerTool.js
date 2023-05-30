import axios from '../utils/axios';



//文件 Annotate 新增
export const annotateAdd = (data) => axios.post(`/styles/annotate`, data);

//查询右侧数据  /styles/annotate/getAnnotateList
export const getAnnotateList = (data) => axios.post(`/styles/annotate/getAnnotateList`, data);

// 批量删除 /styles/annotate/batch/{idList}
export const annotateBatch = (idList) => axios.post(`/styles/annotate/batch/${idList}`);


//获取不同类型的图片详情  /styles/annotate/getStyleMarkerInfo

export const getStyleMarkerInfo = (data) => axios.post(`/styles/annotate/getStyleMarkerInfo`, data);

//清空所有marker操作

export const deleteFileMarker = (data) => axios.post(`/styles/annotate/deleteFileMarker`, data);

//写入八张图片

export const insertBatch = (data) => axios.post(`/styles/marker/insertBatch`, data);

///styles/annotate/insertUpdateBatch  批量更新数据和删除数据恢复

export const insertUpdateBatch = (data) => axios.post(`/styles/annotate/insertUpdateBatch`, data);

//查询文件历史版本

export const fileGetInfoLog = (fileId) => axios.get(`/styles/file/getInfoLog/${fileId}`);

//更改文件信息  /styles/file/update/edit

export const updateEdit=(data)=>axios.post(`/styles/file/update/edit`,data);

