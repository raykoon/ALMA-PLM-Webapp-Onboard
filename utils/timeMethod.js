import { useRef, useState, useEffect, useContext } from 'react';

import moment from 'moment-timezone';
//时间处理方法


function TimeMethod({time,timeType}){
    // let copyType
    // let time=1672136977000
    const [copyType,setCopyType]=useState(localStorage.getItem('timeZone'))
    const [timeNow,setTimeNow]=useState()
    const [copyTimeType,setCopyTimeType]=useState(localStorage.getItem('timeType'))
    useEffect(()=>{
        setCopyType(localStorage.getItem('timeZone'))
        if(!timeType){
            setCopyTimeType(localStorage.getItem('timeType'))
        }else{
            setCopyTimeType(timeType)
        }
        // console.log(localStorage.getItem('timeZone'))
    },[])
    // useEffect(()=>{
    //      if(timeType){
          
    //      }
    // },[])

    useEffect(()=>{
        console.log(timeType,time)
        if((copyTimeType)=='2'){
            stylesBoxFormat()
        }else if((copyTimeType)=='3'){
            RelativeTime()
        }else if((copyTimeType)=='mm-dd-yy'){
            TimeMmddyy1()
        }else if((copyTimeType)=='mm/dd/yy'){
            TimeMmddyy2()
        }else if((copyTimeType)=='Oct dd,yyyy'){
            TimeMmddyy3()
        }else if((copyTimeType)=='pastTimes'){
            TimeMmddyy4()
        }else if((copyTimeType)=='Dec. dd yyyy'){
            TimeMmddyy5()
        }else if(copyTimeType=='pastTimes1'){
            TimeMmddyy6()
        }else if(copyTimeType=='h:mm a on dd,yyyy'){
            TimeMmddyy7()
        }else if(copyTimeType=='ActivityTime'){
            TimeMmddyy8()
            
        }else if(copyTimeType=='Oct dd,yy'){
            TimeMmddyy9()
        }else if(copyTimeType=='mm-dd-yyyy'){
            TimeMmddyy10()
        }else if(copyTimeType=='loginStatus'){
            TimeMmddyy11()
        }else if(copyTimeType=='pastTimes2'){
            TimeMmddyy12()
        }else{
            chatFormat()
        }
    },[copyTimeType,time])

    //聊天格式
    const chatFormat=()=>{
        let add=moment(moment(time).format())
        setTimeNow(add?.tz(copyType || localStorage.getItem('timeZone'))?.format('MMM Do YY, h:mm a'))
    }

    //styles box格式
    const stylesBoxFormat=()=>{
        let add=moment(moment(time).format())
        setTimeNow(add?.tz(copyType || localStorage.getItem('timeZone'))?.format('MMM Do, YYYY'))
    }
    //相对时间
    const RelativeTime=()=>{
        let add=moment(moment(time).format())
        setTimeNow(add?.tz(copyType || localStorage.getItem('timeZone'))?.startOf('min').fromNow())
    }

    //mm-dd-yy
    const TimeMmddyy1=()=>{
        let add=moment(moment(time).format())
        setTimeNow(add?.tz(copyType || localStorage.getItem('timeZone'))?.format('MM-DD-YY'))
    }
    //mm/dd/yy
    const TimeMmddyy2=()=>{
        let add=moment(moment(time).format())
        setTimeNow(add?.tz(copyType || localStorage.getItem('timeZone'))?.format('MM/DD/YY'))
    }
    //Oct dd,yyyy
    const TimeMmddyy3=()=>{
        let add=moment(moment(time).format())
        let name=add?.tz(copyType || localStorage.getItem('timeZone'))?.format('MMM D, YYYY')
        setTimeNow(name)
    }

    //past times
    const TimeMmddyy4=()=>{
        let add=moment(moment(time).format())
        let name=add?.tz(copyType || localStorage.getItem('timeZone'))?.fromNow().replace('minute','min').replace('hours','h').replace('day','d').replace('a d ago','1 d ago')
        setTimeNow(name)
    }
    //Dec. dd yyyy
    const TimeMmddyy5=()=>{
        let add=moment(moment(time).format())
        let name=add?.tz(copyType || localStorage.getItem('timeZone'))?.format('MMM. D YYYY')
        setTimeNow(name)
    }
        //past times1
    const TimeMmddyy6=()=>{
        let add=moment(moment(time).format())
        console.log(add?.tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD'))
        let nowTime=moment(moment(new Date()).format()).tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD')
        let lastTime=add?.tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD')
        let name
        console.log(nowTime,lastTime)
        if(nowTime==lastTime){
          name='Today'
        }else{
             name=add?.tz(copyType || localStorage.getItem('timeZone'))?.startOf('second').fromNow().replace('minute','min').replace('a day ago','Yesterday')
             if(name.indexOf('hours')!==-1){
                name='Yesterday'
             }
        }
       
        setTimeNow(name)
    }

   //dd,yyyy
   const TimeMmddyy7=()=>{
    let add=moment(moment(time).format())
    let name=add?.tz(copyType || localStorage.getItem('timeZone'))?.format('h:mm a on Do, YYYY')
    setTimeNow(name)
}


const TimeMmddyy8=()=>{
    let add=moment(moment(time).format())
    console.log(add?.tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD'))
    let nowTime=moment(moment(new Date()).format()).tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD')
    let lastTime=add?.tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD')
    // let name=nowTime
   let name=add?.tz(copyType || localStorage.getItem('timeZone'))?.startOf('second').fromNow().replace('hours','h').replace('minute','min').replace('a day ago','Yesterday')
    
   if(name=='a few seconds ago'){
      name='Just now'
   }
   console.log(nowTime,lastTime)
    // if(nowTime==lastTime){
    //   name='Today'
    // }else{
    //      name=add?.tz(copyType || localStorage.getItem('timeZone'))?.startOf('second').fromNow().replace('minute','min').replace('a day ago','Yesterday')
    //      if(name.indexOf('hours')!==-1){
    //         name='Yesterday'
    //      }
    // }
   
    setTimeNow(name)
}

    //Oct dd,yy
    const TimeMmddyy9=()=>{
        let add=moment(moment(time).format())
        let name=add?.tz(copyType || localStorage.getItem('timeZone'))?.format('MMM D, YY')
        setTimeNow(name)
    }
    //mm-dd-yyyy
    const TimeMmddyy10=()=>{
        let add=moment(moment(time).format())
        setTimeNow(add?.tz(copyType || localStorage.getItem('timeZone'))?.format('MM-DD-YYYY'))
    }

        //聊天格式
        const TimeMmddyy11=()=>{
            let add=moment(moment(time).format())
            setTimeNow(add?.tz(copyType || localStorage.getItem('timeZone'))?.format('h:mm a on MMM Do, YYYY'))
        }
       //Today，XX:XX pm
        const TimeMmddyy12=()=>{
            let add=moment(moment(time).format())
            console.log(add?.tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD'))
            let nowTime=moment(moment(new Date()).format()).tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD')
            let lastTime=add?.tz(copyType || localStorage.getItem('timeZone')).format('YYYYMMDD')
            let name
            console.log(nowTime,lastTime)
            if(nowTime==lastTime){
              name=`Today, ${add?.tz(copyType || localStorage.getItem('timeZone')).format('h:mm a')}`
            }else{
                 name=add?.tz(copyType || localStorage.getItem('timeZone'))?.startOf('second').fromNow().replace('minute','min').replace('a day ago','Yesterday')
                 if(name.indexOf('hours')!==-1){
                    name='Yesterday'
                 }
            }
           
            setTimeNow(name)
        }
    return (
        <>{timeNow}</>
    )
}


// function formatDate1(millinSeconds) {
//     var date = new Date(millinSeconds);
//     var monthArr = new Array(
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Spt',
//       'Oct',
//       'Nov',
//       'Dec'
//     );
//     var suffix = new Array('st', 'nd', 'rd', 'th');

//     var year = date.getFullYear(); //年
//     var month = monthArr[date.getMonth()]; //月
//     var ddate = date.getDate(); //日
//     let hours = date.getHours(); //转换成时
//     let minutes = date.getMinutes(); //转换成分

//     let add = hours > 12 ? 'pm' : 'am';
//     // console.log(hours, minutes);

//     if (ddate % 10 < 1 || ddate % 10 > 3) {
//       ddate = ddate + suffix[3];
//     } else if (ddate % 10 == 1) {
//       ddate = ddate + suffix[0];
//     } else if (ddate % 10 == 2) {
//       ddate = ddate + suffix[1];
//     } else {
//       ddate = ddate;
//     }
//     return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}${add}`;
//   }

export default TimeMethod