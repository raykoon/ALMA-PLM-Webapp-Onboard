import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import StylesDetailLayout from '../../../../components/layout/stylesDetailLayout';
import { API_STATUS, TAB_STATUS } from '../../../../utils/statusCode';
import Layout from '../../../../components/layout/styleLayoutNew';

const Index = ({
  updateState,
  reqStylesInfo,
  reqStylesInfoEdit,
  resUploadFile,
  resKeyToUrl,
  reqAddActivityLog,
  resTypeOptions,
  reqSampleList,
  reqFileList,
  reqCommentsList,
  reqTeamList,
  styleTab,
  clearState,
  specTabs,
  specTabInfo,
  fitsTabInfo,
  reqUserList,
  reqTeamStatusUpdate,
  reqAddTeamUser,
  reqActivityLogList,
  reqSampleUpdate,
  reqSampleAdd,
  reqVendorList,
  reqVendorStatusUpdate,
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
  isMainFabric,
  styleInfoIsShow,
  reqAddFabricsRequestComment,
  reqFabricsRequestCommentList,
  reqSpecificationsImportGradeRule,
  reqSpecificationsList,
  reqSpecificationsSampleList,
  reqSearchArtworkList,
  reqSearchFlatsList,
  reqSpecSheetImportPom,
  reqFileUpdateEdit,
  reqSpecSheetImportGroup,
  reqFitsRequestStatusUpdate,
  reqSpecSheetSync,
  reqActivityLogReadNum,
  reqActivityLogRead,
  reqSpecSheetCopyPom,
  reqSpecSheetDelPom,
  reqSpecSheetDeActivatePom,
  reqSpecSheetTargetAccept,
  reqTeamNum,
  reqFabricsRequestVendorEdit,
  reqSpecSheetPomSort,
  reqSpecSheetSaveInLibrary,
  reqAddFitsFile,
  reqFitsRequestFitApprovalUpdate,
  reqFitsRequestShipmentTrackingUpdate,
  reqSpecSheetUpdate,
  reqFitsOption,
  reqUpdateFitsRequestSampleSize,
  reqUpdatePomTargetAndSampleSize,
  reqFitsRequestUpdateDeliveryTime,
  reqSpecSheetUpdateNotes,
  specSampleRequest,
  reqSpecSheetUpdatePomTargetAndSampleSizeList,
  reqFabricsRequestSampleStatus,
  resUploadFileV2,
  reqBomList,
  reqDefaultStyleTemplate,
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
  reqStyleDrop,
  reqStyleDel,
  reqStyleCopy,
  reqVendorAllList,
  reqStylesFileDel,
  reqStylesFileDownload,
}) => {
  const [active, setActive] = useState('STYLE OVERVIEW');
  const [tenantId, setTenantId] = useState(null);
  const [info, setInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [show, setShow] = useState(0);
  const [loading, setLoading] = useState(false);
  const [nowActiveId, setNowActiveId] = useState(); //点击的某个ID
  const [userListAll, setUserListAll] = useState([]);
  const [fitJump, setFitJump] = useState(false);
  const [isVendor, setIsVendor] = useState(false);

  useEffect(() => {
    if (userInfo?.roles === 'style_vendor_role') {
      setIsVendor(true);
    } else {
      setIsVendor(false);
    }
  }, [userInfo]);

  const getUserList = async (data) => {
    let res = await reqTeamList({
      styleId: data.styleId,
      teamId: data.teamId,
    });
    if (res.code == 200) {
      setUserListAll(res.data);
    }
  };

  const getStylesInfo = async (id) => {
    const res = await reqStylesInfo(id);
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}  `);
    setInfo(res.data);
    getUserList(res.data);
  };

  useEffect(() => {
    const pathArr = window.location.pathname.split('/');
    const id = pathArr[pathArr.length - 2];
    getStylesInfo(id);
  }, [active]);

  useEffect(() => {
    setTenantId(localStorage.getItem('tenantId'));
    setUserInfo({
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      roles: localStorage.getItem('roles'),
      postGw: localStorage.getItem('postGw'),
      vendorName: localStorage.getItem('vendorName'),
    });

    return () => {
      clearState();
    };
  }, []);
  const [isWidth, setIsWidth] = useState(false);

  return (
    <>
      <Layout isWidth={isWidth} setIsWidth={setIsWidth}></Layout>
      <StylesDetailLayout
        active={active}
        setActive={setActive}
        info={info}
        setCloseLayout={setIsWidth}
        isWidth={isWidth}
        userInfo={userInfo}
        show={show}
        setShow={setShow}
        resKeyToUrl={resKeyToUrl}
        reqCommentsList={reqCommentsList}
        reqTeamList={reqTeamList}
        resTypeOptions={resTypeOptions}
        reqUserList={reqUserList}
        reqTeamStatusUpdate={reqTeamStatusUpdate}
        reqAddTeamUser={reqAddTeamUser}
        reqActivityLogList={reqActivityLogList}
        reqVendorList={reqVendorList}
        reqVendorStatusUpdate={reqVendorStatusUpdate}
        reqActivityLogReadNum={reqActivityLogReadNum}
        reqActivityLogRead={reqActivityLogRead}
        reqTeamNum={reqTeamNum}
        getUserList={getUserList}
        setFitJump={setFitJump}
      ></StylesDetailLayout>
    </>
  );
};

export default connect(
  ({ styles }) => ({ ...styles }),
  ({ styles }) => ({ ...styles })
)(Index);
