import { getAxios, postAxios, baseURL } from '../../utils/axios';

// Style列表
const reqStylesList = (id) =>
  getAxios({ url: `/styles/sample/request/list/${id}` });

// Style详情
const reqStylesInfo = (id) =>
  getAxios({ url: `/styles/style_library/getStyle/${id}` });

//Style编辑
const reqStylesInfoEdit = (data) =>
  postAxios({
    url: '/styles/style_library/update/v1',
    data: data,
  });

//Style新增
const reqStylesInfoAdd = (data) =>
  postAxios({
    url: '/styles/style_library/add/v1',
    data: data,
  });

// 上传文件到amazon s3存储服务中
const resUploadFile = (data) =>
  postAxios({
    url: '/file/aws/uploadByKey',
    data: data,
  });

// 上传文件到amazon s3存储服务中
const resUploadFileV2 = (data) =>
  postAxios({
    url: '/file/aws/uploadByKeyV2',
    data: data,
  });

// 图片key转url接口
const resKeyToUrl = (key) =>
  postAxios({
    url: '/file/aws/getPresignedUrl',
    data: { key: key },
  });

// 下拉选择字典查询
const resTypeOptions = (type) => {
  const code = {
    priceBucket: 'price_bucket',
    categoryClass: 'style_taxonomy_category',
    division: 'style_taxonomy_division',
    productCategory: 'style_taxonomy_category',
    season: 'style_taxonomy_season',
    year: 'style_taxonomy_year',
    styleStatus: 'style_status',
    developmentPhase: 'development_phase',
    fitSampleStage: 'development_phase',
    carryoverNew: 'carryover_new',
    teamStatus: 'team_status',
    fabrics: 'style_fabric_type',
    trims: 'stylet_trims_type',
    fabricsSub: 'sub_request_type',
    trimsSub: 'sub_request_trims_type',
    coo: 'viavia_coo',
    fabricType: 'viavia_fabric',
  };

  return getAxios({
    url: `/upms/dict/data/type/${code[type]}`,
  });
};

// 新增下拉字典
const resAddTypeOptions = (type, data) => {
  const code = {
    priceBucket: 'price_bucket',
    categoryClass: 'style_taxonomy_category',
    division: 'style_taxonomy_division',
    productCategory: 'style_taxonomy_category',
    season: 'style_taxonomy_season',
    year: 'style_taxonomy_year',
    styleStatus: 'style_status',
    developmentPhase: 'development_phase',
    carryoverNew: 'carryover_new',
    teamStatus: 'team_status',
    fabrics: 'style_fabric_type',
    trims: 'stylet_trims_type',
    fabricsSub: 'sub_request_type',
    trimsSub: 'sub_request_trims_type',
  };

  return postAxios({
    url: '/upms/dict/data',
    data: {
      code: code[type],
      ...data,
    },
  });
};

// Sample列表
// const reqSampleList = (id) =>
//   getAxios({ url: `/styles/sample/request/list/${id}` });

const reqSampleList = (id) =>
  postAxios({
    url: `/styles/style/fits/request/list/${id}`,
    data: { styleFitsId: id },
  });

// Sample修改
const reqSampleUpdate = (data) =>
  postAxios({ url: `/styles/sample/request/update`, data: data });

// const reqSampleAdd = (data) =>
//   postAxios({ url: `/styles/sample/request/add`, data: data });

// Sample添加
const reqSampleAdd = (data) =>
  postAxios({ url: `/styles/style/fits/request/add`, data: data });

// File图片列表
const reqFileList = (id, type) =>
  postAxios({
    url: `/styles/style_library/image/list/${id}`,
    data: { type: type },
  });

// File图片添加 /styles/style_library/file/add
const reqAddFile = (data) =>
  postAxios({
    url: `/styles/file/add`,
    data: data,
  });

//file 设置封面
const reqSetFileCover = (data) =>
  postAxios({
    url: `/styles/file/set/style/cover`,
    data: data,
  });

//获取默认模版
const reqDefaultStyleTemplate = (type) =>
  postAxios({
    url: `/styles/style_library/getDefaultStyleTemplate`,
    data: { templateType: type },
  });

//Fabric 列表
const reqFabricsList = (id) =>
  postAxios({
    url: `/styles/style/fabrics/list/${id}`,
    data: { styleId: id },
  });

//Fabric 列表
const reqFabricsFilterList = (data) =>
  postAxios({
    url: `/styles/style/fabrics/lists`,
    data: data,
  });

