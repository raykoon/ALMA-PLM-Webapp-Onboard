import { useRef, useState, useEffect, useContext } from 'react';
import { context } from '../pages/_app';

const STATE_OPTIONS = [
  { key: 0, value: 'connecting' },
  { key: 1, value: 'connection ok' },
  { key: 2, value: 'connection closing' },
  { key: 3, value: 'connecting closed' },
];

const useWebSocket = (url) => {
  console.log(url);
  const webSocket = useRef();
  const timer = useRef();
  const serverTimer = useRef();
  const reconnectTimer = useRef();
  const connectionInfo = useRef(null);

  const [refresh, setRefresh] = useState(false);

  const [lockReconnect, setLockReconnect] = useState(false);

  const [webSocketState, setWebSocketState] = useState(STATE_OPTIONS[0]);

  const [webSocketMessage, setWebSocketMessage] = useState();

  const createWebSocket = () => {
    try {
      webSocket.current = new WebSocket(url);
      console.log('webSocket.current', webSocket.current);
      webSocket.current.onopen = () => {
        console.log('websocket connection ok');

        setWebSocketState(() => {
          heartCheck();
          return STATE_OPTIONS[webSocket.current?.readyState ?? 0];
        });
      };
      webSocket.current.onerror = () => {
        console.log('websocket connection exception');
        setWebSocketState(() => {
          reconnect();
          return STATE_OPTIONS[webSocket.current?.readyState ?? 0];
        });
      };
      webSocket.current.onclose = () => {
        console.log('websocket connection closed',STATE_OPTIONS[webSocket.current?.readyState ?? 0]);
        setWebSocketState(() => {
          return STATE_OPTIONS[webSocket.current?.readyState ?? 0];
        });
      };
      webSocket.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        heartCheck(true);
        if (data?.connectionId && connectionInfo.current) {
          setRefresh(() => data?.connectionId != connectionInfo.current);
        } else if (connectionInfo.current === null) {
          connectionInfo.current = data?.connectionId;
        }
        if (data?.messageType) {
          console.log('websocket message data: --- ', data);
          // setWebSocketMessage(() => data);
        }
      };
    } catch (error) {
      console.log('websocket creation failed: --- ', error);
      reconnect();
    }
  };

  const closeWebSocket = () => {
    timer.current && clearTimeout(timer.current);
    serverTimer.current && clearTimeout(serverTimer.current);
    if (webSocket.current === null) return;
    try {
      webSocket.current?.close();
      webSocket.current = null;
    } catch (error) {
      console.log('Failed to close websocket: --- ', error);
    }
  };

  const reconnect = () => {
    if (lockReconnect) return;
    console.log('websocket is reconnecting...');
    setLockReconnect(true);
    reconnectTimer.current && clearTimeout(reconnectTimer.current);
    reconnectTimer.current = setTimeout(() => {
      closeWebSocket();
      createWebSocket();
      setLockReconnect(false);
    }, 5000);
  };

  const heartCheck = (reset) => {
    const timeout = 30 * 1000;
    if (reset) {
      timer.current && clearTimeout(timer.current);
      serverTimer.current && clearTimeout(serverTimer.current);
    }
    timer.current = setTimeout(() => {
      sendMessage(`heart check in ${new Date().getTime()}`);
      serverTimer.current = setTimeout(() => {
        reconnect();
      }, timeout);
    }, timeout);
  };

  const sendMessage = (message) => {
    if (typeof message !== 'string') {
      return Promise.reject('Type must be string!');
    }
    if (webSocket.current?.readyState === webSocket.current?.OPEN) {
      webSocket.current.send(message);
      return Promise.resolve();
    }
  };

  useEffect(() => {
    console.log('websocket url: --- ', url);
    url ? createWebSocket() : closeWebSocket();
    return () => {
      console.log('Leaving page...');
      closeWebSocket();
    };
  }, [url]);

  return {
    refresh,
    webSocketState,
    webSocketMessage,
    closeWebSocket,
    sendMessage,
    webSocket,
    heartCheck
  };
};

export default useWebSocket;
