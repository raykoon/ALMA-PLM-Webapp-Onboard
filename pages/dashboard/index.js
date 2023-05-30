import React, { useEffect, useState, useContext } from 'react';
import Layout from '../../components/layout/layout';
import styles from '../../styles/home.module.scss';
import IconButton from '../../components/styles/common/IconButton';
import SearchBox from '../../components/dashboard/searchBox';
import image_styles from '../../public/images/dashboard/dashboard-style.svg';
import image_linesheet from '../../public/images/dashboard/dashboard-linesheet.svg';
import image_supplier from '../../public/images/dashboard/dashboard-supplier.svg';
import image_library from '../../public/images/dashboard/dashboard-library.svg';
import image_marketplace from '../../public/images/dashboard/dashboard-marketplace.svg';
import image_setting from '../../public/images/dashboard/dashboard-setting.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { context } from '../_app';
import AddSeasonModal from './components/AddSeasonModal';

export default function Home() {
  const Router = useRouter();
  const list = [
    {
      img: image_styles,
      text: 'My styles',
      remark: 'Create new style',
      remark1: 'Check my styles',
      type: 1,
    },
    {
      img: image_linesheet,
      text: 'LineSheets',
      remark: 'Create new',
      remark1: 'Check all linesheets',
      type: 1,
    },
    {
      img: image_supplier,
      text: 'My Suppliers',
      remark: 'Add new',
      remark1: 'See all my suppliers',
      type: 1,
    },
    {
      img: image_library,
      text: 'Library',
      remark1: 'Open Library Index',
      type: 2,
    },
    {
      img: image_marketplace,
      text: 'Sourcing & Market Place',
      remark1: 'Open Market Place',
      type: 2,
    },
    { img: image_setting, text: 'Settings', remark1: 'Open Settings', type: 2 },
  ];
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUserInfo({
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      roles: localStorage.getItem('roles'),
      postGw: localStorage.getItem('postGw'),
      vendorName: localStorage.getItem('vendorName'),
    });
  }, []);

  return (
    <div
      id="Home"
      style={{
        padding: '30px 30px 30px 14px',
      }}
      onClick={() => {
        // themeMode.changeTheme('123');
        // console.log(themeMode)
      }}
      className={styles.Designlibrary}
    >
      {open && <AddSeasonModal open={open} setOpen={setOpen} />}
      <div className={styles.top}>
        <div className={styles.leftTop}>
          <div className={styles.titleColor}>WELCOME!</div>
          <div style={{ marginLeft: '20px' }}>
            <IconButton
              buttonStyle={{
                padding: '0 10px',
                height: 40,
                color: '#fff',
                fontSize: '14px',
                background: 'rgba(0, 0, 0, 1)',
              }}
              icon="icon_stylesAdd"
              name="Create New Season"
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>
          <div
            style={{ width: '662px', marginLeft: '30px' }}
            className={styles.searchBoxA}
          >
            <SearchBox
              SearchBoxOptions={{}}
              btnName="SEARCH"
              pl="i.e. “888/crinkle/rayon” , “style name” , “sku no” , “vendor name”"
            />
          </div>
        </div>
        <div className={styles.rightTop}>
          <div className={styles.textBordus}>
            {abbreviation(userInfo?.userName)}
          </div>
          <div className={styles.bgText}>{userInfo?.userName}</div>
          <div className={styles.rightText}>
            {userInfo?.vendorName || userInfo?.postGw}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '100px',
        }}
        className={styles.bottom}
      >
        {list?.map((res, index) => {
          return (
            <div
              style={{
                margin:
                  index == 1 || index == 4 || index == 7 || index == 10
                    ? '0 1.25% 1.25%'
                    : '',
                width: '32.5%',
                cursor: 'default',
              }}
              key={index}
              className={styles.Item}
            >
              <div className={styles.topImg}>
                <Image src={res.img} />
              </div>
              {/* <div className={styles.botrtomText}>
                 <div className={styles.text1}>{res.text}</div>
                 <div className={styles.text2}>{res.remark}</div>
            </div> */}

              <div className={styles.NewbotrtomText}>
                <div className={styles.text1}>{res.text}</div>
                <div className={styles.text2}>
                  {res?.remark && (
                    <div
                      onClick={() => {
                        if (index === 0) {
                          Router.push('/styles/newStyle');
                        }
                        if (index === 1) {
                          Router.push('/reports/newLineSheet');
                        }
                        if (index === 2) {
                          Router.push('/suppliers');
                        }
                      }}
                      className={styles.btn1}
                    >
                      <IconButton
                        buttonStyle={{
                          padding: '0 20px',
                          height: 40,
                          color: '#000',
                          fontSize: '14px',
                          background: 'rgba(0, 0, 0, 0)',
                          border: '1px solid #000',
                          borderRadius: '2px',
                        }}
                        icon={
                          res?.type === 1 ? 'icon_stylesAdd' : 'icon-search'
                        }
                        name={res?.remark}
                      />
                    </div>
                  )}

                  <div
                    onClick={() => {
                      if (index === 0) {
                        Router.push('/styles');
                      }
                      if (index === 1) {
                        Router.push('/reports/linesheets');
                      }
                      if (index === 2) {
                        Router.push('/suppliers');
                      }
                      if (index === 3) {
                        Router.push('/library');
                      }
                      if (index === 4) {
                        Router.push('/marketplace');
                      }
                      if (index === 5) {
                        Router.push('/settings/profileInfo');
                      }
                    }}
                    className={styles.btn2}
                  >
                    <IconButton
                      buttonStyle={{
                        padding: '0 20px',
                        height: 40,
                        color: '#fff',
                        fontSize: '14px',
                        background: 'rgba(0, 0, 0, 1)',
                        borderRadius: '2px',
                      }}
                      name={res.remark1}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
