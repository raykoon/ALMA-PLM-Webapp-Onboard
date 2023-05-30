import React, { useState, useEffect } from 'react';
// import Layout from "../../components/layout/layout";
import styles from './progressBar.module.scss';
import SearchBox from './searchBox';
import Image from 'next/image';
// import logo from "../../public/images/logoA.png";
import logo from '../../public/images/blackLogo.svg';

export default function nav({ search = true }) {
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
    <div className={styles.nav}>
      <div className={styles.Head}>
        <div className={styles.nowLeftBox}>
          <div className={styles.logo}>
            {' '}
            <Image layout="responsive" src={logo} alt="logo" />
          </div>
          {search && (
            <div className={styles.searchBoxA}>
              <SearchBox
                btnName="SEARCH"
                pl="i.e. “888/crinkle/rayon” , “style name” , “sku no” , “vendor name”"
              />
            </div>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.textBordus}>
            {abbreviation(userInfo?.userName)}
          </div>
          <div className={styles.bgText}>{userInfo?.userName}</div>
          <div className={styles.rightText}>{userInfo?.vendorName || userInfo?.postGw}</div>
        </div>
      </div>
    </div>
  );
}
