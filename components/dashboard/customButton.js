import React, { useState, useEffect } from 'react';
import styles from './progressBar.module.scss';
import { Tooltip } from 'antd';
import Image from 'next/image';
import { IconMap } from 'antd/lib/result';

export default function CustomButton({
  name = '', //按钮文字
  color = '#fff', //文字颜色
  icon = '', //按钮右侧ICON
  isBlock = false,
  iconFont = '',
  iconFontSize = '14px',
  iconFontColor = '',
  Bgcolor = '#000', //按钮背景颜色
  borderColor = '', //边框颜色
  padding = '5px',
  size = 12, //文字大小
  isQiCON = false, //Icon是否在前边
  margin = '0',
  onClick,
  distance='3px',
  boxShadow = '',
  borderRadius = '',
}) {
  useEffect(() => {
    console.log(icon);
  }, []);
  return (
    <div
      onClick={onClick}
      style={{
        // width: isBlock ? "100%" : "",
        // display: size !== 12 ? "inline-block" : "",
        display: isBlock ? 'block' : 'inline-block',
        background: Bgcolor,
        border: borderColor ? `1px solid ${borderColor}` : 'none',
        color: color,
        padding: padding,
        fontSize: size + 'px',
        margin: margin,
        boxShadow: boxShadow,
        borderRadius: borderRadius,
      }}
      className={styles.CustomButton}
    >
      {iconFont && (
        <i
          className={`iconfont ${iconFont}`}
          style={{
            position: 'relative',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: distance,
            color: iconFontColor && `${iconFontColor}`,
            fontSize: `${iconFontSize}`,
          }}
        ></i>
      )}
      {icon && isQiCON && (
        <div
          style={{
            position: 'relative',
            top: name ? '2px' : '-1px',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: distance,
          }}
        >
          <Image
            width={icon.width / 2}
            height={icon.height / 2}
            src={icon.src}
            alt="logo"
          />
        </div>
      )}
      {name && (
        <div
          style={{
            marginRight: icon ? '5px' : '0',
          }}
          className={styles.name}
        >
          {name}
        </div>
      )}
      {icon && !isQiCON && (
        <div
          style={{
            position: 'relative',
            top: name ? '1px' : '-1px',
          }}
        >
          <Image
            width={icon.width / 2}
            height={icon.height / 2}
            src={icon.src}
            alt="logo"
          />
        </div>
      )}
    </div>
  );
}
