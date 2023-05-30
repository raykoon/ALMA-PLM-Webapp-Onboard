import axios from "../../utils/axios";




///  BOM列表
export const bomList = (data) => axios.post(`/styles/library/bom/list`,data);


//删除POM 

export const bomBatch = (idList) => axios.post(`/styles/library/bom/batch/${idList}`);


///styles/style/pom/library/addGroup  新增标题

export const bomaddGroup= (data) => axios.post(`/styles/library/bom/add`,data);

//新增BOM 自定义  

// export const bomaddBom= (data) => axios.post(`/styles/library/bom/componets/add`,data);
export const bomaddBom= (data) => axios.post(`/styles/library/bom/componets/addV2`,data);



//import BOM   

export const importBom= (data) => axios.post(`/styles/library/bom/componets/import`,data);


//编辑  /styles/style/pom/library/updatePom

export const pomupdateBom= (data) => axios.post(`/styles/library/bom/update`,data);


//查询BOM详情

export const bomDetails= (data) => axios.post(`/styles/library/bom/${data}`);


export const bomSort= (data) => axios.post(`/styles/library/bom/sort/update`,data);

