import React, { useState, useEffect } from "react";

import styles from './progressBar.module.scss'
import HistogramD from "./histogramD";  //使用柱状图组件

import {Table ,Input} from 'antd'

const columns = [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
        width:'50%',
        render: (res,red) =>{
            console.log(red)
            return <>
            <HistogramD name={red.name} num={red.num} color={red.color} />
          </>
        },
      },
    {
      title: 'Age',
      dataIndex: 'num',
      key: 'num',
      render:(res)=>{
        return <span style={{textDecoration:'underline',fontWeight:'700'}}>{res}</span>
      }
    },

  ];


let data=[{
    name:'Dresses',
    num:30,
    color:'#13DE89',
    key:1,
},
{
    key:2,
    name:'Denim',
    num:19,
    color:'#7651F0'
},
{
    key:3,
    name:'Pants',
    num:17,
    color:'#F99500'
},
{
    key:4,

    name:'Jacket',
    num:10,
    color:'#00A3FF'
},
]
export default function OnOrder() {
  return (
    <div className={styles.OnOrder}>
         <Table showHeader={false} bordered={true} pagination={false}  columns={columns} dataSource={data} />
        {/* {
            list && list.map((res,index)=>{
                return <div key={index} className={styles.itemBoxA}>
                <div className={styles.left}>
                <HistogramD name={res.name} num={res.num} color={res.color} />
                </div>
                <div className={styles.right}>{res.num}</div>
            </div>
            })
        } */}
    </div>
  );
}
