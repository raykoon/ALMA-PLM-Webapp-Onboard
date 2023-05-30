import React, { useState, useEffect } from "react";
import styles from './progressBar.module.scss'
import Image from "next/image";
import cs1 from "../../public/images/cs1.png";
import icon6 from "../../public/images/icon6.png";
import icon5 from "../../public/images/icon5.png";

import icon7 from "../../public/images/icon7.png";

import icon8 from "../../public/images/icon8.png";

import { Collapse } from "antd";
const { Panel } = Collapse;
export default function ShopBoxV1() {
  const [isShow, setIsShow] = useState(false);
  const [activeKey,setActiveKey]=useState([])
  const onChange = (key) => {
    console.log(key);
    setActiveKey(key)
  };
  return (
    <div className={styles.ShopBox}>
      <div className={styles.leftBox}>
        <Image layout="responsive" src={cs1} alt="cs" />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.title}>Style NAME</div>
        <div className={styles.text}>Style No 01234-001-F22</div>
        <Collapse style={{
            margin:' 7px 0 15px'
        }} activeKey={activeKey} onChange={onChange}>
          <Panel key="1">
          <div
  
          className={styles.isTab}
        >
          <div className={styles.itemDefault}>
            <div className={styles.textName}>Target season</div>
            <div className={styles.textValue}>Fall 2022</div>
          </div>
          <div className={styles.itemDefault}>
            <div className={styles.textName}>Target season</div>
            <div className={styles.textValue}>Fall 2022</div>
          </div>
          <div className={styles.itemDefault}>
            <div className={styles.textName}>Target season</div>
            <div className={styles.textValue}>Fall 2022</div>
          </div>
          <div className={styles.itemDefault}>
            <div className={styles.textName}>Purchase Order</div>
            <div className={styles.textValueSpecial}>
              <div className={styles.leftItem}>
                <div className={styles.topText}>
                  <span>PO estimated Date</span>
                </div>
                <div>-</div>
              </div>
              <div className={styles.leftItem}>
                <div className={styles.topText}>
                  <span>PO Days until due</span>
                </div>
                <div>-</div>
              </div>
            </div>
          </div>
        </div>
          </Panel>
        </Collapse>
        
        <div style={{
            marginTop:activeKey.length>0?'0px':'-8px'
        }} className={styles.btnList}>
          <div style={{
                 display: 'flex',
                 alignItems: 'center'
          }} onClick={() => setActiveKey(activeKey.length>0?[]:['1'])} className={styles.leftBtn}>
            {
              activeKey.length>0?<Image width={10} height={6} src={icon8} alt="cs" />:<Image width={10} height={6} src={icon6} alt="cs" />
            }
            
            <span style={{marginLeft:'3px'}}>
            {
                activeKey?.length>0?'Hide':'Details'
            }
            </span>
          </div>
          <div style={{
            background:activeKey?.length>0?'#000':'',
            color:activeKey?.length>0?'#fff':'',
            transition: '0.3s',
            display: 'flex',
            alignItems: 'center'
          }} className={styles.rightBtn}>
            {
              activeKey.length>0?<Image width={16} height={16} src={icon7} alt="cs" />:<Image width={16} height={16} src={icon5} alt="cs" />
            }
            <span style={{marginLeft:'3px'}}>Open Style Folder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
