import React, { useState, useEffect, useContext, useRef } from 'react';
import { Select, message, Spin, Skeleton, Input, Form, Mentions, Checkbox, Collapse, Button, Radio } from 'antd';
const { Panel } = Collapse;
import { ExclamationCircleOutlined, DeleteOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './stylesDetail.module.scss';
import NextImage from 'next/image';
import newIcon65 from '../../public/images/newIcon65.png';
import newIcon66 from '../../public/images/newIcon66.png';
import newIcon67 from '../../public/images/newIcon67.png';
import newIcon68 from '../../public/images/newIcon68.png';
import newIcon69 from '../../public/images/newIcon69.png';
import backIcon from '../../public/images/backIcon.png';
import rightBoxIcon1 from '../../public/images/rightBoxIcon1.png';
import rightBoxIcon2 from '../../public/images/rightBoxIcon2.png';
import rightBoxIcon3 from '../../public/images/rightBoxIcon3.png';
import rightBoxIcon4 from '../../public/images/rightBoxIcon4.png';
import rightBoxIcon5 from '../../public/images/rightBoxIcon5.png';
import rightBoxDemo from '../../public/images/rightBoxDemo.png';
import rightBoxIcon from '../../public/images/rightBoxIcon.png';
import borderLineIcon from '../../public/images/borderLineIcon.png';
import IconButton from '../../components/styles/common/IconButton';

import commentsImg1 from '../../public/images/commentsImg1.png';
import commentsImg2 from '../../public/images/commentsImg2.png';
import commentsIcon1 from '../../public/images/commentsIcon1.png';
import commentsIcon2 from '../../public/images/commentsIcon2.png';
import statusIcon1 from '../../public/images/statusIcon1.png';
import statusIcon2 from '../../public/images/statusIcon2.png';
import teamVendorIcon1 from '../../public/images/teamVendorIcon1.png';
import duplicatesImg from '../../public/images/duplicatesImg.png';
import duplicatesBtn from '../../public/images/duplicatesBtn.png';
import { postAxios, getAxios } from '../../utils/axios';
import { API_STATUS } from '../../utils/statusCode';
import useWebSocket from '../../utils/websocket';
import { context } from '../../pages/_app';
import TimeMethod from '../../utils/timeMethod';
import title1 from '../../public/images/internal/title1.png'

import {
  chatDataList,
  chatMsgRead,
  chatReadNum,
  taskList,
  editTask,
  delTask,
  addTask,
  getClosingTime,
  closingTime,
  taskNum,
  userLists
} from '../../services/marker/comMents';
const { Option } = Select;
const { TextArea } = Input;
import {
  icon_rightMenu1,
  icon_rightMenu2,
  icon_rightMenu3,
  icon_rightMenu4,
  icon_rightMenu5,
} from './svgPath';
import Item from 'antd/lib/list/Item';
import { rotate } from 'mathjs';

const ImgShow = ({ data, src = '', resKeyToUrl }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const keyToImage = async (jsonStr) => {
    setLoading(true);
    const objData = JSON.parse(jsonStr);
    if (objData?.imagePath) {
      const res = await resKeyToUrl(objData.imagePath);
      if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
      setUrl(res?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!src) {
      keyToImage(data);
    } else {
      setUrl(src);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <Skeleton.Image active={true} loading={loading} />
      ) : (
        <>
          <img
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            src={url}
          />
        </>
      )}
    </>
  );
};

const ChatSend = ({ info, themeMode, setChartList, teamList, scrollToBottom }) => {
  const [value, setValue] = useState('');
  const [teamListCopy, setTeamListCopy] = useState([]);
  useEffect(() => {
    console.log(teamList);
    let add = [];
    teamList?.forEach((res) => {
      if (res.userName != localStorage.getItem('userName')) {
        add.push({
          ...res,
          value: res.userName + ' ',
          label: res.userName + ' ',
        });
      }
    });
    setTeamListCopy(add);
  }, [teamList]);
  let add = [
    {
      'Quote (FOB)': { type: 1, value: 7 },
      'Full FOB': { type: 1, value: 6 },
      Landed: { type: 1, value: '' },
      Actual: { type: 2, value: 6, list: [1, 2, 3, 4, 5, 6] },
      name: 'Greige',
    },
    {
      'Quote (FOB)': { type: 1, value: 5 },
      'Full FOB': { type: 1, value: 4 },
      Landed: { type: 1, value: '' },
      Actual: { type: 2, value: 'b', list: ['a', 'b', 'c'] },
      name: 'Solid color',
    },
  ];

  return (
    <div style={{ paddingTop: '10px', borderTop: '1px solid #ccc', position: 'fixed', bottom: '15px', background: '#fff' }}>
      {/* <TextArea
        rows={4}
        placeholder="Type a message..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        style={{
          paddingBottom: '40px',
        }}
      /> */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px 0px 10px', }}>
        <Mentions
          placeholder="Message"
          style={{
            width: '85%',
            height: '36px',
            textAlign: 'justify',
            fontSize: '16px'
          }}
          value={value}
          rows={6}
          onChange={(e) => {
            setValue(e);
          }}
          onSelect={(e) => {
            console.log(e);
            let add = value.slice(0, value.length - 1);
            setValue(add + ` @${e.label} `);
          }}
        // options={teamListCopy}
        >
          {teamListCopy?.map((item, index) => {
            return (
              <Mentions.Option key={index} value={item.value}>
                {item.label}
              </Mentions.Option>
            );
          })}
        </Mentions>
        <div
          onClick={() => {
            scrollToBottom()
            console.log('ws', themeMode, info);
            if (value.match(/^\s+$/) || !value) {
              setValue();
              message.info('Cannot send an empty message');
              return false;
            }

            let options = JSON.stringify({
              messageType: 'ToTeam',
              messageFromUser: localStorage.getItem('userId'),
              messageToUser: info?.teamId,
              messageUserName: localStorage.getItem('userName'),
              message: value,
              timestamp: new Date().getTime(),
              messageTagUser: 0,
              messageMedia: 'text',
              action: 'onlineChat',
            });
            themeMode.themeType?.ws?.sendMessage(options).then((res) => {
              console.log(options);
              setValue();

              //   if(sessionStorage.getItem('ChatList')){
              //     let copy=JSON.parse(sessionStorage.getItem('ChatList'))
              //     copy.push(JSON.parse(options))
              //     sessionStorage.setItem('ChatList',JSON.stringify(copy))
              // }else{
              //   let copy=[]
              //   copy.push(JSON.parse(options))
              //   sessionStorage.setItem('ChatList',JSON.stringify(copy))
              // }
              console.log(themeMode.themeType);
            });
          }}
          style={{
            width: '44px',
            height: '44px',
            display: 'inline-block',
            // position: 'absolute',
            // right: '10px',
            // bottom: '45px',
          }}
        >
          <IconButton
            buttonStyle={{
              padding: '0 10px',
              height: 36,
              color: '#fff',
              fontSize: '16px',
              background: 'rgba(0, 0, 0, 1)',
              borderRadius: '4px',
              fontWeight: '500',
            }}
            icon="icon_send1"
            iconStyle={{
              transform: 'rotate(45deg)',
              color: '#fff',
              margin: '0px 0px 3px 3px',
              fontSize: 20,
            }}
          // name={`send`}
          />
        </div>
      </div>

      <div
        style={{
          padding: '0px 15px 0px 15px',
          color: '#737373',
          fontSize: '14px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '20px',
          textAlign: 'justify',
        }}
      >
        <ExclamationCircleOutlined /> External contacts, such as vendors and agents don’t have access to this
        chat.
      </div>
    </div>
  );
};

export default function Index({
  active,
  setShow,
  info,
  userInfo,
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
  isNew,
  reqActivityLogRead,
  activityLogReadNum,
  getTeamNum,
  getUserListCopy,
}) {
  const themeMode = useContext(context);

  // useEffect(() => {
  //   if (!isNew) {
  //     console.log(themeMode?.themeType?.list);
  //   }
  // }, [themeMode?.themeType?.list]);

  const rightIconsBtn = [
    {
      name: 'TASKS',
      className: 'iconfont icon_techIcon12',
      icon: icon_rightMenu5,
      size: '40px',
      info: 'related styles',
      order: '1'
    },
    {
      name: 'CALENDAR',
      className: 'iconfont icon_techIcon12',
      size: "24px", order: '2'
    },
    {
      name: 'ACTIVITY',
      className: 'iconfont icon_techIcon12',
      icon: icon_rightMenu1,
      size: '34px',
      info: 'new activity',
      order: '3'
    },
    {
      name: 'INTERNAL CHAT',
      className: 'iconfont icon_techIcon15',
      icon: icon_rightMenu4,
      size: '32px',
      info: 'new message',
      order: '4'
    },
    {
      name: 'MESSAGES',
      className: 'iconfont icon_techIcon13',
      icon: icon_rightMenu2,
      size: '29px',
      info: 'new message',
      order: '5'
    },
    {
      name: 'PERMISSIONS',
      className: 'iconfont icon_techIcon14',
      icon: icon_rightMenu3,
      size: '31px',
      info: 'people',
      order: '6'
    },
  ];

  const icons = [newIcon65, newIcon66, newIcon67, newIcon68, newIcon69];
  const iconsBtn = [
    { className: 'iconfont icon_rightBtn1', size: '22px' },
    { className: 'iconfont icon_rightBtn2', size: '19px' },
    { className: 'iconfont icon_rightBtn3', size: '18px' },
    { className: 'iconfont icon_rightBtn4', size: '20px' },
    { className: 'iconfont icon_rightBtn5', size: '24px' },
  ];

  const data = [
    {
      now: true,
      type: 2,
      color: '#000',
      title: 'Pure Denim (PD-000-IT)',
      info: 'acknowledged the sourcing request SOUR-F-Mai-091',
      time: 'Just now',
    },
    {
      type: 1,
      color: '#F19100',
      title: 'Andrea Salvucci',
      info: 'issued PO for this style to Pure Denim (PD-000-IT)',
      time: '20min ago',
    },
    {
      type: 2,
      color: '#000',
      title: 'Pure Denim (PD-000-IT)',
      info: 'acknowledged the sourcing request SOUR-F-Mai-091',
      time: 'Just now',
    },
    {
      type: 1,
      color: '#7651F0',
      title: 'Becca Yang',
      info: 'You updated the style name to “The Alice Frock”',
      time: '30min ago',
    },
    {
      type: 1,
      color: '#00A3FF',
      title: 'Lindsay Fiegleman',
      info: 'updated the development stage to SMS',
      time: '45min ago',
    },
    {
      type: 1,
      color: '#7651F0',
      title: 'Becca Yang',
      info: 'You added a photo to the sketch & design tab',
      time: '1h',
      img: rightBoxDemo,
    },
    {
      type: 1,
      color: '#7651F0',
      title: 'Becca Yang',
      info: 'You updated the style name to “The Alice Frock”',
      time: '30min ago',
    },
    {
      type: 1,
      color: '#00A3FF',
      title: 'Lindsay Fiegleman',
      info: 'updated the development stage to SMS',
      time: '45min ago',
    },
    {
      type: 2,
      color: '#000',
      title: 'Pure Denim (PD-000-IT)',
      info: 'acknowledged the sourcing request SOUR-F-Mai-091',
      time: 'Just now',
    },
    {
      type: 1,
      color: '#7651F0',
      title: 'Becca Yang',
      info: 'You added a photo to the sketch & design tab',
      time: '1h',
      img: rightBoxDemo,
    },
  ];

  const data2 = [
    {
      users: [
        { name: 'Ann Wu', color: '#00C673' },
        { name: 'Lindsay Fiegleman', color: '#CC00FF' },
      ],
      info: {
        user: { name: 'Ann Wu', color: '#00C673' },
        txt: 'Hi! I think these buttons could work for the top. @LaurenMukalian could you replace it with a more recent sketch?',
        time: '3 days ago',
      },
      time: 'Today',
      now: true,
      img: commentsImg1,
      fileName: 'Pearl_buttons',
      fileType: 'jpg',
    },
    {
      color: '#F19100',
      title: 'Andrea Salvucci',
      info: {
        user: { name: 'Lindsay Fiegleman', color: '#CC00FF' },
        txt: 'issued PO for this style to Pure Denim (PD-000-IT)',
        time: '5 days ago',
      },
      time: '20min ago',
      img: commentsImg2,
      fileName: 'Moodboard',
      fileType: 'pdf',
    },
  ];

  const data3 = [
    {
      name: 'Lindsay Fiegleman',
      color: '#00A3FF',
      post: 'Product Development',
    },
    {
      name: 'Becca Yang',
      color: '#7651F0',
      post: 'Design',
    },
    {
      name: 'Lindsay Fiegleman',
      color: '#00A3FF',
      post: 'Product Development',
    },
    {
      name: 'Lauren Mukalian',
      color: '#CC00FF',
      post: 'Product Development',
    },
    {
      name: 'Ann Wu',
      color: '#00C673',
      post: 'Tech Design',
    },
    {
      name: 'Andrea Salvucci',
      color: '#F19100',
      post: 'Production',
    },
  ];

  const data3_2 = [
    { name: 'Pure Denim (PD-000-IT)', color: '#000000', post: 'Vendor' },
  ];

  const [showActive, setShowActive] = useState(0);

  const [boxShow, setBoxShow] = useState({
    style: false,
    editor: false,
    viewer: false,
  });

  const [form] = Form.useForm();
  const [comments, setComments] = useState([]);
  const [team, setTeam] = useState([]);
  const [vendor, setVendor] = useState([]);
  const [options, setOptions] = useState([]);
  const [userList, setUserList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [serachValue, setSearchValue] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);
  const [userIds, setUserIds] = useState([]);
  const [status, setStatus] = useState('3');
  const [fold, setFold] = useState(true);
  const [activity, setActivity] = useState([]);
  const [meberType, setMeberType] = useState('');
  const [loading, setLoading] = useState(false);
  const [activityReadNum, setActivityReadNum] = useState(0);

  const abbreviation = (str) => {
    if (str) {
      const arr = str.split(' ');
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase();
      }
      return arr.join('');
    }
  };

  const getCommentList = async () => {
    const res = await reqCommentsList({
      id: info.styleId,
      data: {
        pageNum: 1,
        pageSize: 10,
      },
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
    console.log('res', res);
    setComments(res.data);
  };
  const [CopyUserList, setCopyUserList] = useState([]);

  const [CopyUserListText, setCopyUserListText] = useState([]);
  const [allTeamList, setAllTeamList] = useState([]);
  const getTeamList = async () => {
    let res;
    res = await reqTeamList({
      styleId: info.styleId,
      teamId: info.teamId,
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);
    const styleTeamlist = res.data;
    //   console.log(styleTeamlist)
    //   let textShow=[]
    //   let textTj=[]
    //   setAllTeamList(styleTeamlist)
    //   styleTeamlist?.forEach(reds=>{
    //     if(reds.userName != localStorage.getItem('userName')){
    //      textTj.push({
    //        ...reds,
    //        value:reds.userName,
    //        label:reds.userName
    //      })
    //     }
    //     textShow.push(`@${reds.userName}`)
    //  })
    //  console.log(textShow)
    //  setCopyUserList(textTj)
    //  setCopyUserListText(textShow)

    const vendorList = styleTeamlist.filter(
      (user) => user?.postCode === 'Vendor'
    );
    const teamList = styleTeamlist.filter(
      (user) => user?.postCode !== 'Vendor'
    );
    console.log(teamList, vendorList, styleTeamlist, '看看');
    setVendor(vendorList);
    setTeam(teamList);

    res = await reqUserList({ pageNum: 1, pageSize: 999999 });
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);
    const styleUserList = res.data.items;

    const newList = [];
    styleUserList.forEach((item) => {
      if (styleTeamlist.every((obj) => item.id !== obj.userId)) {
        newList.push(item);
      }
    });
    setUserList(newList);
  };

  const getOption = async () => {
    const res = await resTypeOptions('teamStatus');
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);
    setOptions(res.data);
  };

  const getUserList = async (num, name = false, add = false) => {
    console.log('name', name);

    const data = {
      pageNum: num || pageNum,
      pageSize: 999999,
    };

    if (name === '' || name) {
      data.userName = name;
    } else {
      data.userName = serachValue;
    }

    const res = await reqUserList(data);
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);

    if (res.data.total < 10) {
      setStop(true);
    } else {
      setStop(false);
    }
    if (add) {
      const newUserList = [...userList, ...res.data.items];
      setUserList(newUserList);
    } else {
      setUserList(res.data.items);
    }
  };

  const getVendorList = async () => {
    const res = await reqVendorList(info.styleId);

    if (res.code !== API_STATUS.SUCCESS)
      return message.info(` ${res.msg}1111   `);

    setVendor(res.data);
  };
  function getdate(time) {
    var now = new Date(time),
      y = now.getFullYear(),
      m = ('0' + (now.getMonth() + 1)).slice(-2),
      d = ('0' + now.getDate()).slice(-2);
    return `${m}-${d}-${y.toString().substr(2, 4)}`;
  }

  //将毫秒的时间转换成美式英语的时间格式,eg:3rd May 2018
  function formatDate(millinSeconds) {
    var date = new Date(millinSeconds);
    var monthArr = new Array(
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Spt',
      'Oct',
      'Nov',
      'Dec'
    );
    var suffix = new Array('st', 'nd', 'rd', 'th');

    var year = date.getFullYear(); //年
    var month = monthArr[date.getMonth()]; //月
    var ddate = date.getDate(); //日
    let hours = date.getHours(); //转换成时
    let minutes = date.getMinutes(); //转换成分

    let add = hours > 12 ? 'pm' : 'am';
    console.log(hours, minutes);

    if (ddate % 10 < 1 || ddate % 10 > 3) {
      ddate = ddate + suffix[3];
    } else if (ddate % 10 == 1) {
      ddate = ddate + suffix[0];
    } else if (ddate % 10 == 2) {
      ddate = ddate + suffix[1];
    } else {
      ddate = ddate;
    }
    return (
      `${hours}:${minutes < 10 ? `0${minutes}` : minutes}${add}` +
      ' on ' +
      '\n' +
      month +
      ' ' +
      ddate +
      ', ' +
      year
    );
  }

  function formatDate1(millinSeconds) {
    var date = new Date(millinSeconds);
    var monthArr = new Array(
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Spt',
      'Oct',
      'Nov',
      'Dec'
    );
    var suffix = new Array('st', 'nd', 'rd', 'th');

    var year = date.getFullYear(); //年
    var month = monthArr[date.getMonth()]; //月
    var ddate = date.getDate(); //日
    let hours = date.getHours(); //转换成时
    let minutes = date.getMinutes(); //转换成分

    let add = hours > 12 ? 'pm' : 'am';
    // console.log(hours, minutes);

    if (ddate % 10 < 1 || ddate % 10 > 3) {
      ddate = ddate + suffix[3];
    } else if (ddate % 10 == 1) {
      ddate = ddate + suffix[0];
    } else if (ddate % 10 == 2) {
      ddate = ddate + suffix[1];
    } else {
      ddate = ddate;
    }
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}${add}`;
  }

  useEffect(() => {
    console.log(formatDate(new Date().getTime()));
  }, []);

  const wait = (ms) => {
    let timeoutId;
    const p = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, ms);
    });
    return [p, timeoutId];
  };

  const onSearchUser = async (value) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeout(null);
    const [timeout, id] = wait(300);
    setTimeoutId(id);
    await timeout;
    setSearchValue(value);
    setPageNum(1);
    getUserList(1, value);
  };

  const onPopupScrollUser = async (e) => {
    if (stop) return;
    e.persist();
    const { target } = e;
    if (
      Math.ceil(target.scrollTop + target.offsetHeight) === target.scrollHeight
    ) {
      setPageNum(pageNum + 1);

      const res = await reqUserList({
        pageNum: pageNum + 1,
        pageSize: 10,
        email: value,
      });

      if (res.code !== API_STATUS.SUCCESS)
        return message.info(` ${res.msg}   `);
    }
  };

  const onClearUser = async () => {
    setSearchValue('');
    setPageNum(1);
    getUserList(1, '');
  };

  const onChangeUser = async (_, option) => {
    const ids = [];
    option.forEach((item) => ids.push(item.key));
    setUserIds(ids);
  };

  const onChangeTeamStatus = async (value, userId) => {
    const res = await reqTeamStatusUpdate({
      status: value,
      styleId: info.styleId,
      teamId: info.teamId,
      userId: userId,
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);
  };

  const onChangeVendorStatus = async (value, vendorId) => {
    const res = await reqVendorStatusUpdate({
      styleStatus: value,
      styleId: info.styleId,
      vendorId: vendorId,
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);
  };

  const dayAgo = (agoTime) => {
    if (!agoTime) return;
    const nowTime = new Date().valueOf();
    const agoDay = Math.floor((nowTime - agoTime) / (1000 * 3600 * 24));
    return agoDay < 1 ? 'Today' : `${agoDay} ago day`;
  };

  const getTimeUntilNow = (agoTime) => {
    const nowTime = new Date().valueOf();

    const days = Math.floor((nowTime - agoTime) / (1000 * 3600 * 24));
    if (days > 0) {
      return days < 2 ? 'Yesterday' : days + 'day age';
    }
    const hours = Math.floor(
      ((nowTime - agoTime) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    if (hours > 0) {
      return hours + 'h ago';
    }
    const minutes = Math.floor(
      ((nowTime - agoTime) % (1000 * 60 * 60)) / (1000 * 60)
    );
    if (minutes > 0) {
      return minutes + 'min age';
    }
    return 'Just now';
  };

  const [inviteLoading, setInviteLoading] = useState(false);
  const userAddTeam = async () => {
    if (userIds?.length === 0) return;
    if (inviteLoading) return;
    const teamUsers = [];

    userIds.forEach((id) => {
      teamUsers.push({
        status: status,
        userId: id,
      });
    });

    setInviteLoading(true);
    const res = await reqAddTeamUser({
      styleId: info.styleId,
      teamId: info.teamId,
      teamUsers: teamUsers,
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);
    setUserIds([]);
    form.resetFields();
    getUserListCopy(info);
    getTeamList();
    getTeamNum(info?.teamId);
    setInviteLoading(false);
  };

  const getActivityList = async () => {
    setLoading(true);
    const res = await reqActivityLogList({
      meberType: meberType,
      styleId: info.styleId,
    });
    setLoading(false);
    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
    setActivity(res?.data);
  };

  useEffect(() => {
    if (!isNew) getActivityList();
  }, [meberType]);

  useEffect(() => {
    if (!isNew) {
      const noReadArr = activity.filter((item) => item.isRead === '0');
      setActivityReadNum(noReadArr.length || 0);
    }
  }, [activity]);

  const jsonToContent = (jsonStr) => {
    const objData = JSON.parse(jsonStr);
    const myId = localStorage.getItem('userId');
    //${objData?.userInfo?.userName ? objData?.userInfo?.userName : ''}
    const user = objData?.userInfo?.userId === myId ? 'You ' : null;
    const content = user
      ? user + objData.msg
      : objData.msg.slice(0, 1).toUpperCase() + objData.msg.slice(1);

    return content;
  };

  const jsonToNote = (jsonStr) => {
    const objData = JSON.parse(jsonStr);
    if (objData?.note) {
      return objData?.note;
    } else {
      return '';
    }
  };

  const activityLogRead = async (id) => {
    const res = await reqActivityLogRead({
      activityLogId: id,
      styleId: info.styleId,
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
    activityLogReadNum(info.styleId);
    const newActivity = [];
    console.log('newActivity', newActivity);
    activity.forEach((item) => {
      if (item.id === id) {
        newActivity.push({ ...item, isRead: '1' });
      } else {
        newActivity.push({ ...item });
      }
    });

    setActivity(newActivity);
  };

  const [wsUrl, setWsUrl] = useState(null);
  // const ws = useWebSocket(wsUrl);
  const [chartList, setChartList] = useState([]);

  const [CopychartList, setCopyChartList] = useState([]);
  const [CopychartListFilter, setCopyChartListFilter] = useState([]);


  const [taskListAll, setTaskList] = useState([]);
  const [taskCompletedList, setCompletedList] = useState([]);

  const [chatIdUpdata, setChatIdUpdata] = useState([]);
  const [lastCloseTime, setLastCloseTime] = useState([]);

  const [allTaskNumber, setAllTaskNumber] = useState(0)
  const [myTaskNumber, setMyTaskNumber] = useState(0)


  useEffect(async () => {
    console.log(active)
    if (!isNew) {
      setShowActive(active);
      if (active === 'ACTIVITY') {
        getActivityList();
      }
      if (active === 'MESSAGES') {
        getCommentList();
      }
      if (active === 'PERMISSIONS') {
        getOption();
        getTeamList();
      }
      if (active === 'INTERNAL CHAT') {
        // getTeamList();
        // console.log(ws);
        // sessionStorage.removeItem('ChatList')
        fourFnc();
        getClosingTimeData()
      }
      if (active === 'TASKS') {
        getTaskList();
        getCompletedList();
        getTaskNum()
        getUserLists()
      }
    }
  }, [active]);

  // 获取上一次关闭时间节点
  const getClosingTimeData = () => {
    console.log(info)
    getClosingTime({
      teamId: info?.teamId,
    }).then((res) => {
      if (res?.data?.code == 200) {
        console.log(res.data.data)
        setChatIdUpdata(res.data.data.chatId)
        setLastCloseTime(res.data.data.closingTime)
      }
    });
  }
  // 获取未完成task列表
  const getTaskList = async () => {
    let res;
    res = await reqTeamList({
      styleId: info.styleId,
      teamId: info.teamId,
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg} `);
    taskList({
      styleId: info?.styleId,
      completed: 0
    }).then((res) => {
      if (res?.data?.code == 200) {
        setTaskList(res?.data?.data);
      }
    });
  }

  // 获取已完成task列表
  const getCompletedList = async () => {
    let res;
    res = await reqTeamList({
      styleId: info.styleId,
      teamId: info.teamId,
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg} `);
    taskList({
      styleId: info?.styleId,
      completed: 1
    }).then((res) => {
      if (res?.data?.code == 200) {
        setCompletedList(res?.data?.data);
      }
    });
  }

  //获取task列表统计数
  const getTaskNum = async () => {
    let res;
    res = await reqTeamList({
      styleId: info.styleId,
      teamId: info.teamId,
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg} `);
    taskNum({
      styleId: info?.styleId,
    }).then((res) => {
      if (res?.data?.code == 200) {
        setAllTaskNumber(res.data.data.allNum)
        setMyTaskNumber(res.data.data.myNum)
      }
    });
  }

  const fourFnc = async () => {
    let res;
    res = await reqTeamList({
      styleId: info.styleId,
      teamId: info.teamId,
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);
    const styleTeamlist = res.data;
    let textShow = [];
    let textTj = [];
    setAllTeamList(styleTeamlist);
    styleTeamlist?.forEach((reds) => {
      if (reds.userName != localStorage.getItem('userName')) {
        textTj.push({
          ...reds,
          value: reds.userName,
          label: reds.userName,
        });
      }
      textShow.push(` @${reds.userName} `);
    });
    setCopyUserList(textTj);
    setCopyUserListText(textShow);
    const vendorList = styleTeamlist.filter(
      (user) => user?.postCode === 'Vendor'
    );
    const teamList = styleTeamlist.filter(
      (user) => user?.postCode !== 'Vendor'
    );
    console.log(teamList);
    setVendor(vendorList);
    setTeam(teamList);
    chatDataList({
      teamId: info?.teamId,
    }).then((res) => {
      console.log(res);
      if (res?.data?.code == 200) {
        setChartList(res?.data?.data);
        let add1 = 0;
        let add3 = 0;
        res?.data?.data?.forEach((red) => {
          if (
            red.isRead != '1' &&
            red.msg?.includes(` @${localStorage.getItem('userName')} `)
          ) {
            add1 += 1;
          }
          // if(red.isRead != '1'){
          //   add3+=1
          // }
        });
        // setChatReadLength(add3)
        console.log(textShow);
        setChatTjLength(add1);
        if (textShow?.length > 0) {
          let add = JSON.parse(JSON.stringify(res?.data?.data));
          console.log('走这里了吗', add, textShow);
          add.forEach((res) => {
            textShow.forEach((red) => {
              if (res.msg?.includes(red)) {
                console.log(res);
                let tag = `<span style="
                        font-weight:700
                     ">${res.msg.substring(
                  res.msg.indexOf(red),
                  res.msg.indexOf(red) + red.length
                )}</span>`;
                let a = res.msg.substring(
                  res.msg.indexOf(red),
                  res.msg.indexOf(red) + red.length
                );
                console.log(tag);
                let csText = res.msg.replace(new RegExp(a, 'g'), tag);
                console.log(csText);
                res.msg = csText;
              }
            });
          });
          setCopyChartList(add);
          setCopyChartListFilter(add);
        }
      }
    });
  };
  const [hcxxList, setHcxxList] = useState([]);

  useEffect(() => {
    if (hcxxList?.length > 0) {
      let add1 = JSON.parse(JSON.stringify(CopychartList));
      add1.push(hcxxList[0]);
      let add = Number(chatTjLength);
      let add3 = Number(chatReadLength);
      // add1?.forEach((red) => {

      // });
      if (
        hcxxList[0]?.isRead != '1' &&
        hcxxList[0]?.message?.includes(`@${localStorage.getItem('userName')}`)
      ) {
        add += 1;
      }
      if (hcxxList[0]?.messageUserName != localStorage.getItem('userName')) {
        add3 += 1;
      }
      CopyUserListText.forEach((red) => {
        if (add1[0].message?.includes(red)) {
          let tag = `<span style="
          font-weight:700
       ">${add1[0].message.substring(
            add1[0].message.indexOf(red),
            add1[0].message.indexOf(red) + red.length
          )}</span>`;
          let a = add1[0].message.substring(
            add1[0].message.indexOf(red),
            add1[0].message.indexOf(red) + red.length
          );
          console.log(tag);
          let csText = add1[0].message.replace(new RegExp(a, 'g'), tag);
          console.log(csText);
          add1[0].message = csText;
        }
      });
      setChatTjLength(add);
      setChatReadLength(add3);
      let flag = 1
      add1.forEach((item) => {
        if (flag && item.timestamp > lastCloseTime) {
          item.showNewStyle = true
          flag = 0
        }
      })
      setCopyChartList(add1);
      setCopyChartListFilter(add1);
      setHcxxList([]);
    }
  }, [hcxxList]);

  const [copyTeam1, setCopyTeam1] = useState();
  const [copyTeam2, setCopyTeam2] = useState();

  useEffect(() => {
    if (copyTeam1) {
      let add = JSON.parse(JSON.stringify(team));
      add.forEach((res, index) => {
        if (res?.userId == copyTeam1?.offlineUser) {
          add[index].online = false;
          add[index].lastDate = copyTeam1?.messageTime;
        }
      });
      setTeam(add);
    }
  }, [copyTeam1]);

  useEffect(() => {
    if (copyTeam2) {
      let add = JSON.parse(JSON.stringify(team));
      add.forEach((res, index) => {
        if (res?.userId == copyTeam2?.offlineUser) {
          add[index].online = true;
        }
      });
      setTeam(add);
      setTeam(add);
    }
  }, [copyTeam2]);

  useEffect(() => {
    if (!isNew) {
      console.log(themeMode.themeType.ws);
      themeMode.themeType.ws.webSocket.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data, '是否接到消息');
        themeMode.themeType.ws.heartCheck(true);
        if (data?.messageType) {
          if (data?.messageType == 'ToTeam') {
            console.log(data, '对话1');
            let add = {
              ...data,
              isRead:
                data?.messageUserName == localStorage.getItem('userName')
                  ? '1'
                  : '0',
            };
            setHcxxList([add]);
          }
          if (data?.messageType == 'offlineNotice') {
            setCopyTeam1(data);
          }
          if (data?.messageType == 'onlineNotice') {
            setCopyTeam2(data);
          }
        }
      };
    }
    return () => {
      themeMode.themeType.ws.webSocket.current.onmessage = () => {
        themeMode.themeType.ws.heartCheck(true);
      };
    };
  }, []);

  useEffect(() => { }, []);

  const [chatReadLength, setChatReadLength] = useState(0);
  const [chatTjLength, setChatTjLength] = useState(0); //未读的提及数量

  const getChatTextList = (id) => {
    chatReadNum(id).then((res) => {
      console.log(res);
      if (res?.data?.code == 200) {
        setChatReadLength(res?.data?.data?.unReadNum);
      }
    });
  };

  const newMentions = (num) => {
    if (num) {
      setCopyChartList(CopychartList.filter((item) => item.msg.includes(`@${localStorage.getItem('userName')}`)))
    }
  }

  const newMessage = () => {
    setCopyChartList(CopychartListFilter)
  }
  
  // task复选框选择
  const checked = (e, item) => {
    if (e.target.checked) {
      editTask({
        completed: 1,
        taskId: item.taskId,
      }).then((res) => {
        if (res?.data?.code == 200) {
          getTaskList()
          getCompletedList()
        }
      })
    } else {
      editTask({
        completed: 0,
        taskId: item.taskId,
      }).then((res) => {
        if (res?.data?.code == 200) {
          getTaskList()
          getCompletedList()
        }
      })
    }
  }
  // task删除接口
  const taskDel = (data) => {
    delTask({
      id: data.taskId,
    }).then((res) => {
      getCompletedList()
      getTaskList()
      // console.log(res)
    });

  }


  //task新增接口
  const taskAdd = (data) => {
    addTask({
      description: inputData,
      styleId: info.styleId
    }).then((res) => {
      getTaskNum()
      console.log(res)
    });
  }

  const [allUserList, setuserList] = useState([])
  const getUserLists = async () => {
    let res;
    res = await reqTeamList({
      styleId: info.styleId,
      teamId: info.teamId,
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg} `);
    userLists({
      styleId: info.styleId,
      teamId: info.teamId,
    }).then((res) => {
      if (res?.data?.code == 200) {
        setuserList(res.data.data)
      }
    });
  }

  const [taskModal, setTaskModal] = useState('false')
  const [inputData, setInputData] = useState()

  const showAddTask = () => {
    setTaskModal(!taskModal)
  }
  //新增task enter
  const addEnter = (item) => {
    taskAdd()
    getTaskList()
    setTaskModal('false')
    setInputData('')

  }
  //失焦事件
  const inputBlur = () => {
    setTaskModal('false')
    setInputData('')
  }

  useEffect(() => {
    if (info) {
      getChatTextList(info?.teamId);
    }
  }, [info]);

  const [isActive, setIsActive] = useState();
  const internalContentRef = useRef(null)

  // 滚动到底部
  const scrollToBottom = () => {
    if (internalContentRef) {
      const current = internalContentRef.current
      current.scrollTop = current.scrollHeight
    }
  }
  {
    (() => {
      if (active === 'INTERNAL CHAT') {
        setTimeout(() => {
          scrollToBottom()
        }, 300);
      }
    })()
  }

  //关闭页面更新时间节点
  const upDataclosingTime = () => {
    closingTime({
      chatId: chatIdUpdata,
      closingTime: new Date().getTime()
    }).then((res) => {
      if (res?.data?.code == 200) {
        console.log(res.data)
      }
    });
  }

  const [isShowEditTask, setIsShowEditTask] = useState(false)
  const [isShowEditTaskInd, setIsShowEditTaskInd] = useState()

  const editTaskApply = (index) => {
    setIsShowEditTaskInd(index)
    setIsShowEditTask(!isShowEditTask)
  }

  const editTaskSub = (userInfo,item) => {
    editTask({
      assignUserId: userInfo.userId,
      taskId: item.taskId,
    }).then((res) => {
      if (res?.data?.code == 200) {
        console.log(res.data)
        editTaskApply()
        getTaskList()
      }
    });
  }


  return (
    <div className={styles.rightBoxCtn}>
      <div className={styles.titleBox}>
        {rightIconsBtn.map((item, index) => (
          <>
            {active === item.name && (
              <>
                <div className={styles.nextImage}>
                  <div
                    className={styles.backBtn}
                    onClick={() => {
                      upDataclosingTime()
                      setShow(0);
                    }}
                  >
                    {/* <span>Hide</span> */}
                    <NextImage width={12} height={10} src={backIcon} />
                  </div>
                </div>
                <div className={styles.title}>
                  <div>
                    {/* {item.icon} */}
                    {/* <i
                      className={`${item.className}`}
                      style={{
                        fontSize: `${item.size}`,
                        color: '#000000',
                        lineHeight: '40px',
                      }}
                    ></i> */}
                    <NextImage width={40} height={40} src={title1} />
                    <h3 className={styles.titleColumn}><span>{item.name}</span><span>{item.name}</span></h3>
                  </div>
                </div>
                <div className={styles.info}>
                  {(active != 'INTERNAL CHAT' || chatTjLength != 0) && (
                    <span
                      className={
                        index === 5 || index === 4
                          ? styles.textIcon
                          : styles.textIconBg
                      }
                      style={{
                        display:
                          active === 'ACTIVITY' && activityReadNum === 0 && 'none',
                      }}
                    >
                      {active === 'ACTIVITY' && activityReadNum}
                      {active === 'MESSAGES' && comments.total}
                      {active === 'PERMISSIONS' && team.length + vendor.length}
                      {active === 'INTERNAL CHAT' && chatTjLength >= 99 ? 99 : chatTjLength}
                      {active === 'TASKS' && myTaskNumber > 0 ? myTaskNumber : ''}
                    </span>
                  )}

                  <p
                    style={{
                      color:
                        active === 'ACTIVITY' &&
                        activityReadNum === 0 &&
                        'rgba(0,0,0,.5',
                      fontStyle:
                        active === 'ACTIVITY' && activityReadNum === 0 && 'italic',
                    }}
                  >
                    {active === 'ACTIVITY' && activityReadNum !== 0 && item.info}
                    {active === 'ACTIVITY' && activityReadNum == 0 && 'no new activity'}
                    {active === 'MESSAGES' && item.info}
                    {active === 'PERMISSIONS' && item.info}
                    {active === 'INTERNAL CHAT' && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            cursor: 'pointer',
                            fontWeight: chatReadLength == 0 ? '' : '600',
                            color: chatTjLength == 0 ? 'rgba(0, 0, 0, 0.5)' : '',
                          }}
                          onClick={() => newMentions(chatTjLength)}
                        >
                          {active === 'INTERNAL CHAT' && chatTjLength != 0
                            ? 'New mentions'
                            : 'No new mention'}
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '30px',
                          }}
                        >
                          <div>
                            {chatReadLength != 0 && (
                              <span
                                className={styles.textIconBg}
                                style={{
                                  // display: active === 1 && activityReadNum === 0 && 'none',
                                  minWidth: '15px',
                                  display: 'inline-block',
                                  marginRight: '10px',
                                  background: '#CCFF00',
                                  color: '#000',
                                }}
                              >
                                {chatReadLength >= 99 ? 99 : chatReadLength}
                              </span>
                            )}
                          </div>
                          <div
                            style={{
                              cursor: 'pointer',
                              fontWeight: chatReadLength == 0 ? '' : '600',
                              color: chatReadLength == 0 ? 'rgba(0, 0, 0, 0.5)' : '',
                            }}
                            onClick={() => newMessage(chatTjLength)}
                          >
                            {chatReadLength == 0
                              ? 'No new message'
                              : 'New messages'}
                          </div>
                        </div>
                      </div>
                    )}
                    {active === 'TASKS' && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <div className={styles.titleTab} >
                          My tasks
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '30px',
                          }}
                        >
                          <div>
                            {(
                              <span
                                className={styles.textIconBg}
                                style={{
                                  // display: active === 1 && activityReadNum === 0 && 'none',
                                  minWidth: '15px',
                                  display: 'inline-block',
                                  marginRight: '10px',
                                  background: '#CCFF00',
                                  color: '#000',
                                }}
                              >
                                {allTaskNumber >= 99 ? 99 : allTaskNumber}
                              </span>
                            )}
                          </div>
                          <div className={styles.titleTab} >
                            All tasks
                          </div>
                        </div>
                      </div>
                    )}
                  </p>
                </div>
              </>
            )}
          </>
        ))}
      </div>
      <div className={styles.ctnBox}>
        {showActive === 'ACTIVITY' && (
          <>
            <div className={styles.activityOption} id="activityOptionSelect">
              <div className={styles.explain}>
                <span className={styles.team}></span>
                <p>Team</p>
                <span className={styles.vendor}></span>
                <p>Vendor</p>
              </div>
              <Select
                defaultValue={0}
                style={{ width: 120 }}
                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                onChange={(value) => {
                  setMeberType(value);
                }}
                value={meberType}
              >
                <Option value="">All activity</Option>
                <Option value="user">Team</Option>
                <Option value="vendor">Vendor</Option>
              </Select>
            </div>
            {loading ? (
              <Spin
                tip="Loading..."
                color="rgba(204, 255, 0, 0.7)"
                style={{
                  marginTop: '30vh',
                }}
              />
            ) : (
              <div className={styles.activityBox}>
                <div className={styles.activityCtn}>
                  <div className={styles.info}>
                    <div
                      className={styles.line}
                      style={{
                        backgroundImage: `url(${borderLineIcon.src})`,
                      }}
                    ></div>
                    {activity.length > 0 &&
                      activity.map((item) => (
                        <div
                          onClick={() => {
                            activityLogRead(item?.id);
                          }}
                          key={item?.activityLogId}
                          className={`${styles.item} ${item?.meberType === 'vendor' && styles.itemOther
                            } ${item?.now && styles.itemNow}`}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className={styles.title}>
                            <span
                              style={{
                                background:
                                  item.meberType === 'vendor' ? '#000' : 'red',
                              }}
                            >
                              {item.meberType === 'vendor' ? (
                                <NextImage
                                  width={10}
                                  height={12}
                                  src={rightBoxIcon}
                                />
                              ) : (
                                abbreviation(item.userName)
                              )}
                            </span>
                            <h3>{item.userName}</h3>
                          </div>
                          <p>{jsonToContent(item?.activityContent)}</p>
                          {item.activityType === 'img' && (
                            <div
                              style={{
                                marginTop: 10,
                                width: '100%',
                                height: '140px',
                                display: 'flex',
                                overflow: 'hidden',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#ffffff',
                              }}
                            >
                              <ImgShow
                                data={item?.activityContent}
                                resKeyToUrl={resKeyToUrl}
                              />
                            </div>
                          )}
                          <p>{jsonToNote(item?.activityContent)}</p>
                          <div className={styles.time}>
                            <p
                              style={{
                                fontFamily: item?.now
                                  ? 'via_Futura_700'
                                  : 'Poppins',
                                color: item?.now && '#000000',
                              }}
                            >
                              {/* {getTimeUntilNow(item.activityTime)} */}
                              {item.activityTime && (
                                <TimeMethod
                                  timeType="ActivityTime"
                                  time={item.activityTime}
                                />
                              )}

                              {item?.isRead === '0' && <span>1</span>}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {showActive === 'MESSAGES' && (
          <div className={styles.commentsCtn}>
            <div className={styles.commentsBox}>
              {comments?.items?.length > 0 &&
                comments?.items?.map((item) => (
                  <div
                    key={item?.commentId}
                    className={`${styles.box} ${item?.now && styles.boxNow}`}
                  >
                    <div className={styles.timeAndUser}>
                      <p>
                        {/* {dayAgo(item.createTime)} */}
                        {item.createTime && (
                          <TimeMethod
                            time={item.createTime}
                            timeType={'pastTimes2'}
                          />
                        )}
                      </p>
                      <div className={styles.users}>
                        {/* {item?.users?.length > 0 &&
                          item?.users?.map((user) => (
                            <span style={{ background: `${user.color}` }}>
                              {abbreviation(user.name)}
                            </span>
                          ))} */}
                        <span style={{ background: `red` }}>
                          {abbreviation(item.createBy)}
                        </span>
                      </div>
                    </div>
                    <div className={styles.imgAndFile}>
                      <div className={styles.fileBox}>
                        <div
                          style={{
                            width: 50,
                            height: 50,
                            display: 'flex',
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#ffffff',
                          }}
                        >
                          <ImgShow src={item?.filePath} />
                        </div>
                        <div className={styles.file}>
                          <span></span>
                          <p>{item?.fileName ? `${item?.fileName}.` : ''}</p>
                        </div>
                      </div>
                    </div>
                    {item?.list?.length > 0 &&
                      item.list.map((obj, index) => {
                        if (fold && index > 0) {
                          return;
                        } else {
                          return (
                            <div className={styles.info} key={obj?.commentId}>
                              <div className={styles.source}>
                                <div className={styles.userAndTime}>
                                  <span
                                    style={{
                                      background: `red`,
                                    }}
                                  >
                                    {abbreviation(obj?.createBy)}
                                  </span>
                                  <p>
                                    {obj?.createBy}
                                    <span>
                                      {/* {dayAgo(obj.createTime)} */}
                                      {obj.createTime && (
                                        <TimeMethod
                                          time={obj.createTime}
                                          timeType={'pastTimes2'}
                                        />
                                      )}
                                    </span>
                                  </p>
                                </div>
                                <div className={styles.btn}>
                                  <NextImage
                                    style={{
                                      cursor: 'pointer',
                                    }}
                                    width={16}
                                    height={16}
                                    src={commentsIcon1}
                                  />
                                  <span style={{ width: 14 }}></span>
                                  <NextImage
                                    style={{
                                      cursor: 'pointer',
                                    }}
                                    width={16}
                                    height={4}
                                    src={commentsIcon2}
                                  />
                                </div>
                              </div>
                              <div className={styles.content}>
                                <p>{obj?.content}</p>
                              </div>
                            </div>
                          );
                        }
                      })}
                    <div
                      className={styles.bottom}
                      onClick={() => {
                        setFold(!fold);
                      }}
                    >
                      <i
                        className="iconfont icon_rightBtnFold"
                        style={{ cursor: 'pointer' }}
                      ></i>
                      <p>
                        {item?.list?.length}{' '}
                        {item?.list?.length > 1 ? 'replies' : 'reply'}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        {showActive === 'PERMISSIONS' && (
          <div className={styles.teamVendorCtn}>
            <div className={styles.search}>
              <div className={styles.input} id="teamVendorSearch">
                <Form form={form}>
                  <Form.Item
                    name="user"
                    style={{
                      margin: 0,
                      padding: 0,
                      height: 44,
                      lineHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Select
                      allowClear
                      style={{ width: 200 }}
                      placeholder="Type an email or search from list"
                      optionLabelProp="label"
                      // showSearch
                      // onPopupScroll={onPopupScrollUser}
                      onChange={onChangeUser}
                      // onSearch={onSearchUser}
                      // onClear={onClearUser}
                      getPopupContainer={(triggerNode) =>
                        triggerNode.parentNode
                      }
                      suffixIcon={<></>}
                      mode="multiple"
                      tagRender={(props) => {
                        const valueArr = props.value.split(' ');
                        const vendor = valueArr[valueArr.length - 1];
                        return (
                          <div className={styles.userTag}>
                            {vendor === 'Vendor' ? (
                              <i
                                className="iconfont icon_RightVendor"
                                style={{ fontSize: 14 }}
                              ></i>
                            ) : (
                              <span style={{ background: 'red' }}>
                                {abbreviation(props?.label)}
                              </span>
                            )}
                            <p>{props?.label}</p>
                            <i
                              className="iconfont icon_userTagClose"
                              style={{ marginLeft: 5, cursor: 'pointer' }}
                              onClick={() => {
                                props.onClose();
                              }}
                            ></i>
                          </div>
                        );
                      }}
                    >
                      {userList.length > 0 &&
                        userList.map((user, index) => (
                          <Option
                            className="teamVendorBoxOption"
                            key={user?.id || index}
                            label={
                              user.posts?.[0]?.code === 'Vendor'
                                ? user.vendorName
                                : user?.nickName
                            }
                            value={`${user?.id} ${user?.nickName} ${user?.userName}   ${user?.vendorName} ${user.posts?.[0]?.code}`}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              height: 58,
                            }}
                          >
                            <div className={styles.userSel}>
                              {user.posts?.[0]?.code === 'Vendor' ? (
                                <>
                                  <span style={{ background: '#000000' }}>
                                    <i
                                      className="iconfont icon_RightVendor"
                                      style={{ fontSize: 14 }}
                                    ></i>
                                  </span>

                                  <p>{user.vendorName}</p>
                                </>
                              ) : (
                                <>
                                  <span style={{ background: 'red' }}>
                                    {abbreviation(user?.nickName)}
                                  </span>
                                  <p>{user?.nickName}</p>
                                </>
                              )}
                            </div>
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Form>
                <Select
                  defaultValue={status}
                  style={{ width: 100 }}
                  onChange={(value) => {
                    setStatus(value);
                  }}
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                >
                  {options.length > 0 &&
                    options.map((option) => (
                      <Option key={option?.id} value={option?.value}>
                        {option?.label}
                      </Option>
                    ))}
                </Select>
              </div>
              <span
                style={{
                  cursor: userIds?.length > 0 && 'pointer',
                  background:
                    userIds?.length > 0
                      ? 'rgba(0, 0, 0, 1)'
                      : 'rgba(0, 0, 0, .15)',
                }}
                onClick={userAddTeam}
              >
                Invite
              </span>
            </div>

            <div className={styles.teamVendorBox}>
              <div className={styles.title}>
                <span>Team</span>
              </div>
              {team.map((user) => (
                <div
                  key={user?.userId}
                  className={styles.box}
                  id="teamVendorBoxSelect"
                >
                  <div style={{ position: 'relative' }} className={styles.post}>
                    <span style={{ background: '#00A3FF' }}>
                      {abbreviation(user?.userName)}
                    </span>
                    <div className={styles.info}>
                      <div
                        style={{
                          fontWeight: 500,
                          fontSize: '14px',
                          letterSpacing: '0,05em',
                        }}
                      >
                        {user?.userName}
                      </div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: '12px',
                          letterSpacing: '0,05em',
                          color: 'rgba(0, 0, 0, 0.7)',
                        }}
                      >
                        {user?.postName}
                      </div>
                      {!user?.online && (
                        <div
                          style={{
                            fontWeight: 500,
                            fontSize: '12px',
                            letterSpacing: '0,05em',
                            color: 'rgba(0, 0, 0, 0.5)',
                          }}
                        >
                          {/* last seen at {user?.lastDate?formatDate(user?.lastDate):'Never read'} */}
                          {user?.lastDate ? (
                            // ? `last seen at ${formatDate(user?.lastDate)}`
                            <>
                              last seen at{' '}
                              <TimeMethod
                                timeType="loginStatus"
                                time={user?.lastDate}
                              />
                            </>
                          ) : (
                            `Never logged in`
                          )}
                        </div>
                      )}
                      {user?.online && (
                        <div
                          style={{
                            fontWeight: 500,
                            fontSize: '12px',
                            letterSpacing: '0,05em',
                            color: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              background: 'rgb(0,198,115)',
                              borderRadius: '50%',
                              marginRight: '10px',
                            }}
                          ></div>
                          Online
                          {/* {`123`}<TimeMethod timeType='pastTimes' time={user?.lastDate} /> */}
                        </div>
                      )}
                    </div>
                  </div>
                  <Select
                    style={{ width: 130, textAlign: 'justify' }}
                    defaultValue={user?.styleStatus}
                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    onChange={(value) => {
                      onChangeTeamStatus(value, user?.userId);
                    }}
                    dropdownStyle={{
                      display: user?.styleStatus === '1' && 'none',
                    }}
                  // suffixIcon={
                  //   <i
                  //     className={
                  //       user?.styleStatus !== "1" &&
                  //       "iconfont icon_stylesBottomJt"
                  //     }
                  //     style={{ fontSize: "20px", color: "#383A42" }}
                  //   ></i>
                  // }
                  >
                    {user?.styleStatus === '1' && (
                      <Option value="1">Owner</Option>
                    )}
                    {options.length > 0 &&
                      user?.styleStatus !== '1' &&
                      options.map((option) => (
                        <Option key={option?.id} value={option?.value}>
                          {option?.label}
                        </Option>
                      ))}
                  </Select>
                </div>
              ))}
              <span style={{ marginTop: 40 }}></span>
              <div className={styles.title}>
                <span>Vendor/Agent</span>
              </div>
              {vendor.map((item) => (
                <div
                  className={styles.box}
                  id="teamVendorBoxSelect"
                  key={item.userId}
                >
                  <div className={styles.post}>
                    <span style={{ background: `#000000` }}>
                      <i
                        className="iconfont icon_RightVendor"
                        style={{ color: '#ffffff' }}
                      ></i>
                    </span>
                    <div className={styles.info}>
                      <h5>{item?.vendorName}</h5>
                      <p>vendor</p>
                    </div>
                  </div>
                  <Select
                    style={{ width: 100 }}
                    defaultValue={item?.styleStatus}
                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    onChange={(value) => {
                      onChangeTeamStatus(value, item?.userId);
                    }}
                    dropdownStyle={{
                      display: user?.styleStatus === '1' && 'none',
                    }}
                    suffixIcon={
                      <i
                        className={
                          item?.styleStatus !== '1' &&
                          'iconfont icon_stylesBottomJt'
                        }
                        style={{ fontSize: '20px', color: '#383A42' }}
                      ></i>
                    }
                  >
                    {item?.styleStatus === '1' && (
                      <Option value="1">Owner</Option>
                    )}
                    {item?.styleStatus !== '1' &&
                      options.map((option) => (
                        <Option key={option?.id} value={option?.value}>
                          {option?.label}
                        </Option>
                      ))}
                  </Select>
                </div>
              ))}

              <div className={styles.otherBox}>
                <div
                  className={`${styles.title} ${boxShow.style && styles.titleAct
                    }`}
                  onClick={() => {
                    setBoxShow({ ...boxShow, style: !boxShow.style });
                  }}
                >
                  <img src={teamVendorIcon1.src} />
                  <p>STYLE OWNER</p>
                </div>
                <div
                  className={`${styles.completeCtn} ${boxShow.style && styles.completeCtnAct
                    }`}
                >
                  <h3>Person who created this style. </h3>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Change other people's access permissions.</p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>First release to the vendor. </p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>All permissions granted.</p>
                  </div>
                </div>
              </div>

              <div className={styles.otherBox}>
                <div
                  className={`${styles.title} ${boxShow.editor && styles.titleAct
                    }`}
                  onClick={() => {
                    setBoxShow({ ...boxShow, editor: !boxShow.editor });
                  }}
                >
                  <img src={teamVendorIcon1.src} />
                  <p>EDITOR</p>
                </div>
                <div
                  className={`${styles.completeCtn} ${boxShow.editor && styles.completeCtnAct
                    }`}
                >
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Leave comment</p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Canvas function </p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Upload files</p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Update release to the vendor. </p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Edit, Delete files + infos</p>
                  </div>
                </div>
              </div>

              <div className={styles.otherBox}>
                <div
                  className={`${styles.title} ${boxShow.viewer && styles.titleAct
                    }`}
                  onClick={() => {
                    setBoxShow({ ...boxShow, viewer: !boxShow.viewer });
                  }}
                >
                  <img src={teamVendorIcon1.src} />
                  <p>VIEWER</p>
                </div>
                <div
                  className={`${styles.completeCtn} ${boxShow.viewer && styles.completeCtnAct
                    }`}
                >
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Leave comment</p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Canvas function</p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon1} width={12} height={12} />
                    <p>Upload files</p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon2} width={12} height={12} />
                    <p>Update release to the vendor. </p>
                  </div>
                  <div className={styles.complete}>
                    <NextImage src={statusIcon2} width={12} height={12} />
                    <p>Edit, Delete files + infos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showActive === 'INTERNAL CHAT' && (
          <div className={styles.internalChatCtn} >
            <div
              ref={internalContentRef}
              style={{
                maxHeight: '72vh',
                overflowY: 'auto',
                scrollBehavior: 'smooth',
              }}
            >
              {/* 聊天内容区域 */}
              {CopychartList?.map((red, index) => {
                return (
                  <div
                    style={{
                      // background:
                      //   red?.fromUserName == localStorage.getItem('userName') ||
                      //   red?.messageUserName == localStorage.getItem('userName')
                      //     ? ''
                      //     : red?.isRead === '1'
                      //     ? 'rgba(56, 58, 66, 0.05)'
                      //     : '#fff',
                      position: 'relative',
                    }}
                    // onClick={() => {
                    //   if (
                    //     red.isRead === '1' ||
                    //     red.fromUserName == localStorage.getItem('userName') ||
                    //     red?.messageUserName == localStorage.getItem('userName')
                    //   ) {
                    //     return false;
                    //   }
                    //   let options = {};
                    //   if (red?.chatMessageId) {
                    //     options = {
                    //       ...red,
                    //     };
                    //   } else {
                    //     options = {
                    //       index: index,
                    //       teamId: red.teamId,
                    //       userId: red.messageFromUser,
                    //     };
                    //   }
                    //   chatMsgRead(options).then((res) => {
                    //     console.log(res);
                    //     if (res?.data?.code == 200) {
                    //       getChatTextList(info?.teamId);
                    //       let add = JSON.parse(JSON.stringify(CopychartList));
                    //       console.log(add);
                    //       add.forEach((res, index1) => {
                    //         // console.log(res,red)
                    //         if (
                    //           (red.chatMessageId &&
                    //             red.chatMessageId == res.chatMessageId) ||
                    //           index1 == index
                    //         ) {
                    //           res['isRead'] = '1';
                    //           res['lastReaderName'] =
                    //             localStorage?.getItem('userName');
                    //         }
                    //       });
                    //       if (
                    //         red?.message?.includes(
                    //           `@${localStorage.getItem('userName')}`
                    //         ) ||
                    //         red?.msg?.includes(
                    //           `@${localStorage.getItem('userName')}`
                    //         )
                    //       ) {
                    //         setChatTjLength(chatTjLength - 1);
                    //       }
                    //       console.log(add);
                    //       setCopyChartList(add);
                    //     }
                    //   });
                    //   console.log(red);
                    // }}
                    className={styles.box}
                  >
                    {
                      red.showNewStyle ?
                        <div className={styles.showNew}>
                          <i></i>
                          <p>New</p>
                        </div> : ''
                    }
                    <div style={{
                      marginLeft: red?.fromUserName == localStorage.getItem('userName') ||
                        red?.messageUserName == localStorage.getItem('userName') ? 'auto' : '',
                      width: red?.fromUserName == localStorage.getItem('userName') ||
                        red?.messageUserName == localStorage.getItem('userName') ? '270px' : '310px',
                      display: 'flex', justifyContent: "space-between", marginTop: '16px'
                    }}>

                      <div className={styles.user}>
                        {red?.fromUserName == localStorage.getItem('userName') ||
                          red?.messageUserName == localStorage.getItem('userName') ? '' :
                          <span
                            style={{
                              position: 'relative',
                              width: '40px',
                              height: '40px',
                              marginLeft: '10px',
                              marginBottom: '-17px',
                              background:
                                red?.fromUserName ==
                                  localStorage.getItem('userName')
                                  ? 'rgba(0,0,0,0.5)'
                                  : red?.isRead === '1'
                                    ? 'rgba(0,0,0,0.5)'
                                    : `#00C673`,
                            }}
                          >
                            {abbreviation(
                              red?.fromUserName ||
                              red?.messageUserName ||
                              localStorage.getItem('userName')
                            )}
                            {/* 是否在线 */}
                            <span style={{
                              display: red.online ? 'block' : 'none',
                              position: 'absolute',
                              width: '12px',
                              height: '12px',
                              right: '0px',
                              bottom: '0px',
                              background: '#13DE89',
                              border: '1.5px solid #FFFFFF',
                              borderRadius: '6px',
                            }}></span>
                          </span>
                        }
                        <p>
                          {
                            red?.fromUserName == localStorage.getItem('userName') ||
                              red?.messageUserName == localStorage.getItem('userName') ? 'You' : red?.fromUserName || red?.messageUserName
                          }
                        </p>
                      </div>
                      {/* {red?.isRead !== '1' &&
                        (red?.message?.includes(
                          `@${localStorage.getItem('userName')}`
                        ) ||
                          red?.msg?.includes(
                            `@${localStorage.getItem('userName')}`
                          )) && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '25px',
                              width: '10px',
                              height: '10px',
                              background: '#f00',
                              borderRadius: '50%',
                            }}
                          ></div>
                        )} */}
                      {/* {red?.isRead !== '1' && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          width: '10px',
                          height: '10px',
                          background: '#CCFF00',
                          borderRadius: '50%',
                        }}
                      ></div>
                    )} */}
                      <div className={styles.time}>
                        <p
                          style={{
                            fontSize: '10px',
                          }}
                        >
                          {/* {getdate(
                          red?.timestamp || red?.updateTime || red?.createTime
                        ) == getdate(new Date().getTime())
                          ? 'Today' +
                            '，' +
                            formatDate1(
                              red?.timestamp ||
                                red?.updateTime ||
                                red?.createTime
                            )
                          : `${getdate(
                              red?.timestamp ||
                                red?.updateTime ||
                                red?.createTime
                            )}

                             ${formatDate1(
                               red?.timestamp ||
                                 red?.updateTime ||
                                 red?.createTime
                             )}
                          `} */}
                          {(red?.timestamp ||
                            red?.updateTime ||
                            red?.createTime) && (
                              <TimeMethod
                                timeType="pastTimes2"
                                time={
                                  red?.timestamp ||
                                  red?.updateTime ||
                                  red?.createTime
                                }
                              />
                            )}
                        </p>
                      </div>
                    </div>
                    <div className={red?.fromUserName == localStorage.getItem('userName') ||
                      red?.messageUserName == localStorage.getItem('userName') ? styles.contentOneSelf : styles.contentOther}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: red?.message || red?.msg,
                        }}
                        style={{
                          wordWrap: 'break-word',
                          wordBreak: 'break-all',
                          fontSize: '16px',
                          color: 'rgba(0, 0, 0, 0.7)',
                        }}
                      >
                        {/* {red?.message || red?.msg} */}
                      </p>
                    </div>
                    {/* 底部all read */}
                    <div className={styles.bottomText}>
                      {red.isAllRead === 1 && (
                        <div>
                          <IconButton
                            name={'All read'}
                            buttonStyle={{
                              padding: '0 10px',
                              color: 'rgba(0, 0, 0, 0.5)',
                              fontSize: '12px',
                              justifyContent: 'flex-end',
                            }}
                            icon={'icon_stylesSelectOk'}
                            isRightIcon={true}
                            iconStyle={{
                              color: 'rgba(0, 0, 0, 0.5)',
                              fontSize: '20px',
                            }}
                          />
                        </div>
                      )}

                      {red.isAllRead !== 1 && (
                        <>
                          {(red?.fromUserName ==
                            localStorage.getItem('userName') &&
                            red?.readNum === 1) ||
                            red?.messageUserName ==
                            localStorage.getItem('userName') ? (
                            <div>
                              <IconButton
                                name={
                                  red?.lastReaderName && red?.readNum != 1
                                    ? `Read by ${red?.lastReaderName}`
                                    : 'Send'
                                }
                                buttonStyle={{
                                  padding: '0 10px',
                                  color: 'rgba(0, 0, 0, 0.5)',
                                  fontSize: '12px',
                                  justifyContent: 'flex-end',
                                }}
                                icon={'icon_stylesSelectOk'}
                                isRightIcon={true}
                                iconStyle={{
                                  color: 'rgba(0, 0, 0, 0.5)',
                                  fontSize: '20px',
                                }}
                              />
                            </div>
                          ) : (
                            <div>
                              <IconButton
                                name={
                                  red?.lastReaderName ==
                                    localStorage.getItem('userName')
                                    ? `Read by you`
                                    : `Read by ${red?.lastReaderName ||
                                    red?.messageUserName
                                    }`
                                }
                                buttonStyle={{
                                  padding: '0 10px',
                                  color: 'rgba(0, 0, 0, 0.5)',
                                  fontSize: '12px',
                                  justifyContent: 'flex-end',
                                }}
                                icon={'icon_stylesSelectOk'}
                                isRightIcon={true}
                                iconStyle={{
                                  color: '#00DD81',
                                  fontSize: '20px',
                                }}
                              />
                            </div>
                          )}
                        </>
                      )}
                      {/* icon_stylesSelectOk */}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className={`${styles.box} ${styles.b1}`}>
              <div className={styles.time}>
                <span></span>
                <p>Today, 4:43 pm</p>
              </div>
              <div className={styles.user}>
                <span style={{ background: `#00C673` }}>BY</span>
                <p>Becca Yang</p>
              </div>
              <div className={styles.content}>
                <p>
                  Hi!I think the cover image is outdated. @BeccaYang could you
                  replace it with a more recent sketch?
                </p>
                <h4>Sent</h4>
              </div>
            </div> */}

            <ChatSend
              setChartList={setChartList}
              chartList={chartList}
              themeMode={themeMode}
              info={info}
              teamList={team}
              scrollToBottom={scrollToBottom}
            />
          </div>
        )}
        {showActive === 'TASKS' && (
          <div>
            <div className={styles.taskEdit}>
              {
                taskListAll.map((item, index) => {
                  return (
                    <div className={styles.cont}>
                      <div>
                        <div className={styles.des}><Checkbox  onChange={(e) => checked(e, item)}></Checkbox> <span className={styles.contTit}> {item.description} </span></div>
                        {
                          item.assignName ?
                            <p><span style={{ fontSize: '20px', width: '24px', height: '24px' }} className='iconfont icon_subnav1'><span style={{ fontSize: '14px', fontWeight: '500', verticalAlign: 'text-bottom', marginLeft: '8px' }}>{item.assignName}</span></span> </p> :
                            <p style={{ position: 'relative' }} >
                              <span style={{ fontSize: '20px', width: '24px', height: '24px' }} className='iconfont icon_subnav1'>
                                <span onClick={()=>editTaskApply(index)} style={{ fontSize: '14px', fontWeight: '500', verticalAlign: 'text-bottom', marginLeft: '8px', textDecorationLine: 'underline' }}>
                                  Assign a user
                                </span>
                              </span>
                              <span>

                              </span>
                              {
                                isShowEditTask && index === isShowEditTaskInd? (
                                  <div className={styles.taskEditModal}>
                                    <div className={styles.editTit}>
                                      <Input size="large" placeholder="Search or create an option" prefix={<SearchOutlined />} />
                                    </div>
                                    <div className={styles.taskEditCont}>
                                      <Radio.Group  >
                                        {
                                          allUserList.map((userInfo) => {
                                            return (
                                              <div className={styles.editContList}>
                                                <Radio value={userInfo.userName}>
                                                  {userInfo?.fromUserName == localStorage.getItem('userName') ||
                                                    userInfo?.messageUserName == localStorage.getItem('userName') ? '' :
                                                    <span
                                                      style={{
                                                        display: 'inline-block',
                                                        position: 'relative',
                                                        width: '25px',
                                                        height: '25px',
                                                        marginBottom: '-17px',
                                                        background: `#0559a8`,
                                                        borderRadius: '50%',
                                                        textAlign: 'center',
                                                        lineHeight: '25px',
                                                        color: 'white',
                                                        marginLeft: '10px'
                                                      }}
                                                    >
                                                      {abbreviation(userInfo.userName)}
                                                    </span>
                                                  }
                                                  <span className={styles.editBtnUserName}>{userInfo.userName}</span>
                                                </Radio>
                                              </div>
                                            )
                                          })
                                        }
                                      </Radio.Group>
                                    </div>
                                    <div className={styles.taskEditModalBottom}>
                                      <span className={styles.editBtText}>
                                        32 Result
                                      </span>
                                      <div className={styles.editBtRight}>
                                        <span onClick={editTaskApply} className={styles.editCancel}>
                                          Cancel
                                        </span>
                                        <Button onClick={()=>editTaskSub(userInfo,item)}>Apply</Button>
                                      </div>
                                    </div>
                                  </div>
                                ) : ''
                              }


                            </p>
                        }

                      </div>
                      <i onClick={() => taskDel(item)}><DeleteOutlined /></i>
                    </div>
                  )
                }
                )
              }
              <div className={styles.addtask} onClick={showAddTask}>
                <PlusOutlined />
                <span>Add new task</span>
              </div>
              <div style={{ display: taskModal ? 'none' : 'block' }} className={styles.addInput}>
                <Input
                  onChange={(e) => setInputData(e.target?.value)}
                  onBlur={inputBlur}
                  allowClear={true}
                  onPressEnter={addEnter}
                  value={inputData}
                />
              </div>
            </div>
            {/* taskCompleted */}
            <div className={styles.taskCompleted}>
              <Collapse defaultActiveKey={['1']} >
                <Panel header="Completed" key="1">
                  {
                    taskCompletedList.map((item, index) => {
                      return (
                        <div className={styles.cont}>
                          <div>
                            <div className={styles.des}>
                              <Checkbox
                                defaultChecked={item.completed ? 'true' : 'false'}
                                onChange={(e) => checked(e, item)}
                              >
                              </Checkbox> <span className={styles.contTit}> {item.description} </span></div>
                            {
                              item.assignName ?
                                <p><span style={{ fontSize: '20px', width: '24px', height: '24px', color: '#A3A3A3' }} className='iconfont icon_subnav1'><span style={{ fontSize: '14px', fontWeight: '500', verticalAlign: 'text-bottom', marginLeft: '8px', color: '#A3A3A3' }}>{item.assignName}</span></span> </p> :
                                <p style={{ position: 'relative' }}>
                                  <span style={{ fontSize: '20px', width: '24px', height: '24px', color: '#A3A3A3' }} className='iconfont icon_subnav1'>
                                    <span style={{ fontSize: '14px', fontWeight: '500', verticalAlign: 'text-bottom', marginLeft: '8px', color: '#A3A3A3', textDecorationLine: 'underline' }}>
                                      Assign a user
                                    </span>
                                  </span>
                                </p>
                            }
                          </div>
                          <i onClick={() => taskDel(item)}><DeleteOutlined /></i>
                        </div>
                      )
                    }
                    )
                  }
                </Panel>
              </Collapse>

            </div>
          </div>
        )}
        {/* {showActive === 5 && (
          <div className={styles.duplicatesCtn}>
            <div className={styles.box}>
              <div className={styles.title}>
                <p>T01-3455-945-30</p>
                <NextImage src={duplicatesBtn} width={18} height={4} />
              </div>
              <img src={duplicatesImg.src} />
              <div className={styles.info}>
                <h3>The Alice Frock</h3>
                <div className={styles.tag}>
                  <span>Development</span>
                  <span>SMS</span>
                </div>
              </div>
              <div className={styles.button}>
                <div>VENDOR Vendor’s name</div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
