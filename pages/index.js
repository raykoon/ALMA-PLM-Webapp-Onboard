import styles from '../styles/home.module.scss';
import logo from '../public/images/logoNew.svg';
import { Checkbox } from 'antd';

import Image from 'next/image';
import CustomButton from '../components/dashboard/customButton';
import IconButton from '../components/styles/common/IconButton';
import loginBtn from '../public/images/loginBtn.png';
import Lock from '../public/images/Lock.png';
import Mail from '../public/images/Mail.png';
import { useRouter } from 'next/router';
import useWebSocket from '../utils/websocket';

// import cs from '../public/images/loginBigBg.svg';
import cs from '../public/images/loginBgNew.svg';

import React, { useState, useEffect } from 'react';
import { Form, Input, message, Button } from 'antd';
import { postAxios, getAxios } from '../utils/axios';
import { API_STATUS } from '../utils/statusCode';

export default function Home() {
  const router = useRouter();
  // const [wsUrl, setWsUrl] = useState(null);
  // const ws = useWebSocket(wsUrl);
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
  };

  const getUserInfo = async () => {
    const res = await getAxios({
      url: `upms/user/getInfo`,
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(`${res.msg}`);

    localStorage.setItem('tenantId', res.data.enterprise.id);
    localStorage.setItem('userId', res.data.user.id);
    localStorage.setItem('userName', res.data.user.nickName);
    localStorage.setItem('roles', res.data.roles[0]);
    localStorage.setItem('postGw', res.data.postsDetails[0]?.name);
    localStorage.setItem('timeZone', res.data.user.timeZone);
    localStorage.setItem('timeType', res.data.user.timeType);
    localStorage.setItem('vendorName', res.data.vendorName || '');

    localStorage.setItem(
      'isWebocket',
      `wss://wss.goalma.dev?userId=${res.data.user.id}&tenantId=${res.data.enterprise.id}`
    );
    router.push({
      pathname: '/dashboard',
    });
  };

  const [isTy, setIsTy] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const SignIn = () => {
    //登录方法
    if (!isNowType) {
      // console.log('登录', postAxios);
      //假定所有都正确

      if (email && passWord) {
        setIsBtnLoading(true);
        postAxios({
          url: 'auth/login',
          data: {
            enterpriseName: 'viavia',
            userName: email,
            password: passWord,
          },
        }).then((res) => {
          // console.log(res);
          if (res.code === API_STATUS.SUCCESS) {
            //Success
            message.success('Success!');
            localStorage.setItem('token', res.data.access_token); //暂时存储token
            setIsSuccess({
              email: true,
              passWord: true,
            });
            getUserInfo();
          } else if (res.code === API_STATUS.ERROR) {
            setIsSuccess({
              email: false,
              passWord: false,
            });
            // message.error(res.msg);
          }
          setIsBtnLoading(false);
        });
        //跳转页面
      } else if (email && !passWord) {
        setIsSuccess({
          email: true,
          passWord: false,
          passWordCopy: true,
        });
      } else if (!email && passWord) {
        setIsSuccess({
          email: false,
          passWord: true,
          passWordCopy: true,
        });
      } else {
        setIsSuccess({
          email: false,
          passWord: false,
          passWordCopy: true,
        });
      }
    } else {
      //此时为注册
      // console.log('注册');
      if (email && passWord && passWord === passWord1 && isTy) {
        //符合条件
        if (passWord?.length < 6) {
          // message.error('Password length cannot be less than 6')
          return false;
        }
        setIsBtnLoading(true);
        postAxios({
          url: 'auth/register',
          data: {
            email: email,
            password: passWord,
            passwordRepetition: passWord1,
          },
        }).then((res) => {
          // console.log(res);
          if (res.code == 200) {
            message.success('success');
            setTimeout(() => {
              setIsNowType(false); //切换到登录界面
              // setEmail()
              setPassWord();
              setPassWord1();
            }, 500);
          } else {
            if ((res.msg = 'The user account already exists')) {
              //邮箱重复
              setEmailErrorText('The user account already exists');
            }
            // message.error(res.msg)
          }
          setIsBtnLoading(false);
        });
      } else {
        // let add={
        //   email: true,
        //   passWord: true,
        //   passWordCopy:true
        // }
        //  if(!email){
        //   add.email=false
        //  }
        //  if(!passWord){
        //   add.passWord=false
        //  }
        //  if(passWord!==passWord1){
        //   add.passWordCopy=false
        //  }
        //  setIsSuccess(add)
      }
    }
  };
  const [email, setEmail] = useState(''); //账号
  const [passWord, setPassWord] = useState(''); //密码
  const [passWord1, setPassWord1] = useState(''); //密码1
  const [isNowType, setIsNowType] = useState(false); //false为登录  true为注册
  const [isSuccess, setIsSuccess] = useState({
    email: true,
    passWord: true,
    passWordCopy: true,
  });

  const isPassword = () => {
    if (passWord === passWord1) {
      setIsSuccess({
        ...isSuccess,
        passWord: true,
        passWordCopy: true,
      });
    } else {
      setIsSuccess({
        ...isSuccess,
        passWordCopy: false,
      });
    }
  };
  const [success1, setIsSuccess1] = useState({
    isShow: false,
  });
  const isPassword1 = () => {
    if (passWord?.length < 6) {
      // console.log(111111);
      setIsSuccess1({
        isShow: true,
      });
    } else {
      setIsSuccess1({
        isShow: false,
      });
    }
  };

  function isEmail(strEmail) {
    if (
      strEmail?.search(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      ) != -1
    )
      return true;
    else return false;
    // alert("oh");
  }

  const [emailIsOk, setEmailIsOk] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('token')) router.push('/dashboard');
  }, []);
  const [opacityValue, setOpacityValue] = useState(0.5);
  return (
    <div id="login" className={styles.Login}>
      <div
        className={styles.nowBg}
        style={{
          background: `url(${cs.src})`,
        }}
      ></div>
      <div className={styles.allBox}>
        <div
          style={{
            top: isNowType ? '-350px' : '',
          }}
          className={styles.top}
        >
          <Image width={137} height={28} src={logo} alt="logo" />
        </div>

        <div className={styles.content}>
          <div
            style={
              {
                // top:isNowType?'-256px':''
              }
            }
            className={styles.tabCheck}
          >
            <div
              style={{
                opacity: opacityValue,
              }}
              className={styles.left}
            >
              {isNowType ? 'I already have an account' : 'New around here?'}
            </div>
            <div className={styles.content1}></div>
            <div
              onMouseOver={() => {
                setOpacityValue(1);
              }}
              onMouseLeave={() => {
                setOpacityValue(0.5);
              }}
              onClick={() => {
                setIsNowType(!isNowType);
                setIsSuccess({
                  email: true,
                  passWord: true,
                  passWordCopy: true,
                });
                setPassWord();
                setPassWord1();
                setEmail();
                setIsBtnLoading(false);
              }}
              className={styles.right}
            >
              {isNowType ? 'LOGIN' : 'CREATE AN ACCOUNT'}
            </div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.title}>
              {isNowType ? 'SIGN UP' : 'LOGIN'}
            </div>
            <div className={styles.inputList}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                  email: email,
                }}
                key={isNowType}
                onFieldsChange={(a, b) => {
                  // console.log(a, b);
                  setEmail(b[0].value);
                  setPassWord(b[1].value);
                  if (b[2]) {
                    setPassWord1(b[2].value);
                  }
                }}
                onFinish={onFinish}
              >
                <Form.Item name="email">
                  {/* Mail */}
                  <Input
                    style={{
                      border: isSuccess.email ? 'none' : '1px solid #f00',
                    }}
                    prefix={
                      <Image width={20} height={20} src={Mail} alt="logo" />
                    }
                    placeholder="Email"
                    // value={email}
                    onBlur={(e) => {
                      // console.log(isEmail(e.target.value));
                      setEmailIsOk(isEmail(e.target.value));
                    }}
                    onChange={() => {
                      setEmailErrorText();
                    }}
                    suffix={
                      email && isEmail(email) ? (
                        <i
                          style={{ color: '#13DE89', fontSize: 20 }}
                          className="iconfont icon_stylesSelectOk"
                        ></i>
                      ) : (
                        ''
                      )
                    }
                  />
                </Form.Item>
                {!emailIsOk && (
                  <div
                    style={{ marginBottom: '20px' }}
                    className={styles.text1}
                  >
                    The mailbox format is incorrect
                  </div>
                )}
                {emailErrorText && (
                  <div
                    style={{ marginBottom: '20px' }}
                    className={styles.text1}
                  >
                    {emailErrorText}
                  </div>
                )}
                {}
                {/* {((!isSuccess.passWordCopy) && isNowType) && (
            <div className={styles.text1}>
              {emailErrorText}
            </div>
          )} */}
                {(passWord !== passWord1 || !passWord1 || !isNowType) && (
                  <Form.Item name="password">
                    <Input.Password
                      style={{
                        border:
                          isSuccess.passWord && !success1?.isShow
                            ? 'none'
                            : '1px solid #f00',
                      }}
                      prefix={
                        <Image width={20} height={20} src={Lock} alt="logo" />
                      }
                      onBlur={(e) => {
                        // console.log(e, passWord);
                        isPassword1();
                        if (passWord && passWord1) {
                          isPassword();
                        }
                      }}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                )}

                {passWord === passWord1 && passWord1 && isNowType && (
                  <Form.Item name="password">
                    <Input
                      style={{
                        border:
                          isSuccess.passWord && !success1?.isShow
                            ? 'none'
                            : '1px solid #f00',
                      }}
                      prefix={
                        <Image width={20} height={20} src={Lock} alt="logo" />
                      }
                      type="password"
                      onBlur={(e) => {
                        // console.log(e, passWord);
                        isPassword1();
                        if (passWord && passWord1) {
                          isPassword();
                        }
                      }}
                      placeholder="Password"
                      suffix={
                        passWord === passWord1 ? (
                          <i
                            style={{ color: '#13DE89', fontSize: 20 }}
                            className="iconfont icon_stylesSelectOk"
                          ></i>
                        ) : (
                          ''
                        )
                      }
                    />
                  </Form.Item>
                )}
                {success1.isShow && isNowType && (
                  <div
                    style={{ marginBottom: '20px' }}
                    className={styles.text1}
                  >
                    Password length cannot be less than 6
                  </div>
                )}
                {isNowType && (
                  <Form.Item name="passwordCopy">
                    <Input
                      style={{
                        border: isSuccess.passWordCopy
                          ? 'none'
                          : '1px solid #f00',
                      }}
                      onBlur={(e) => {
                        // console.log(e, passWord);
                        isPassword();
                      }}
                      prefix={
                        <Image width={20} height={20} src={Lock} alt="logo" />
                      }
                      type="password"
                      placeholder="Repeat password"
                      suffix={
                        passWord === passWord1 &&
                        passWord1 &&
                        passWord1?.length >= 6 ? (
                          <i
                            style={{ color: '#13DE89', fontSize: 20 }}
                            className="iconfont icon_stylesSelectOk"
                          ></i>
                        ) : (
                          ''
                        )
                      }
                    />
                  </Form.Item>
                )}
              </Form>
              {!isSuccess.passWordCopy && isNowType && (
                <div className={styles.text1}>Your passwords don’t match.</div>
              )}

              {isNowType && (
                <div className={styles.singupCheck}>
                  <Checkbox
                    checked={isTy}
                    onChange={() => {
                      setIsTy(!isTy);
                    }}
                  >
                    <span
                      style={{
                        color: '#000',
                        fontSize: '12px',
                        lineHeight: '16px',
                      }}
                    >
                      I’ve read and accepted the{' '}
                      <span
                        style={{
                          fontWeight: 'Poppins',
                          textDecoration: 'underline',
                          fontWeight: '600',
                        }}
                      >
                        Terms & Conditions
                      </span>
                    </span>
                  </Checkbox>
                </div>
              )}
              {(!isSuccess.email || !isSuccess.passWord) && !isNowType && (
                <div className={styles.text1}>
                  Your password or email doesn’t match any existing account.
                  Please try again.
                </div>
              )}

              {!isNowType && (
                <div className={styles.text2}>
                  Forgot your password? We got your back, just click{' '}
                  <span style={{ textDecoration: 'underline' }}>here</span>.
                </div>
              )}
            </div>
            <div
              onClick={() => {
                // SignIn
                if (!isBtnLoading) {
                  if (
                    isNowType &&
                    email &&
                    passWord &&
                    passWord == passWord1 &&
                    isTy &&
                    isEmail(email)
                  ) {
                    SignIn();
                  } else if (!isNowType) {
                    SignIn();
                  }
                }
              }}
              style={{
                fontWeight: '500',
                display: 'inline-block',
                opacity:
                  isNowType &&
                  email &&
                  passWord &&
                  passWord == passWord1 &&
                  isTy &&
                  isEmail(email)
                    ? ''
                    : !isNowType
                    ? ''
                    : '0.1',
              }}
            >
              <IconButton
                name={isNowType ? 'Create my account' : 'Enter my Realm'}
                buttonStyle={{
                  padding: '0 10px',
                  height: '45px',
                  background: '#000',
                  fontSize: '12px',
                  color: '#fff',
                }}
                icon={'icon_stylesRefresh1'}
                iconStyle={{
                  fontSize: 24,
                  marginLeft: 5,
                }}
                isRightIcon={true}
                loading={isBtnLoading}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomText}>© 2023 ViaVia Corporation</div>
    </div>
  );
}
