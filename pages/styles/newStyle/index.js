import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import { API_STATUS } from '../../../utils/statusCode';
import Layout from '../../../components/layout/styleLayoutNew';

const Index = ({
  styleTab,
  updateState,
  resUploadFile,
  resKeyToUrl,
  reqDefaultStyleTemplate,
  resTypeOptions,
  reqStylesInfoAdd,
  reqBooksList,
  resAddTypeOptions,
  styleInfoIsShow,
  reqTeamList,
  resUploadFileV2,
  reqVendorAllList,
}) => {
  const [active, setActive] = useState(0);
  const [tenantId, setTenantId] = useState(null);
  const [info, setInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUserInfo({
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      roles: localStorage.getItem('roles'),
      postGw: localStorage.getItem('postGw'),
      vendorName: localStorage.getItem('vendorName'),
    });
    setTenantId(localStorage.getItem('tenantId'));
    getNewDefaultStyleTemplate();
    setOpen(true);
  }, []);

  const getNewDefaultStyleTemplate = async () => {
    const res = await reqDefaultStyleTemplate('Base');
    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
    setInfo({ template: res.data });
  };
  const [isWidth, setIsWidth] = useState(false);

  return (
    <>
      <Layout isWidth={isWidth} setIsWidth={setIsWidth}></Layout>
    </>
  );
};

export default connect(
  ({ styles }) => ({ ...styles }),
  ({ styles }) => ({ ...styles })
)(Index);
