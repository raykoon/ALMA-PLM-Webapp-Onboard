import React, { useState, useEffect } from 'react';
import { Input, DatePicker, message, Modal, Dropdown } from 'antd';
import { connect } from 'react-redux';
import NextImage from 'next/image';
import styles from './index.module.scss';
import svg_info from '../../../public/images/style/style-info2.svg';
import svg_jt from '../../../public/images/style/style-jt3.svg';
import svg_pen from '../../../public/images/style/style-pen4.svg';
import svg_del from '../../../public/images/style/style-del3.svg';
import svg_bigDel from '../../../public/images/style/style-del2.svg';
import svg_yes from '../../../public/images/style/style-yes.svg';
import svg_no from '../../../public/images/style/style-no.svg';
import moment from 'moment';
import { API_STATUS } from '../../../utils/statusCode';
import { drop } from 'lodash';

const Index = ({ open, setOpen, reqStylesSeasons, reqStylesSeasonsExist }) => {
  const [seasonData, setSeasonData] = useState({
    seasonName: '',
    seasonCode: '',
    seasonType: 1,
    remark: '',
  });
  const [drops, setDrops] = useState([]);
  const [nameExist, setNameExist] = useState(false);
  const [codeExist, setCodeExist] = useState(false);

  const addStylesSeasons = async () => {
    if (
      seasonData.seasonName &&
      seasonData.seasonCode &&
      !nameExist &&
      !codeExist
    ) {
      const res = await reqStylesSeasons({
        ...seasonData,
        drops: drops,
        whetherDrop: drops.length > 0 ? 1 : 0,
      });
      if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);
    }

    setOpen(false);
  };

  useEffect(() => {
    if (drops.length > 3) {
      if (drops.length > 0) {
        const seasonDrop = document.querySelector('#seasonDrop');
        seasonDrop.scrollLeft = drops.length * 326;
      }
    }
  }, [drops]);

  return (
    <Modal
      visible={open}
      width={1024}
      centered
      destroyOnClose={true}
      footer={null}
    >
      <div className={styles.addSeasonModal} id="addSeasonModal">
        <div className={styles.title}>
          <span>CREATE</span>
          <h3>NEW SEASON</h3>
        </div>
        <div className={styles.topCtn}>
          <div id={nameExist && 'seasonExist'}>
            <span>Season Name</span>
            <Input
              placeholder="i.e. Fall Winter 2023"
              value={seasonData.seasonName}
              onChange={async (e) => {
                setNameExist(false);
                setSeasonData({
                  ...seasonData,
                  seasonName: e.target.value,
                });
                const res = await reqStylesSeasonsExist({
                  seasonName: e.target.value,
                });
                if (res.code !== API_STATUS.SUCCESS)
                  return message.info(`${res.msg}`);
                if (res?.data + '' === '1') {
                  setNameExist(true);
                  message.info('This season name already exists!');
                }
              }}
            />
          </div>
          <div id={codeExist && 'seasonExist'}>
            <span>Season Code</span>
            <Input
              placeholder="i.e. FW23"
              value={seasonData.seasonCode}
              onChange={async (e) => {
                setCodeExist(false);
                setSeasonData({
                  ...seasonData,
                  seasonCode: e.target.value,
                });
                const res = await reqStylesSeasonsExist({
                  seasonCode: e.target.value,
                });
                if (res.code !== API_STATUS.SUCCESS)
                  return message.info(`${res.msg}`);
                if (res?.data + '' === '1') {
                  setCodeExist(true);
                  message.info('This season code already exists!');
                }
              }}
            />
          </div>
          <div>
            <span>Description (Optional)</span>
            <Input
              value={seasonData.remark}
              onChange={(e) => {
                setSeasonData({
                  ...seasonData,
                  remark: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.checkCtn}>
          <div
            className={styles.checkBox}
            onClick={() => {
              setSeasonData({
                ...seasonData,
                seasonType: seasonData?.seasonType === 1 ? 0 : 1,
              });
            }}
            style={{
              background: seasonData?.seasonType === 1 ? '#000000' : '#ffffff',
            }}
          >
            {seasonData.seasonType === 1 && (
              <i className="iconfont icon_stylesSelectOk"></i>
            )}
          </div>
          <span
            onClick={() => {
              setSeasonData({
                ...seasonData,
                seasonType: seasonData?.seasonType === 1 ? 0 : 1,
              });
            }}
          >
            Active season
          </span>
        </div>
        <div className={styles.bottomCtn}>
          <div className={styles.titCtn}>
            <div className={styles.tit}>
              <h3>DROPS WITHIN THE SEASON</h3>
              <div className={styles.tips}>
                <NextImage src={svg_info} />
                <div className={styles.tipsBox}>
                  <div className={styles.jt}>
                    <NextImage src={svg_jt} />
                  </div>
                  <p>Set Names & Key Trigger Dates for Each Drop / Season</p>
                  <span>
                    This step is optional in case you have multiple deliveries
                    (Drops) within a season. All styles within the drop / season
                    will automatically carry these trigger dates and you can
                    modify them further on the style level.{' '}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={styles.btn}
              onClick={() => {
                const newDrop = [...drops];
                newDrop.push({
                  dropName: `Drop${newDrop.length + 1}`,
                  dropCode: `Drop${newDrop.length + 1}`,
                  seasonCode: seasonData.seasonCode,
                  dateList: [
                    {
                      dateName: 'Delivery Month',
                      triggerDate: '',
                      dateType: '1',
                    },
                    {
                      dateName: 'Sketch Review',
                      triggerDate: '',
                      dateType: '0',
                    },
                    {
                      dateName: 'PO Handoff',
                      triggerDate: '',
                      dateType: '0',
                    },
                  ],
                });
                setDrops(newDrop);
              }}
            >
              <i className="iconfont icon_stylesAdd"></i>
              <span>Add Drop</span>
            </div>
          </div>
          {drops?.length > 0 && (
            <div className={styles.drop} id="seasonDrop">
              <div
                className={styles.dropCtn}
                style={{
                  width: `${drops.length * 326}px`,
                }}
              >
                {drops?.map((item, index) => (
                  <DropBox
                    item={item}
                    index={index}
                    drops={drops}
                    setDrops={setDrops}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className={styles.btns}>
          <div
            className={styles.cancel}
            onClick={() => {
              setOpen(false);
            }}
          >
            <span>Cancel</span>
          </div>
          <div
            className={styles.create}
            onClick={addStylesSeasons}
            style={{
              cursor:
                seasonData.seasonName &&
                seasonData.seasonCode &&
                !nameExist &&
                !codeExist
                  ? 'pointer'
                  : 'default',
              background:
                seasonData.seasonName &&
                seasonData.seasonCode &&
                !nameExist &&
                !codeExist
                  ? '#000000'
                  : '#D6D6D6',
            }}
          >
            <span>Create season</span>
            <i className="iconfont icon_stylesRefresh1"></i>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const DropBox = ({ item, index, drops, setDrops }) => {
  return (
    <div className={styles.dropBox} key={index}>
      <div>
        <span className={styles.key}>Drop Name</span>
        <Input
          value={item?.dropName}
          onChange={(e) => {
            const newDrop = [...drops];
            newDrop[index].dropName = e.target.value;
            newDrop[index].dropCode = e.target.value;
            setDrops(newDrop);
          }}
        />
      </div>
      <div className={styles.tit}>
        <h3>CALENDAR TRIGGER DATES</h3>
      </div>
      <div className={styles.dateCtn}>
        {item?.dateList?.length > 0 &&
          item?.dateList?.map((item, subIndex) => (
            <DateBox
              item={item}
              index={index}
              subIndex={subIndex}
              drops={drops}
              setDrops={setDrops}
            />
          ))}
      </div>
      <div className={styles.addBtns}>
        <div
          onClick={() => {
            const newDrop = [...drops];
            newDrop[index].dateList.push({
              dateName: 'Trigger Date',
              triggerDate: '',
              dateType: '0',
            });
            setDrops(newDrop);
          }}
        >
          <i className="iconfont icon_stylesAdd"></i>
          <span>Add Trigger Date</span>
        </div>
        <div
          onClick={() => {
            const newDrop = [...drops];
            newDrop[index].dateList.push({
              dateName: 'Trigger Month',
              triggerDate: '',
              dateType: '1',
            });
            setDrops(newDrop);
          }}
        >
          <i className="iconfont icon_stylesAdd"></i>
          <span>Add Trigger Month</span>
        </div>
      </div>
      <div
        className={styles.delBtn}
        onClick={() => {
          const newDrop = drops.toSpliced(index, 1);
          setDrops(newDrop);
        }}
      >
        <div>
          <NextImage src={svg_bigDel} />
          <span>Delete Drop</span>
        </div>
      </div>
    </div>
  );
};

const DateBox = ({ item, index, subIndex, drops, setDrops }) => {
  const [act, setAct] = useState(false);
  const [txt, setTxt] = useState('');
  const [oldTxt, setOldTxt] = useState('');

  useEffect(() => {
    if (item?.dateName) {
      setTxt(item?.dateName);
      setOldTxt(item?.dateName);
    }
  }, [item?.dateName]);

  return (
    <div className={styles.dateBox} key={subIndex} id="seasonDateBox">
      <div className={styles.key}>
        {act ? (
          <div
            className={styles.nameAct}
            tabIndex={-1}
            onBlur={() => {
              setTxt(oldTxt);
              setAct(false);
            }}
          >
            <Input
              autoFocus={true}
              value={txt}
              onChange={(e) => {
                setTxt(e.target.value);
              }}
            />
            <div className={styles.btn}>
              <div
                onClick={() => {
                  setTxt(oldTxt);
                  setAct(false);
                }}
              >
                <NextImage src={svg_no} />
              </div>
              <div
                onClick={() => {
                  const newDrop = [...drops];
                  newDrop[index].dateList[subIndex].dateName = txt;
                  setOldTxt(txt);
                  setAct(false);
                }}
              >
                <NextImage src={svg_yes} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.name}>
            <span>{txt}</span>
            <div className={styles.btn}>
              <div
                onClick={() => {
                  setAct(true);
                }}
              >
                <NextImage src={svg_pen} />
              </div>
              <div
                onClick={() => {
                  const newDrop = [...drops];
                  newDrop[index].dateList = drops[index]?.dateList.toSpliced(
                    subIndex,
                    1
                  );
                  setDrops(newDrop);
                }}
              >
                <NextImage src={svg_del} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.date}>
        <i className="iconfont icon_stylesDate"></i>
        <DatePicker
          picker={item?.dateType === '1' ? 'month' : ''}
          format={item?.dateType === '1' ? 'MMMM YYYY' : 'DD-MM-YY'}
          placeholder={`Select ${item?.dateType === '1' ? 'month' : 'date'}`}
          bordered={false}
          value={item?.triggerDate && moment(item?.triggerDate)}
          onChange={(changeTime) => {
            const newDrop = [...drops];
            if (changeTime) {
              newDrop[index].dateList[subIndex].triggerDate =
                changeTime.valueOf();
            } else {
              newDrop[index].dateList[subIndex].triggerDate = '';
            }
            setDrops(newDrop);
          }}
        />
      </div>
    </div>
  );
};

export default connect(
  ({ styles }) => ({ ...styles }),
  ({ styles }) => ({ ...styles })
)(Index);
