import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import StylesDetailLayout from '../../../components/layout/stylesDetailLayout';
import StyleOverview from '../../../components/styles/styleOverview/index';
import BillOfMaterials from '../../../components/styles/billOfMaterials/index';
import Specifications from '../../../components/styles/specifications';
import CostsDelivery from '../../../components/styles/costsDelivery/index';
import Costing from '../../../components/styles/costing/index';
import VendorRequests from '../../../components/styles/vendorRequests/index';
import styles from '../../../styles/home.module.scss';
import { API_STATUS } from '../../../utils/statusCode';
import Layout from '../../../components/layout/styleLayoutNew';

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
  fitsTabs,
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
  reqCostingAddOrUpdateCostingMarginCalculatio,
  reqCostingCopy,
  reqCostingGetCostingColumnSetting,
  reqCostingUpdateCostingColumnSetting,
  reqCostingDel,
  reqCostingSort,
  reqCostingMaterialsSync,
  reqCostingMaterialsRevert,
  reqBomDetails,
  reqMillList,
  reqDefaultTemplate,
  resLibraryType,
  reqNotVendorUsers,
  reqLibraryGetSupplier,
  reqVendorRevert,
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

  // const [closeLayout,setCloseLayout]=useState(true)

  useEffect(() => {
    console.log(isWidth, '没有传过去');
  }, [isWidth]);

  return (
    <>
      <Layout isWidth={isWidth} setIsWidth={setIsWidth}></Layout>
      <StylesDetailLayout
        active={active}
        setActive={setActive}
        isWidth={isWidth}
        setCloseLayout={setIsWidth}
        info={info}
        setInfo={setInfo}
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
      >
        <div
          className={styles.styleOverview}
          onClick={() => {
            setNowActiveId();
            if (show) setShow(0);
          }}
        >
          {active === 'STYLE OVERVIEW' && (
            <StyleOverview
              info={info}
              setInfo={setInfo}
              tenantId={tenantId}
              userInfo={userInfo}
              styleTab={styleTab}
              specTabs={specTabs}
              isVendor={isVendor}
              getStylesInfo={getStylesInfo}
              specTabInfo={specTabInfo}
              updateState={updateState}
              reqSampleList={reqSampleList}
              reqFileList={reqFileList}
              reqStylesInfoEdit={reqStylesInfoEdit}
              resUploadFile={resUploadFile}
              resKeyToUrl={resKeyToUrl}
              reqAddActivityLog={reqAddActivityLog}
              resTypeOptions={resTypeOptions}
              reqSampleUpdate={reqSampleUpdate}
              reqSampleAdd={reqSampleAdd}
              reqTeamList={reqTeamList}
              reqVendorList={reqVendorList}
              reqFabricsAdd={reqFabricsAdd}
              reqFabricsList={reqFabricsList}
              reqFabricsStatus={reqFabricsStatus}
              reqColorWayAndArtwork={reqColorWayAndArtwork}
              reqFabricsRequest={reqFabricsRequest}
              reqFabricsLibrary={reqFabricsLibrary}
              reqFabricsRequestStatus={reqFabricsRequestStatus}
              reqColorInfo={reqColorInfo}
              reqArtworkInfo={reqArtworkInfo}
              reqEditFabricsLibrary={reqEditFabricsLibrary}
              reqAddFile={reqAddFile}
              reqArtworkList={reqArtworkList}
              reqArtworkMerge={reqArtworkMerge}
              reqPomGroupList={reqPomGroupList}
              reqAddPom={reqAddPom}
              reqPomList={reqPomList}
              reqSpecSheetList={reqSpecSheetList}
              reqSpecSheetInfo={reqSpecSheetInfo}
              reqSpecSheetRequest={reqSpecSheetRequest}
              reqAddSpecSheet={reqAddSpecSheet}
              reqSizeChart={reqSizeChart}
              reqUpdateSpecSheetStylePom={reqUpdateSpecSheetStylePom}
              reqPomLibraryList={reqPomLibraryList}
              reqSearchPom={reqSearchPom}
              reqEditStyleSpecSheetStylePom={reqEditStyleSpecSheetStylePom}
              resAddTypeOptions={resAddTypeOptions}
              reqBooksList={reqBooksList}
              reqTrimsLibrary={reqTrimsLibrary}
              reqFitsFolderList={reqFitsFolderList}
              reqFitsFolderFileList={reqFitsFolderFileList}
              reqFitsFolderAdd={reqFitsFolderAdd}
              reqAddFitsFolderFile={reqAddFitsFolderFile}
              fitsTabInfo={fitsTabInfo}
              isMainFabric={isMainFabric}
              styleInfoIsShow={styleInfoIsShow}
              reqAddFabricsRequestComment={reqAddFabricsRequestComment}
              reqFabricsRequestCommentList={reqFabricsRequestCommentList}
              reqSearchArtworkList={reqSearchArtworkList}
              reqSearchFlatsList={reqSearchFlatsList}
              reqSpecSheetImportPom={reqSpecSheetImportPom}
              reqFileUpdateEdit={reqFileUpdateEdit}
              reqSpecSheetImportGroup={reqSpecSheetImportGroup}
              reqFitsRequestStatusUpdate={reqFitsRequestStatusUpdate}
              reqSpecSheetSync={reqSpecSheetSync}
              reqSpecificationsSampleList={reqSpecificationsSampleList}
              reqSpecificationsImportGradeRule={
                reqSpecificationsImportGradeRule
              }
              reqSpecificationsList={reqSpecificationsList}
              reqSpecSheetCopyPom={reqSpecSheetCopyPom}
              reqSpecSheetDelPom={reqSpecSheetDelPom}
              reqSpecSheetDeActivatePom={reqSpecSheetDeActivatePom}
              reqSpecSheetTargetAccept={reqSpecSheetTargetAccept}
              nowActiveId={nowActiveId}
              setNowActiveId={setNowActiveId}
              userListAll={userListAll}
              reqSpecSheetPomSort={reqSpecSheetPomSort}
              reqSpecSheetSaveInLibrary={reqSpecSheetSaveInLibrary}
              setFitJump={setFitJump}
              fitJump={fitJump}
              reqAddFitsFile={reqAddFitsFile}
              reqFitsRequestFitApprovalUpdate={reqFitsRequestFitApprovalUpdate}
              reqFitsRequestShipmentTrackingUpdate={
                reqFitsRequestShipmentTrackingUpdate
              }
              setActive={setActive}
              reqSpecSheetUpdate={reqSpecSheetUpdate}
              reqFitsOption={reqFitsOption}
              reqUpdateFitsRequestSampleSize={reqUpdateFitsRequestSampleSize}
              reqUpdatePomTargetAndSampleSize={reqUpdatePomTargetAndSampleSize}
              reqFitsRequestUpdateDeliveryTime={
                reqFitsRequestUpdateDeliveryTime
              }
              reqSpecSheetUpdateNotes={reqSpecSheetUpdateNotes}
              specSampleRequest={specSampleRequest}
              reqSpecSheetUpdatePomTargetAndSampleSizeList={
                reqSpecSheetUpdatePomTargetAndSampleSizeList
              }
              reqFabricsRequestSampleStatus={reqFabricsRequestSampleStatus}
              resUploadFileV2={resUploadFileV2}
              reqFabricsRequestVendorEdit={reqFabricsRequestVendorEdit}
              reqBomList={reqBomList}
              reqDefaultStyleTemplate={reqDefaultStyleTemplate}
              reqBomUpdateApprovalStatus={reqBomUpdateApprovalStatus}
              reqBomCustomFieldValueUpdate={reqBomCustomFieldValueUpdate}
              reqBomGetSubRequestNum={reqBomGetSubRequestNum}
              reqBomSelectedMateriais={reqBomSelectedMateriais}
              reqBomCustomFieldValueBatchUpdate={
                reqBomCustomFieldValueBatchUpdate
              }
              reqFabricsRequestStageLog={reqFabricsRequestStageLog}
              reqBomGetBomColorways={reqBomGetBomColorways}
              reqBomGetFabricsSetting={reqBomGetFabricsSetting}
              reqBomGetTrimsSetting={reqBomGetTrimsSetting}
              reqBomGetLabelSetting={reqBomGetLabelSetting}
              reqBomCustomFieldValueDelete={reqBomCustomFieldValueDelete}
              reqBomFabricsRequestStageLog={reqBomFabricsRequestStageLog}
              reqBomGetColorwayFabricsRequestStageLog={
                reqBomGetColorwayFabricsRequestStageLog
              }
              reqFabricsFilterList={reqFabricsFilterList}
              reqBomExist={reqBomExist}
              reqStylesPacksGetInfo={reqStylesPacksGetInfo}
            />
          )}
          {active === 'BILL OF MATERIALS' && <BillOfMaterials />}
          {active === 'SPECIFICATIONS' && (
            <Specifications
              info={info}
              tenantId={tenantId}
              userInfo={userInfo}
              styleInfoIsShow={styleInfoIsShow}
              updateState={updateState}
              reqSpecificationsInfo={reqSpecificationsInfo}
              resUploadFile={resUploadFile}
              resKeyToUrl={resKeyToUrl}
              reqSearchPom={reqSearchPom}
              reqSizeChart={reqSizeChart}
              reqSpecificationsPomImport={reqSpecificationsPomImport}
              reqSpecificationsImportGradeRule={
                reqSpecificationsImportGradeRule
              }
              reqSpecificationsBlockInfo={reqSpecificationsBlockInfo}
              reqSpecificationsList={reqSpecificationsList}
              reqSpecificationsAddGrade={reqSpecificationsAddGrade}
              reqSpecificationsImportSizeChart={
                reqSpecificationsImportSizeChart
              }
              reqSpecificationsGradeRuleUpdate={
                reqSpecificationsGradeRuleUpdate
              }
              reqSpecificationsSampleList={reqSpecificationsSampleList}
              reqSpecificationsPomAdd={reqSpecificationsPomAdd}
              reqSpecificationsPomList={reqSpecificationsPomList}
              reqPomGroupList={reqPomGroupList}
              reqPomLibraryList={reqPomLibraryList}
              reqEditStyleSpecSheetStylePom={reqEditStyleSpecSheetStylePom}
              reqSpecificationsUpdateSampleSize={
                reqSpecificationsUpdateSampleSize
              }
              resUploadFileV2={resUploadFileV2}
              reqAddSpecificationsCustom={reqAddSpecificationsCustom}
              reqSpecificationsAddSizeChart={reqSpecificationsAddSizeChart}
              reqSpecificationsUpdateGrade={reqSpecificationsUpdateGrade}
              reqSpecSheetPomSort={reqSpecSheetPomSort}
              reqSpecSheetCopyPom={reqSpecSheetCopyPom}
              reqSpecSheetDelPom={reqSpecSheetDelPom}
              reqSpecSheetDeActivatePom={reqSpecSheetDeActivatePom}
              reqFitBlockSampleList={reqFitBlockSampleList}
              reqImportFitBlock={reqImportFitBlock}
              reqSpecificationsInit={reqSpecificationsInit}
              reqSpecificationsClearSize={reqSpecificationsClearSize}
              reqSpecificationsClearSampleSize={
                reqSpecificationsClearSampleSize
              }
              reqSpecSheetSaveInLibrary={reqSpecSheetSaveInLibrary}
              reqSpecSheetSaveInGradeRuleLibrary={
                reqSpecSheetSaveInGradeRuleLibrary
              }
              reqSpecSheetSaveFitBlockToLibrary={
                reqSpecSheetSaveFitBlockToLibrary
              }
              reqSpecSheetSizeChartActive={reqSpecSheetSizeChartActive}
              reqSpecSheetSize={reqSpecSheetSize}
              reqSpecSheetSaveLibraryStatus={reqSpecSheetSaveLibraryStatus}
              resTypeOptions={resTypeOptions}
              reqSpecSheetList={reqSpecSheetList}
              reqSpecSheetSync={reqSpecSheetSync}
              reqSpecSheetInfo={reqSpecSheetInfo}
              reqSpecSheetaddPomCheckName={reqSpecSheetaddPomCheckName}
              setActive={setActive}
              setFitJump={setFitJump}
              reqSpecSheetaddGradeCheckName={reqSpecSheetaddGradeCheckName}
              reqSpecSheetaddFitBlockCheckName={
                reqSpecSheetaddFitBlockCheckName
              }
              reqSpecSheetaddGroupCheckName={reqSpecSheetaddGroupCheckName}
              reqSpecSheetaddGroupCheckPom={reqSpecSheetaddGroupCheckPom}
              reqSampleList={reqSampleList}
            />
          )}
          {active === 'COSTS & DELIVERY' && <CostsDelivery />}
          {active === 'COSTING' && (
            <Costing
              info={info}
              userInfo={userInfo}
              isVendor={isVendor}
              reqBomList={reqBomList}
              reqBomGetBomColorways={reqBomGetBomColorways}
              reqDefaultStyleTemplate={reqDefaultStyleTemplate}
              reqBomCustomFieldValueUpdate={reqBomCustomFieldValueUpdate}
              reqBomCustomFieldValueDelete={reqBomCustomFieldValueDelete}
              resTypeOptions={resTypeOptions}
              reqCostingList={reqCostingList}
              reqCostingOptionsList={reqCostingOptionsList}
              reqCostingAdd={reqCostingAdd}
              reqPacksList={reqPacksList}
              reqCostingDetails={reqCostingDetails}
              reqCostingUpdate={reqCostingUpdate}
              reqCostingImportFromBom={reqCostingImportFromBom}
              reqCostingUpdateMaterialsCost={reqCostingUpdateMaterialsCost}
              reqCostingUpdateCostStatus={reqCostingUpdateCostStatus}
              reqCostingAddOrUpdateItem={reqCostingAddOrUpdateItem}
              reqCostingRemoveItem={reqCostingRemoveItem}
              reqCostingAddOrUpdateCostingMarginCalculatio={
                reqCostingAddOrUpdateCostingMarginCalculatio
              }
              reqCostingCopy={reqCostingCopy}
              reqCostingGetCostingColumnSetting={
                reqCostingGetCostingColumnSetting
              }
              reqCostingUpdateCostingColumnSetting={
                reqCostingUpdateCostingColumnSetting
              }
              reqCostingDel={reqCostingDel}
              reqCostingSort={reqCostingSort}
              reqCostingMaterialsSync={reqCostingMaterialsSync}
              reqCostingMaterialsRevert={reqCostingMaterialsRevert}
              reqBomDetails={reqBomDetails}
              reqMillList={reqMillList}
              reqUserList={reqNotVendorUsers}
              reqDefaultTemplate={reqDefaultTemplate}
              resLibraryType={resLibraryType}
              reqLibraryGetSupplier={reqLibraryGetSupplier}
              reqSpecSheetList={reqSpecSheetList}
              reqSampleList={reqSampleList}
              reqSpecSheetInfo={reqSpecSheetInfo}
              reqVendorRevert={reqVendorRevert}
            />
          )}
          {active === 'VENDOR REQUESTS' && (
            <VendorRequests
              info={info}
              tenantId={tenantId}
              userInfo={userInfo}
              reqStylesInfoEdit={reqStylesInfoEdit}
              reqAddActivityLog={reqAddActivityLog}
              resUploadFile={resUploadFile}
              resKeyToUrl={resKeyToUrl}
              resTypeOptions={resTypeOptions}
              styleInfoIsShow={styleInfoIsShow}
              updateState={updateState}
              reqTeamList={reqTeamList}
              resAddTypeOptions={resAddTypeOptions}
              reqBooksList={reqBooksList}
              reqFabricsList={reqFabricsList}
              reqColorInfo={reqColorInfo}
              reqArtworkInfo={reqArtworkInfo}
              reqFabricsStatus={reqFabricsStatus}
              reqFabricsRequestStatus={reqFabricsRequestStatus}
              reqFabricsRequestCommentList={reqFabricsRequestCommentList}
              reqAddFabricsRequestComment={reqAddFabricsRequestComment}
              reqEditFabricsLibrary={reqEditFabricsLibrary}
              reqFabricsRequestVendorEdit={reqFabricsRequestVendorEdit}
              reqColorWayAndArtwork={reqColorWayAndArtwork}
            />
          )}
        </div>
      </StylesDetailLayout>
    </>
  );
};

export default connect(
  ({ styles }) => ({ ...styles }),
  ({ styles }) => ({ ...styles })
)(Index);
