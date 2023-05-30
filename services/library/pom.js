import axios from '../../utils/axios';

///styles/style/pom/library/list   POM列表
export const pomList = (data) =>
  axios.post(`/styles/style/pom/library/groupPomlist`, data);

//删除POM

export const pomBatch = (idList) =>
  axios.post(`/styles/style/pom/library/batch/${idList}`);
export const pomBatchGrading = (idList) =>
  axios.post(`/styles/grade/rule/pom/batch/${idList}`);

//删除所有 pom/remove
export const pomRemoveAll = (pomGroupRelationIds) =>
  axios.post(`/styles/style/pom/library/pom/remove/${pomGroupRelationIds}`);

///styles/style/pom/library/addGroup  新增标题

export const pomaddGroup = (data) =>
  axios.post(`/styles/style/pom/library/addGroup `, data);

//新增POM   /styles/style/pom/library/addPom

export const pomaddPom = (data) =>
  axios.post(`/styles/style/pom/library/addPom`, data);

//编辑  /styles/style/pom/library/updatePom

export const pomupdatePom = (data) =>
  axios.post(`/styles/style/pom/library/updatePom`, data);

//新增POM  批量    /styles/style/pom/library/batchAddPom
export const pomBatchAddPom = (data) =>
  axios.post(`/styles/style/pom/library/batchAddPom`, data);

///styles/style/pom/library/group/update   更新Group信息
export const groupUpdate = (data) =>
  axios.post(`/styles/style/pom/library/group/update`, data);

///styles/style/pom/library/delete/group/{groupId}   删除group
export const groupDelete = (data) =>
  axios.post(`/styles/style/pom/library/delete/group/${data.groupId}`, data);

///styles/style/pom/library/group/file/add    新增GroupFile
export const groupFileAdd = (data) =>
  axios.post(`/styles/style/pom/library/group/file/add`, data);

///styles/style/pom/library/file/remove/{idList}   删除
export const pomRemove = (idList) =>
  axios.post(`/styles/style/pom/library/group/file/remove/${idList}`);

///styles/style/pom/library/group/file/update  更新Group File

export const groupFileUpdate = (data) =>
  axios.post(`/styles/style/pom/library/group/file/update`, data);

//  /styles/style/pom/library/duplicatePom  复制POM

export const groupDuplicatePom = (data) =>
  axios.post(`/styles/style/pom/library/duplicatePom`, data);

//排序
export const pomGroupSort = (data) =>
  axios.post(`/styles/style/pom/library/group/sort/update`, data);
///styles/style/pom/library/batchDuplicatePom

export const batchDuplicatePom = (data) =>
  axios.post(`/styles/style/pom/library/batchDuplicatePom`, data);

//POMpaixu /styles/style/pom/library/sort/update
export const sortPomUpdate = (data) =>
  axios.post(`/styles/style/pom/library/sort/update`, data);

///styles/style/pom/library/group/pom/remove

// export const groupPomRemove= (data) => axios.post(`/styles/style/pom/library/group/pom/remove`,data);
export const groupPomRemove = (pomGroupRelationIds) =>
  axios.post(
    `/styles/style/pom/library/group/pom/remove/${pomGroupRelationIds}`
  );

///styles/style/pom/library/getGroupByName
export const getGroupByName = (data) =>
  axios.post(`/styles/style/pom/library/getGroupByName`, data);

///styles/grade/rule/getByName  根据名称查询GradeRule POM
export const getByNameGroup = (data) =>
  axios.post(`/styles/style/pom/library/getGroupByName`, data);

///styles/style/pom/library/addGroupPom  新增GroupPom

export const addGroupPom = (data) =>
  axios.post(`/styles/style/pom/library/addGroupPom`, data);

// /styles/style/pom/library/find/batch
export const libraryFind = (data) =>
  axios.post(`/styles/style/pom/library/find/batch`, data);

  export const updateV2 = (data) =>
  axios.post(`/styles/style/pom/library/group/update/v2`, data);
