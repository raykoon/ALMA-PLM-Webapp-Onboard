import React, { useState, useEffect } from "react";
import Image from "next/image";
import InitialsIcon from "../../components/styles/InitialsIcon";
import CustomButton from "../../components/dashboard/customButton";
import Refresh from "../../public/images/styles/Refresh.png";

import { SettingOutlined } from "@ant-design/icons";
import { Collapse,Checkbox, Col, Row  } from "antd";
import Styles from "./styles.module.scss";
import newIcon13 from '../../public/images/newIcon13.png'
import newIcon14 from '../../public/images/newIcon14.png'
import newIcon15 from '../../public/images/newIcon15.png'
import newIcon16 from '../../public/images/newIcon16.png'


import {
    dfFilter2,
    dfFilter3
  } from '../../utils/allJson'
const { Panel } = Collapse;


export default function Filters({value,setIsShowTc}) {
    const genExtra = (value) => {
        if(activeList.indexOf(value)==-1){
            return <Image width={15} height={15} src={newIcon13} />
        }else{
            return <Image width={15} height={15} src={newIcon14} />
        }
    
    };
  const onChange = (key) => {
    console.log(key);
  };
  const tableHeadComplex = (a) => {
    return (
      <div style={{
        width:'100%',
        background:'#FFFFFF',
        boxShadow:'none'
      }} className="customSelect_Other2">
        <div className="customSelect_list">
          <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={onChange}
          >
            <Row>
              {a?.filters &&
                a?.filters?.map((res, index) => {
                  return (
                    <Col style={{
                        height:"40px",
                        border:'none'
                    }} className="item" key={index} span={24}>
                      <Checkbox value={res.value}>
                        <div style={{display:'flex',justifyContent:'flex-start',alignContent:'center',marginBottom:'5px',fontSize:'12px'}}>
                           <div><InitialsIcon width="18px" size="12px" color={res.color} title={res.title} /></div>
                           <div style={{lineHeight:'20px',fontSize:'14px'}}>{res.value}</div>
                           <div style={{lineHeight:'20px',padding:'0 10px',background:'rgba(0, 0, 0, 0.05)',borderRadius:'10px',marginLeft:'5px',color:'rgba(0, 0, 0, 0.5)'}}>
                            {res.value}
                            </div>
                        </div>
                        <div>
                        </div>
                      </Checkbox>
                    </Col>
                  );
                })}
            </Row>
          </Checkbox.Group>
        </div>

      </div>
    );
  };

  const Division=(a)=>{
      return (
        <div style={{
            width:'100%',
            background:'#FFFFFF',
            boxShadow:'none',

          }} className="customSelect_Other2">
            <div className="customSelect_list">
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                onChange={onChange}
              >
                <Row>
                  {a?.filters &&
                    a?.filters?.map((res, index) => {
                      return (
                        <Col style={{
                            height:"40px",
                            border:'none'
                        }} className="item" key={index} span={24}>
                          <Checkbox value={res.value}>
                            <div style={{display:'flex',justifyContent:'flex-start',alignContent:'center',marginBottom:'5px',fontSize:'12px'}}>
                               {/* <div><InitialsIcon width="18px" size="12px" color={res.color} title={res.title} /></div> */}
                               <div style={{lineHeight:'20px',            fontSize:'16px'}}>{res.value}</div>
                            </div>
                            <div>
                            </div>
                          </Checkbox>
                        
                        </Col>
                      );
                    })}
                </Row>
              </Checkbox.Group>
            </div>
            <div style={{
               width:'100%',
               background:'rgba(0, 0, 0, 0.05)',
               padding:'5px 0 5px 10px',
               fontSize:'12px',
               color:'rgba(0, 0, 0, 0.7)',
               display:'flex',
               alignItems:'center',
               lineHeight:'16px'
            }}>
            <div style={{
                marginRight:'10px',
                // position:'relative'
            }}><Image width={15} height={15} src={newIcon13} /> </div>ADD CUSTOM DIVISION
            </div>
          </div>
      )
  }


  const DivisionOne=(a)=>{
    return (
      <div style={{
          width:'100%',
          background:'#FFFFFF',
          boxShadow:'none',

        }} className="customSelect_Other2">
          <div className="customSelect_list">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onChange}
            >
              <Row>
                {a?.filters &&
                  a?.filters?.map((res, index) => {
                    return (
                      <Col style={{
                          maxHeight:index>1?"80px":'40px',
                          border:'none',
                        
                      }} className="item" key={index} span={24}>
                        <Checkbox value={res.value}>
                          <div style={{display:'flex',justifyContent:'flex-start',alignContent:'center',marginBottom:'5px',fontSize:'12px'}}>
                             {/* <div><InitialsIcon width="18px" size="12px" color={res.color} title={res.title} /></div> */}
                             <div style={{lineHeight:'20px', fontSize:'16px'}}>{res.value}</div>
                          </div>
                          <div>
                          </div>
                          {
                            index>1 && <div style={{
                                width:'280px',
                                display:'flex',
                                justifyContent:'space-between',
                                marginBottom:'0px'
                            }}>
                              <CustomButton padding="12px 50px 12px 6px" isQiCON={true} icon={newIcon16} name={'Start Date'} Bgcolor={'rgba(0, 0, 0, 0.05)'} color={'rgba(0, 0, 0, 0.5)'} />
                              <CustomButton padding="12px 50px 12px 6px" isQiCON={true} icon={newIcon16} name={' End date'} Bgcolor={'rgba(0, 0, 0, 0.05)'} color={'rgba(0, 0, 0, 0.5)'} />
                            </div>
                          }
                        </Checkbox>
                       
                      </Col>
                    );
                  })}
              </Row>
            </Checkbox.Group>
          </div>
          <div style={{
             width:'100%',
             background:'rgba(0, 0, 0, 0.05)',
             padding:'5px 0 5px 10px',
             fontSize:'12px',
             color:'rgba(0, 0, 0, 0.7)',
             display:'flex',
             alignItems:'center',
             lineHeight:'16px'
          }}>
          <div style={{
              marginRight:'10px',
              // position:'relative'
          }}><Image width={15} height={15} src={newIcon13} /> </div>ADD CUSTOM DIVISION
          </div>
        </div>
    )
}

    const StyleStatus=(a)=>{
        return (
            <div style={{
                width:'100%',
                background:'#FFFFFF',
                boxShadow:'none',
    
              }} className="customSelect_Other2">
                <div className="customSelect_list">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChange}
                  >
                    <Row>
                      {a?.filters &&
                        a?.filters?.map((res, index) => {
                          return (
                            <Col style={{
                                height:"40px",
                                border:'none'
                            }} className="item" key={index} span={24}>
                              <Checkbox value={res.value}>
                                <div style={{display:'flex',justifyContent:'flex-start',alignContent:'center',marginBottom:'5px',fontSize:'12px'}}>
                                   <CustomButton name={res.value} Bgcolor={res.bgcolor || res.color} color={res.bgcolor?res.color:'#fff'} />
                                   {/* <div style={{lineHeight:'20px',            fontSize:'16px'}}>{res.value}</div> */}
                                </div>
                                <div>
                                </div>
                              </Checkbox>
                            </Col>
                          );
                        })}
                    </Row>
                  </Checkbox.Group>
                </div>
                <div style={{
                   width:'100%',
                   background:'rgba(0, 0, 0, 0.05)',
                   padding:'5px 0 5px 10px',
                   fontSize:'12px',
                   color:'rgba(0, 0, 0, 0.7)',
                   display:'flex',
                   alignItems:'center',
                   lineHeight:'16px'
                }}>
                <div style={{
                    marginRight:'10px',
                    // position:'relative'
                }}><Image width={15} height={15} src={newIcon13} /> </div>ADD CUSTOM STYLE STATUS
                </div>
              </div>
        )
    }
   const [activeList,setActiveList]=useState(['1']) //默认打开1
  return (
    <div style={{
        right:value?'0':'-408px',
        transition:'0.3s'
    }} className={Styles.Filters}>
      <div className="FiltersBox">
      <div onClick={()=>{
           setIsShowTc(false)
      }} className={Styles.backOf}>
          <div>Close filters</div>
          <div><Image width={20} height={20} src={newIcon15} /></div>
      </div>
      <div className={Styles.btnList}>
      <CustomButton padding="10px" name='Clear All' Bgcolor={'rgba(0, 0, 0, 0.1)'} color={'#000'} />
      <CustomButton padding="10px" name='Apply' Bgcolor={'#000'} color={'#fff'} />
          
      </div>
      <div className={Styles.itemBox}>
        <Collapse  activeKey={activeList} onChange={(e)=>{
        //  console.log(e)
        setActiveList(e)
        }}>
          <Panel showArrow={false} extra={genExtra('1')} header="Styles assigned to" key="1">
              <div >{tableHeadComplex({filters: dfFilter2,})}</div>
          </Panel>
          <Panel showArrow={false} extra={genExtra('2')} header="Division" key="2">
              <div >{Division({filters: dfFilter2,})}</div>
          </Panel>
          <Panel showArrow={false} extra={genExtra('3')} header="Division" key="3">
              <div >{Division({filters: dfFilter2,})}</div>
          </Panel>
          <Panel showArrow={false} extra={genExtra('4')} header="Division" key="4">
              <div >{Division({filters: dfFilter2,})}</div>
          </Panel>
          <Panel showArrow={false} extra={genExtra('5')} header="Division" key="5">
              <div >{StyleStatus({filters: dfFilter3})}</div>
          </Panel>
          <Panel showArrow={false} extra={genExtra('6')} header="Division" key="6">
              <div >{StyleStatus({filters: dfFilter2})}</div>
          </Panel>
          <Panel showArrow={false} extra={genExtra('7')} header="Division" key="7">
              <div >{Division({filters: dfFilter2,})}</div>
          </Panel>
          <Panel showArrow={false} extra={genExtra('8')} header="Division" key="8">
              <div >{Division({filters: dfFilter2,})}</div>
          </Panel>
          <Panel showArrow={false} extra={genExtra('9')} header="Division" key="9">
              <div >{DivisionOne({filters: dfFilter2,})}</div>
          </Panel>
        </Collapse>
      </div>
      </div>
    </div>
  );
}
