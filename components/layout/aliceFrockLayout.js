import react, { useState, useEffect } from 'react';
import styles from './layout.module.scss';
import Image from 'next/image';
import newIcon58 from '../../public/images/newIcon58.png';
import newIcon59 from '../../public/images/newIcon59.png';

import newIcon60 from '../../public/images/newIcon60.png';
import newIcon61 from '../../public/images/newIcon61.png';
import newIcon62 from '../../public/images/newIcon62.png';
import newIcon63 from '../../public/images/newIcon63.png';
import newIcon64 from '../../public/images/newIcon64.png';

import newIcon65 from '../../public/images/newIcon65.png';
import newIcon66 from '../../public/images/newIcon66.png';
import newIcon67 from '../../public/images/newIcon67.png';
import newIcon68 from '../../public/images/newIcon68.png';
import newIcon69 from '../../public/images/newIcon69.png';

import { useRouter } from 'next/router';

import { Switch } from 'antd';

export default function AliceFrockLayout(props) {
  const Router = useRouter();
  const abbreviation = (str) => {
    if (str) {
      const arr = str.split(' ');
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase();
      }
      return arr.join('');
    }
  };

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo({
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      roles: localStorage.getItem('roles'),
      postGw: localStorage.getItem('postGw'),
      vendorName:localStorage.getItem('vendorName'),

    });
  }, []);
  return (
    <div className={styles.AliceFrockLayout}>
      <div className={styles.leftBox}>
        <div
          onClick={() => {
            Router.back();
          }}
          className={styles.topBox}
        >
          {' '}
          <Image width={24} height={24} src={newIcon59} /> Back to all styles
        </div>
        <div className={styles.content}>
          <div className={styles.itemBox}>
            <Image width={24} height={24} src={newIcon64} />{' '}
            <span className={styles.text}>Style overview</span>
          </div>
          <div className={styles.itemBox}>
            <Image width={24} height={24} src={newIcon60} />{' '}
            <span className={styles.text}>BILL of materials</span>
          </div>
          <div className={styles.itemBox}>
            <Image width={24} height={24} src={newIcon61} />{' '}
            <span className={styles.text}>SIZE SPECIFICATIONs</span>
          </div>
          <div className={styles.itemBox}>
            <Image width={24} height={24} src={newIcon62} />{' '}
            <span className={styles.text}> COSTs & Delivery</span>
          </div>
          {/* <div className={styles.itemBox}>
                          <Image width={24} height={24} src={newIcon58} /> <span className={styles.text}> Style overview</span>
                      </div> */}
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.itemBox}>
            <Switch defaultChecked />{' '}
            <span className={styles.text}> COSTs & Delivery</span>
          </div>
          <div className={styles.itemBox}>
            <Image width={24} height={24} src={newIcon63} />{' '}
            <span className={styles.text}> COSTs & Delivery</span>
          </div>
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.right}>
            <div className={styles.textBordus}>
              {abbreviation(userInfo?.userName)}
            </div>
            <div className={styles.bgText}>{userInfo?.userName}</div>
            <div className={styles.rightText}>{userInfo?.vendorName || userInfo?.postGw}</div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1', maxHeight: '100vh', overflow: 'auto' }}>
        {props.children}
      </div>
      <div className={styles.rightBox}>
        <div className={styles.itemIcon}>
          <Image width={24} height={24} src={newIcon65} />{' '}
          <span className={styles.textIcon}>1</span>
        </div>
        <div className={styles.itemIcon}>
          <Image width={24} height={24} src={newIcon66} />{' '}
          <span className={styles.textIcon}>2</span>
        </div>
        <div className={styles.itemIcon}>
          <Image width={24} height={24} src={newIcon67} />{' '}
          <span className={styles.textIcon}>3</span>
        </div>
        <div className={styles.itemIcon}>
          <Image width={24} height={24} src={newIcon68} />{' '}
          <span className={styles.textIcon}>4</span>
        </div>
        <div className={styles.bottom}>
          <Image width={24} height={24} src={newIcon69} />{' '}
          <span className={styles.textIcon}>4</span>
        </div>
      </div>
    </div>
  );
}
