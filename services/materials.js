import axios from '../utils/axios';

//查询字典
export const ComponentType = (type) =>
  axios.get(`/upms/dict/data/type/${type}`);

//查询library fabrics列表   styles/fabrics/list
export const fabricsList = (data) => axios.post(`/styles/fabrics/list`, data);

//查询fabrics详情

export const fabricsDetails = (id) => axios.post(`/styles/fabrics/${id}`,{libraryFabricsId:id});

//查询模板   /styles/template/list

export const templateList = (data) =>
  axios.post(`/styles/style_library/getDefaultStyleTemplate`, data);

//新增组件子类型  /styles/componets/addSubType
export const addSubType = (data) =>
  axios.post(`/styles/componets/addSubType`, data);

//查询类型  /styles/componets/type/sub/list
export const typeSubList = (data) =>
  axios.post(`/styles/componets/type/sub/list`, data);

//查询是否重复  /styles/componets/getSubTypeByName
export const getSubTypeByName = (data) =>
  axios.post(`/styles/componets/getSubTypeByName`, data);

//新上传接口
export const uploadByKeyV2 = (data) =>
  axios.post(`/file/aws/uploadByKeyV2`, data);

//新增BOM  /styles/bom

export const addBom = (data) => axios.post(`/styles/bom`, data);

export const trimsList = (data) =>
  axios.post(`/styles/style/library/trims/lists`, data);

//查询布料库详细
export const trimsDetails = (id) =>
  axios.get(`/styles/style/library/trims/${id}`);

export const labelsList = (data) => axios.post(`/styles/labels/list`, data);

//查询布料库详细
export const labelsDetails = (id) => axios.get(`/styles/labels/${id}`);

//查询bom详情  styles/bom/details
export const bomDetails = (data) => axios.post(`/styles/bom/details`, data);

export const userLists = (data) =>
  axios.get(
    `/styles/team/style/team/user/list/${data?.styleId}/${data?.teamId}`
  );

// /styles/bom/deleteSelectedMateriais
export const deleteSelectedMateriais = (data) =>
  axios.post(`/styles/bom/deleteSelectedMateriais`, data);

//获取库中code 是否存在

export const getExist = (data) => axios.post(`/styles/bom/getExist`, data);

//使用库id 查询 getArtworkApproval
export const getArtworkApprovalLibrary = (bomId) =>
  axios.post(`/styles/bom/library/getArtworkApproval/${bomId}`);
export const getColorApprovalLibrary = (bomId) =>
  axios.post(`/styles/bom/library/getColorApproval/${bomId}`);

//setting部分接口

//获取获取FabricsSetting
export const getFabricsSetting = (styleId) =>
  axios.post(`/styles/style/bom/setting/getFabricsSetting/${styleId}`);
//获取TrimsSetting
export const getTrimsSetting = (styleId) =>
  axios.post(`/styles/style/bom/setting/getTrimsSetting/${styleId}`);
//获取LabelSetting
export const getLabelSetting = (styleId) =>
  axios.post(`/styles/style/bom/setting/getLabelSetting/${styleId}`);

//新增FbricsSetting
export const addFabricsSetting = (data) =>
  axios.post(`/styles/style/bom/setting/addFabricsSetting`, data);
//新增addTrimsSetting
export const addTrimsSetting = (data) =>
  axios.post(`/styles/style/bom/setting/addTrimsSetting`, data);
//新增新增LabelSetting
export const addLabelSetting = (data) =>
  axios.post(`/styles/style/bom/setting/addLabelSetting`, data);

//恢复默认 backToDefaultFabricsSetting
export const backToDefaultFabricsSetting = (styleId) =>
  axios.post(
    `/styles/style/bom/setting/backToDefaultFabricsSetting/${styleId}`
  );
//恢复默认  backToDefaultLabelSetting
export const backToDefaultLabelSetting = (styleId) =>
  axios.post(`/styles/style/bom/setting/backToDefaultLabelSetting/${styleId}`);
//恢复默认 backToDefaultTrimsSetting
export const backToDefaultTrimsSetting = (styleId) =>
  axios.post(`/styles/style/bom/setting/backToDefaultTrimsSetting/${styleId}`);

//查询colorWay列表
export const getBomColorways = (styleId) =>
  axios.post(`/styles/style/bom/colorways/getBomColorways/${styleId}`);
//编辑colorWay
export const addBomColorways = (data) =>
  axios.post(`/styles/style/bom/colorways/addBomColorways`, data);

//根据名称查询颜色或者AtWork
export const getColorOrArtWork = (data) =>
  axios.post(`/styles/bom/getColorOrArtWork`, data);

//通过子请求查询详情信息

// export const bomDetails = (data) => axios.post(`/styles/bom/details`,data);

//编辑
export const bomUpdate = (data) => axios.post(`/styles/bom/update`, data);

//保存fabrics 到library
export const insertFabrics = (data) =>
  axios.post(`/styles/bom/insertFabrics`, data);

