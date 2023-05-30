
import axios from "../../utils/axios";


///styles/style/pom/library/list   查询所有POM

export const pomList = (data) => axios.post(`/styles/style/pom/library/list `,data);

///styles/size/chart/list/all
export const pomList1 = (data) => axios.post(`/styles/style/pom/library/groupPomlist`,data);


//查询所有SIze chart

export const chartList = (data) => axios.post(`/styles/size/chart/list`,data);


///styles/grade/rule/add  新增标题
export const ruleAdd = (data) => axios.post(`/styles/grade/rule/add`,data);


//查询grading列表  /styles/grade/rule/list
export const ruleList = (data) => axios.post(`/styles/grade/rule/list`,data);

///styles/grade/rule/pom/batch/{idList} 删除小
export const ruleBatch = (idList) => axios.post(`/styles/grade/rule/pom/batch/${idList}`);


export const ruleBatch1 = (idList) => axios.post(`/styles/grade/rule/batch/${idList}`);


//修改数据  

export const ruleUpdate = (data) => axios.post(`/styles/grade/rule/pom/update`,data);

//修改部分信息  /styles/grade/rule/update

export const gradeRuleUpdate = (data) => axios.post(`/styles/grade/rule/update`,data);


///styles/grade/rule/pom/import

export const pomImport = (data) => axios.post(`/styles/grade/rule/pom/import`,data);


///styles/grade/rule/pom/add

export const pomAdd = (data) => axios.post(`/styles/grade/rule/pom/add`,data);


///styles/grade/rule/size/chart/import

export const chartImport = (data) => axios.post(`/styles/grade/rule/size/chart/import`,data);

///styles/style/pom/library/getPomByName 查询POM名字是否重复

export const getPomByName = (data) => axios.post(`/styles/style/pom/library/getPomByName`,data);




//清除所有数据  clearSizeChartData/{gradeRuleId}
export const clearSizeChartData = (gradeRuleId) => axios.post(`/styles/grade/rule/clearSizeChartData/${gradeRuleId}`);

///styles/grade/rule/pom/sort/update  修改POM排序

export const sortUpdate = (data) => axios.post(`/styles/grade/rule/pom/sort/update`,data);

// styles/grade/rule/getByName

export const getByNameRule = (data) => axios.post(`/styles/grade/rule/getPomByName`,data);

export const getByNameRule1 = (data) => axios.post(`/styles/style/pom/library/getGroupByName`,data);

// /styles/style/pom/library/getGroupByName