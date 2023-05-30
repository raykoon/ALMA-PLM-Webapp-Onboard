//图片放大

import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import sketch from '../../public/images/sketch.png'
import {CloseOutlined } from '@ant-design/icons';


//目前支持全屏放大
export default function ImageBigLook({
    imgUrl=sketch,
    setImgUrl=''   //关闭
}) {

  return (
    <div className={styles.ImageBigLook}>
       <div onClick={()=>{
        setImgUrl()
       }}><CloseOutlined spin={false} style={{
        fontSize:'40px',
        color:'#fff'
       }} /></div>
       <div className={styles.ImageBox}>
       <Image layout='responsive' src={imgUrl} />
        </div>
    </div>
  );
}
