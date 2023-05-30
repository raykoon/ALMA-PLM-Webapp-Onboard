import React, { useState,useEffect } from "react";
import styles from './progressBar.module.scss'

let list=[{
    name:'Dresses',
    num:30,
    color:'#13DE89'
},
{
    name:'Denim',
    num:19,
    color:'#7651F0'
},
{
    name:'Pants',
    num:17,
    color:'#F99500'
},
{
    name:'Jacket',
    num:10,
    color:'#00A3FF'
},
{
    name:'Outerwear',
    num:11,
    color:'#FF7394'
},
{
    name:'Beauty',
    num:9,
    color:'#FFE052'
},
{
    name:'Others',
    num:5,
    color:'#13DE89'
},
]

export default function Histogram() {


    const getArrMax=(arr)=> { // arr 接受一个数组  arr =  [3, 77, 44, 99, 143]
        var max = arr[0].num;
        for (var i = 1; i < arr.length; i++) {
            if (max < arr[i].num) {
                max = arr[i].num;
            }
        }
        return max;
    }
     return (
        <div className={styles.Histogram}>
            <div className={styles.content}>
                {
                    list&&list.map((res,index)=>{
                       return <div key={index} className={styles.item}>
                       <div className={styles.name}>{res.name}</div>
                       <div style={{
                          background:res.color,
                          width:(res.num/getArrMax(list)).toFixed(2)*60+'%'
                       }} className={styles.value}></div>
                       <div className={styles.text}>{res.num}%</div>
                       </div>
                    })
                }
            
            </div>
        </div>
     )
}