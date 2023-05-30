import SymbolIcon from '../../csIcon/iconIndex';
import { LoadingOutlined } from '@ant-design/icons';

export default function Index({
  name = '', //按钮文字
  icon = '',
  iconStyle = {},
  buttonStyle = {},
  onClick = () => {},
  isRightIcon = false,
  key,
  id,
  isSymbol = false, //用于彩色图标
  loading,
  loadingStyle,
  isRed = false,
  disabled = false,
}) {
  return (
    <div
      id={id && id}
      key={key && key}
      onClick={() => {
        if (loading || disabled) return;
        onClick();
      }}
      draggable={true}
      style={{
        opacity: loading ? 0.5 : 1,
        cursor: loading || disabled ? 'default' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...buttonStyle,
      }}
    >
      {loading && (
        <LoadingOutlined
          style={{
            marginRight: 5,
            fontSize: 20,
            ...loadingStyle,
          }}
          spin
        />
      )}
      {icon && !isRightIcon && !isSymbol && (
        <i
          className={`iconfont ${icon}`}
          style={{
            ...iconStyle,
          }}
        ></i>
      )}
      {icon && !isRightIcon && isSymbol && (
        <SymbolIcon className={icon} width={24}></SymbolIcon>
      )}
      {name && (
        <span
          style={{
            marginLeft: icon ? '5px' : '0',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </span>
      )}
      {icon && isRightIcon && !isSymbol && (
        <i
          className={`iconfont ${icon}`}
          style={{
            ...iconStyle,
          }}
        ></i>
      )}
      {icon && isRightIcon && isSymbol && (
        <SymbolIcon className={icon} width={24}></SymbolIcon>
      )}
      {isRed && (
        <span
          style={{
            marginLeft: 5,
            width: 8,
            height: 8,
            background: '#FF0000',
            borderRadius: '100%',
          }}
        ></span>
      )}
    </div>
  );
}