//Fabric 新增
const reqFabricsAdd = (data) =>
  postAxios({
    url: `/styles/style/fabrics/add`,
    data: data,
  });

//Fabric 修改状态
const reqFabricsStatus = (data) =>
  postAxios({
    url: `/styles/style/fabrics/status`,
    data: data,
  });

//Fabric Request修改状态
const reqFabricsRequestStatus = (data) =>
  postAxios({
    url: `/styles/style/fabrics/request/status`,
    data: data,
  });

//Fabric request
const reqFabricsRequest = (data) =>
  postAxios({
    url: `/styles/style/fabrics/request/add`,
    data: data,
  });

//Fabric 布料库
const reqFabricsLibrary = (data) =>
  postAxios({
    url: `/styles/fabrics/list`,
    data: data,
  });

// trims库列表
const reqTrimsLibrary = (data) =>
  postAxios({
    url: `/styles/style/library/trims/lists`,
    data: data,
  });

//新增修改style Fabric 布料库
const reqEditFabricsLibrary = (data) =>
  postAxios({
    url: `/styles/style/fabrics/edit`,
    data: data,
  });

//colorArt下拉列表
const reqArtworkList = (id) =>
  getAxios({
    url: `/styles/style_library/getColorWayAndArtwork/${id}`,
  });

//ArkWork 库列表
const reqSearchArtworkList = (data) =>
  postAxios({
    url: `/styles/artwork/list`,
    data: data,
  });

//Artworks列表
const reqColorWayAndArtwork = (data) =>
  postAxios({
    url: `/styles/style_library/getColorWayAndArtworkList`,
    data: data,
  });

//Artworks关联
const reqArtworkMerge = (data) =>
  postAxios({
    url: `/styles/merge`,
    data: data,
  });

//flats 库列表
const reqSearchFlatsList = (data) =>
  postAxios({
    url: `/styles/flats/list`,
    data: data,
  });

//查询颜色列表
const reqBooksList = (data) =>
  postAxios({
    url: `/styles/books/list`,
    data: data,
  });

//查询颜色
const reqColorInfo = (id) => getAxios({ url: `/styles/color/${id}` });

//查询艺术品
const reqArtworkInfo = (id) => getAxios({ url: `/styles/artwork/${id}` });

//POM Group列表 /styles/style/pom/library/group/list
const reqPomGroupList = (data) =>
  postAxios({
    url: `/styles/style/pom/library/groupPomlist`,
    data: data,
  });
//POM POM列表
const reqPomList = (data) =>
  postAxios({
    url: `/styles/style/pom/library/list`,
    data: data,
  });

//pom 用name查单个POM
const reqSearchPom = (data) =>
  postAxios({
    url: `/styles/style/pom/library/groupPomlist`,
    data: data,
  });

//POM groupId查POM列表
const reqPomLibraryList = (id) =>
  postAxios({
    url: `/styles/style/pom/library/list/${id}`,
    data: { groupId: id },
  });

//POM 添加POM
const reqAddPom = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/pom/add`,
    data: data,
  });

//SizeChart 列表
const reqSizeChart = (data) =>
  postAxios({
    url: `/styles/size/chart/list`,
    data: data,
  });

//新增style pom
const reqUpdateSpecSheetStylePom = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/updateSpecSheetStylePom`,
    data: data,
  });

//修改 style单条pom
const reqEditStyleSpecSheetStylePom = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/pom/update`,
    data: data,
  });

//新增spec
const reqAddSpecSheet = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/add`,
    data: data,
  });

//spec导入单条
const reqSpecSheetImportPom = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/importPom/${data.styleId}/${data.specSheetId}/${data.pomId}`,
    data: data,
  });

//spec导入多条
const reqSpecSheetImportGroup = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/importGroupPom/${data.styleId}/${data.specSheetId}/${data.groupId}`,
    data: data,
  });

//当前spec的详情
const reqSpecSheetInfo = (id) =>
  getAxios({
    url: `/styles/style/spec/sheet/${id}`,
  });

//修改spec的详情
const reqSpecSheetUpdate = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/update`,
    data: data,
  });

//当前spec的请求
const reqSpecSheetRequest = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/request/add`,
    data: data,
  });

//spec列表
const reqSpecSheetList = (id) =>
  postAxios({
    url: `/styles/style/spec/sheet/list/${id}`,
    data: { fitsId: id },
  });

