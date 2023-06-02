import react, { useState, useEffect } from 'react';
import styles from './layout.module.scss';
import stylesNew from './newStylesDetail.module.scss';

import Image from 'next/image';
import RightBoxCtn from './stylesDetailRightBox';
import { Switch, message,Select } from 'antd';
import { API_STATUS } from '../../utils/statusCode';
import newIcon58 from '../../public/images/newIcon58.png';
import newIcon59 from '../../public/images/arrow-left.png';
import newIcon60 from '../../public/images/newIcon60.png';
import newIcon61 from '../../public/images/newIcon61.png';
import newIcon62 from '../../public/images/newIcon62.png';
import newIcon63 from '../../public/images/newIcon63.png';
import newIcon111 from '../../public/images/newIcon111.png';
import newIcon64_2 from '../../public/images/newIcon64-2.png';
import image_jt from '../../public/images/style/style-jt2.svg';
import Layout from './layout';


import {packsSelectNewPack} from '../../services/materials'

const {Option} = Select
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
  {
    name:'TASKS', 
    className:'iconfont icon_techIcon12', 
    size:"24px", 
    order:'1'
  },
  {
    name:'CALENDAR', 
    className:'iconfont icon-a-Icon3', 
    size:"24px", 
    order:'2'
  },
  {
    name:'ACTIVITY', 
    className:'iconfont icon_techIcon12', 
    size:"24px", 
    order:'3'
  },
  {
    name:'INTERNAL CHAT', 
    className:'iconfont icon_techIcon15', 
    size:"24px", 
    order:'4'
  },
  {
    name:'MESSAGES', 
    className:'iconfont icon_techIcon13', 
    size:"24px", 
    order:'5'
  },
  {
    name:'PERMISSIONS', 
    className:'iconfont icon_techIcon14', 
    size:"24px", 
    order:'6'
  },
];

