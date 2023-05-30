import React, { useState, useEffect } from "react";
import styles from './progressBar.module.scss'
import {Input} from 'antd'
import { SearchOutlined } from '@ant-design/icons';


export default function SearchBox({size='',border=false,pl='Search a Status by SKU or Style name',btnName='Search',isIcon=true,SearchBoxOptions=null}) {
  return (
    <div style={{
      border:border?'1px solid rgb(204,204,204)':'',
      borderRadius:border?'2px':'',
      padding:border?'5px':''
    }} className={styles.SearchBox}>
    <div className="csSearchAll">
    <Input
      placeholder={pl}
      className='DASHBOARDinput'
       onInput={(e)=>{
           console.log(e.target.value)
           SearchBoxOptions.setName && SearchBoxOptions.setName(e.target.value)
       }} 
      prefix={isIcon && <div  className={styles.btnSearch}>
        <SearchOutlined style={{fontSize:'16px'}} />
      </div>}
      suffix={
        <div onClick={()=>{
          console.log(SearchBoxOptions)
          SearchBoxOptions.getList && SearchBoxOptions.getList(1,10)
        }} style={{
          fontSize:size?size:''
        }} className={styles.btnSubmit} >{btnName}</div>
      }
    />
    </div>
    </div>
  );
}
