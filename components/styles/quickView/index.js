import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Select, Input, Table } from 'antd';
import { ReactSortable } from 'react-sortablejs';
import Image from 'next/image';
import styles from './index.module.scss';
import newIcon10 from '../../../public/images/newIcon10.png';
import { postAxios, getAxios } from '../../../utils/axios';
import { API_STATUS } from '../../../utils/statusCode';
import DargTd from './components/DargTd';
import CoverImgBox from './components/CoverImgBox';

const Index = ({
  info,
  tenantId,
  userInfo,
  reqStylesInfoEdit,
  reqAddActivityLog,
  resTypeOptions,
  newStyleInfo,
  setNewStyleInfo,
  resAddTypeOptions,
  reqBooksList,
  reqTeamList,
  resUploadFileV2,
  setInfo,
}) => {
  {
    console.log('userInfo', userInfo);
  }
  const columns = [
    {
      id: 1,
      title: `Size Range (Sample size)`,
      dataIndex: 'title',
    },
    {
      id: 2,
      title: 'XS',
      width: 70,
      dataIndex: 'xs',
    },
    {
      id: 3,
      title: 'S',
      width: 70,
      dataIndex: 's',
    },
    {
      id: 4,
      title: 'M',
      width: 70,
      dataIndex: 'm',
    },
    {
      id: 4,
      title: 'L',
      width: 70,
      dataIndex: 'l',
    },
  ];

  const dataTd = [
    {
      title: 'Order Quantity',
      xs: 123,
      s: 568,
      m: 689,
      l: 279,
    },
    {
      title: 'Sold quantity',
      xs: 100,
      s: 518,
      m: 660,
      l: 279,
    },
    {
      title: 'Left in Stock',
      xs: 23,
      s: 50,
      m: 29,
      l: 0,
    },
  ];

  const [dargList, setDargList] = useState([]);

  const dragListSort = async () => {
    const newList = [];
    dargList.forEach((item) => {
      newList.push({
        title: item.title,
        name: item.name,
        type: item.type,
        fixed: item.fixed,
      });
    });

    const template = JSON.stringify(newList);
    const res = await postAxios({
      url: '/styles/style_library/update',
      data: {
        styleId: info.styleId,
        template: template,
        styleImage: {
          fileId: info.styleImage.imageId,
          fileCategory: info.styleImage.imageType,
        },
      },
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
  };

  useEffect(() => {
    let allFields = [];
    if (info.taxonomy) {
      allFields = [...info?.taxonomy];
    }
    if (info.fields) {
      allFields = [...allFields, ...info?.fields];
    }
    if (info?.template) {
      const template = JSON.parse(info?.template);
      console.log('111template', template);
      const valueObj = {};
      const idObj = {};
      allFields.forEach((item) => {
        valueObj[item.dictCode] = item.dictValue;
        idObj[item.dictCode] = item.fieldsId;
      });

      for (let i = 0; i < template.length; i++) {
        for (let key in valueObj) {
          if (key === template[i].name) {
            template[i].value = valueObj[key];
            template[i].id = idObj[key];
          }
        }
      }
      setDargList(template);
      console.log('template', template);
    }
  }, [info]);

  return (
    <div className={styles.topTabBox} id="quickViewBox">
      <div className={styles.img}>
        <CoverImgBox
          url={info?.styleImage?.imagePath}
          tenantId={tenantId}
          info={info}
          resUploadFileV2={resUploadFileV2}
          setInfo={setInfo}
        />
        <div
          className={styles.sizeTable}
          id="sizeTable"
          style={{ marginTop: 10 }}
        >
          <Table
            dataSource={dataTd}
            columns={columns}
            pagination={false}
            bordered={true}
          />
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.title}>
          <h3>{info?.name}</h3>
          <p>{info?.styleNo}</p>
        </div>
        <div className={styles.dragTableBox}>
          <div className={styles.gridTable}>
            <ReactSortable
              group={{ name: 'gridTabel' }}
              handle=".dragBtn"
              animation={300}
              list={dargList}
              setList={setDargList}
              style={{ width: '100%' }}
              onEnd={dragListSort}
            >
              {dargList.map((data, index) => (
                <div key={index} className={styles.gridTd}>
                  <DargTd
                    data={data}
                    info={info}
                    userInfo={userInfo}
                    reqStylesInfoEdit={reqStylesInfoEdit}
                    reqAddActivityLog={reqAddActivityLog}
                    resTypeOptions={resTypeOptions}
                    newStyleInfo={newStyleInfo}
                    setNewStyleInfo={setNewStyleInfo}
                    resAddTypeOptions={resAddTypeOptions}
                    reqBooksList={reqBooksList}
                    reqTeamList={reqTeamList}
                  />
                </div>
              ))}
            </ReactSortable>
          </div>
        </div>
        <div className={styles.tableAddBtn}>
          <div>
            <i
              style={{
                fontSize: 22,
                color: 'rgba(0,0,0,.5)',
                cursor: 'pointer',
              }}
              className="iconfont icon_stylesAdd"
            ></i>
            <span>Add field</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ styles }) => ({ ...styles }),
  ({ styles }) => ({ ...styles })
)(Index);
