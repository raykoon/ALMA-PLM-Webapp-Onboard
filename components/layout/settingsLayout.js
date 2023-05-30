import react, { useState, useEffect } from 'react';
import styles from './layout.module.scss';
import Image from 'next/image';
import RightBoxCtn from './stylesDetailRightBox';
import { Switch, message } from 'antd';
import { API_STATUS } from '../../utils/statusCode';
import newIcon58 from '../../public/images/newIcon58.png';
import newIcon59 from '../../public/images/newIcon59.png';
import newIcon60 from '../../public/images/newIcon60.png';
import newIcon61 from '../../public/images/newIcon61.png';
import newIcon62 from '../../public/images/newIcon62.png';
import newIcon63 from '../../public/images/newIcon63.png';
import newIcon64 from '../../public/images/newIcon64.png';
import newIcon65 from '../../public/images/newIcon65.png';
import newIcon66 from '../../public/images/newIcon66.png';
import newIcon67 from '../../public/images/newIcon67.png';
import newIcon68 from '../../public/images/newIcon68.png';
import newIcon69 from '../../public/images/newIcon69.png';

import {
  icon_rightBtn1,
  icon_rightBtn2,
  icon_rightBtn3,
  icon_rightBtn4,
  icon_rightBtn5,
} from './svgPath';

import { useRouter } from 'next/router';

import { chatReadNum } from '../../services/marker/comMents';
const pathName = [''];
const icons = [
  icon_rightBtn1,
  icon_rightBtn2,
  icon_rightBtn3,
  icon_rightBtn4,
  icon_rightBtn5,
];
const iconsBtn = [
  { className: 'iconfont icon_rightBtn1', size: '22px' },
  { className: 'iconfont icon_rightBtn2', size: '19px' },
  { className: 'iconfont icon_rightBtn3', size: '18px' },
  { className: 'iconfont icon_rightBtn4', size: '20px' },
  // { className: 'iconfont icon_rightBtn5', size: '24px' },
];

