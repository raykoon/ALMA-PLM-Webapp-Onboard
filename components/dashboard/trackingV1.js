import React, { useState, useEffect } from "react";
import styles from './progressBar.module.scss'
import Image from "next/image";
import icon from "../../public/images/icon.png";


let csList=[
    {
        type:'#f00',
        title:'BEHIND SCHEDULE',
        total:10,
        nowNumber:4,  //当前总数
        itemList:[
            {   //小项
            name:'Pre-Dev',
            num:3
        },
        {   //小项
            name:'In-Dev',
            num:1
        }
    ]
    },
    {
        type:'#F99500',
        title:'PENDING REQUESTS',
        total:5,
        nowNumber:3,  //当前总数
    },
    {
        type:'#7651F0',
        title:'AWAITING SAMPLE',
        total:10,
        nowNumber:6,  //当前总数
        itemList:[
            {   //小项
            name:'Pre-Dev',
            num:3
        },
        {   //小项
            name:'In-Dev',
            num:1
        },
        {   //小项
            name:'TOP',
            num:1
        },
        {   //小项
            name:'Fit',
            num:1
        }
    ]
    },
    {
        type:'#13DE89',
        title:'Order Acknowledgement',
        total:10,
        nowNumber:2,  //当前总数
        itemList:[
            {   //小项
            name:'Pre-Dev',
            num:3
        },
        {   //小项
            name:'In-Dev',
            num:1
        },
        {   //小项
            name:'TOP',
            num:1
        },
        {   //小项
            name:'Fit',
            num:1
        }
    ]
    },
]
export default function Tracking({list=csList}) {
  return (
    <div className={styles.Tracking}>
        {
            list?.map((res,index)=>{
               return  <div key={index} className={styles.itemBox}>
               <div className={styles.leftBox}>
               <div className={styles.title}>{res.title} ({res.nowNumber}) </div>
               <div  className={styles.speed}>
                   <div style={{
                       width:(res.nowNumber/res.total*100).toFixed(2)+'%',
                       background:res.type,
                       marginBottom:res.itemList?'':'0px'
                   }}></div>
               </div>
               <div className={styles.littleTerm}>
                   {
                    res?.itemList?.map((red,index1)=>{
                       return <div key={index1} className={styles.item}>
                         {red.name} ({red.num})
                       </div>
                    })
                   }
               </div>
               </div>
               <div className={styles.rightBox}>
                <Image layout="responsive" src={icon} alt='warning' />
               </div>
               </div>
            })
        }
       

    </div>
  );
}
