import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import CustomButton from '../dashboard/customButton';
import icon9 from '../../public/images/icon9.png';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { Checkbox, Col, Row, Select, Modal, message } from 'antd';
import { getAxios, postAxios } from '../../utils/axios';
import { API_STATUS } from '../../utils/statusCode';

import sketch from '../../public/images/newIcon10.png';
import newIcon11 from '../../public/images/newIcon11.png';
import xl6 from '../../public/images/styles/xl6.png';
import mewIcon2 from '../../public/images/newIcon2.png';
import mewIcon3 from '../../public/images/newIcon3.png';
import mewIcon4 from '../../public/images/newIcon4.png';

let list = [1, 2, 3, 4, 5, 6, 7];
const icons = [
  {
    name: 'Comment',
    img: mewIcon2,
    color: '#00DD81',
  },
  {
    name: 'Style update',
    img: mewIcon2,
    color: '#00A3FF',
  },
  {
    name: "Vendor's activity",
    img: mewIcon2,
    color: '#f00',
  },
];
const StyleBtns = [
  { name: 'Design', color: '#FF7394', Bgcolor: 'rgba(255, 115, 148, 0.1)' },
  { name: 'Development', color: '#00A3FF', Bgcolor: 'rgba(0, 163, 255, 0.1)' },
  { name: 'Adopted', color: '#00C773', Bgcolor: 'rgba(19, 222, 137, 0.1)' },
  {
    name: 'Cancelled / Inactive',
    color: 'rgba(0, 0, 0, 0.3)',
    Bgcolor: 'rgba(0, 0, 0, 0.05)',
  },
  {
    name: '-',
    color: 'rgba(0, 0, 0, 0.3)',
    Bgcolor: 'rgba(0, 0, 0, 0.05)',
  },
];
const DevelopmentBtns = [
  { name: 'Pre-Dev', Bgcolor: '#7651F0' },
  { name: 'In-Dev', Bgcolor: '#00A3FF' },
  { name: 'Adopted', Bgcolor: '#13DE89' },
  {
    name: 'Dropped',
    Bgcolor: '#FF7394',
  },
  {
    name: 'Dropped',
    color: '#000',
    Bgcolor: '#fff',
    borderColor: '#000',
  },
];

