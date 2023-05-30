import { notification } from 'antd';
import { selectAnswerByStepIdAndUserId } from '../services/course/module';
import { getUserInfo } from '../services/course/teacherLog';
import moment from 'moment';
// Prompt box after requesting data
export const openNotificationWithIcon = (
  type,
  title,
  description,
  placement = 'top'
) => {
  notification[type]({
    message: title,
    description: description,
    placement,
  });
};

export const getUrlParamsOld = () => {
  let arr = window.location.search.split('?')[1]?.split('&');

  let newArr = {};
  for (let i in arr) {
    newArr[arr[i].split('=')[0]] = arr[i]?.split('=')[1];
  }
  // console.log(newArr);
  return newArr;
};

// Get student answers
export const getStudentAnswer = (str, stepid, userid, set, classId) => {
  if (str == 'teacher') {
    selectAnswerByStepIdAndUserId(stepid, userid, classId).then((res) => {
      if (res.data) {
        let arr = res.data;
        arr.submitAnswer = eval(arr.submitAnswer);
        set(arr);
      } else {
        set([]);
      }
    });
  }
};
// Get routing parameters
export const getUrlParams = (query) => {
  if (!query) return false;
  const [
    classIdQuery,
    courseIdQuery,
    moduleIdQuery,
    lessonIdQuery,
    stepIdQuery,
  ] = query;
  // let arr = window.location.search.split("?")[1]?.split("&");
  // for (let i in arr) {
  //   newArr[arr[i].split("=")[0]] = arr[i]?.split("=")[1];
  // }
  let newArr = {
    classId: classIdQuery,
    courseId: courseIdQuery,
    moduleId: moduleIdQuery || '',
    lessonId: lessonIdQuery || '',
    stepId: stepIdQuery || '',
  };

  return newArr;
};

//   升序
export const sortByKey = (array, key) => {
  return array?.sort(function (a, b) {
    var x = a[key].toLowerCase();
    var y = b[key].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
};
//   降序
export const sortDownByKey = (array, key) => {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x > y ? -1 : x < y ? 1 : 0;
  });
};

// 对首字母排序
//   升序
export const sortByKeyS = (array, key) => {
  return array.sort(function (a, b) {
    // console.log(a[key]?.substr(0, 1));
    var x = a[key]?.substr(0, 1)?.toLowerCase();
    var y = b[key]?.substr(0, 1)?.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
};
//   降序
export const sortDownByKeyS = (array, key) => {
  return array.sort(function (a, b) {
    // console.log(a[key]?.substr(0, 1).toLowerCase());
    var x = a[key]?.substr(0, 1)?.toLowerCase();
    var y = b[key]?.substr(0, 1)?.toLowerCase();
    return x > y ? -1 : x < y ? 1 : 0;
  });
};
// 按最后登录时间排序
export const sortByLastLogin = (array, key) => {
  return array.sort(function (a, b) {
    return (b[key] != null) - (a[key] != null) || a[key] < b[key] ? 1 : -1;
  });
};
// 最高成绩排序
export const sortByHigher = (array, key) => {
  return array.sort(function (a, b) {
    return a[key] < b[key] ? 1 : -1;
  });
};

// websocket 登录
export const wsLogin = () => {
  getUserInfo().then((res) => {});
};

// 转换百分比
export const bfb = (now, total) => {
  return (Math.round((now / total) * 10000) / 100).toFixed(0);
};

//loginTime conversion
export const conversionTime = (e) => {
  var date1 = new Date().getTime();
  var date2 = moment(e).local()._d.getTime();
  var date3 = date1 - date2;
  let days = Math.floor(date3 / (24 * 3600 * 1000));
  if (days <= 1) {
    var twoDay = moment(e).calendar().split('at');
    var twoDayString = twoDay[1] + '\n' + twoDay[0];
    return twoDayString;
  } else {
    return moment(e).fromNow();
  }
};

//loginTime color
export const loginStatu = (e) => {
  const isLong =
    e.indexOf('AM') != -1 || e.indexOf('PM') != -1 || e.indexOf('Online') != -1;
  return isLong;
};
// Tab switching
export const setQuestionsTabBar = (
  role,
  questionTitle,
  hintsTitle,
  solutionTitle,
  hintsData,
  questionData
) => {
  if (role == 'teacher') {
    let newArr = [questionTitle];
    if (hintsData?.length > 0) {
      newArr.push(hintsTitle);
    }
    if ([0].includes(questionData && questionData[0]?.ungraded)) {
      newArr.push(solutionTitle);
    }

    return newArr;
  } else if (role == 'student') {
    let newArr = [questionTitle];

    if (hintsData?.length > 0) {
      newArr.push(hintsTitle);
    }
    return newArr;
  }
};

// set module step height
export const getStepHeight = (data) => {
  // let modalHeight = 113 * data.length;
  for (let i in data) {
    let lessonLength = 0;

    for (let j in data[i].courseLessonResList) {
      if (
        data[i].courseLessonResList[j].courseLessonStepResList.length >
        lessonLength
      ) {
        lessonLength =
          data[i].courseLessonResList[j].courseLessonStepResList.length;
        data[i].courseLessonResList[j].maxHeight =
          data[i].courseLessonResList[j].courseLessonStepResList.length * 39 +
          100;
      }
      // data[i].courseLessonResList[j].maxHeight = lessonLength;
    }
    data[i].maxHeight =
      lessonLength * 39 + data[i].courseLessonResList.length * 64 + 100;
    // data[i].maxHeight =
  }
  // console.log(data);
};

// Get all dates within two dates
export const getDateRange = (startTime, endTime) => {
  var allDate = new Array();
  var i = 0;
  //开始日期小于等于结束日期,并循环
  while (startTime <= endTime) {
    allDate[i] = startTime;
    //获取开始日期时间戳
    var startTime_ts = new Date(startTime).getTime();
    //增加一天时间戳后的日期
    var next_date = startTime_ts + 24 * 60 * 60 * 1000;
    //拼接年月日，这里的月份会返回（0-11），所以要+1
    var next_dates_y = new Date(next_date).getFullYear() + '-';
    var next_dates_m =
      new Date(next_date).getMonth() + 1 < 10
        ? '0' + (new Date(next_date).getMonth() + 1) + '-'
        : new Date(next_date).getMonth() + 1 + '-';
    var next_dates_d =
      new Date(next_date).getDate() < 10
        ? '0' + new Date(next_date).getDate()
        : new Date(next_date).getDate();
    startTime = next_dates_y + next_dates_m + next_dates_d;
    //增加数组key
    i++;
  }
  return allDate;
};