export default function Index({
  isNew,
  children,
  info,
  userInfo,
  show=0,
}) {
  const Router = useRouter();
  const [activityReadNum, setActivityReadNum] = useState(null);
  const [chatReadLength, setChatReadLength] = useState(null);
  const [active,setActive]=useState(0)
  const csDemo = () => {
    return (
      <div className={styles.right}>
        <div className={styles.textBordus}>
          {abbreviation(userInfo?.userName)}
        </div>
        <div className={styles.bgText}>{userInfo?.userName}</div>
        <div className={styles.rightText}>{userInfo?.postGw}</div>
        {/* <div className={styles.textBordus}>BY</div>
        <div className={styles.bgText}>Becca Yang</div>
        <div className={styles.rightText}>Designer</div> */}
      </div>
    );
  };

  const abbreviation = (str) => {
    if (str) {
      const arr = str.split(' ');
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase();
      }
      return arr.join('');
    }
  };

  const activityLogReadNum = async (id) => {
    const res = await reqActivityLogReadNum(id);
    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
    setActivityReadNum(res?.data?.unReadNum);
  };

  const chatReadList = async (id) => {
    const res = await chatReadNum(id);
    if (res?.data?.code !== API_STATUS.SUCCESS)
      return message.info(`${res.data.msg}`);
    setChatReadLength(res?.data?.data?.unReadNum);
  };
  useEffect(() => {
    if (info?.styleId && !isNew) {
      // setInterval(function () {
      //   activityLogReadNum(info?.styleId);
      // }, 5000);
      console.log(info);
      activityLogReadNum(info?.styleId);
      chatReadList(info?.teamId);
    }
  });

  return (
    <div style={{
        minHeight:'100vh'
    }} className={styles.AliceFrockLayout}>
      <div className={styles.leftBox}>
        <div
          onClick={() => {
            Router.back(-1);
          }}
          className={styles.topBox}
          style={{
            marginBottom:'130px'
          }}
        >
          <Image width={20} height={20} src={newIcon59} />  Back
        </div>
        <div className={styles.content}>
          <div
            className={styles.itemBox}
            onClick={() => {
              setActive(0);
              Router.replace('/settings/profileInfo/')
            }}
            style={{
              margin:'40px 0'
            }}
          >
            {/* <Image width={24} height={24} src={newIcon64} />{' '} */}
            
            <i style={{fontSize:24}} className='iconfont icon_profile'></i>
            <span
              className={styles.text}
              style={{
                fontFamily: active === 0 && 'via_Futura_700',
              }}
            >
             PROFILE INFO
            </span>
          </div>
          <div
           style={{
            margin:'40px 0'
          }}
            className={styles.itemBox}
            onClick={() => {
              setActive(1);
              Router.replace('/settings/companyInfo/')
            }}
          >
            {/* <Image width={24} height={24} src={newIcon63} />{' '} */}
            <i style={{fontSize:24}} className='iconfont icon-a-icon5'></i>
            <span
              className={styles.text}
              style={{
                fontFamily: active === 1 && 'via_Futura_700',
              }}
            >
              COMPANY INFO
            </span>
          </div>
          <div
           style={{
            margin:'40px 0'
          }}
            className={styles.itemBox}
            onClick={() => {
              setActive(2);
              Router.replace('/settings/vendorConnect/')
            }}
          >
            {/* <Image width={24} height={24} src={newIcon62} />{' '} */}
            <i style={{fontSize:24}} className='iconfont icon_imgBoxIcon16'></i>
            
            <span
              className={styles.text}
              style={{
                fontFamily: active === 2 && 'via_Futura_700',
              }}
            >
             Vendor connect
            </span>
          </div>
          <div
           style={{
            margin:'40px 0'
          }}
            className={styles.itemBox}
            onClick={() => {
              setActive(3);
              Router.replace('/settings/subscriptions/')
              
      
            }}
          >
            <Image width={24} height={24} src={newIcon61} />{' '}
            <span
              className={styles.text}
              style={{
                fontFamily: active === 3 && 'via_Futura_700',
              }}
            >
              {' '}
              Billing / Subscriptions
            </span>
          </div>
          <div
           style={{
            margin:'40px 0'
          }}
            className={styles.itemBox}
            onClick={() => {
              setActive(4);
              Router.replace('/settings/permissions/')
            }}
          >
            {/* <Image width={24} height={24} src={newIcon61} />{' '}
             */}
             <i style={{fontSize:24}} className='iconfont icon_premission'></i>
             
            <span
              className={styles.text}
              style={{
                fontFamily: active === 4 && 'via_Futura_700',
              }}
            >
              {' '}
              Permissions
            </span>
          </div>
          <div
           style={{
            margin:'40px 0'
          }}
            className={styles.itemBox}
            onClick={() => {
              setActive(5);
              Router.replace('/settings/integration/')
            }}
          >
            {/* <Image width={24} height={24} src={newIcon61} />{' '} */}
            <i style={{fontSize:24}} className='iconfont icon_integrations'></i>
            
            <span
              className={styles.text}
              style={{
                fontFamily: active === 5 && 'via_Futura_700',
              }}
            >
              {' '}
              Integrations
              
            </span>
          </div>
        </div>
        <div className={styles.bottomContent}>
          
        </div>
      </div>
      <div style={{ flex: '1', maxHeight: '100vh', overflow: 'auto' }}>
        {children}
      </div>
      <div
        className={styles.rightBox}
        style={{ width: show ? '400px' : '86px' }}
      >
        {/* {show === 0 ? (
          <>
            {iconsBtn.map((icon, index) => (
              <div
                className={styles.itemIcon}
                onClick={() => {
                  setShow(index + 1);
                }}
              >
                <i
                  className={`${icon.className}`}
                  style={{
                    fontSize: `${icon.size}`,
                    color: 'rgba(0,0,0,.5)',
                    lineHeight: '24px',
                  }}
                ></i>
                {index === 0 && activityReadNum !== 0 && (
                  <span
                    className={
                      index === 2 ? styles.textIcon : styles.textIconBg
                    }
                  >
                    {activityReadNum}
                  </span>
                )}
                {index === 3 && chatReadLength !== 0 && (
                  <span
                    className={
                      index === 2 ? styles.textIcon : styles.textIconBg
                    }
                  >
                    {chatReadLength}
                  </span>
                )}
              </div>
            ))}
          </>
        ) : (
          <RightBoxCtn
            active={show}
            setShow={setShow}
            info={info}
            userInfo={userInfo}
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
            activityReadNum={activityReadNum}
            isNew={isNew}
            reqActivityLogRead={reqActivityLogRead}
            activityLogReadNum={activityLogReadNum}
          />
        )} */}
      </div>
    </div>
  );
}
