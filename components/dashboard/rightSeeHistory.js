import React, { useState, useEffect } from "react";
import styles from "./progressBar.module.scss";
import newIcon13 from "../../public/images/cs1.png";
import newIcon14 from "../../public/images/newIcon14.png";
import newIcon15 from "../../public/images/newIcon15.png";
import newIcon3 from "../../public/images/newIcon3.png";
import newIcon4 from "../../public/images/newIcon4.png";

import Image from "next/image";
import CustomButton from "./customButton";
import IconJt from "../../public/images/newIcon36.png";
import newIcon37 from '../../public/images/newIcon37.png'
import { Select, Timeline, Checkbox, Col, Row } from "antd";
import { dfFilter2, dfFilter3 } from "../../utils/allJson";
import check from '../../public/images/check.png'

import InitialsIcon from "../styles/InitialsIcon";
const { Option } = Select;

let list = ["All activity", "My activity", "Vendor acvitity"];
export default function RightSeeHistory({value,setIsShowTc}) {
  return (
    <div style={{
        right:value?'0':'-508px',
        transition:'0.3s'
    }} className={styles.RightSeeHistory}>
      <div
        onClick={() => {
          setIsShowTc(false);
        }}
        className={styles.backOf}
      >
        <div>Close filters</div>
        <div>
          <Image width={20} height={20} src={newIcon15} />
        </div>
      </div>

      <div className={styles.topBox}>
        <div className={styles.left}>
          <Image width={86} height={86} src={newIcon13} />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>THE ALICE FROCK</div>
          <div className={styles.xtitle}>T01-3455-945-30</div>
          <div className={styles.btn}>
            <CustomButton
              padding="6px 15px 6px 23px"
              Bgcolor="#fff"
              borderColor="#000"
              color="#000"
              name="Open Style Sheet"
              icon={IconJt}
            />
          </div>
        </div>
      </div>

      <div className={styles.sjzBox}>
        <div className="rightBoxSelect" style={{ textAlign: "right" }}>
          Show{" "}
          <Select
            defaultValue="All activity"
            style={{
              width: 150,
              marginRight: "15px",
              textAlign: "justify",
            }}
          >
            <Option value="Seaso1">
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <Image width={20} height={20} src={newIcon3} />
                All activity
              </div>
            </Option>
            <Option value="Seaso2">
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <Image width={20} height={20} src={newIcon15} />
                My activity
              </div>
            </Option>
            <Option value="Seaso3">
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <Image width={20} height={20} src={newIcon4} />
                Vendor acvitity
              </div>
            </Option>
          </Select>
        </div>

        <div className={styles.contentBox}>
          <Timeline>
          <Timeline.Item dot=' '>
             
            </Timeline.Item>
            <Timeline.Item dot='Just now'>
                <div className={styles.itemSjBox1}>
                    <div className={styles.left}></div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <span className={styles.iconBox}>AW</span> Ann Wu
                        </div>
                        <div className={styles.xtitle}>left a new comment on the tech pack</div>
                        <div className={styles.textBox}>It looks like the sample request hasn’t been submitted. @BeccaYang Could you follow up?</div>
                    </div>
                </div>
            </Timeline.Item>
            <Timeline.Item dot='20min ago'>
            <div className={styles.itemSjBox2}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <span style={{background:'#F19100'}} className={styles.iconBox}>AW</span> Ann Wu
                        </div>
                        <div className={styles.textBox}>issued PO for this style to Pure Denim</div>
                    </div>
                </div>
            </Timeline.Item>
            <Timeline.Item dot='20min ago'>
            <div style={{background:'rgba(118, 81, 240, 0.1)'}} className={styles.itemSjBox2}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <span style={{background:'#7651F0'}} className={styles.iconBox}>AW</span> Ann Wu
                        </div>
                        <div className={styles.textBox}>issued PO for this style to Pure Denim</div>
                    </div>
                </div>
            </Timeline.Item>
            <Timeline.Item dot='20min ago'>
            <div  className={styles.itemSjBox2}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <span style={{background:'#00A3FF'}} className={styles.iconBox}>AW</span> Ann Wu
                        </div>
                        <div className={styles.textBox}>
                            <div>updated the development stage to</div>
                            <div><CustomButton padding="2px 3px" color="#000" size={14} Bgcolor='#02F2AA' name='SMS' /></div>
                        </div>
                    </div>
                </div>
            </Timeline.Item>
            <Timeline.Item dot='20min ago'>
            <div style={{background:'rgba(118, 81, 240, 0.1)'}}  className={styles.itemSjBox2}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <span style={{background:'#00A3FF'}} className={styles.iconBox}>AW</span> Ann Wu
                        </div>
                        <div className={styles.xtitle}>left a new comment on the tech pack</div>
                        <div className={styles.textBox}>
                            <Image src={newIcon37} />
                        </div>
                    </div>
                </div>
            </Timeline.Item>
            <Timeline.Item dot='20min ago'>
            <div  className={styles.itemSjBox2}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <span style={{background:'#00A3FF'}} className={styles.iconBox}>AW</span> Ann Wu
                        </div>
                        <div className={styles.xtitle}>left a new comment on the tech pack</div>
                        <div className={styles.textBox}>
                           <div className={styles.tsBox}>
                               <div style={{width:'18px',height:'18px',borderRadius:'50%',background:'#81A0BA'}}></div>
                               <div style={{margin:'0 5px',fontSize:'14px',lineHeight:'19px'}}>Glacier Lake</div>
                               <div style={{margin:'0 5px 0 0',fontSize:'12px',lineHeight:'16px',color:'rgba(0, 0, 0, 0.5)'}}>16-4118 TCX</div>
                               <div style={{marginRight:'10px',position:'relative',top:'3px'}}> <Image width={20} height={20} src={check} /></div>
                           </div>
                        </div>
                    </div>
                </div>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
