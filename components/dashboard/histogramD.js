import React, { useState,useEffect } from "react";
import styles from './progressBar.module.scss'


export default function HistogramD({name='',num=0,color='#f00'}) {
    
     return (
        <div className={styles.Histogram}>
            <div className={styles.content}>

                    <div className={styles.item}>
                       <div style={{
                         width:'auto',
                         paddingRight:'5px',
                         paddingLeft:'10px',
                         textAlign:'justify'
                       }} className={styles.name}>{name}</div>
                       <div style={{
                          background:color,
                          width:num+'%',
                       }} className={styles.value}></div>
                       </div>
            </div>
        </div>
     )
}