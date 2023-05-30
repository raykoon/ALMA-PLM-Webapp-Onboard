import axios from "../utils/axios";

// 查询所有的讨论区块
export const selectDiscussionInfoList = (data) =>
  axios.post("/discussionInfo/selectDiscussionInfoList", data);

// 查询当前讨论区块
export const selectDiscussionInfoByDisId = (disId) =>
  axios.get(`/discussionInfo/selectDiscussionInfoByDisId/${disId}`);

// 查询某个讨论区块所有的回复
export const selectReplyListByDisId = (disId) =>
  axios.get(`/discussionInfo/selectReplyListByDisId/${disId}`);

// 添加回复
export const addDiscussionInfoReply = (data) =>
  axios.post("/discussionInfo/addDiscussionInfoReply", data);

// 编辑回复
export const updateDiscussionInfoReply = (data) =>
  axios.post("/discussionInfo/updateDiscussionInfoReply", data);

// 删除回复
export const delDiscussionInfoReply = (data) =>
  axios.post("/discussionInfo/delDiscussionInfoReply", data);

// 添加讨论区块
export const addDiscussionInfo = (data) =>
  axios.post("/discussionInfo/addDiscussionInfo", data);

// 删除讨论区块
export const delDiscussionInfo = (data) =>
  axios.post("/discussionInfo/delDiscussionInfo", data);

export const uploadImg = (data) => axios.post("/upload/uploadImg", data);

export const uploadFile = (data) => axios.post("/upload/uploadFile", data);

export const generatorUrl = (awsKey, cancelToken) =>
  axios.get("/upload/generatorUrl", { params: { awsKey } }, cancelToken);

export const generatorUrlByFileId = (fileId) =>
  axios.get(`/upload/generatorUrlByFileId/${fileId}`);

export const uploadImgOpen = (data) =>
  axios.post("/upload/uploadImgOpen", data);
