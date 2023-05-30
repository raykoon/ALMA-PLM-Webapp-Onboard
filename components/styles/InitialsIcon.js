//首字母生成ICON


import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Tooltip } from "antd";
import Image from "next/image";
import { IconMap } from "antd/lib/result";

export default function InitialsIcon({
  title='BY',
  width='20px',
  size='12px',
  color='#f00'
}) {

  return (
    <div style={{
        fontSize:size,
        width:width,
        height:width,
        background:color,
        display:'inline-block',
        verticalAlign:'middle',
        lineHeight:width
    }} className={styles.InitialsIcon}>
         {title}
    </div>
  );
}