//spec请求
const reqFitsRequestStatusUpdate = (data) =>
  postAxios({
    url: `/styles/style/fits/request/status/update`,
    data: data,
  });

//spec请求
const reqFitsRequestFitApprovalUpdate = (data) =>
  postAxios({
    url: `/styles/style/fits/request/fitApproval/update`,
    data: data,
  });

//spec请求
const reqFitsRequestShipmentTrackingUpdate = (data) =>
  postAxios({
    url: `/styles/style/fits/request/shipmentTracking/update`,
    data: data,
  });

//spec请求
const reqFitsRequestUpdateDeliveryTime = (data) =>
  postAxios({
    url: `/styles/style/fits/updateDeliveryTime`,
    data: data,
  });

//spec请求
const reqSpecSheetUpdateNotes = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/notes/update`,
    data: data,
  });

//spec请求
const reqSpecSheetUpdatePomTargetAndSampleSizeList = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/updatePomTargetAndSampleSizeList`,
    data: data,
  });

//spec 复制Pom
const reqSpecSheetCopyPom = (id) =>
  postAxios({
    url: `/styles/style/spec/sheet/pom/duplicate/${id}`,
    data: { pomRelationId: id },
  });

//spec 复制Pom
const reqSpecSheetDeActivatePom = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/pom/deActivate`,
    data: data,
  });

//spec 删除Pom
const reqSpecSheetDelPom = (id) =>
  postAxios({
    url: `/styles/style/spec/sheet/pom/batchRemove/${id}`,
    data: { idList: id },
  });

//spec
const reqSpecSheetTargetAccept = (id) =>
  postAxios({
    url: `/styles/style/spec/sheet/pom/target/accept/${id}`,
    data: { specSheetId: id },
  });

//spec pom 排序
const reqSpecSheetPomSort = (data) =>
  postAxios({
    url: `/styles/style/specifications/pom/sort/update`,
    data: data,
  });

//spec 保存到库
const reqSpecSheetSaveInLibrary = (data) =>
  postAxios({
    url: `/styles/style/pom/library/addGroupPom`,
    data: data,
  });

//获取StyleFits文件夹列表
const reqFitsFolderList = (id) =>
  postAxios({
    url: `/styles/style/fits/folder/list/${id}`,
    data: { styleFitsId: id },
  });

//新增StyleFits文件夹
const reqFitsFolderAdd = (data) =>
  postAxios({
    url: `/styles/style/fits/folder/add`,
    data: data,
  });

//获取StyleFits当前tab下的文件列表
const reqFitsFolderFileList = (id) =>
  postAxios({
    url: `/styles/style/fits/folder/file/list/${id}`,
    data: { styleFitsFolderId: id },
  });

//新增StyleFits当前tab下的文件
const reqAddFitsFolderFile = (data) =>
  postAxios({
    url: `/styles/style/fits/folder/file/add`,
    data: data,
  });

//新增Fits当前tab下的文件
const reqAddFitsFile = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/file/add`,
    data: data,
  });

//布料request的comment
const reqAddFabricsRequestComment = (data) =>
  postAxios({
    url: `/styles/style/fabrics/request/comment/add`,
    data: data,
  });

//布料request的comment列表
const reqFabricsRequestCommentList = (id) =>
  postAxios({
    url: `/styles/style/fabrics/request/comment/list/${id}`,
    data: { styleFabricsRequestId: id },
  });

/*     SPECIFICATIONS     */

//SPECIFICATIONS 新增
const reqAddSpecificationsCustom = (data) =>
  postAxios({
    url: `/styles/style/specifications/block/update`,
    data: data,
  });

//SPECIFICATIONS 详情
const reqSpecificationsInfo = (id) =>
  getAxios({
    url: `/styles/style/specifications/${id}`,
  });

//SPECIFICATIONS tabs
const reqSpecificationsList = (id) =>
  getAxios({
    url: `/styles/style/specifications/list/${id}`,
  });

//specifications BlockId 选项卡详情
const reqSpecificationsBlockInfo = (id) =>
  getAxios({
    url: `/styles/style/specifications/block/${id}`,
  });

//SPECIFICATIONS addGrade
const reqSpecificationsAddGrade = (data) =>
  postAxios({
    url: `/styles/style/specifications/block/add`,
    data: data,
  });

//SPECIFICATIONS addGrade
const reqSpecificationsUpdateGrade = (data) =>
  postAxios({
    url: `/styles/style/specifications/block/update`,
    data: data,
  });

