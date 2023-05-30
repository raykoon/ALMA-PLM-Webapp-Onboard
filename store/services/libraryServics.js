import { getAxios, postAxios } from '../../utils/axios';

//Fabric库列表
const reqLibraryFabricsList = (data) =>
  postAxios({
    url: '/styles/fabrics/list',
    data: data,
  });

//Fabric库新增
const reqLibraryFabricsAdd = (data) =>
  postAxios({
    url: '/styles/fabrics',
    data: data,
  });

//Fabric库删除
const reqLibraryFabricsDel = (id) =>
  postAxios({
    url: `/styles/fabrics/batch/${id}`,
    data: { idList: id },
  });

//Fabric库详情
const reqLibraryFabricsInfo = (id) =>
  postAxios({
    url: `/styles/fabrics/details/${id}`,
    data: { libraryFabricsId: id },
  });

//Fabric库修改
const reqLibraryFabricsEdit = (data) =>
  postAxios({
    url: `/styles/fabrics/update`,
    data: data,
  });

//Fabric库发请求
const reqLibraryFabricsRequest = (data) =>
  postAxios({
    url: `/styles/style/fabrics/request/add`,
    data: data,
  });

//Fabric库 Artwork
const reqLibraryGetArtworkApproval = (id) =>
  postAxios({
    url: `/styles/fabrics/getArtworkApproval/${id}`,
    data: { id: id },
  });

//Fabric库 Color
const reqLibraryGetColorApproval = (id) =>
  postAxios({
    url: `/styles/fabrics/getColorApproval/${id}`,
    data: { id: id },
  });

//Trim库列表
const reqLibraryTrimsList = (data) =>
  postAxios({
    url: '/styles/style/library/trims/lists',
    data: data,
  });

//Trim库新增
const reqLibraryTrimsAdd = (data) =>
  postAxios({
    url: '/styles/style/library/trims',
    data: data,
  });

//Trim库详情
const reqLibraryTrimsInfo = (id) =>
  getAxios({
    url: `/styles/style/library/trims/${id}`,
  });

//Trim库 color
const reqTrimsLibraryGetColorApproval = (id) =>
  postAxios({
    url: `/styles/style/library/trims/getColorApproval/${id}`,
    data: { id: id },
  });

//Trim库修改
const reqLibraryTrimsEdit = (data) =>
  postAxios({
    url: `/styles/style/library/trims/update`,
    data: data,
  });

//Trim库删除
const reqLibraryTrimsDel = (id) =>
  postAxios({
    url: `/styles/style/library/trims/batch/${id}`,
    data: { idList: id },
  });

//Fabric库列表
const reqLibraryLabelsList = (data) =>
  postAxios({
    url: '/styles/labels/list',
    data: data,
  });

//Label库新增
const reqLibraryLabelsAdd = (data) =>
  postAxios({
    url: '/styles/labels',
    data: data,
  });

//Label库详情
const reqLibraryLabelsInfo = (id) =>
  getAxios({
    url: `/styles/labels/${id}`,
  });

//Label库修改
const reqLibraryLabelsEdit = (data) =>
  postAxios({
    url: `/styles/labels/update`,
    data: data,
  });

//Label库删除
const reqLibraryLabelsDel = (id) =>
  postAxios({
    url: `/styles/labels/batch/${id}`,
    data: { idList: id },
  });

//库菜单
const reqLibraryMenuList = (data) =>
  postAxios({
    url: `/styles/menu/list`,
    data: data,
  });

//code查重
const reqLibraryCodeExist = (data) =>
  postAxios({
    url: '/styles/bom/getLibraryExist',
    data: data,
  });

//mill列表
const reqMillList = (data) =>
  postAxios({
    url: '/styles/mill/list',
    data: data,
  });

//用户列表
const reqUserList = (data) =>
  postAxios({
    url: '/styles/fabrics/getNotVendorUsers',
    data: data,
  });

// 下拉选择字典查询
const resTypeOptions = (type) => {
  const code = {
    coo: 'viavia_coo',
    fabricType: 'viavia_fabric',
  };

  return getAxios({
    url: `/upms/dict/data/type/${code[type]}`,
  });
};

// 下拉选择Type
const resLibraryType = (data) =>
  postAxios({
    url: '/styles/dict/data/list',
    data: data,
  });

// 新增选择
const resLibraryTypeAdd = (data) =>
  postAxios({
    url: '/styles/dict/data',
    data: data,
  });

//获取默认模版
const reqDefaultTemplate = (type) =>
  postAxios({
    url: `/styles/style_library/getDefaultStyleTemplate`,
    data: { templateType: type },
  });

//styles
const reqStyleLibraryListMerge = (data) =>
  postAxios({
    url: `/styles/style_library/listMerge`,
    data: data,
  });

//请求类型下拉
const reqStylesComponetsTypeSubList = (data) =>
  postAxios({
    url: `/styles/componets/type/sub/list`,
    data: data,
  });

