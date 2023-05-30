import React, { useState, useEffect } from "react";
import styles from './progressBar.module.scss'
import {Tooltip,Input} from 'antd'

import { SearchOutlined } from '@ant-design/icons';

export default function TitleName({ name = "默认标题" }) {
  return (
    <div className={styles.TitleName}>
      <div className={styles.leftName}>{name}</div>
      <div className={styles.rightName}>
      <SearchOutlined style={{fontSize:'16px',position:'absolute',left:'5px',width:'16px',zIndex:'2',top:'8px'}} />
      <div className="blackBoxText">
      <Input
           style={{
            background:'rgb(242,242,242)',
            fontSize:'12px',
            border:'none',
            paddingLeft:'25px',
            lineHeight:'24px'
           }}
          placeholder="All styles by categories"
        />
                 </div>
        
      </div>
    </div>
  );
}