//SPECIFICATIONS 导入多条pom
const reqSpecificationsPomImport = (data) =>
  postAxios({
    url: `/styles/style/specifications/pom/import`,
    data: data,
  });

//SPECIFICATIONS 导入多条size
const reqSpecificationsImportSizeChart = (data) =>
  postAxios({
    url: `/styles/style/specifications/importSizeChart`,
    data: data,
  });

//SPECIFICATIONS 新建多条size
const reqSpecificationsAddSizeChart = (data) =>
  postAxios({
    url: `/styles/style/specifications/sizeChartItem/add`,
    data: data,
  });

//SPECIFICATIONS 导入多条Grade
const reqSpecificationsImportGradeRule = (data) =>
  postAxios({
    url: `/styles/style/specifications/importGradeRule`,
    data: data,
  });

//SPECIFICATIONS 表编辑
const reqSpecificationsGradeRuleUpdate = (data) =>
  postAxios({
    url: `/styles/style/specifications/gradeRule/update`,
    data: data,
  });

//SPECIFICATIONS Import grading block
const reqSpecificationsSampleList = (data) =>
  postAxios({
    url: `/styles/grade/rule/sampleList`,
    data: data,
  });

//SPECIFICATIONS Import grading block
const reqSpecificationsPomAdd = (data) =>
  postAxios({
    url: `/styles/style/specifications/pom/add`,
    data: data,
  });

//SPECIFICATIONS pom style
const reqSpecificationsPomList = (id) =>
  postAxios({
    url: `/styles/style/spec/sheet/pom/list/last/${id}`,
    data: { styleId: id },
  });

//SPECIFICATIONS 初始化
const reqSpecificationsInit = (data) =>
  postAxios({
    url: `/styles/style/specifications/init/${data.styleId}/${data.specificationBlockId}`,
    data: data,
  });

//SPECIFICATIONS 清除size值
const reqSpecificationsClearSize = (id) =>
  postAxios({
    url: `/styles/style/specifications/sizeChartData/clear/${id}`,
    data: { styleId: id },
  });

//SPECIFICATIONS 清除sampleSize
const reqSpecificationsClearSampleSize = (id) =>
  postAxios({
    url: `/styles/style/specifications/sizeChartData/clearValue/${id}`,
    data: { styleId: id },
  });

//SPECIFICATIONS 保存到GradeRule库
const reqSpecSheetSaveInGradeRuleLibrary = (data) =>
  postAxios({
    url: `/styles/grade/rule/addV2`,
    data: data,
  });

//SPECIFICATIONS 保存到FitBlock库
const reqSpecSheetSaveFitBlockToLibrary = (data) =>
  postAxios({
    url: `/styles/style/specifications/saveFitBlockToLibrary`,
    data: data,
  });

//SPECIFICATIONS 更新保存状态
const reqSpecSheetSaveLibraryStatus = (data) =>
  postAxios({
    url: `/styles/style/specifications/updateSaveStatus`,
    data: data,
  });

//检查pom重名
const reqSpecSheetaddPomCheckName = (name) =>
  postAxios({
    url: `/styles/style/pom/library/getPomByName`,
    data: { name: name },
  });

//检查grade库重名
const reqSpecSheetaddGradeCheckName = (name) =>
  postAxios({
    url: `/styles/grade/rule/getByName`,
    data: { name: name },
  });

//检查FitBlock库重名
const reqSpecSheetaddFitBlockCheckName = (name) =>
  postAxios({
    url: `/styles/fitBlock/getByName`,
    data: { name: name },
  });

//检查 group库重名
const reqSpecSheetaddGroupCheckName = (name) =>
  postAxios({
    url: `/styles/style/pom/library/getGroupByName`,
    data: { name: name },
  });

//检查 POM于group库重复
const reqSpecSheetaddGroupCheckPom = (data) =>
  postAxios({
    url: `/styles/style/pom/library/batchDuplicatePom`,
    data: data,
  });

// size获取
const reqSpecSheetSize = (id) =>
  getAxios({
    url: `/styles/style/specifications/getStyleSize/${id}`,
  });

// size隐藏
const reqSpecSheetSizeChartActive = (data) =>
  postAxios({
    url: `/styles/style/specifications/sizeChart/active`,
    data: data,
  });

//Spec
const reqSpecificationsUpdateSampleSize = (data) =>
  postAxios({
    url: `/styles/style/specifications/pom/updateSampleSize`,
    data: data,
  });

