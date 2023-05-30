import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import CustomButton from '../dashboard/customButton';
import icon9 from '../../public/images/icon9.png';
import Image from 'next/image';
// import cs1 from "../../public/images/cs1.png";
import cs1 from '../../public/images/sketch.png';
import xl6 from '../../public/images/styles/xl6.png';
import newIcon11 from '../../public/images/newIcon11.png';

import TagBox from './tagBox'; //标签组件
import { Table, Input, Checkbox, Col, Row } from 'antd';
// import sketch from '../../public/images/sketch.png'
import FrameBefore from '../../public/images/styles/FrameBefore.png';
import FrameAfter from '../../public/images/styles/FrameAfter.png';
import sketch from '../../public/images/newIcon10.png';

import Refresh from '../../public/images/styles/Refresh.png';

import icon4 from '../../public/images/icon4.png';
import mewIcon2 from '../../public/images/newIcon2.png';
import mewIcon3 from '../../public/images/newIcon3.png';
import mewIcon4 from '../../public/images/newIcon4.png';
import Filter from '../../public/images/styles/Filter.png';
import { dfFilter, LISTdata } from '../../utils/allJson';
import InitialsIcon from './InitialsIcon';
import newIcon12 from '../../public/images/newIcon12.png';

export default function BlockItemList({ setIsModalOpen, list }) {
  const tableHead = (a) => {
    return (
      <div className="customSelect_Other">
        <div className="customSelect_list">
          <Checkbox.Group
            style={{
              width: '100%',
            }}
            onChange={onChange}
          >
            <Row>
              {a?.filters &&
                a?.filters?.map((res, index) => {
                  return (
                    <Col className="item" key={index} span={24}>
                      <Checkbox value={res.value}>
                        {res.value == 'All Stages' ? (
                          res.value
                        ) : (
                          <CustomButton
                            padding="5px"
                            borderColor={res.color ? '' : '#000'}
                            color={res.color ? '#fff' : '#000'}
                            Bgcolor={res.color || '#fff'}
                            size={14}
                            name={res.value}
                          />
                        )}
                      </Checkbox>
                    </Col>
                  );
                })}
            </Row>
          </Checkbox.Group>
        </div>
        <div className="customSelect_btn">
          <Image height={20} width={20} src={Refresh} alt="xl" />
          <span>Clear selection</span>
        </div>
      </div>
    );
  };
  const [DropdownVisible, setDropdownVisible] = useState('');
  const columns = [
    {
      title: 'Style',
      dataIndex: 'name',
      filters: dfFilter,
      filterIcon: (
        <div
          onClick={() => {
            if (DropdownVisible == 'Style') {
              setDropdownVisible('');
            } else {
              setDropdownVisible('Style');
            }
          }}
          className="filterIcon"
        >
          <Image height={25} width={25} src={newIcon12} alt="xl" />
        </div>
      ),
      render: (value, allValue) => {
        return (
          <div className={styles.nameBox}>
            <div className={styles.nameLeft}>
              {allValue?.coverImage && (
                // <Image
                //   width={51}
                //   height={51}
                //   src={allValue?.coverImage}
                //   alt="cs"
                // />
                <img style={{width:'51px',height:'51px'}} src={allValue?.coverImage} />
              )}
            </div>
            <div className={styles.nameRight}>
              <div className={styles.nameTop}>{value}</div>
              <div className={styles.nameBottom}>
                {allValue?.style}
                {/* <TagBox type={allVlaue.Development} /> */}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: 'Style Nº',
      dataIndex: 'styleNo',
      width: '11%',
      className: DropdownVisible == 'Style' ? 'csValue' : '',
      //   filters: dfFilter,
      //   filterDropdownVisible:DropdownVisible=='Style'?true:false,
      //   onFilter: (value, record) => record.address.startsWith(value),
      //   filterDropdown: (a) => {
      //     return (
      //       tableHead(a)
      //     );
      //   },
      //   filterIcon: (
      //     <div onClick={()=>{
      //          if(DropdownVisible=='Style'){
      //               setDropdownVisible('')
      //          }else{
      //           setDropdownVisible('Style')
      //          }
      //     }} className="filterIcon">
      //       {
      //         DropdownVisible=='Style' && <Image height={25} width={25} src={FrameAfter} alt="xl" />
      //       }
      //       {
      //         DropdownVisible!='Style' && <Image height={25} width={25} src={FrameBefore} alt="xl" />
      //       }
      //     </div>
      //   ),
    },
    {
      title: 'Created by',
      dataIndex: 'Target',
      width: '11%',
      className: DropdownVisible == 'Target' ? 'csValue' : '',
      filters: dfFilter,
      filterDropdownVisible: DropdownVisible == 'Target' ? true : false,
      onFilter: (value, record) => record.address.startsWith(value),
      filterDropdown: (a) => {
        return tableHead(a);
      },
      filterIcon: (
        <div
          onClick={() => {
            if (DropdownVisible == 'Target') {
              setDropdownVisible('');
            } else {
              setDropdownVisible('Target');
            }
          }}
          className="filterIcon"
        >
          {DropdownVisible == 'Target' && (
            <Image height={20} width={20} src={FrameAfter} alt="xl" />
          )}
          {DropdownVisible != 'Target' && (
            <Image height={20} width={20} src={FrameBefore} alt="xl" />
          )}
        </div>
      ),
      render: (value, allValue) => {
        return (
          <div>
            <InitialsIcon color={allValue.color} title={allValue.sx} /> {value}
          </div>
        );
      },
    },
    {
      title: 'Last Modified',
      dataIndex: 'Product',
      width: '11%',
      className: DropdownVisible == 'Product' ? 'csValue' : '',
      filters: dfFilter,
      filterDropdownVisible: DropdownVisible == 'Product' ? true : false,
      onFilter: (value, record) => record.address.startsWith(value),
      filterDropdown: (a) => {
        return tableHead(a);
      },
      filterIcon: (
        <div
          onClick={() => {
            if (DropdownVisible == 'Product') {
              setDropdownVisible('');
            } else {
              setDropdownVisible('Product');
            }
          }}
          className="filterIcon"
        >
          {DropdownVisible == 'Product' && (
            <Image height={20} width={20} src={FrameAfter} alt="xl" />
          )}
          {DropdownVisible != 'Product' && (
            <Image height={20} width={20} src={FrameBefore} alt="xl" />
          )}
        </div>
      ),
    },

    {
      title: ' Style Status',
      dataIndex: 'Fabric',
      width: '11%',
      className: DropdownVisible == 'Fabric' ? 'csValue' : '',
      filters: dfFilter,
      filterDropdownVisible: DropdownVisible == 'Fabric' ? true : false,
      onFilter: (value, record) => record.address.startsWith(value),
      filterDropdown: (a) => {
        return tableHead(a);
      },
      filterIcon: (
        <div
          onClick={() => {
            if (DropdownVisible == 'Fabric') {
              setDropdownVisible('');
            } else {
              setDropdownVisible('Fabric');
            }
          }}
          className="filterIcon"
        >
          {DropdownVisible == 'Fabric' && (
            <Image height={20} width={20} src={FrameAfter} alt="xl" />
          )}
          {DropdownVisible != 'Fabric' && (
            <Image height={20} width={20} src={FrameBefore} alt="xl" />
          )}
        </div>
      ),
      render: (value, allValue) => {
        return allValue.status === 1 ? (
          <CustomButton
            size={14}
            color="#FF7394"
            padding="5px"
            Bgcolor="rgba(255, 115, 148, 0.1)"
            name="Design"
          /> //#7651F0  Pre-Dev
        ) : allValue.status === 2 ? (
          <CustomButton
            size={14}
            color="#00A3FF"
            padding="5px"
            Bgcolor="rgba(0, 163, 255, 0.1)"
            name="Development"
          /> //#00A3FF   In-Dev
        ) : allValue.status === 3 ? (
          <CustomButton
            size={14}
            color="#00C773"
            padding="5px"
            Bgcolor="rgba(19, 222, 137, 0.1)"
            name="Adopted"
          /> //#13DE89   Adopted
        ) : allValue.status === 4 ? (
          <CustomButton
            size={14}
            color="rgba(0, 0, 0, 0.3)"
            padding="5px"
            Bgcolor="rgba(0, 0, 0, 0.05)"
            name="Cancelled / Inactive"
          />
        ) : (
          <CustomButton
            size={14}
            color="rgba(0, 0, 0, 0.3)"
            padding="5px"
            Bgcolor="rgba(0, 0, 0, 0.05)"
            name="-"
          />
        ); //#FF7394   Droppe                //无颜色带边框  In Production
      },
    },
    {
      title: 'Development status',
      dataIndex: 'Development',
      width: '11%',
      className: DropdownVisible == 'Development' ? 'csValue' : '',
      filters: dfFilter,
      filterDropdownVisible: DropdownVisible == 'Development' ? true : false,
      onFilter: (value, record) => record.address.startsWith(value),
      filterDropdown: (a) => {
        return tableHead(a);
      },
      filterIcon: (
        <div
          onClick={() => {
            if (DropdownVisible == 'Development') {
              setDropdownVisible('');
            } else {
              setDropdownVisible('Development');
            }
          }}
          className="filterIcon"
        >
          {DropdownVisible == 'Development' && (
            <Image height={20} width={20} src={FrameAfter} alt="xl" />
          )}
          {DropdownVisible != 'Development' && (
            <Image height={20} width={20} src={FrameBefore} alt="xl" />
          )}
        </div>
      ),
      render: (value) => {
        return value === 1 ? (
          <CustomButton
            size={14}
            padding="5px"
            Bgcolor="#7651F0"
            name="Pre-Dev"
          /> //#7651F0  Pre-Dev
        ) : value === 2 ? (
          <CustomButton
            size={14}
            padding="5px"
            Bgcolor="#00A3FF"
            name="In-Dev"
          /> //#00A3FF   In-Dev
        ) : value === 3 ? (
          <CustomButton
            size={14}
            padding="5px"
            Bgcolor="#13DE89"
            name="Adopted"
          /> //#13DE89   Adopted
        ) : value === 4 ? (
          <CustomButton
            size={14}
            padding="5px"
            Bgcolor="#FF7394"
            name="Dropped"
          /> //#FF7394   Dropped
        ) : (
          <CustomButton
            size={14}
            color="#000"
            padding="5px"
            Bgcolor="#fff"
            borderColor="#000"
            name="In Production"
          />
        ); //无颜色带边框  In Production
      },
    },
    {
      title: 'Activity & Comments',
      dataIndex: 'Vendor',
      width: '11%',
      className: DropdownVisible == 'Vendor' ? 'csValue' : '',
      render: (value, allValue) => {
        return (
          <div className={styles.tagList}>
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                {' '}
                <Image width={15} height={15} src={mewIcon2} />
              </div>
              <div
                style={{
                  background: '#00DD81',
                }}
                className={styles.itemNum}
              >
                {allValue?.Comment}
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                {' '}
                <Image width={15} height={15} src={mewIcon3} />
              </div>
              <div
                style={{
                  background: '#00A3FF',
                }}
                className={styles.itemNum}
              >
                {allValue?.update}
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                {' '}
                <Image width={15} height={15} src={mewIcon4} />
              </div>
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.1)',
                  color: '#000',
                }}
                className={styles.itemNum}
              >
                {allValue?.activity}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: 'Options',
      dataIndex: 'Purchase',
      className: DropdownVisible == 'Purchase' ? 'csValue' : '',

      //   filters: dfFilter,
      //   filterDropdownVisible:DropdownVisible=='Purchase'?true:false,
      //   onFilter: (value, record) => record.address.startsWith(value),
      //   filterDropdown: (a) => {
      //     return (
      //       tableHead(a)
      //     );
      //   },
      //   filterIcon: (
      //     <div onClick={()=>{
      //          if(DropdownVisible=='Purchase'){setDropdownVisible('')}else{ setDropdownVisible('Purchase')}
      //     }} className="filterIcon">
      //       {DropdownVisible=='Purchase' && <Image height={25} width={25} src={FrameAfter} alt="xl" />}
      //       {DropdownVisible!='Purchase' && <Image height={25} width={25} src={FrameBefore} alt="xl" />}
      //     </div>
      //   ),
      //   filterSearch: true,
      width: '12.5%',
      render: () => {
        // return <div className={styles.sortBox}>
        //    <div className={styles.leftBox}>
        //      <div className={styles.title}>PO Days until due</div>
        //      <div className={styles.value}>adsfda</div>

        //    </div>
        //    <div className={styles.rightBox}>
        //    <div className={styles.title}>PO est. Date</div>
        //      <div className={styles.value}>-</div></div>
        // </div>

        return (
          <div className={styles.newSortBox}>
            <div
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <CustomButton
                isQiCON={true}
                Bgcolor="#fff"
                color="#000"
                borderColor="#000"
                padding="3px 10px"
                name="Quick view"
                icon={xl6}
              />
            </div>
            <div>
              <Image width={28} height={28} src={newIcon11} />
            </div>
          </div>
        );
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className={styles.blockItemList}>
      <div className="listTable">
        <Table
          pagination={false}
          columns={columns}
          dataSource={list}
          onChange={onChange}
        />
      </div>
      {DropdownVisible && <div className={styles.zzc}></div>}
    </div>
  );
}