//新增请求类型下拉
const reqStylesComponetsAddSubType = (data) =>
  postAxios({
    url: `/styles/componets/addSubType`,
    data: data,
  });

//ColorOrArtWork 下拉
const reqFabricsGetColorOrArtWork = (data) =>
  postAxios({
    url: `/styles/fabrics/getColorOrArtWork`,
    data: data,
  });

//MillAndVendor 下拉
const reqFabricsGetMillAndVendor = (data) =>
  postAxios({
    url: `/styles/fabrics/getMillAndVendor`,
    data: data,
  });

//Supplier 下拉
const reqLibraryGetSupplier = (data) =>
  postAxios({
    url: `/styles/fabrics/getSupplier`,
    data: data,
  });

//请求type删除子选项
const reqTypeSubRemove = (id) =>
  postAxios({
    url: `/styles/componets/type/sub/remove/${id}`,
    data: { id: id },
  });

//库sample photo上传
const reqReplacementPicture = (data) =>
  postAxios({
    url: `/styles/style/fabrics/request/replacement/picture`,
    data: data,
  });

//库搜
const reqGetKeyWord = (data) =>
  postAxios({
    url: '/styles/style_library/getKeyWordCount',
    data: data,
  });

//查询季节的 drop列表
const reqStylesSeasonsListDrop = (data) =>
  postAxios({
    url: '/styles/seasons/list/drop',
    data: data,
  });

//color 库

//新增 palette
const reqStylesPalette = (data) =>
  postAxios({
    url: '/styles/palette',
    data: data,
  });

//编辑 palette
const reqStylesPaletteUpdate = (data) =>
  postAxios({
    url: '/styles/palette',
    data: data,
  });

//删除 palette
const reqStylesPaletteDel = (id) =>
  postAxios({
    url: `/styles/palette/batch/${id}`,
    data: { idList: id },
  });

//color列表
const reqStylesColorList = (data) =>
  postAxios({
    url: '/styles/color/list',
    data: data,
  });

//color新增
const reqStylesColorAdd = (data) =>
  postAxios({
    url: '/styles/color',
    data: data,
  });

//color删除
const reqStylesColorDel = (data) =>
  postAxios({
    url: `/styles/color/batchRemove`,
    data: data,
  });

//color 标签
const reqStylesColorTag = (data) =>
  postAxios({
    url: `/styles/color/palette/tag`,
    data: data,
  });

//color 详情
const reqStylesColorInfo = (id) =>
  getAxios({
    url: `/styles/color/new/${id}`,
  });

//color 修改
const reqStylesColorEdit = (data) =>
  postAxios({
    url: `/styles/color/update`,
    data: data,
  });

//color approval
const reqGetColorApproval = (id) =>
  postAxios({
    url: `/styles/color/getColorApproval/${id}`,
    data: { id: id },
  });

//color Styles
const reqGetColorStyleList = (id) =>
  postAxios({
    url: `/styles/style_library/listMerge/ca/new`,
    data: { libraryId: id },
  });

//color move
const reqUpdatePalettes = (data) =>
  postAxios({
    url: `/styles/color/updatePalettes`,
    data: data,
  });

//color 所在色板
const reqStylesColorHavePalette = (id) =>
  getAxios({
    url: `/styles/color/palette/${id}`,
  });

export default {
  reqLibraryFabricsList,
  reqMillList,
  reqUserList,
  resTypeOptions,
  reqLibraryFabricsAdd,
  reqDefaultTemplate,
  resLibraryType,
  resLibraryTypeAdd,
  reqLibraryCodeExist,
  reqLibraryFabricsInfo,
  reqLibraryFabricsEdit,
  reqLibraryGetArtworkApproval,
  reqLibraryGetColorApproval,
  reqLibraryFabricsRequest,
  reqLibraryFabricsDel,
  reqStyleLibraryListMerge,
  reqStylesComponetsTypeSubList,
  reqStylesComponetsAddSubType,
  reqFabricsGetColorOrArtWork,
  reqFabricsGetMillAndVendor,
  reqLibraryTrimsList,
  reqLibraryTrimsAdd,
  reqLibraryTrimsInfo,
  reqTrimsLibraryGetColorApproval,
  reqLibraryTrimsEdit,
  reqLibraryTrimsDel,
  reqLibraryLabelsAdd,
  reqLibraryLabelsInfo,
  reqLibraryLabelsEdit,
  reqLibraryLabelsList,
  reqLibraryLabelsDel,
  reqLibraryMenuList,
  reqLibraryGetSupplier,
  reqTypeSubRemove,
  reqReplacementPicture,
  reqGetKeyWord,
  reqStylesSeasonsListDrop,
  reqStylesPalette,
  reqStylesPaletteUpdate,
  reqStylesPaletteDel,
  reqStylesColorList,
  reqStylesColorAdd,
  reqStylesColorDel,
  reqStylesColorTag,
  reqStylesColorInfo,
  reqStylesColorEdit,
  reqGetColorApproval,
  reqGetColorStyleList,
  reqUpdatePalettes,
  reqStylesColorHavePalette,
};