//文件归档
const reqFileUpdateEdit = (data) =>
  postAxios({
    url: `/styles/file/update/edit`,
    data: data,
  });

const reqSpecSheetSync = (id) =>
  getAxios({
    url: `/styles/style/spec/sheet/sync/${id}`,
  });

//VENDOR REQUESTS
const reqFabricsRequestVendorEdit = (data) =>
  postAxios({
    url: `/styles/style/fabrics/request/vendor/edit`,
    data: data,
  });

//VENDOR REQUESTS
const reqFabricsRequestSampleStatus = (data) =>
  postAxios({
    url: `/styles/style/fabrics/request/sample/status`,
    data: data,
  });

//VENDOR REQUESTS
const reqFabricsRequestStageLog = (data) =>
  postAxios({
    url: `/styles/style/fabrics/getFabricsRequestStageLog`,
    data: data,
  });

//VENDOR REQUESTS
const reqBomExist = (data) =>
  postAxios({
    url: `/styles/bom/bomExist`,
    data: data,
  });

//BOM
const reqBomList = (data) =>
  postAxios({
    url: `/styles/bom/list`,
    data: data,
  });

//BOM 状态更改
const reqBomUpdateApprovalStatus = (data) =>
  postAxios({
    url: `/styles/bom/updateApprovalStatus`,
    data: data,
  });

//BOM 自定义字段更新
const reqBomCustomFieldValueUpdate = (data) =>
  postAxios({
    url: `/styles/bom/custom/field/value/update`,
    data: data,
  });

//BOM vender请求数量
const reqBomGetSubRequestNum = (id) =>
  postAxios({
    url: `/styles/bom/getSubRequestNum/${id}`,
    data: { bomId: id },
  });

//BOM 下拉详情
const reqBomSelectedMateriais = (data) =>
  postAxios({
    url: `/styles/bom/selectedMateriais`,
    data: data,
  });

//BOM 批量
const reqBomCustomFieldValueBatchUpdate = (data) =>
  postAxios({
    url: `/styles/bom/custom/field/value/batchUpdate`,
    data: data,
  });

//BOM COLORWAY 表头
const reqBomGetBomColorways = (id) =>
  postAxios({
    url: `/styles/style/bom/colorways/getBomColorways/${id}`,
    data: { styleId: id },
  });

//BOM 表头显示不显示
const reqBomGetFabricsSetting = (id) =>
  postAxios({
    url: `/styles/style/bom/setting/getFabricsSetting/${id}`,
    data: { styleId: id },
  });

//BOM 表头显示不显示
const reqBomGetTrimsSetting = (id) =>
  postAxios({
    url: `/styles/style/bom/setting/getTrimsSetting/${id}`,
    data: { styleId: id },
  });

//BOM 表头显示不显示
const reqBomGetLabelSetting = (id) =>
  postAxios({
    url: `/styles/style/bom/setting/getLabelSetting/${id}`,
    data: { styleId: id },
  });

//BOM colorWay del
const reqBomCustomFieldValueDelete = (data) =>
  postAxios({
    url: `/styles/bom/custom/field/value/delete`,
    data: data,
  });

//BOM RequestStageLog
const reqBomFabricsRequestStageLog = (data) =>
  postAxios({
    url: `/styles/style/fabrics/getFabricsRequestStageLog`,
    data: data,
  });

//BOM
const reqBomGetColorwayFabricsRequestStageLog = (data) =>
  postAxios({
    url: `/styles/style/fabrics/getColorwayFabricsRequestStageLog`,
    data: data,
  });

//Fit Block
const reqFitBlockSampleList = (data) =>
  postAxios({
    url: `/styles/fitBlock/sampleList`,
    data: data,
  });

//Fit block 导入多条Grade

const reqImportFitBlock = (data) =>
  postAxios({
    url: `/styles/style/specifications/importFitBlock`,
    data: data,
  });

//new spec 新接口
const reqFitsOption = (id) =>
  postAxios({
    url: `/styles/style/fits/request/stageList/${id}`,
    data: { specSheetId: id },
  });

