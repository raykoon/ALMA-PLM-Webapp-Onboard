import axios from "../../utils/axios";


//查询评论列表
export const commentList = (data) => axios.post(`/styles/comment/list`, data);


//新增评论
export const commentAdd = (data) => axios.post(`/styles/comment/add`, data);


//删除评论
export const commentBatch = (idList) => axios.post(`/styles/comment/batch/${idList}`);



//  文件 Annotate 新增
export const annotateAdd = (data) => axios.post(`/styles/annotate`, data);


//查询文件 Annotate 列表
export const annotateList = (data) => axios.post(`/styles/annotate/lists`, data);


//上传Base64到amazon s3存储服务中

export const uploadByKeyBase64 = (data) => axios.post(`/file/aws/uploadByKeys`, data);


export const uploadByKeyBase641 = (data) => axios.post(`/file/aws/uploadByKeysV2`, data);
export const uploadByKeyBase642 = (data) => axios.post(`/file/aws/uploadByKeyV2`, data);




//通过key获取文件地址
export const getPresignedUrl = (data) => axios.post(`/file/aws/getPresignedUrl`, data);


//获取文件选择框列表
export const FileOption = (data) => axios.get(`/upms/dict/data/type/${data}`);



//新增附件  

// export const fileAdd = (data) => axios.post(`/styles/style_library/file/add`, data);
export const fileAdd = (data) => axios.post(`/styles/file/add`, data);


//复制文件  

export const duplicateAdd = (data) => axios.get(`/styles/file/duplicate/${data}`);


export const updateEdit = (data) => axios.post(`/styles/file/update/edit`, data);


//删除附件
export const fileDel = (data) => axios.post(`/styles/file/batchs/${data}`);


// /file/aws/getBase64

export const getBase64 = (data) => axios.post(`/file/aws/getBase64`, data);


export const uploadByKey = (data) => axios.post(`/file/aws/uploadByKey`, data);

///styles/file/save/artwork/library 保存文件到artwork库
export const saveArtwork = (data) => axios.post(`/styles/file/save/artwork/library`, data);


///styles/file/save/flats/library  保存文件到flats库

export const saveFlats = (data) => axios.post(`/styles/file/save/flats/library`, data);


///styles/file/set/style/cover  设置为封面

export const setCover = (data) => axios.post(`/styles/file/set/style/cover`, data);


//下载图片 /file/download

export const downloadImg = (fileName,key) => axios.get(`/file/download?fileName=${fileName}&key=${key}`);


//获取聊天列表   

export const chatDataList = (data) => axios.post(`/styles/chat/listByTeamId`, data);


///styles/chat/readNum/{teamId}  查询已读数量列表
export const chatReadNum = (data) => axios.get(`/styles/chat/readNum/${data}`);


///styles/msg/read   聊天已读记录新增

export const chatMsgRead = (data) => axios.post(`/styles/msg/read`, data);

///styles/read   marker消息已读未读

export const markerRead = (data) => axios.post(`/styles/read`, data);

// export const userLists = (data) => axios.post(`/upms/user/lists`, data);

export const userLists = (data) => axios.get(`/styles/team/style/team/user/list/${data?.styleId}/${data?.teamId}`);


///styles/file/marker/add   新增画图文件

export const markerAddImg = (data) => axios.post(`/styles/file/marker/add`, data);



