/* eslint-disable react/jsx-no-target-blank */
import '../styles/globals.scss';
import '../styles/styles.scss';
import {
  useEffect,
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useContext,
} from 'react';
import { Modal } from 'antd';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
// import classNames from 'classnames';
import 'antd/dist/antd.css';
import _ from 'lodash';
import 'animate.css';
import 'react-calendar/dist/Calendar.css';
// import "video-react/dist/video-react.css"; // import css
import Router from 'next/router';
import dynamic from 'next/dynamic';
import store from '../store';
import { Provider } from 'react-redux';
import useWebSocket from '../utils/websocket';
import { THEME_TYPE } from '../store/storeCs';
export const context = createContext({
  ws: null,
  list: [],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [wsUrl, setWsUrl] = useState(null);
  let ws = useWebSocket(wsUrl);

  const [themeType, setThemeType] = useState({
    ws: null,
    list: [],
  });

  const changeTheme = (value, list) => {
    console.log(value);
    if (value && !list) {
      setThemeType({
        ws: value,
        list: themeType?.list,
      });
    } else if (list && !value) {
      setThemeType({
        ws: themeType?.value,
        list: list,
      });
    } else if (list && value) {
      setThemeType({
        ws: value,
        list: list,
      });
    }
  };
  useEffect(() => {
    console.log(localStorage?.getItem('isWebocket'), router);
    if (localStorage?.getItem('isWebocket') && router?.asPath != '/') {
      setWsUrl(localStorage?.getItem('isWebocket'));
      if (!ws) {
        ws = useWebSocket(localStorage?.getItem('isWebocket'));
      }
    }
  }, [router]);

  useEffect(() => {
    if (wsUrl) {
      changeTheme(ws);
    }
  }, [wsUrl]);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>ALMA - A NEW CUTTING-EDGE PLM FOR FASHION BUSINESS</title>
        <meta
          name="description"
          content="A NEW CUTTING-EDGE PLM FOR FASHION BUSINESS, MADE FOR GEN Z DESIGNERS, VENDORS AND MILLS."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="stylesheet" href="/icon/iconfont.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {getLayout(
        <context.Provider
          value={{ themeType, changeTheme }}
          // store={store}
        >
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </context.Provider>
      )}
    </>
  );
}

export default MyApp;