export const insertTrims = (data) =>
  axios.post(`/styles/bom/insertTrims`, data);
export const insertLabel = (data) =>
  axios.post(`/styles/bom/insertLabel`, data);

//获取 ArtworkApproval
export const getArtworkApproval = (bomId) =>
  axios.post(`/styles/bom/getArtworkApproval/${bomId}`);

//获取 ColorApproval

export const getColorApproval = (bomId) =>
  axios.post(`/styles/bom/getColorApproval/${bomId}`);

//获取 ArtworkApproval
export const getArtworkApprovalByRequestId = (bomId) =>
  axios.post(`/styles/bom/getArtworkApprovalByRequestId/${bomId}`);

//获取 ColorApproval

export const getColorApprovalByRequestId = (bomId) =>
  axios.post(`/styles/bom/getColorApprovalByRequestId/${bomId}`);

//获取审核请求

export const getFabricsRequestStageLog = (data) =>
  axios.post(`/styles/style/fabrics/getFabricsRequestStageLog`, data);

//新增请求 color artwork
export const requestAdd = (data) =>
  axios.post(`/styles/style/fabrics/request/add`, data);

//请求通过   color artwork
export const requestStatus = (data) =>
  axios.post(`/styles/style/fabrics/request/status`, data);

//更新bom自定义值

export const fieldUpdate = (data) =>
  axios.post(`/styles/bom/custom/field/value/update`, data);

//获取techPack业务数据
export const TechPackData = (data) => axios.post(`/styles/packs/getData`, data);

//获取左侧数据
export const packsGetInfo = (data) => axios.post(`/styles/packs/getInfo`, data);




//修改标题名字  /styles/packs/menu/update

export const menuUpdate = (data) => axios.post(`/styles/packs/menu/update`, data);

///styles/packsFile   子菜单新增

export const stylesOption = (data) => axios.post(`/styles/packsFile`, data);

///styles/packsFile/update  子菜单更新

export const packsFileUpdate = (data) => axios.post(`/styles/packsFile/update`, data);


//更新logo    /styles/packs/update


export const packsUpdate = (data) => axios.post(`/styles/packs/update`, data);


//页眉页脚新增  /styles/foot

export const heardFootAdd = (data) => axios.post(`/styles/foot`, data);

//页眉页脚编辑
export const heardFootUpdate = (data) => axios.post(`/styles/foot/update`, data);


///styles/option/update  pdf技术包菜单-子菜单修改
export const optionUpdate = (data) => axios.post(`/styles/option/update`, data);

//批量更新
export const optionUpdatePl = (data) => axios.post(`/styles/option/updateBatch`, data);

//批量更新文件
export const packsFileUpdatePl = (data) => axios.post(`/styles/packsFile/updateBatch`, data);

//恢复默认
export const RestoreDefaults= (data) => axios.post(`/styles/foot/restore/default`, data);

//保存PDF技术包  /styles/packsJson
export const packsJsonSend= (data) => axios.post(`/styles/packsJson/update`, data);

//新增附件  

// export const fileAdd = (data) => axios.post(`/styles/style_library/file/add`, data);
export const fileAdd = (data) => axios.post(`/styles/file/add`, data);

///styles/packs/list 查询pdf技术包 列表

export const fileAddStyles = (data) => axios.post(`/styles/packs/list`, data);



///styles/packs/restore/default  恢复默认

export const restoreDefaultNew = (data) => axios.post(`/styles/packs/restore/default`, data);


///styles/bom/getStyle


export const bomGetStyle=(data)=>axios.post(`/styles/bom/getStyle/${data}`);

//https://goalma.dev/private/styles/style_library/listMerge

export const bomGetLibrary=(data)=>axios.post(`/styles/style_library/listMerge`,data);


///styles/mill/list

export const millListFnc=(data)=>axios.post(`/styles/mill/list`,data);

//https://goalma.dev/private/upms/dict/data/type/viavia_coo

///styles/dict/data
export const addSubTypeNew=(data)=>axios.post(`/styles/dict/data`,data);

//新的查询subType的接口  
// /styles/dict/data/list

export const getSubListNew=(data)=>axios.post(`/styles/dict/data/list`,data);

//查询Supplier 信息
export const getSupplierList=(data)=>axios.post(`/styles/fabrics/getSupplier`,data);


//查询最新  不包含生成pdf文件的技术包
///styles/packs/selectNewPack
export const packsSelectNewPack=(data)=>axios.post(`/styles/packs/selectNewPack`,data);

//更新sample    /styles/style/fabrics/request/vendor/edit

export const vendorEdit=(data)=>axios.post(`/styles/style/fabrics/request/vendor/edit`,data);

//删除  /styles/packs/batch/{idList}

export const packsBatch = (idList) =>
  axios.post(`/styles/packs/batch/${idList}`);

  //查重  /styles/packs/duplicate/name

export const duplicateName=(data)=>axios.post(`/styles/packs/duplicate/name`,data);
