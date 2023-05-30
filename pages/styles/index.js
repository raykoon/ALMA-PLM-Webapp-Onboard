import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/layout';
import styles from '../../styles/home.module.scss';
import Nav from '../../components/dashboard/nav'; //顶部导航组件
import BlockItemBox from '../../components/styles/blockItemBox'; //单个盒子组件
import BlockItemList from '../../components/styles/blockItemList'; //列表样式组件
import ImageBigLook from '../../components/styles/ImageBigLook'; //放大图片
import icon10 from '../../public/images/icon10.png';
import newIcon55 from '../../public/images/newIcon55.png';
import newIcon56 from '../../public/images/newIcon56.png';
import { useRouter } from 'next/router';

import CustomButton from '../../components/dashboard/customButton';
import InitialsIcon from '../../components/styles/InitialsIcon';
import Image from 'next/image';
import { Checkbox, Col, Row, Select, Modal, message } from 'antd';
import Filter from '../../public/images/styles/Filter.png';

import Refresh from '../../public/images/styles/Refresh.png';
import switch1 from '../../public/images/styles/switch1.png';
import switch2 from '../../public/images/styles/switch2.png';
import switch3 from '../../public/images/styles/switch3.png';
import switch4 from '../../public/images/styles/switch4.png';
import Filters from '../../components/styles/rightTcBox';
import QuickView from '../../components/styles/quickView/index';

import newIcon17 from '../../public/images/newIcon17.png';
import newIcon18 from '../../public/images/newIcon18.png';
import newIcon11 from '../../public/images/newIcon11.png';

import { dfFilter2, dfFilter } from '../../utils/allJson';
import { postAxios, getAxios } from '../../utils/axios';
import { API_STATUS } from '../../utils/statusCode';
let list1 = [1, 2, 3, 4];

export function TagIcon({ name = '', title = '' }) {
  return (
    <div
      style={{
        paddingLeft: title ? '2px' : '10px',
      }}
      className={styles.valueItem}
    >
      {title && <span className={styles.textBR}>Design</span>}
      {name}
      <span className={styles.imgIcon}>
        <Image width={15} height={15} src={icon10} />
      </span>
    </div>
  );
}

