import React, { useState, useEffect } from "react";
import styles from './progressBar.module.scss'
import {Tooltip,Input} from 'antd'
import { Chart, Util } from '@antv/g2';
const data = [
  { type: 'ARPATEX', value: 0.26,color:'#FFE052' },
  { type: 'PURE DENIM', value: 0.21 ,color:'#7651F0'},
  { type: 'DINAMO', value: 0.13 ,color:'#13DE89'},
  { type: 'STAFF JERSEY', value: 0.15,color:'#00A3FF' },
  { type: 'CARLO BASSETTI', value: 0.09 ,color:'#FF7394'},
  { type: 'C&P Fabrics', value: 0.07 ,color:'#000000'},
  { type: 'BIOJERSEY', value: 0.05,color:'#F99500' },
  { type: 'Olmetex', value: 0.04 ,color:'#44DFDF'},

];
//   var chart 
export default function PieChart() {

    useEffect(()=>{
      const chart = new Chart({
        container: 'mountNode',
        autoFit: true,
        height: 250,
      });
      chart.data(data);
      
      chart.coordinate('theta', {
        radius: 0.75
      });
      chart.tooltip({
        showMarkers: false
      });
      // chart.legend({
      //   position: 'right',
      //   custom:true,
      //   items:()=>{
      //    return  data.map(res=>{
      //       return {
      //           name:`<div><div>`
      //       }
      //     })
      //   }
      // });
      chart.legend(false);
      const interval = chart
        .interval()
        .adjust('stack')
        .position('value')
        .color('type', ['#FFE052', '#7651F0', '#13DE89', '#00A3FF','#FF7394','#000000','#F99500','#44DFDF'])
        .style({ opacity: 0.4 })
        .state({
          active: {
            style: (element) => {
              const shape = element.shape;
              return {
                matrix: Util.zoom(shape, 1.1),
              }
            }
          }
        })
      
      chart.interaction('element-single-selected');
      
      chart.render();
    },[])

  return (
    <div className={styles.PieChart}>
         <div className={styles.mountNode} id='mountNode'></div>
         <div className={styles.right}>
              {
                data && data.map((res,index)=>{
                  return <div className={styles.item} key={index}>
                     
                    <div className={styles.leftBox}><span style={{background:res.color}}></span>{res.type}</div>
                    <div className={styles.rightBox}>{(res.value*100).toFixed(0)}%</div>
                  </div>
                })
              }
              <div className={styles.bottomBtn}>See all vendors</div>
         </div>
    </div>
  );
}
