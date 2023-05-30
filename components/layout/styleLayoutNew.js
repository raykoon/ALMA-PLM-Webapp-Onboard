import React, { useEffect, useState } from 'react';
import styles from './layout.module.scss';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { message, Image } from 'antd';
import 'swiper/css';

export default function Layout({ setIsWidth = () => {}, isWidth }, props) {
  useEffect(() => {
    //  console.log(props)
  }, [props]);
  const [navLiList, setNavLiList] = useState([]);
  let nameObjList = {
    'My Dashboard': [],
    'Seasons & Styles': [
      { name: 'All Seasons' },
      { name: 'All Styles', push: '/styles' },
      { name: 'My Recent Styles' },
      { name: 'Linesheets' },
    ],
    'Buy & Order': [
      { name: 'Buy sheets & On Order ' },
      { name: 'Purchase Orders' },
    ],
    Ecommerce: [ 
      { name: 'Storefront' },
      { name: 'Products'},
      { name: 'Orders' },
      { name: 'Reports' },
      { name: 'Inventory' },
      { name: 'Setting & Integration' },
    ],
    'Brand Libraries': [
      { name: 'My Suppliers' },
      { name: 'Fabric', push: '/library/fabric' },
      { name: 'Trims & Components', push: '/library/trim' },
      { name: 'Color', push: '/library/colors' },
      { name: 'Artwork', push: '/library/artworks' },
      { name: 'Flats', push: '/library/flats' },
      { name: 'POM & HTM', push: '/library/pom' },
      { name: 'Size Ranges', push: '/library/sizeCharts' },
      { name: 'Grading Rule', push: '/library/grading' },
      { name: 'Brand Standards' },
    ],
    'Sourcing & Marketplace': [
      { name: 'Find a supplier' },
      { name: 'Wholesale' },
      { name: 'White Label' },
      { name: 'Flats Marketplace' },
      { name: 'Artwork Marketplace' },
      { name: 'ALMA Concept' },
    ],
    'Profile / Settings': [
      { name: 'My Profile', icon: 'iconfont icon_subnav1' },
      { name: 'My Company', icon: 'iconfont icon_subnav2' },
      { name: 'Brand Onboarding & Setup', icon: 'iconfont icon_subnav3' },
      {
        name: 'Billing & Subscriptions (Admin)',
        icon: 'iconfont icon_subnav4',
      },
      { name: 'User Permissions (Admin)', icon: 'iconfont icon_subnav5' },
      { name: 'Integrations (Admin)', icon: 'iconfont icon_subnav6' },
    ],
    'My account': [
      { name: 'My Profile', icon: 'iconfont icon_subnav1' },
      { name: 'My settings', icon: 'iconfont icon_subnav7' },
      { name: 'Logout', icon: 'iconfont icon_subnav8', push: '/Logout' },
    ],
  };
  const [navBar, setNavbar] = useState([
    {
      img: (
        <i
          style={{ fontSize: '24px', marginLeft: '-2px', marginRight: '10px' }}
          className="iconfont icon_sqLayout5"
        ></i>
      ),
      title: 'My Dashboard',
      push: '/dashboard',
    },
    {
      img: (
        <i
          style={{
            marginRight: '11px',
            fontSize: '24px',
            marginLeft: '-2px',
          }}
          className="iconfont icon_sqLayout6"
        ></i>
      ),
      title: 'Seasons & Styles',
      push: '/styles',
    },
    {
      img: (
        <i
          style={{ fontSize: '24px', marginLeft: '-2px', marginRight: '11px' }}
          className="iconfont icon_sqLayout3"
        ></i>
      ),
      title: 'Buy & Order',
      push: '/suppliers',
    },
    {
      img: (
        <i
          style={{ fontSize: '24px', marginLeft: '-2px', marginRight: '11px' }}
          className="iconfont icon_sqLayout4"
        ></i>
      ),
      title: 'Ecommerce',
      push: '/reports/linesheets',
    },
    {
      img: (
        <i
          style={{ fontSize: '24px', marginLeft: '-2px', marginRight: '11px' }}
          className="iconfont icon_sqLayout7"
        ></i>
      ),

      title: 'Brand Libraries',
      push: '/brandLibraries',
      // child: [
      //   {
      //     title: "Fabrics",
      //     push: "/fabrics",
      //     img: <i className="iconfont icon_imgBoxIcon1"></i>,
      //   },
      //   {
      //     title: "Trims & Components",
      //     push: "/trims",
      //     img: <i className="iconfont icon_imgBoxIcon2"></i>,
      //   },
      //   {
      //     title: "Colors",
      //     push: "/colors",
      //     img: <i className="iconfont icon_imgBoxIcon5"></i>,
      //   },
      //   {
      //     title: "Artworks",
      //     push: "/artworks",
      //     img: <i className="iconfont icon_imgBoxIcon3"></i>,
      //   },
      //   {
      //     title: "POM",
      //     push: "/pom",
      //     img: <i className="iconfont icon_vanvasMeasurement1"></i>,
      //   },
      //   {
      //     title: "Size charts",
      //     push: "/sizeCharts",
      //     img: <i className="iconfont icon_imgBoxIcon7"></i>,
      //   },
      //   {
      //     title: "Grading Rules",
      //     push: "/grading",
      //     img: <i className="iconfont icon_imgBoxIcon8"></i>,
      //   },
      //   {
      //     title: "Flats",
      //     push: "/flats",
      //     img: <i className="iconfont icon_imgBoxIcon11"></i>,
      //   },

      //   {
      //     title: "Fit Blocks",
      //     push: "/FitBlocks",
      //     img: <i className="iconfont icon_imgBoxIcon12"></i>,
      //   },
      // ],
    },
    {
      img: (
        <i
          style={{ fontSize: '24px', marginLeft: '-2px', marginRight: '11px' }}
          className="iconfont icon_sqLayout8"
        ></i>
      ),
      title: 'Sourcing & Marketplace',
      push: '/marketplace',
    },
    {
      img: (
        <i
          style={{ fontSize: '24px', marginLeft: '-2px', marginRight: '11px' }}
          className="iconfont icon_stylesSet"
        ></i>
      ),
      title: 'Profile / Settings',
      push: '/settings',
    },
    // {
    //   img: <i className="iconfont icon-a-icon31"></i>,
    //   title: 'Logout',
    //   push: '/Logout',
    // },
  ]);

  const router = useRouter();
  const [ShowNav, setShowNav] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem('token'));
    if (!localStorage.getItem('token')) {
      message.error('Please login first!');
      router.push('/');
    }
  }, []);
  // console.log(router);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (localStorage.getItem('userName')) {
      setUserInfo({
        name: localStorage.getItem('userName'),
        vendorName: localStorage.getItem('vendorName'),
        postGw: localStorage.getItem('postGw'),
      });
    }
  }, []);
  const abbreviation = (str) => {
    if (str) {
      const arr = str.split(' ');
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase();
      }
      return arr.join('');
    }
  };

  const [moveName, setMoveName] = useState();

  useEffect(() => {
    console.log(moveName);
  }, [moveName]);

  useEffect(() => {
    console.log('走这里了吗', ShowNav, setIsWidth);
    setIsWidth(ShowNav);
  }, [ShowNav]);

  useEffect(() => {
    // console.log(closeLayout)
    if (isWidth != ShowNav) {
      setShowNav(isWidth);
    }
  }, [isWidth]);

  return (
    <div
      className={classNames(styles.homeWarper, !ShowNav && styles.narrowNav)}
    >
      <div
        // onMouseMove={() => {
        //   setShowNav(true);
        // }}
        // onMouseLeave={() => {
        //   setShowNav(false);
        // }}
        onClick={() => {
          setShowNav(true);
        }}
        style={{
          cursor: 'pointer',
        }}
        className={classNames(styles.leftNavBar)}
      >
        {/* logo */}
        <div className={styles.navBarLogo}>
          <div
            style={{
              paddingTop: '30px',
              marginLeft: '5px',
            }}
            // onClick={() => {
            //   setShowNav(true);
            // }}
          >
            <Image preview={false} src="/images/logo.svg" />
            {/* <div style={{
                fontSize:'12px',
                color:'rgba(255, 255, 255, 0.5)',
                marginTop:'10px',
                opacity:ShowNav?1:0,
                height:'20px'
              }}>
              © 2023 ViaVia Corporation Inc.
              </div> */}
          </div>
          {ShowNav && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowNav(false);
              }}
            >
              <i
                style={{ fontSize: 20 }}
                className="iconfont icon_sqLayout"
              ></i>
            </div>
          )}
        </div>
        {/* Navi List */}
        <div
          style={{}}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={classNames(styles.navBarList, styles.poppins)}
          onMouseLeave={() => {
            setMoveName();
          }}
        >
          {navBar?.map((ele, index) => {
            return (
              <div
                key={index}
                style={{
                  marginBottom: index == 3 || index == 4 ? '12px' : '12px',
                  position: index == navBar?.length - 1 ? 'absolute' : '',
                  height: '35px',
                  bottom: '80px',
                  width: index == navBar?.length - 1 ? '92.5%' : '',
                }}
                className={classNames(
                  // router.pathname == ele.push ? styles.sideNavActive : "",
                  router.pathname.indexOf(ele.push) !== -1 && index != 0
                    ? styles.sideNavActive
                    : index === 0 && router.pathname == ele.push
                    ? styles.sideNavActive
                    : '',
                  styles.sideBar
                )}
                // onMouseMove={()=>{
                //     console.log(123)
                // }}
                onMouseEnter={() => {
                  // console.log(ele.title)
                  setMoveName(ele.title);
                }}
                // onMouseLeave={()=>{
                //   setMoveName()
                // }}

                onClick={() => {
                  if (ele.push == '/Logout') {
                    localStorage.removeItem('token');
                    localStorage.removeItem('isWebocket');
                    router.push('/');
                  } else {
                    if (!ele.child) {
                      router.push(ele.push);
                    } else {
                      if (!ShowNav) {
                        router.push(ele.push);
                      } else {
                        let copyData = JSON.parse(JSON.stringify(navLiList));
                        if (copyData.indexOf(ele.title) !== -1) {
                          copyData.splice(copyData.indexOf(ele.title), 1);
                        } else {
                          copyData.push(ele.title);
                          console.log(123);
                        }
                        setNavLiList(copyData);
                      }
                    }
                  }
                }}
              >
                <div
                  className={`${
                    moveName == ele.title ? styles.newShowNav : ''
                  } ${
                    moveName == ele.title &&
                    router.pathname.indexOf(ele.push) !== -1
                      ? styles.newIconActive
                      : ''
                  }`}
                  style={{
                    width: '100%',
                    fontSize: '16px',
                    letterSpacing: '0',
                    height: '40px',
                    paddingLeft: '11px',
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                    background:
                      moveName == ele.title &&
                      router.pathname.indexOf(ele.push) !== -1
                        ? '#292929'
                        : '',
                  }}
                >
                  <span
                  // className={index > 4 && index <= 6 ? styles.newIcon : null}
                  >
                    {ele.img}
                  </span>
                  {ShowNav && ele.title}
                  {ShowNav && ele.child && (
                    <div
                      style={{
                        textAlign: 'right',
                        flex: '1',
                      }}
                    >
                      {navLiList.indexOf(ele.title) !== -1 ? (
                        <Image
                          preview={false}
                          width={20}
                          height={20}
                          src="/images/newIcon48.png"
                        />
                      ) : (
                        <Image
                          preview={false}
                          width={20}
                          height={20}
                          src="/images/newIcon49.png"
                        />
                      )}
                    </div>
                  )}
                </div>
                {ShowNav && navLiList.indexOf(ele.title) !== -1 && (
                  <div
                    style={{
                      // borderLeft: "1px solid rgb(204,255,0)",
                      marginTop: '10px',
                      transition: '0.3s',
                    }}
                  >
                    {ele.child?.map((res, index) => {
                      return (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            // console.log(router.pathname.indexOf(res.push) !== -1)
                            router.push(ele.push + res.push);
                          }}
                          key={index}
                          className={classNames(
                            // router.pathname == ele.push ? styles.sideNavActive : "",
                            router.pathname.indexOf(res.push) !== -1
                              ? styles.activeItem
                              : null,
                            styles.item
                          )}
                        >
                          <span
                            style={{
                              marginRight: '10px',
                            }}
                          >
                            {res.img}
                          </span>
                          {res.title}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {moveName && (
            <div
              className={styles.rightBoxList}
              style={{
                left: ShowNav ? '270px' : '64px',
              }}
            >
              <div style={{ fontSize: '12px' }}>{moveName}</div>
              <div>
                {nameObjList[moveName] &&
                  nameObjList[moveName]?.map((res, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          if (res.push) {
                            if (res.push == '/Logout') {
                              localStorage.removeItem('token');
                              localStorage.removeItem('isWebocket');
                              router.push('/');
                            } else {
                              router.push(res.push);
                            }
                          }
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        className={styles.item1}
                      >
                        {/* {res.name} */}
                        {res.icon && (
                          <span>
                            <i
                              style={{
                                fontSize: '24px',
                                marginRight: '5px',
                                // position:'relative',
                                // top:'2px'
                              }}
                              className={res.icon}
                            ></i>
                          </span>
                        )}

                        <span>{res.name}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {ShowNav ? (
            // <div className={styles.copyrightText}>© 2023 ViaVia Corporation</div>
            <div
              className={`${styles.newBoxJs} ${
                moveName == 'My account' ? styles.newBoxJs1 : ''
              }`}
              onMouseEnter={() => {
                setMoveName('My account');
              }}
              style={{
                position: 'absolute',
                bottom: '26px',
                width: '100%',
              }}
            >
              <div className={styles.bottomBox}>
                <div style={{}} className={styles.right}>
                  <div className={styles.textBordus}>
                    {abbreviation(userInfo?.name)}
                  </div>
                  <div className={styles.bgText}>{userInfo?.name}</div>
                  <div style={{}} className={styles.rightText}>
                    {userInfo?.vendorName || userInfo?.postGw}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`${styles.newBoxJs} ${
                moveName == 'My account' ? styles.newBoxJs1 : ''
              }`}
              onMouseEnter={() => {
                setMoveName('My account');
              }}
              style={{
                position: 'absolute',
                bottom: '26px',
                width: '53px',
                overflow: 'hidden',
              }}
            >
              <div className={styles.bottomBox}>
                <div
                  style={{
                    background: '#000',
                  }}
                  className={styles.right}
                >
                  <div className={styles.textBordus}>
                    {abbreviation(userInfo?.name)}
                  </div>
                  {/* <div style={{color:'#fff'}} className={styles.bgText}>{userInfo?.name}</div> */}
                  {/* <div style={{
             background:'#525252'
           }} className={styles.rightText}>
             {userInfo?.vendorName || userInfo?.postGw}
           </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Copyright */}
      </div>

      {/* 内容 */}
      <div
        onClick={() => {
          setShowNav(false);
        }}
        style={{ width: '100%', minWidth: '1504px', overflowY: 'auto' }}
      >
        {props.children}
      </div>
    </div>
  );
}
