import { getAxios,postAxios } from '../../utils/axios';

const getStylesInfo = (id) => {
  return getAxios({
    url: `http://localhost:3001/stylesInfo/${id}`,
  });
};

const getStylesList = () => {
  return getAxios({
    url: 'http://localhost:3001/stylesList',
  });
};
  //查询产品列表
const reEcommShopifyProductList = (data) =>
  postAxios({
    url: '/ecomm/shopify/product/list',
    data: data,
  });
    //产品数量
const getProductNum = (data) =>
  postAxios({
    url: '/ecomm/shopify/product/getProductNum',
    data: data,
  });
      //产品导出
const productExport = (data) =>
  postAxios({
    url: '/ecomm/shopify/product/export',
    data: data,
  });
export default {
  getStylesInfo,
  getStylesList,
  reEcommShopifyProductList,
  getProductNum,
  productExport

};