const reqUpdateFitsRequestSampleSize = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/updateFitsRequestSampleSize`,
    data: data,
  });

const reqUpdatePomTargetAndSampleSize = (data) =>
  postAxios({
    url: `/styles/style/spec/sheet/updatePomTargetAndSampleSize`,
    data: data,
  });

//costing 接口

//costing 列表
const reqCostingList = (id) =>
  postAxios({
    url: `/styles/costing/list/${id}`,
    data: { styleId: id },
  });

//costing 下拉列表
const reqCostingOptionsList = (id) =>
  postAxios({
    url: `/styles/costing/sampleList/${id}`,
    data: { styleId: id },
  });

//costing 新增Fits当前tab下的文件
const reqCostingAdd = (data) =>
  postAxios({
    url: `/styles/costing/add`,
    data: data,
  });

//costing 详情
const reqCostingDetails = (id) =>
  postAxios({
    url: `/styles/costing/details/${id}`,
    data: { costingId: id },
  });

//costing 编辑
const reqCostingUpdate = (data) =>
  postAxios({
    url: `/styles/costing/update`,
    data: data,
  });

//costing bom导入
const reqCostingImportFromBom = (data) =>
  postAxios({
    url: `/styles/costing/importFromBom/${data?.styleId}/${data?.costingId}`,
    data: {
      costingId: data?.costingId,
      styleId: data?.styleId,
    },
  });

//cost bom修改
const reqCostingUpdateMaterialsCost = (data) =>
  postAxios({
    url: `/styles/costing/updateMaterialsCost`,
    data: data,
  });

//cost status修改
const reqCostingUpdateCostStatus = (data) =>
  postAxios({
    url: `/styles/costing/updateCostStatus`,
    data: data,
  });

//cost  新增记录
const reqCostingAddOrUpdateItem = (data) =>
  postAxios({
    url: `/styles/costing/addOrUpdateItem`,
    data: data,
  });

//cost  删除记录
const reqCostingRemoveItem = (data) =>
  postAxios({
    url: `/styles/costing/removeItem`,
    data: data,
  });

//cost 复制
const reqCostingCopy = (data) =>
  postAxios({
    url: `/styles/costing/copy/${data?.copyFrom}/${data?.costingId}`,
    data: {
      copyFrom: data?.copyFrom,
      costingId: data?.costingId,
    },
  });

//cost 新增margin
const reqCostingAddOrUpdateCostingMarginCalculatio = (data) =>
  postAxios({
    url: `/styles/costing/addOrUpdateCostingMarginCalculatio`,
    data: data,
  });

//cost 表头获取
const reqCostingGetCostingColumnSetting = (id) =>
  postAxios({
    url: `/styles/costing/getCostingColumnSetting/${id}`,
    data: {
      costingId: id,
    },
  });

//cost 表头设置
const reqCostingUpdateCostingColumnSetting = (data) =>
  postAxios({
    url: `/styles/costing/updateCostingColumnSetting`,
    data: data,
  });

//cost 删除
const reqCostingDel = (id) =>
  postAxios({
    url: `/styles/costing/batch/${id}`,
    data: { idList: id },
  });

//cost 排序
const reqCostingSort = (data) =>
  postAxios({
    url: `/styles/costing/sort`,
    data: data,
  });

//cost bom更新
const reqCostingMaterialsSync = (id) =>
  postAxios({
    url: `/styles/costing/materials/cost/synch/${id}`,
    data: {
      costingId: id,
    },
  });

//cost bom撤回
const reqCostingMaterialsRevert = (id) =>
  postAxios({
    url: `/styles/costing/materials/revert/${id}`,
    data: {
      costingId: id,
    },
  });

//cost bominfo
const reqBomDetails = (id) =>
  postAxios({
    url: `/styles/bom/details`,
    data: {
      bomId: id,
    },
  });

//cost 撤销
const reqVendorRevert = (data) =>
  postAxios({
    url: `/styles/costing/vendor/revert`,
    data: data,
  });

//Tech Pack 下拉列表
const reqPacksList = (data) =>
  postAxios({
    url: `/styles/packs/list`,
    data: data,
  });

//drop
const reqStyleDrop = (data) =>
  postAxios({
    url: `/styles/style_library/drop`,
    data: data,
  });

//del
const reqStyleDel = (id) =>
  postAxios({
    url: `/styles/style_library/remove/${id}`,
    data: { styleId: id },
  });

//copy
const reqStyleCopy = (data) =>
  postAxios({
    url: `/styles/style_library/copy`,
    data: data,
  });

//vendor 列表
const reqVendorAllList = (data) =>
  postAxios({
    url: `/styles/vendor/listAll`,
    data: data,
  });

//查重
const reqStylesExist = (data) =>
  postAxios({
    url: `/styles/style_library/exist`,
    data: data,
  });

//删除design
const reqStylesFileDel = (id) =>
  postAxios({
    url: `/styles/file/batchs/${id}`,
    data: { idList: id },
  });

//下载
const reqStylesFileDownload = (data) => {
  window.open(
    `${baseURL}/file/download/?fileName=${data?.name}&key=${data?.key}`
  );
};

//fit list v2
const reqStylesFitsRequestListV2 = (id) =>
  postAxios({
    url: `/styles/style/fits/request/listV2/${id}`,
    data: { styleFitsId: id },
  });

//seasons 季节
const reqStylesSeasons = (data) =>
  postAxios({
    url: `/styles/seasons`,
    data: data,
  });

//seasons 季节 查重
const reqStylesSeasonsExist = (data) =>
  postAxios({
    url: `/styles/seasons/exist`,
    data: data,
  });

/*     右侧菜单全部接口     */
//添加操作记录
const reqAddActivityLog = (data) =>
  postAxios({ url: `/styles/activity/log`, data: data });

const reqCommentsList = (id, data) =>
  postAxios({
    url: `/styles/style_library/file/comments/${id}`,
    data: data,
  });

const reqTeamNum = (id) =>
  getAxios({
    url: `/styles/team/team/user/listNum/${id}`,
  });

const reqTeamList = (styleId, teamId) =>
  getAxios({
    url: `/styles/team/style/team/user/list/${styleId}/${teamId}`,
  });

const reqTeamStatusUpdate = (data) =>
  postAxios({
    url: `/styles/team/style/team/user/status/update`,
    data,
  });

const reqAddTeamUser = (data) =>
  postAxios({
    url: `/styles/team/addTeamUser`,
    data,
  });

const reqUserList = (data) =>
  postAxios({
    url: `/upms/user/lists`,
    data: data,
  });

const reqVendorList = (id) =>
  getAxios({
    url: `/styles/vendor/style/list/${id}`,
  });

const reqVendorStatusUpdate = (data) =>
  postAxios({
    url: `/styles/vendor/style/status/update`,
    data: data,
  });

//styles/activity/log/list/{styleId}
const reqActivityLogList = (data) =>
  postAxios({
    url: `/styles/activity/log/list`,
    data: data,
  });

const reqActivityLogReadNum = (id) =>
  getAxios({
    url: `/styles/activity/log/readNum/${id}`,
  });

const reqActivityLogRead = (data) =>
  postAxios({
    url: `/styles/activity/read`,
    data: data,
  });

const reqStylesPacksGetInfo = (data) =>
  postAxios({
    url: `/styles/packs/getInfo`,
    data: data,
  });

const reqNotVendorUsers = (data) =>
  postAxios({
    url: '/styles/fabrics/getNotVendorUsers',
    data: data,
  });

export default {
  reqStylesList,
  reqStylesInfo,
  reqStylesInfoEdit,
  resUploadFile,
  resKeyToUrl,
  reqSampleList,
  reqSampleAdd,
  reqSampleUpdate,
  reqFileList,
  reqAddActivityLog,
  resTypeOptions,
  reqCommentsList,
  reqTeamList,
  reqUserList,
  reqTeamStatusUpdate,
  reqVendorList,
  reqVendorStatusUpdate,
  reqAddTeamUser,
  reqActivityLogList,
  reqDefaultStyleTemplate,
  reqStylesInfoAdd,
  reqFabricsAdd,
  reqFabricsList,
  reqFabricsStatus,
  reqColorWayAndArtwork,
  reqFabricsRequest,
  reqFabricsLibrary,
  reqFabricsRequestStatus,
  reqColorInfo,
  reqArtworkInfo,
  reqEditFabricsLibrary,
  reqAddFile,
  reqArtworkList,
  reqArtworkMerge,
  reqPomGroupList,
  reqAddPom,
  reqPomList,
  reqSpecSheetList,
  reqSpecSheetInfo,
  reqSpecSheetRequest,
  reqAddSpecSheet,
  reqSizeChart,
  reqUpdateSpecSheetStylePom,
  reqPomLibraryList,
  reqSearchPom,
  reqEditStyleSpecSheetStylePom,
  resAddTypeOptions,
  reqBooksList,
  reqTrimsLibrary,
  reqFitsFolderList,
  reqFitsFolderFileList,
  reqFitsFolderAdd,
  reqAddFitsFolderFile,
  reqAddFabricsRequestComment,
  reqFabricsRequestCommentList,
  reqSpecificationsInfo,
  reqSpecificationsPomImport,
  reqSpecificationsImportGradeRule,
  reqSpecificationsBlockInfo,
  reqSpecificationsList,
  reqSpecificationsAddGrade,
  reqSpecificationsImportSizeChart,
  reqSpecificationsGradeRuleUpdate,
  reqSpecificationsSampleList,
  reqSpecificationsPomAdd,
  reqSpecificationsPomList,
  reqSearchArtworkList,
  reqSearchFlatsList,
  reqSpecificationsUpdateSampleSize,
  reqSpecSheetImportPom,
  reqFileUpdateEdit,
  reqSpecSheetImportGroup,
  reqSetFileCover,
  reqFitsRequestStatusUpdate,
  reqSpecSheetSync,
  reqAddSpecificationsCustom,
  reqSpecificationsAddSizeChart,
  reqActivityLogReadNum,
  reqActivityLogRead,
  reqSpecSheetCopyPom,
  reqSpecSheetDelPom,
  reqSpecSheetDeActivatePom,
  reqSpecSheetTargetAccept,
  reqSpecificationsUpdateGrade,
  reqTeamNum,
  reqFabricsRequestVendorEdit,
  reqSpecSheetPomSort,
  reqSpecSheetSaveInLibrary,
  reqFitBlockSampleList,
  reqImportFitBlock,
  reqSpecificationsInit,
  reqSpecificationsClearSize,
  reqSpecificationsClearSampleSize,
  reqSpecSheetSaveInGradeRuleLibrary,
  reqSpecSheetSaveFitBlockToLibrary,
  reqSpecSheetSizeChartActive,
  reqSpecSheetSize,
  reqSpecSheetSaveLibraryStatus,
  reqSpecSheetaddPomCheckName,
  reqSpecSheetaddGradeCheckName,
  reqSpecSheetaddFitBlockCheckName,
  reqSpecSheetaddGroupCheckName,
  reqSpecSheetaddGroupCheckPom,
  reqAddFitsFile,
  reqFitsRequestFitApprovalUpdate,
  reqFitsRequestShipmentTrackingUpdate,
  reqSpecSheetUpdate,
  reqFitsOption,
  reqUpdateFitsRequestSampleSize,
  reqUpdatePomTargetAndSampleSize,
  reqFitsRequestUpdateDeliveryTime,
  reqSpecSheetUpdateNotes,
  reqSpecSheetUpdatePomTargetAndSampleSizeList,
  reqFabricsRequestSampleStatus,
  resUploadFileV2,
  reqBomList,
  reqBomUpdateApprovalStatus,
  reqBomCustomFieldValueUpdate,
  reqBomGetSubRequestNum,
  reqBomSelectedMateriais,
  reqBomCustomFieldValueBatchUpdate,
  reqFabricsRequestStageLog,
  reqBomGetBomColorways,
  reqBomGetFabricsSetting,
  reqBomGetTrimsSetting,
  reqBomGetLabelSetting,
  reqBomCustomFieldValueDelete,
  reqBomFabricsRequestStageLog,
  reqBomGetColorwayFabricsRequestStageLog,
  reqFabricsFilterList,
  reqBomExist,
  reqStylesPacksGetInfo,
  reqCostingList,
  reqCostingOptionsList,
  reqCostingAdd,
  reqPacksList,
  reqCostingDetails,
  reqCostingUpdate,
  reqCostingImportFromBom,
  reqCostingUpdateMaterialsCost,
  reqCostingUpdateCostStatus,
  reqCostingAddOrUpdateItem,
  reqCostingRemoveItem,
  reqCostingCopy,
  reqCostingAddOrUpdateCostingMarginCalculatio,
  reqCostingGetCostingColumnSetting,
  reqCostingUpdateCostingColumnSetting,
  reqCostingDel,
  reqCostingSort,
  reqCostingMaterialsSync,
  reqCostingMaterialsRevert,
  reqBomDetails,
  reqNotVendorUsers,
  reqVendorRevert,
  reqStyleDrop,
  reqStyleDel,
  reqStyleCopy,
  reqVendorAllList,
  reqStylesExist,
  reqStylesFileDel,
  reqStylesFileDownload,
  reqStylesFitsRequestListV2,
  reqStylesSeasons,
  reqStylesSeasonsExist,
};
