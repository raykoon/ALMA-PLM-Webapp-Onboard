import services from '../loadServices';

const { stylesService, libraryServics } = services;
const initState = {
  styleTab: 0,
  specTabs: [],
  fitsTabs: [],
  specTabInfo: {},
  fitsTabInfo: {},
  isMainFabric: false,
  styleInfoIsShow: true,
  specSampleRequest: {},
};

export default {
  state: initState,
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    clearState() {
      return initState;
    },
  },
  effects: {
    reqStylesList(id) {
      return stylesService.reqStylesList(id);
    },
    reqStylesInfo(id) {
      return stylesService.reqStylesInfo(id);
    },
    reqStylesInfoEdit(data) {
      return stylesService.reqStylesInfoEdit(data);
    },
    resUploadFile(data) {
      return stylesService.resUploadFile(data);
    },
    resKeyToUrl(key) {
      return stylesService.resKeyToUrl(key);
    },
    reqAddActivityLog(data) {
      return stylesService.reqAddActivityLog(data);
    },
    resTypeOptions(type) {
      return stylesService.resTypeOptions(type);
    },
    reqSampleList(id) {
      return stylesService.reqSampleList(id);
    },
    reqSampleAdd(data) {
      return stylesService.reqSampleAdd(data);
    },
    reqSampleUpdate(data) {
      return stylesService.reqSampleUpdate(data);
    },
    reqFileList(data) {
      return stylesService.reqFileList(data.id, data.type);
    },
    reqCommentsList(data) {
      return stylesService.reqCommentsList(data.id, data.data);
    },
    reqTeamList(data) {
      return stylesService.reqTeamList(data.styleId, data.teamId);
    },
    reqUserList(data) {
      return stylesService.reqUserList(data);
    },
    reqTeamStatusUpdate(data) {
      return stylesService.reqTeamStatusUpdate(data);
    },
    reqAddTeamUser(data) {
      return stylesService.reqAddTeamUser(data);
    },
    reqActivityLogList(data) {
      return stylesService.reqActivityLogList(data);
    },
    reqVendorList(id) {
      return stylesService.reqVendorList(id);
    },
    reqVendorStatusUpdate(data) {
      return stylesService.reqVendorStatusUpdate(data);
    },
    reqDefaultStyleTemplate(type) {
      return stylesService.reqDefaultStyleTemplate(type);
    },
    reqStylesInfoAdd(data) {
      return stylesService.reqStylesInfoAdd(data);
    },
    reqFabricsAdd(data) {
      return stylesService.reqFabricsAdd(data);
    },
    reqFabricsList(id) {
      return stylesService.reqFabricsList(id);
    },
    reqFabricsStatus(data) {
      return stylesService.reqFabricsStatus(data);
    },
    reqColorWayAndArtwork(data) {
      return stylesService.reqColorWayAndArtwork(data);
    },
    reqFabricsRequest(data) {
      return stylesService.reqFabricsRequest(data);
    },
    reqFabricsLibrary(data) {
      return stylesService.reqFabricsLibrary(data);
    },
    reqFabricsRequestStatus(data) {
      return stylesService.reqFabricsRequestStatus(data);
    },
    reqColorInfo(id) {
      return stylesService.reqColorInfo(id);
    },
    reqArtworkInfo(id) {
      return stylesService.reqArtworkInfo(id);
    },
    reqEditFabricsLibrary(data) {
      return stylesService.reqEditFabricsLibrary(data);
    },
    reqAddFile(data) {
      return stylesService.reqAddFile(data);
    },
    reqArtworkList(id) {
      return stylesService.reqArtworkList(id);
    },
    reqArtworkMerge(data) {
      return stylesService.reqArtworkMerge(data);
    },
    reqPomGroupList(data) {
      return stylesService.reqPomGroupList(data);
    },
    reqAddPom(data) {
      return stylesService.reqAddPom(data);
    },
    reqPomList(data) {
      return stylesService.reqPomList(data);
    },
    reqSpecSheetList(id) {
      return stylesService.reqSpecSheetList(id);
    },
    reqSpecSheetInfo(id) {
      return stylesService.reqSpecSheetInfo(id);
    },
    reqSpecSheetRequest(data) {
      return stylesService.reqSpecSheetRequest(data);
    },
    reqAddSpecSheet(data) {
      return stylesService.reqAddSpecSheet(data);
    },
    reqSizeChart(data) {
      return stylesService.reqSizeChart(data);
    },
    reqUpdateSpecSheetStylePom(data) {
      return stylesService.reqUpdateSpecSheetStylePom(data);
    },
    reqPomLibraryList(id) {
      return stylesService.reqPomLibraryList(id);
    },
    reqSearchPom(data) {
      return stylesService.reqSearchPom(data);
    },
    reqEditStyleSpecSheetStylePom(data) {
      return stylesService.reqEditStyleSpecSheetStylePom(data);
    },
    resAddTypeOptions(data) {
      return stylesService.resAddTypeOptions(data.type, data.data);
    },
    reqBooksList(data) {
      return stylesService.reqBooksList(data);
    },
    reqTrimsLibrary(data) {
      return stylesService.reqTrimsLibrary(data);
    },
    reqFitsFolderList(id) {
      return stylesService.reqFitsFolderList(id);
    },
    reqFitsFolderFileList(id) {
      return stylesService.reqFitsFolderFileList(id);
    },
    reqFitsFolderAdd(data) {
      return stylesService.reqFitsFolderAdd(data);
    },
    reqAddFitsFolderFile(data) {
      return stylesService.reqAddFitsFolderFile(data);
    },
    reqAddFabricsRequestComment(data) {
      return stylesService.reqAddFabricsRequestComment(data);
    },
    reqFabricsRequestCommentList(id) {
      return stylesService.reqFabricsRequestCommentList(id);
    },
    reqSpecificationsInfo(id) {
      return stylesService.reqSpecificationsInfo(id);
    },
    reqSpecificationsPomImport(data) {
      return stylesService.reqSpecificationsPomImport(data);
    },
    reqSpecificationsImportGradeRule(data) {
      return stylesService.reqSpecificationsImportGradeRule(data);
    },
    reqSpecificationsBlockInfo(id) {
      return stylesService.reqSpecificationsBlockInfo(id);
    },
    reqSpecificationsList(id) {
      return stylesService.reqSpecificationsList(id);
    },
    reqSpecificationsAddGrade(data) {
      return stylesService.reqSpecificationsAddGrade(data);
    },
    reqSpecificationsImportSizeChart(data) {
      return stylesService.reqSpecificationsImportSizeChart(data);
    },
    reqSpecificationsGradeRuleUpdate(data) {
      return stylesService.reqSpecificationsGradeRuleUpdate(data);
    },
    reqSpecificationsSampleList(data) {
      return stylesService.reqSpecificationsSampleList(data);
    },
    reqSpecificationsPomAdd(data) {
      return stylesService.reqSpecificationsPomAdd(data);
    },
    reqSpecificationsPomList(id) {
      return stylesService.reqSpecificationsPomList(id);
    },
    reqSearchArtworkList(data) {
      return stylesService.reqSearchArtworkList(data);
    },
    reqSearchFlatsList(data) {
      return stylesService.reqSearchFlatsList(data);
    },
    reqSpecificationsUpdateSampleSize(data) {
      return stylesService.reqSpecificationsUpdateSampleSize(data);
    },
    reqSpecSheetImportPom(data) {
      return stylesService.reqSpecSheetImportPom(data);
    },
    reqFileUpdateEdit(data) {
      return stylesService.reqFileUpdateEdit(data);
    },
    reqSpecSheetImportGroup(data) {
      return stylesService.reqSpecSheetImportGroup(data);
    },
    reqSetFileCover(data) {
      return stylesService.reqSetFileCover(data);
    },
    reqFitsRequestStatusUpdate(data) {
      return stylesService.reqFitsRequestStatusUpdate(data);
    },
    reqSpecSheetSync(id) {
      return stylesService.reqSpecSheetSync(id);
    },
    reqAddSpecificationsCustom(data) {
      return stylesService.reqAddSpecificationsCustom(data);
    },
    reqSpecificationsAddSizeChart(data) {
      return stylesService.reqSpecificationsAddSizeChart(data);
    },
    reqActivityLogReadNum(id) {
      return stylesService.reqActivityLogReadNum(id);
    },
    reqActivityLogRead(data) {
      return stylesService.reqActivityLogRead(data);
    },
    reqSpecSheetCopyPom(id) {
      return stylesService.reqSpecSheetCopyPom(id);
    },
    reqSpecSheetDelPom(id) {
      return stylesService.reqSpecSheetDelPom(id);
    },
    reqSpecSheetDeActivatePom(data) {
      return stylesService.reqSpecSheetDeActivatePom(data);
    },
    reqSpecSheetTargetAccept(id) {
      return stylesService.reqSpecSheetTargetAccept(id);
    },
    reqSpecificationsUpdateGrade(data) {
      return stylesService.reqSpecificationsUpdateGrade(data);
    },
    reqTeamNum(id) {
      return stylesService.reqTeamNum(id);
    },
    reqFabricsRequestVendorEdit(data) {
      return stylesService.reqFabricsRequestVendorEdit(data);
    },
    reqSpecSheetPomSort(data) {
      return stylesService.reqSpecSheetPomSort(data);
    },
    reqSpecSheetSaveInLibrary(data) {
      return stylesService.reqSpecSheetSaveInLibrary(data);
    },
    reqFitBlockSampleList(data) {
      return stylesService.reqFitBlockSampleList(data);
    },
    reqImportFitBlock(data) {
      return stylesService.reqImportFitBlock(data);
    },
    reqSpecificationsInit(data) {
      return stylesService.reqSpecificationsInit(data);
    },
    reqSpecificationsClearSize(id) {
      return stylesService.reqSpecificationsClearSize(id);
    },
    reqSpecificationsClearSampleSize(id) {
      return stylesService.reqSpecificationsClearSampleSize(id);
    },
    reqSpecSheetSaveInGradeRuleLibrary(data) {
      return stylesService.reqSpecSheetSaveInGradeRuleLibrary(data);
    },
    reqSpecSheetSaveFitBlockToLibrary(data) {
      return stylesService.reqSpecSheetSaveFitBlockToLibrary(data);
    },
    reqSpecSheetSizeChartActive(data) {
      return stylesService.reqSpecSheetSizeChartActive(data);
    },
    reqSpecSheetSize(id) {
      return stylesService.reqSpecSheetSize(id);
    },
    reqSpecSheetSaveLibraryStatus(data) {
      return stylesService.reqSpecSheetSaveLibraryStatus(data);
    },
    reqSpecSheetaddPomCheckName(name) {
      return stylesService.reqSpecSheetaddPomCheckName(name);
    },
    reqSpecSheetaddGradeCheckName(name) {
      return stylesService.reqSpecSheetaddGradeCheckName(name);
    },
    reqSpecSheetaddFitBlockCheckName(name) {
      return stylesService.reqSpecSheetaddFitBlockCheckName(name);
    },
    reqSpecSheetaddGroupCheckName(name) {
      return stylesService.reqSpecSheetaddGroupCheckName(name);
    },
    reqSpecSheetaddGroupCheckPom(data) {
      return stylesService.reqSpecSheetaddGroupCheckPom(data);
    },
    reqAddFitsFile(data) {
      return stylesService.reqAddFitsFile(data);
    },
    reqFitsRequestFitApprovalUpdate(data) {
      return stylesService.reqFitsRequestFitApprovalUpdate(data);
    },
    reqFitsRequestShipmentTrackingUpdate(data) {
      return stylesService.reqFitsRequestShipmentTrackingUpdate(data);
    },
    reqSpecSheetUpdate(data) {
      return stylesService.reqSpecSheetUpdate(data);
    },
    reqFitsOption(id) {
      return stylesService.reqFitsOption(id);
    },
    reqUpdateFitsRequestSampleSize(data) {
      return stylesService.reqUpdateFitsRequestSampleSize(data);
    },
    reqUpdatePomTargetAndSampleSize(data) {
      return stylesService.reqUpdatePomTargetAndSampleSize(data);
    },
    reqFitsRequestUpdateDeliveryTime(data) {
      return stylesService.reqFitsRequestUpdateDeliveryTime(data);
    },
    reqSpecSheetUpdateNotes(data) {
      return stylesService.reqSpecSheetUpdateNotes(data);
    },
    reqSpecSheetUpdatePomTargetAndSampleSizeList(data) {
      return stylesService.reqSpecSheetUpdatePomTargetAndSampleSizeList(data);
    },
    reqFabricsRequestSampleStatus(data) {
      return stylesService.reqFabricsRequestSampleStatus(data);
    },
    resUploadFileV2(data) {
      return stylesService.resUploadFileV2(data);
    },
    reqBomList(data) {
      return stylesService.reqBomList(data);
    },
    reqBomUpdateApprovalStatus(data) {
      return stylesService.reqBomUpdateApprovalStatus(data);
    },
    reqBomCustomFieldValueUpdate(data) {
      return stylesService.reqBomCustomFieldValueUpdate(data);
    },
    reqBomGetSubRequestNum(id) {
      return stylesService.reqBomGetSubRequestNum(id);
    },
    reqBomSelectedMateriais(data) {
      return stylesService.reqBomSelectedMateriais(data);
    },
    reqBomCustomFieldValueBatchUpdate(data) {
      return stylesService.reqBomCustomFieldValueBatchUpdate(data);
    },
    reqFabricsRequestStageLog(data) {
      return stylesService.reqFabricsRequestStageLog(data);
    },
    reqBomGetBomColorways(id) {
      return stylesService.reqBomGetBomColorways(id);
    },
    reqBomGetFabricsSetting(id) {
      return stylesService.reqBomGetFabricsSetting(id);
    },
    reqBomGetTrimsSetting(id) {
      return stylesService.reqBomGetTrimsSetting(id);
    },
    reqBomGetLabelSetting(id) {
      return stylesService.reqBomGetLabelSetting(id);
    },
    reqBomCustomFieldValueDelete(data) {
      return stylesService.reqBomCustomFieldValueDelete(data);
    },
    reqBomFabricsRequestStageLog(data) {
      return stylesService.reqBomFabricsRequestStageLog(data);
    },
    reqBomGetColorwayFabricsRequestStageLog(data) {
      return stylesService.reqBomGetColorwayFabricsRequestStageLog(data);
    },
    reqFabricsFilterList(data) {
      return stylesService.reqFabricsFilterList(data);
    },
    reqBomExist(data) {
      return stylesService.reqBomExist(data);
    },
    reqStylesPacksGetInfo(data) {
      return stylesService.reqStylesPacksGetInfo(data);
    },
    reqCostingList(id) {
      return stylesService.reqCostingList(id);
    },
    reqCostingOptionsList(id) {
      return stylesService.reqCostingOptionsList(id);
    },
    reqCostingAdd(data) {
      return stylesService.reqCostingAdd(data);
    },
    reqPacksList(data) {
      return stylesService.reqPacksList(data);
    },
    reqCostingDetails(id) {
      return stylesService.reqCostingDetails(id);
    },
    reqCostingUpdate(data) {
      return stylesService.reqCostingUpdate(data);
    },
    reqCostingImportFromBom(data) {
      return stylesService.reqCostingImportFromBom(data);
    },
    reqCostingUpdateMaterialsCost(data) {
      return stylesService.reqCostingUpdateMaterialsCost(data);
    },
    reqCostingUpdateCostStatus(data) {
      return stylesService.reqCostingUpdateCostStatus(data);
    },
    reqCostingAddOrUpdateItem(data) {
      return stylesService.reqCostingAddOrUpdateItem(data);
    },
    reqCostingRemoveItem(data) {
      return stylesService.reqCostingRemoveItem(data);
    },
    reqCostingAddOrUpdateCostingMarginCalculatio(data) {
      return stylesService.reqCostingAddOrUpdateCostingMarginCalculatio(data);
    },
    reqCostingCopy(data) {
      return stylesService.reqCostingCopy(data);
    },
    reqCostingGetCostingColumnSetting(id) {
      return stylesService.reqCostingGetCostingColumnSetting(id);
    },
    reqCostingUpdateCostingColumnSetting(data) {
      return stylesService.reqCostingUpdateCostingColumnSetting(data);
    },
    reqCostingDel(id) {
      return stylesService.reqCostingDel(id);
    },
    reqCostingSort(data) {
      return stylesService.reqCostingSort(data);
    },
    reqCostingMaterialsSync(id) {
      return stylesService.reqCostingMaterialsSync(id);
    },
    reqCostingMaterialsRevert(id) {
      return stylesService.reqCostingMaterialsRevert(id);
    },
    reqBomDetails(id) {
      return stylesService.reqBomDetails(id);
    },
    reqNotVendorUsers(data) {
      return stylesService.reqNotVendorUsers(data);
    },
    reqDefaultTemplate(data) {
      return libraryServics.reqDefaultTemplate(data);
    },
    reqMillList(data) {
      return libraryServics.reqMillList(data);
    },
    resLibraryType(data) {
      return libraryServics.resLibraryType(data);
    },
    reqLibraryGetSupplier(data) {
      return libraryServics.reqLibraryGetSupplier(data);
    },
    reqVendorRevert(data) {
      return stylesService.reqVendorRevert(data);
    },
    reqStyleDrop(data) {
      return stylesService.reqStyleDrop(data);
    },
    reqStyleDel(id) {
      return stylesService.reqStyleDel(id);
    },
    reqStyleCopy(data) {
      return stylesService.reqStyleCopy(data);
    },
    reqVendorAllList(data) {
      return stylesService.reqVendorAllList(data);
    },
    reqStylesExist(data) {
      return stylesService.reqStylesExist(data);
    },
    reqStylesFileDel(id) {
      return stylesService.reqStylesFileDel(id);
    },
    reqStylesFileDownload(data) {
      return stylesService.reqStylesFileDownload(data);
    },
    reqStylesFitsRequestListV2(id) {
      return stylesService.reqStylesFitsRequestListV2(id);
    },
    reqStylesSeasons(data) {
      return stylesService.reqStylesSeasons(data);
    },
    reqStylesSeasonsExist(data) {
      return stylesService.reqStylesSeasonsExist(data);
    },
  },
};
