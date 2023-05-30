import React, { useState,useEffect } from "react";
import styles from './progressBar.module.scss'
// import  '../styles/progressBar.module.scss'


   const csList=[
    {
        name:'New',
        num:10,
        color:'#FFE052'
    },
    {
        name:'Pre-Dev',
        num:12,
        color:'#7651F0'
    },
    {
        name:'In-Dev',
        num:10,
        color:'#00A3FF'
    },
    {
        name:'Adopted',
        num:9,
        color:'#13DE89'
    },
    {
        name:'Dropped',
        num:1,
        color:'#FF7394'
    },
    {
        name:'In Production',
        num:0,
        color:'#000'
    }
   ]

export default function ProgressBar({list=csList}) {

  return (
    <div className={styles.ProgressBarbox}>
       <div className={styles.topBox}>
          {
            list && list.map((res,index)=>{
               return <div style={{
                background:res.color,
                width:res.num+'%',
                color:res.color,
                userSelect:'none',
                borderLeft:index==0?'none':'1px solid #fff',
                boxSizing:'border-box',
                height:'20px'
                // borderRight:'1px solid #fff',
               }} key={index}>
                <span style={{opacity:'0'}}>1</span>
               </div>
            })
          }
       </div>
       <div className={styles.BottomBox}>
          {
            list && list.map((res,index)=>{
                return <div className={styles.itemBox} key={index}>
                    <div style={{background:res.color}} className={styles.ball}></div>
                    <div className={styles.text}>{res.name}</div>
                    <div className={styles.textNum}>{res.num}</div>
                </div>
            })
          }
       </div>


    </div>
  )
}