export default function BlockItemBox({
  coverImage = '',
  // setImgUrl = '',
  setIsModalOpen,
  isCheck = false,
  data,
  getStylesInfo,
  allCheck,
  checkedIds,
  setCheckedIds,
  setIdList,
  idList,
}) {
  const Router = useRouter();
  const [checked, setChecked] = useState(false);
  const [coverImg, setCoverImg] = useState('');
  const [coverIsVertical, setCoverIsVertical] = useState(false);
  const csRef = useRef();
  const checkedHandle = (e) => {
    setChecked(e.target.checked);
    console.log(e.target.checked);
    if (e.target.checked) {
      const newIds = [...checkedIds];
      newIds.push(data?.styleId);
      setCheckedIds(newIds);
    } else {
      // if(res){
      const newIds = checkedIds.filter((id) => id !== data.styleId);
      setCheckedIds(newIds);
      // }
    }
  };

  useEffect(() => {
    setChecked(allCheck);
  }, [allCheck]);

  // const getkeyToUrl = async (key) => {
  //   const res = await postAxios({
  //     url: '/file/aws/getPresignedUrl',
  //     data: { key: key },
  //   });
  //   if (res.code !== API_STATUS.SUCCESS)
  //     return message.info(`error:${res.msg}  code:${res.code}`);
  // };

  const imgIsVertical = async (url) => {
    const cover = await loadImg(url);
    setCoverIsVertical(cover?.height > cover?.width);
    setCoverImg(url);
  };

  const loadImg = (imgUrl) => {
    const img = new Image();
    img.src = imgUrl;
    return new Promise((resolve, reject) => {
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        resolve(undefined);
      };
    });
  };

  useEffect(() => {
    if (coverImage) {
      imgIsVertical(coverImage);
    }
  }, [coverImage]);

  return (
    <div className={styles.BlockItemBox}>
      <div className={styles.topBox}>
        <div className={styles.topLeftBox}>
          {/* <div className={styles.titleColor}>Title</div> */}
          <div>
            {!isCheck && <NextImage width={28} height={28} src={newIcon11} />}
            {isCheck && (
              <div className="newCheck">
                {' '}
                <Checkbox
                  value={data?.styleId}
                  checked={checked}
                  onChange={checkedHandle}
                  ref={csRef}
                >
                  <span
                    style={{
                      fontFamily: 'Times New Roman',
                    }}
                  >
                    Include in Line Sheet
                  </span>
                </Checkbox>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            setIsModalOpen(true);
            getStylesInfo(data?.styleId);
          }}
          className={styles.btn}
        >
          <CustomButton
            isQiCON={true}
            Bgcolor="#fff"
            color="#000"
            borderColor="#000"
            padding="3px 10px"
            name="Quick view"
            size={14}
            icon={xl6}
          />
        </div>
        {/* <div onClick={()=>{
            setImgUrl(sketch)
          }} style={{cursor:'pointer'}} className={styles.topRightBox}>
            
          </div> */}
      </div>
      <div
        className={styles.coverImgBox}
        onClick={() => {
          // Router.push(`styles/editStyles/${data.styleId}`);
          if (location?.href.indexOf('NewLineSheet') == -1) {
            Router.push(`styles/styleInfo/design/${data.styleId}`);
          } else {
            checkedHandle({
              target: {
                ...csRef.current.props,
                checked: !csRef.current.props.checked,
              },
            });
            console.log(csRef);
          }
        }}
      >
        {coverImg && (
          <img
            width={coverIsVertical ? 'auto' : '100%'}
            height={coverIsVertical ? '100%' : 'auto'}
            src={coverImg}
          />
        )}
      </div>
      <div className={styles.newTitleBox}>
        <div
          className={styles.topTileNew}
          onClick={() => {
            if (location?.href.indexOf('NewLineSheet') == -1) {
              Router.push(`styles/styleInfo/${data.styleId}`);
            }
          }}
        >
          <div className={styles.titleColor}>{data?.name}</div>
          <div>
            {/* <CustomButton
              Bgcolor={StyleBtns?.[data?.status - 1]?.Bgcolor}
              color={StyleBtns?.[data?.status - 1]?.color}
              borderColor={StyleBtns?.[data?.status - 1]?.borderColor}
              padding="5px"
              name={StyleBtns?.[data?.status - 1]?.name}
              margin="0 0 0 5px"
            />
            <CustomButton
              Bgcolor={DevelopmentBtns?.[data?.Development - 1]?.Bgcolor}
              color={DevelopmentBtns?.[data?.Development - 1]?.color}
              borderColor={
                DevelopmentBtns?.[data?.Development - 1]?.borderColor
              }
              padding="5px"
              name={DevelopmentBtns?.[data?.Development - 1]?.name}
              margin="0 0 0 5px"
            /> */}
            {/* <CustomButton
              Bgcolor="rgba(255, 115, 148, 0.1)"
              color="#FF7394"
              padding="5px"
              name="Design"
            />
            <span style={{ margin: '0 5px' }}></span>
            <CustomButton
              Bgcolor="#DA51F0"
              color="#fff"
              padding="5px"
              name="1st Proto"
            /> */}
          </div>
        </div>
        <div className={styles.topTileNew1}>
          <div>{data?.styleNo}</div>
          {/* <div 
          style={{
            display:location?.href.indexOf('NewLineSheet')==-1?'':'none'
          }}>+ {data?.COPIES} copies</div> */}
        </div>
      </div>

      <div
        style={{
          display: location?.href.indexOf('NewLineSheet') == -1 ? '' : 'none',
        }}
        className={styles.newBottomBox}
      >
        {icons.map((icon, index) => {
          return (
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <NextImage width={15} height={15} src={icon.img} />
              </div>
              <div className={styles.itemText}>{icon.name}</div>
              <div
                style={{
                  background: icon.color,
                }}
                className={styles.itemNum}
              >
                {index === 0
                  ? data?.Comment
                  : index === 1
                  ? data?.update
                  : data?.activity}
              </div>
            </div>
          );
        })}

        {/* <div className={styles.item}>
          <div className={styles.itemIcon}>
            {' '}
            <Image width={15} height={15} src={mewIcon2} />
          </div>
          <div className={styles.itemText}>Comment</div>
          <div
            style={{
              background: '#00DD81',
            }}
            className={styles.itemNum}
          >
            1
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemIcon}>
            {' '}
            <Image width={15} height={15} src={mewIcon3} />
          </div>
          <div className={styles.itemText}>Comment</div>
          <div
            style={{
              background: '#00A3FF',
            }}
            className={styles.itemNum}
          >
            1
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemIcon}>
            {' '}
            <Image width={15} height={15} src={mewIcon4} />
          </div>
          <div className={styles.itemText}>Comment</div>
          <div
            style={{
              background: '#f00',
            }}
            className={styles.itemNum}
          >
            1
          </div>
        </div> */}
      </div>
    </div>
  );
}
