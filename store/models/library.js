import services from '../loadServices';

const { libraryServics, stylesService } = services;
const initState = {};

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
    reqLibraryFabricsList(data) {
      return libraryServics.reqLibraryFabricsList(data);
    },
    reqMillList(data) {
      return libraryServics.reqMillList(data);
    },
    resUploadFileV2(data) {
      return stylesService.resUploadFileV2(data);
    },
    reqUserList(data) {
      return libraryServics.reqUserList(data);
    },
    resTypeOptions(data) {
      return libraryServics.resTypeOptions(data);
    },
    reqLibraryFabricsAdd(data) {
      return libraryServics.reqLibraryFabricsAdd(data);
    },
    reqDefaultTemplate(data) {
      return libraryServics.reqDefaultTemplate(data);
    },
    resLibraryType(data) {
      return libraryServics.resLibraryType(data);
    },
    resLibraryTypeAdd(data) {
      return libraryServics.resLibraryTypeAdd(data);
    },
    reqLibraryCodeExist(data) {
      return libraryServics.reqLibraryCodeExist(data);
    },
    reqLibraryFabricsInfo(id) {
      return libraryServics.reqLibraryFabricsInfo(id);
    },
    reqLibraryFabricsEdit(data) {
      return libraryServics.reqLibraryFabricsEdit(data);
    },
    reqLibraryGetArtworkApproval(data) {
      return libraryServics.reqLibraryGetArtworkApproval(data);
    },
    reqLibraryGetColorApproval(data) {
      return libraryServics.reqLibraryGetColorApproval(data);
    },
    reqFabricsRequestStatus(data) {
      return stylesService.reqFabricsRequestStatus(data);
    },
    reqLibraryFabricsRequest(data) {
      return libraryServics.reqLibraryFabricsRequest(data);
    },
    reqLibraryFabricsDel(id) {
      return libraryServics.reqLibraryFabricsDel(id);
    },
    reqStyleLibraryListMerge(data) {
      return libraryServics.reqStyleLibraryListMerge(data);
    },
    reqStylesComponetsTypeSubList(data) {
      return libraryServics.reqStylesComponetsTypeSubList(data);
    },
    reqStylesComponetsAddSubType(data) {
      return libraryServics.reqStylesComponetsAddSubType(data);
    },
    reqFabricsGetColorOrArtWork(data) {
      return libraryServics.reqFabricsGetColorOrArtWork(data);
    },
    reqFabricsGetMillAndVendor(data) {
      return libraryServics.reqFabricsGetMillAndVendor(data);
    },
    reqLibraryTrimsList(data) {
      return libraryServics.reqLibraryTrimsList(data);
    },
    reqLibraryTrimsAdd(data) {
      return libraryServics.reqLibraryTrimsAdd(data);
    },
    reqLibraryTrimsInfo(data) {
      return libraryServics.reqLibraryTrimsInfo(data);
    },
    reqTrimsLibraryGetColorApproval(id) {
      return libraryServics.reqTrimsLibraryGetColorApproval(id);
    },
    reqLibraryTrimsEdit(data) {
      return libraryServics.reqLibraryTrimsEdit(data);
    },
    reqLibraryTrimsDel(id) {
      return libraryServics.reqLibraryTrimsDel(id);
    },
    reqLibraryLabelsAdd(data) {
      return libraryServics.reqLibraryLabelsAdd(data);
    },
    reqLibraryLabelsInfo(data) {
      return libraryServics.reqLibraryLabelsInfo(data);
    },
    reqLibraryLabelsEdit(data) {
      return libraryServics.reqLibraryLabelsEdit(data);
    },
    reqLibraryLabelsList(data) {
      return libraryServics.reqLibraryLabelsList(data);
    },
    reqLibraryLabelsDel(id) {
      return libraryServics.reqLibraryLabelsDel(id);
    },
    reqLibraryMenuList(data) {
      return libraryServics.reqLibraryMenuList(data);
    },
    reqLibraryGetSupplier(data) {
      return libraryServics.reqLibraryGetSupplier(data);
    },
    reqTypeSubRemove(id) {
      return libraryServics.reqTypeSubRemove(id);
    },
    reqReplacementPicture(data) {
      return libraryServics.reqReplacementPicture(data);
    },
    reqGetKeyWord(data) {
      return libraryServics.reqGetKeyWord(data);
    },
    reqStylesSeasonsListDrop(data) {
      return libraryServics.reqStylesSeasonsListDrop(data);
    },
    reqStylesPalette(data) {
      return libraryServics.reqStylesPalette(data);
    },
    reqStylesPaletteUpdate(data) {
      return libraryServics.reqStylesPaletteUpdate(data);
    },
    reqStylesPaletteDel(id) {
      return libraryServics.reqStylesPaletteDel(id);
    },
    reqStylesColorList(data) {
      return libraryServics.reqStylesColorList(data);
    },
    reqStylesColorAdd(data) {
      return libraryServics.reqStylesColorAdd(data);
    },
    reqStylesColorDel(data) {
      return libraryServics.reqStylesColorDel(data);
    },
    reqStylesColorTag(data) {
      return libraryServics.reqStylesColorTag(data);
    },
    reqStylesColorInfo(data) {
      return libraryServics.reqStylesColorInfo(data);
    },
    reqStylesColorEdit(data) {
      return libraryServics.reqStylesColorEdit(data);
    },
    reqGetColorApproval(data) {
      return libraryServics.reqGetColorApproval(data);
    },
    reqGetColorStyleList(id) {
      return libraryServics.reqGetColorStyleList(id);
    },
    reqUpdatePalettes(data) {
      return libraryServics.reqUpdatePalettes(data);
    },
    reqStylesColorHavePalette(data) {
      return libraryServics.reqStylesColorHavePalette(data);
    },
  },
};