export default function Styles() {
  const Router = useRouter();
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const [cardOrList, setCardOrList] = useState(false); //切换卡片、列表
  const [imgUrl, setImgUrl] = useState();

  const tableHead = (a) => {
    return (
      <div className="customSelect_Other1">
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
                            borderColor={res.color ? '' : '#000'}
                            Bgcolor={res.color || '#fff'}
                            color={res.color ? '#fff' : '#000'}
                            size={14}
                            padding="5px"
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

  const tableHeadComplex = (a) => {
    return (
      <div className="customSelect_Other2">
        <div className="customSelect_list">
          <Checkbox.Group
            style={{
              width: '100%',
            }}
            onChange={onChange}
          >
            <Row>
              <Col className="item1" span={24}>
                <Checkbox>Assigned to anyone</Checkbox>
              </Col>
              <Col span={24}>
                <div className="colorBg">Recently searched:</div>
              </Col>
              {a?.filters &&
                a?.filters?.map((res, index) => {
                  return (
                    <Col className="item" key={index} span={24}>
                      <Checkbox value={res.value}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignContent: 'center',
                            marginBottom: '5px',
                            fontSize: '12px',
                          }}
                        >
                          <div>
                            <InitialsIcon
                              width="30px"
                              size="12px"
                              color={res.color}
                              title={res.title}
                            />
                          </div>
                          <div style={{ lineHeight: '30px' }}>{res.value}</div>
                        </div>
                        <div>
                          <CustomButton
                            borderColor={res.color || '#000'}
                            Bgcolor={'#fff'}
                            color={res.color || '#000'}
                            padding="1.5px 10px"
                            size={12}
                            name={res.text}
                          />
                        </div>
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
  const [isShowTc, setIsShowTc] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [list, setList] = useState([]);
  const [info, setInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [tenantId, setTenantId] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getStylesList = async () => {
    const res = await postAxios({
      url: 'styles/style_library/list',
      data: {
        pageNum: 1,
        pageSize: 10,
      },
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
    setList(res?.data?.items);
  };

  const getStylesInfo = async (id) => {
    const res = await getAxios({
      url: `styles/style_library/getStyle/${id}`,
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
    setInfo(res.data);
  };

  useEffect(() => {
    getStylesList();
    setTenantId(localStorage.getItem('tenantId'));
    setUserInfo({
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      roles: localStorage.getItem('roles'),
      postGw: localStorage.getItem('postGw'),
      vendorName:localStorage.getItem('vendorName'),

    });
    // console.log(TimeMethod())
  }, []);

  return (
    <div className={styles.Styles}>
      <Filters value={isShowTc} setIsShowTc={setIsShowTc} />
      {/* {TimeMethod(new Date().getTime())} */}
      <Modal
        centered
        footer={null}
        width={1400}
        title={null}
        visible={isModalOpen}
        destroyOnClose={true}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        afterClose={() => {
          setInfo([]);
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <CustomButton
              Bgcolor="#fff"
              borderColor="#000"
              color="#000"
              isQiCON={true}
              icon={newIcon17}
              name="Close"
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CustomButton
              isQiCON={true}
              icon={newIcon18}
              name="Open Style Folder"
            />
            <span style={{ margin: '0 3px' }}></span>
            <Image src={newIcon11} width={40} height={40} />
          </div>
        </div>
        <QuickView info={info} tenantId={tenantId} userInfo={userInfo} />
      </Modal>

      <Nav />
      <div className={styles.content}>
        <div className={styles.topBox}>
          <div className={styles.inputList}>
            <div className={styles.leftBox}>
              <span
                onClick={() => {
                  Router.push('/styles/newStyle');
                }}
                style={{
                  marginRight: '20px',
                }}
              >
                <CustomButton
                  padding="5px 10px"
                  size={14}
                  icon={newIcon55}
                  name="New style"
                />
              </span>
              <span>
                <CustomButton
                  Bgcolor="#fff"
                  borderColor="#000"
                  color="#000"
                  padding="5px 10px"
                  size={14}
                  icon={newIcon56}
                  name="Generate a line sheet"
                />
              </span>

              {/* {list1?.map((res, index) => {
                return (
                  <Select
                    key={index}
                    defaultValue="Season"
                    dropdownRender={() => {
                      if (index !== 2) {
                        return tableHead({
                          filters: dfFilter,
                        });
                      } else {
                        return tableHeadComplex({
                          filters: dfFilter2,
                        });
                      }
                    }}
                    style={{
                      width: 150,
                      marginRight: "15px",
                    }}
                  >
                  </Select>
                );
              })} */}
            </div>
            <div className={styles.rightBox}>
              <div>
                Sort by{' '}
                <Select
                  dropdownRender={() => {
                    return tableHead({
                      filters: dfFilter,
                    });
                  }}
                  defaultValue="Last Modified"
                  style={{
                    width: 150,
                    marginRight: '15px',
                  }}
                >
                  {/* <Option value="Last Modified">Last Modified</Option> */}
                </Select>
              </div>
              <div
                onClick={() => {
                  setCardOrList(!cardOrList);
                }}
                style={{
                  position: 'relative',
                  // top: "3px",
                }}
              >
                {/* {
                  cardOrList && <Image width={150} height={36} src={linshi1} />
                }
                 {
                  !cardOrList && <Image width={150} height={36} src={linshi} />
                } */}

                <div className={styles.typeSwitch}>
                  <div
                    style={{
                      background: !cardOrList ? '#000' : '#fff',
                    }}
                    className={styles.typeLfet}
                  >
                    <Image
                      width={24}
                      height={24}
                      src={!cardOrList ? switch1 : switch3}
                    />
                    {cardOrList && 'List'}
                  </div>
                  <div
                    style={{
                      background: !cardOrList ? '#fff' : '#000',
                    }}
                    className={styles.typeRight}
                  >
                    <Image
                      width={24}
                      height={24}
                      src={!cardOrList ? switch2 : switch4}
                    />
                    {!cardOrList && 'Cards'}
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setIsShowTc(true);
                }}
                style={{ marginLeft: '40px' }}
              >
                <CustomButton
                  isQiCON={true}
                  color="#fff"
                  Bgcolor="#000"
                  padding="4px 10px"
                  icon={Filter}
                  name="Filters"
                />
              </div>
            </div>
          </div>
          {/* <div className={styles.valueList}>
            <TagIcon name="SS 2023" />

            <TagIcon name="Becca Yang" title="BY" />
          </div> */}
        </div>
        <div className={styles.contentBox}>
          <div className={styles.listBox}>
            {!cardOrList &&
              list?.map((item, index) => {
                return (
                  <div key={index} className={styles.item}>
                    <BlockItemBox
                      coverImage={item.coverImage}
                      data={item}
                      setIsModalOpen={setIsModalOpen}
                      setImgUrl={setImgUrl}
                      getStylesInfo={getStylesInfo}
                    />
                  </div>
                );
              })}
            {cardOrList && (
              <div className={styles.itemList}>
                <BlockItemList list={list} setIsModalOpen={setIsModalOpen} />{' '}
              </div>
            )}
          </div>
        </div>
      </div>
      {imgUrl && <ImageBigLook imgUrl={imgUrl} setImgUrl={setImgUrl} />}
    </div>
  );
}

Styles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
