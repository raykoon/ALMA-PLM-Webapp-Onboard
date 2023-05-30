import services from '../loadServices';
const { mockServices } = services;
const initState = {
  type: 0,
  coverInfo: {
    type: 0,
    lineSheetTitle: '',
    secondaryTitle: '',
    contactName: '',
    phone: '',
    website: '',
    coverCanvas: '',
    imgPosition: { x: null, y: null },
    logoPosition: { x: null, y: null },
  },
  ids: [],
  infos: [],
  infosCanvas: [],
  newInfos: [],
  selectedRows:[]
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
    coverInfoState(state, payload) {
      return {
        ...state,
        coverInfo: {
          ...state.coverInfo,
          ...payload,
        },
      };
    },
    selectedRowsState (state, payload) {
      return {
        ...state,
        selectedRows: [
          ...payload,
        ],
      };
    }
  },
  effects: {
    async getStylesInfo(id) {
      return await mockServices.getStylesInfo(id);
    },
    reEcommShopifyProductList(data) {
      return mockServices.reEcommShopifyProductList(data);
    },
    getProductNum(data) {
      return mockServices.getProductNum(data);
    },
    productExport(data) {
      return mockServices.productExport(data);
    },
  },
};