export default function Index({
  isNew,
  children,
  active,
  setActive,
  info,
  userInfo,
  show,
  setShow,
  resKeyToUrl,
  reqCommentsList,
  reqTeamList,
  resTypeOptions,
  reqUserList,
  reqTeamStatusUpdate,
  reqAddTeamUser,
  reqActivityLogList,
  reqVendorList,
  reqVendorStatusUpdate,
  reqActivityLogReadNum,
  reqActivityLogRead,
  reqTeamNum,
  getUserList,
  setFitJump,
  isWidth,
  setCloseLayout,
  now='Style folder'
}) {
  const Router = useRouter();
  const [activityReadNum, setActivityReadNum] = useState(null);
  const [chatReadLength, setChatReadLength] = useState(null);
  const [teamNum, setTeamNum] = useState(null);
  const [isVendor, setIsVendor] = useState(false);
  useEffect(() => {
    if (userInfo?.roles === 'style_vendor_role') {
      setIsVendor(true);
    }
  }, [userInfo]);
 useEffect(()=>{
       console.log(info,'这里是啥')
 },[info])
  const csDemo = () => {
    return (
      <div className={styles.right}>
        <div className={styles.textBordus}>
          {abbreviation(userInfo?.userName)}
        </div>
        <div className={styles.bgText}>{userInfo?.userName}</div>
        <div className={styles.rightText}>
          {userInfo?.vendorName || userInfo?.postGw}
        </div>
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
  const getTeamNum = async (id) => {
    const res = await reqTeamNum(id);
    console.log('reqTeamNum', res);
    if (res?.code !== API_STATUS.SUCCESS)
      return message.info(`${res.data.msg}`);

    setTeamNum(res.data);
    if (res.data === 0) {
      setTeamTips(true);
    } else {
      setTeamTips(false);
    }
  };

  const [teamTips, setTeamTips] = useState(false);

  useEffect(() => {
    if (info?.styleId && !isNew) {
      activityLogReadNum(info?.styleId);
      chatReadList(info?.teamId);
    }
  }, []);

  useEffect(() => {
     console.log(info,'看看这里是否有变化！')
    if (info?.teamId && !isNew) {
      getTeamNum(info?.teamId);
    }
  }, [info]);

  const [roles, setRoles] = useState();
  useEffect(() => {
    setRoles(localStorage?.getItem('roles')?.includes('vendor'));
  }, []);


let nameList=[
   {name:'Style folder',icon:'iconfont icon_sqLayout1'},
   {name:'TechPack',icon:'iconfont icon_sqLayout2'},
   {name:'Costing',icon:'iconfont icon_sqLayout9'},
   {name:'Orders',icon:'iconfont icon_sqLayout3'},
   {name:'Ecomm',icon:'iconfont icon_sqLayout4'},
]

const [islittle,setIslittle]=useState(true)

//  const [isLayout,setIsLayout]=useState(false)

  return (
    <div  className={styles.AliceFrockLayout}>
      <div onClick={()=>{
        setIslittle(false)
      }} style={{
      width:islittle?'64px':'',
      padding:islittle?'40px 8px 16px':'',
      left:isWidth?'270px':'64px'
    }} className={styles.leftBox}>
        {
          !islittle && <div onClick={(e)=>{
            e.stopPropagation()
            setIslittle(true)
          }}  className={styles.newBack}>
           <i style={{fontSize:'20px',color:'#000',
   
          }} className='iconfont icon_sqLayout'></i>
          </div>
        }
        <div
          onClick={(e) => {
            e.stopPropagation()
            Router.push('/styles');
          }}
          className={styles.topBox}
          style={{
            marginLeft:islittle?'10px':''
          }}
        >
         <Image width={24} height={24} src={newIcon59} />
         {
           !islittle && <span style={{
            textDecoration:'underline'
          }}>Seasons & Styles</span>
         }
        </div>
        {
          !islittle && <div className={styles.newAstr}>
          {/* <></> */}
          {/* newIcon111 */}
          <Select
          bordered={false}
   defaultValue="1"
   style={{
     width: '100%',
   }}
>
    <Option value='1'>
        <div style={{
            display:'flex',
            alignItems:'center'
        }}>
           <div style={{
              position:'relative',
              top:'6px'
           }}>
           <Image width={24} height={24} src={newIcon111} />
           </div>
           <div>ASTR (NA)</div>
        </div>
    </Option>
 </Select>
     </div>
        }
        {
          islittle && <div className={styles.newAstr1}>
            <Image width={30} height={30} src={newIcon111} />
          </div>
        }
        {
          !islittle && <div className={styles.btnNew}>
          Release to vendor
          </div>
        }
        {
          !islittle ? <div className={styles.imgTextNew}>
          <div className={styles.nameNew}>{info?.name || ''}</div>
          <div className={styles.textNew}>{info?.description || ''}</div>
          <div className={styles.imgNew}>
                <img style={{width:'100%'}} src={info?.styleImage?.imagePath} />
          </div>
     </div>:
     <div className={styles.imgNew1}>
         <img style={{width:'100%'}} src={info?.styleImage?.imagePath} />
     </div>
        }

        <div className={styles.newContentList}>
            {
              nameList?.map((res,index)=>{
                return <div
                 style={{
                    background:now==res.name?'rgb(240,255,175)':''
                 }}
                onClick={()=>{
                  console.log(res.name)
                    if(res.name=='Costing'){
                      Router.push(`/styles/styleInfo/costing/${info?.styleId}`);
                    }else if(res.name=='Style folder'){
                      Router.push(`/styles/styleInfo/design/${info?.styleId}`);

                    }else if(res.name=='TechPack'){
                     
                      packsSelectNewPack({
                        styleId:info?.styleId
                      }).then(res=>{
                        console.log(res)
                        if(res.data.code==200){
                          // window.open(
                          //   `/techPack/?styleId=${res.data.data.styleId}&packsId=${res.data.data.packsId}`,
                          //   '_blank'
                          // );
                          window.open(
                            `/techPack/${res.data.data.styleId}/${res.data.data.packsId}`,
                            '_blank'
                          );
                        }
                      })
                    }
                }} className={styles.newItem}>
                  <i style={{fontSize:'24px'}} className={res.icon}></i>
                  {
                    !islittle && <span>{res.name}</span>
                  }
                </div>
              })
            }
        </div>
    

      </div>
      <div onClick={()=>{
        setCloseLayout(false)
        setIslittle(true)
      }} style={{ flex: '1', maxHeight: '100vh', overflow: 'auto' }}>
        {children}
      </div>
      <div
      onClick={()=>{
        setCloseLayout(false)
        setIslittle(true)

      }}
        className={styles.rightBox}
        style={{ width: show ? '400px' : '48px' }}
      >
        {show === 0 ? (
          <>
            {iconsBtn.map((icon, index) => {
              if (icon.name != 'INTERNAL CHAT' || !roles) {
                return (
                  <div
                    className={`${styles.itemIcon} ${
                      icon.name === 'PERMISSIONS' && styles.teamBtn
                    }`}
                    onClick={() => {
                      setShow(icon.name);
                    }}
                  >
                    <i
                      className={`${icon.className}`}
                      style={{
                        fontSize: `${icon.size}`,
                        color: 'rgba(0,0,0,.5)',
                        lineHeight: '24px',
                        position:'relative'
                      }}
                    ></i>
                    {/* {index === 0 && activityReadNum !== 0 && (
                      <span
                        className={
                          index === 2 ? styles.textIcon : styles.textIconBg
                        }
                      >
                        {activityReadNum || 0}
                      </span>
                    )} */}
                     {/* {index === 0  && (
                      <span
                         style={{
                            width:'24px',
                            height:'24px',
                            color:activityReadNum? '#CD0303' :'#000',
                            background:activityReadNum ? '#FEE4E2':'#E5E5E5',
                            lineHeight:'24px',
                            textAlign:'center',
                            fontSize:'12px',
                            fontWeight:'500',
                            borderRadius:'2px',
                            marginLeft:'10px',
                            // opacity:activityReadNum===0
                         }}
                      >
                        {activityReadNum || 0}
                      </span>
                    )} */}
                    {/* {index === 2 && teamNum !== 0 && (
                      <span
                        className={
                          index === 2 ? styles.textIcon : styles.textIconBg
                        }
                      >
                        {teamNum + 1}
                      </span>
                    )} */}
                    {/* {index === 2 && (
                      <span
                         style={{
                            width:'24px',
                            height:'24px',
                            color:'#000',
                            background:'#E5E5E5',
                            lineHeight:'24px',
                            textAlign:'center',
                            fontSize:'12px',
                            fontWeight:'500',
                            borderRadius:'2px',
                            marginLeft:'10px'
                         }}
                      >
                        {teamNum+1 || 0}
                      </span>
                    )} */}
                    {/* {index === 2 && teamNum === 0 && (
                      <span
                        style={{
                          marginLeft: 7,
                          width: 8,
                          height: 8,
                          display: 'flex',
                          background: '#FF0000',
                          borderRadius: '100%',
                        }}
                      ></span>
                    )} */}
                    {icon.name === 'PERMISSIONS'  && teamTips && (
                      <div
                        className={styles.teamTips}
                        style={{
                          padding: '0 20px',
                          top: 130,
                          right: 101,
                          width: 281,
                          height: 64,
                          alignItems: 'center',
                          background: '#FFFFFF',
                          borderRadius: '4px',
                          zIndex: 99,
                          position: 'fixed',
                          filter:
                            'drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.2))',
                        }}
                      >
                        <div
                          style={{
                            top: 22,
                            right: '-16px',
                            width: 20,
                            height: 20,
                            position: 'absolute',
                          }}
                        >
                          <Image src={image_jt} />
                        </div>
                        <span>Invite Collaborators</span>
                        <div
                          style={{
                            marginLeft: 10,
                            width: 71,
                            height: 44,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#000000',
                            borderRadius: '2px',
                          }}
                        >
                          <span
                            style={{
                              color: '#ffffff',
                            }}
                            onClick={() => {
                              setTeamTips(false);
                            }}
                          >
                            Got it!
                          </span>
                        </div>
                      </div>
                    )}
                    {/* {index === 3 && chatReadLength !== 0 && (
                      <span
                        className={
                          index === 2 ? styles.textIcon : styles.textIconBg
                        }
                      >
                        {chatReadLength}
                      </span>
                    )} */}
                    {icon.name === 'MESSAGES'  && (
                      <span
                         style={{
                            width:'8px',
                            height:'8px',
                            // color:'#000',
                            background:'red',
                            lineHeight:'24px',
                            textAlign:'center',
                            fontSize:'12px',
                            fontWeight:'500',
                            borderRadius:'2px',
                            marginLeft:'10px',
                            borderRadius:'10px',
                            position:'absolute',
                            margin:'0px 0px 15px 20px'
                            // top:'0px',
                            // right:'0px',
                            // opacity:activityReadNum===0
                         }}
                      >
                        {/* 0 */}
                      </span>
                    )}
                    {icon.name === 'INTERNAL CHAT'  && (
                      <span
                         style={{
                            width:'8px',
                            height:'8px',
                            background:'red',
                            lineHeight:'24px',
                            textAlign:'center',
                            fontSize:'12px',
                            fontWeight:'500',
                            borderRadius:'2px',
                            marginLeft:'10px',
                            borderRadius:'10px',
                            position:'absolute',
                            margin:'0px 0px 15px 20px'
                         }}
                      >
                        {/* {chatReadLength || 0} */}
                      </span>
                    )}
                  </div>
                );
              }
            })}
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
            teamNum={teamNum}
            getTeamNum={getTeamNum}
            getUserListCopy={getUserList}
          />
        )}
      </div>
    </div>
  );
}
