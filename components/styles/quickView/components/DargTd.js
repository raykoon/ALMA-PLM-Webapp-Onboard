import React, { useState, useEffect, useRef } from 'react';
import { Select, Input, message } from 'antd';
import { API_STATUS } from '../../../../utils/statusCode';
import styles from '../index.module.scss';

const DargTdInput = ({ data, act, editGridTable }) => {
  const [value, setValue] = useState(data.value);

  useEffect(() => {
    setValue(data.value);
  }, []);

  useEffect(() => {
    if (!act && value && value !== data.value) {
      editGridTable(data, value);
    }
  }, [act]);

  return (
    <div id="DargTdInput" className={styles.value}>
      <div className={styles.txt}>
        <Input
          defaultValue={data.value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

const DargTdSelect = ({
  data,
  act,
  type = '',
  editGridTable,
  resTypeOptions,
  resAddTypeOptions,
}) => {
  const [value, setValue] = useState(null);
  const [options, setOption] = useState([]);
  const [serachValue, setSearchValue] = useState('');

  const getOption = async (type = '') => {
    if (!type) return;
    const res = await resTypeOptions(type);
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}  `);
    setOption(res.data);
  };

  const addOption = async () => {
    if (!data.name) return;
    if (!serachValue) return message.info('Please input the name to add!');
    if (options.some((option) => option.label === serachValue)) {
      return message.info('Already exists!');
    }

    const res = await resAddTypeOptions({
      type: data?.name,
      data: {
        label: serachValue,
        value: options.length + 1 + '',
      },
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}  `);

    getOption(data.name);
  };

  useEffect(() => {
    getOption(data.name);
    setValue(data.value);
  }, []);

  useEffect(() => {
    if (!act && value && value !== data.value) {
      editGridTable(data, value);
    }
  }, [act]);

  return (
    <div className={styles.value} id="DargTdSelect">
      <div className={styles.sel}>
        {!type && (
          <Select
            showSearch
            value={options.length > 0 && value}
            style={{
              width: '100%',
            }}
            onChange={(value) => {
              setValue(value);
            }}
            suffixIcon={
              <i
                className="iconfont icon_stylesBottomJt"
                style={{ fontSize: '20px', color: '#383A42' }}
              ></i>
            }
            // onSearch={(value) => {
            //   setSearchValue(value);
            // }}
            placeholder="Select from the list"
            dropdownRender={(menu) => (
              <>
                {menu}
                <div
                  id="DargTdSelectInput"
                  style={{
                    margin: '5px',
                  }}
                >
                  <Input
                    placeholder={`Please input the ${data?.title}`}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: '5px',
                    background: '#F5F5F5',
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    cursor: 'pointer',
                    justifyContent: 'center',
                    border: '1px dashed rgba(0, 0, 0, 0.5)',
                  }}
                  onClick={addOption}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    value={value}
                  >
                    <div
                      className="iconfont icon_stylesAdd"
                      style={{
                        margin: '0',
                        color: 'rgba(0, 0, 0, 0.5)',
                      }}
                    ></div>
                    <h3
                      style={{
                        margin: '0',
                        fontStyle: 'italic',
                        fontSize: '14px',
                        lineHeight: '19px',
                        color: 'rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      Add Option
                    </h3>
                  </div>
                </div>
              </>
            )}
          >
            {options.map((item, index) => (
              <Option key={index} value={item.label} className="DargTdOption">
                {item.label}
              </Option>
            ))}
          </Select>
        )}
        {type === 'customSelect' && (
          <Select
            showSearch
            value={options.length > 0 && value}
            style={{
              width: '100%',
            }}
            onChange={(value) => {
              setValue(value);
            }}
            suffixIcon={
              <i
                className="iconfont icon_stylesBottomJt"
                style={{ fontSize: '20px', color: '#383A42' }}
              ></i>
            }
            // onSearch={(value) => {
            //   setSearchValue(value);
            // }}
            placeholder="Select from the list"
            dropdownRender={(menu) => (
              <>
                {menu}
                <div
                  id="DargTdSelectInput"
                  style={{
                    margin: '5px',
                  }}
                >
                  <Input
                    placeholder={`Please input the ${data?.title}`}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: '5px',
                    background: '#F5F5F5',
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    cursor: 'pointer',
                    justifyContent: 'center',
                    border: '1px dashed rgba(0, 0, 0, 0.5)',
                  }}
                  onClick={addOption}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    value={value}
                  >
                    <div
                      className="iconfont icon_stylesAdd"
                      style={{
                        margin: '0',
                        color: 'rgba(0, 0, 0, 0.5)',
                      }}
                    ></div>
                    <h3
                      style={{
                        margin: '0',
                        fontStyle: 'italic',
                        fontSize: '14px',
                        lineHeight: '19px',
                        color: 'rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      Add Option
                    </h3>
                  </div>
                </div>
              </>
            )}
          >
            {options.map((item, index) => (
              <Option
                key={index}
                value={item.label}
                style={{
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(0,0,0,.2)',
                }}
                className="DargTdOptionDev"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 40,
                  }}
                  className={styles.devTag}
                >
                  <span
                    style={{
                      margin: '10px 0',
                      padding: '0 8px',
                      color: '#ffffff',
                      height: 30,
                      lineHeight: '30px',
                      background: `${
                        item?.cssClass ? item?.cssClass : '#000000'
                      }`,
                      borderRadius: ' 2px',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                {/* <p style={{ margin: 0, marginLeft: 10 }}>{dev.info}</p> */}
              </Option>
            ))}
          </Select>
        )}
      </div>
    </div>
  );
};

const DargTdSelectVender = ({
  info,
  data,
  act,
  type = '',
  editGridTable,
  reqTeamList,
  isNew,
}) => {
  const [value, setValue] = useState(null);
  const [options, setOption] = useState([]);

  const getVenderList = async () => {
    let res;
    res = await reqTeamList({
      styleId: info.styleId,
      teamId: info.teamId,
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}  `);
    const styleTeamlist = res.data;
    const vendorList = styleTeamlist.filter(
      (user) => user?.postCode === 'Vendor'
    );
    console.log('vendorList', vendorList);
    setOption(vendorList);
  };

  useEffect(() => {
    if (!isNew) {
      getVenderList();
      setValue(data.value);
    }
  }, []);

  useEffect(() => {
    if (!act && value && value !== data.value) {
      editGridTable(data, value);
    }
  }, [act]);

  return (
    <div className={styles.value} id="DargTdSelect">
      <div className={styles.sel}>
        {!type && (
          <Select
            value={options.length > 0 && value}
            style={{
              width: '100%',
            }}
            onChange={(value) => {
              setValue(value);
            }}
            suffixIcon={
              <i
                className="iconfont icon_stylesBottomJt"
                style={{ fontSize: '20px', color: '#383A42' }}
              ></i>
            }
            placeholder="Select from the list"
          >
            {options.map((item) => (
              <Option
                key={item?.userId}
                value={item?.postName}
                className="DargTdOption"
              >
                {item?.postName}
              </Option>
            ))}
          </Select>
        )}
      </div>
    </div>
  );
};

const SizeBox = ({ info, data, act, editGridTable }) => {
  // const [value, setValue] = useState(null);
  // const sizeArr = ['XS', 'S', 'M', 'L', 'XL'];
  // useEffect(() => {
  // setValue(data.value);
  // }, []);

  // useEffect(() => {
  //   if (!act && value && value !== data.value) {
  //     editGridTable(data, value);
  //   }
  // }, [act]);

  useEffect(() => {
  }, []);

  return (
    <div className={styles.sizeBox}>
      {info?.sizesResps?.length > 0 &&
        info.sizesResps.map((size, index) => {
          if (index < 2) {
            return (
              <div
                key={index}
                // onClick={() => {
                //   setValue(size);
                // }}
                style={
                  {
                    // background: value === size + '' && '#000000',
                    // color: value === size + '' && '#ffffff',
                  }
                }
              >
                {size?.sizeRang}
              </div>
            );
          }
        })}
      {info?.sizesResps?.length > 2 && (
        <span>+{info?.sizesResps?.length - 2} sizes</span>
      )}
    </div>
  );
};

const DargTdTags = ({ data, act, editGridTable }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const valueArr = data?.value?.split(',');
    setValue(valueArr);
  }, []);

  useEffect(() => {
    const strValue = '';
    value?.length > 0 &&
      value.forEach((str, index) => {
        strValue = strValue + str + (value.length - 1 !== index ? ',' : '');
      });

    if (!act && value && value !== data.value) {
      editGridTable(data, strValue);
    }
  }, [act]);

  const handleKeywordsChange = (value) => {
    if (value.length > 5) {
      value.splice(-1, 1);
      return false;
    }
    console.log('value', value);
    setValue(value);
  };

  return (
    <div className={styles.value} id="DargTdSelect">
      <div className={styles.sel}>
        <Select
          mode="tags"
          placeholder="Enter"
          onChange={handleKeywordsChange}
          dropdownStyle={{ display: 'none' }}
          value={value}
          // tokenSeparators={[' ']}
          style={{
            width: '100%',
          }}
          tagRender={(props) => {
            return (
              <div
                style={{
                  margin: '0 5px 0 0',
                  padding: '0 5px',
                  height: '24px',
                  lineHeight: '24px',
                  color: '#000000',
                  background: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '2px',
                }}
              >
                {props.label}
              </div>
            );
          }}
        ></Select>
      </div>
    </div>
  );
};

const DargTdSelectOther = ({ data, act, editGridTable, reqOptions }) => {
  const [value, setValue] = useState([]);
  const [options, setOption] = useState([]);

  const getOption = async () => {
    const res = await reqOptions({ pageNum: 1, pageSize: 99999 });
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}  `);
    setOption(res.data);
  };

  useEffect(() => {
    getOption();
    const valueArr = data?.value?.split(',');
    setValue(valueArr || []);
  }, []);

  useEffect(() => {
    if (!act && value && value !== data.value) {
      editGridTable(data, value, true);
    }
  }, [act]);

  return (
    <div
      className={styles.value}
      id="DargTdSelect"
      style={{ overflow: 'auto' }}
    >
      <div className={styles.sel}>
        <Select
          mode="multiple"
          showSearch
          onChange={(value) => {
            setValue(value);
          }}
          style={{
            width: '100%',
          }}
          tagRender={(props) => {
            const arr = options.filter(
              (option) => props.value === option?.name
            );
            const item = arr?.[0];
            return (
              <div
                key={item?.id}
                style={{
                  height: 50,
                  marginRight: 5,
                  padding: '2px 5px 2px 2px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    marginRight: 5,
                    width: 36,
                    height: 36,
                    background: `${item?.internalCode}`,
                    borderRadius: '2px',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: 50,
                  }}
                >
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: '14px',
                      margin: 0,
                    }}
                  >
                    {item?.name}
                  </p>
                  <span
                    style={{
                      fontSize: '12px',
                      lineHeight: '14px',
                      textDecoration: 'underline',
                    }}
                  >
                    {item?.pantoneLibrary}
                  </span>
                </div>
              </div>
            );
          }}
          value={options.length > 0 && value}
          suffixIcon={
            <i
              className="iconfont icon_stylesBottomJt"
              style={{ fontSize: '20px', color: '#383A42' }}
            ></i>
          }
          placeholder="Select from the list"
        >
          {options.map((item, index) => (
            <Option
              key={index}
              value={item.name}
              style={{
                height: 50,
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid rgba(0,0,0,.2)',
              }}
              className="DargTdOptionDev"
            >
              <div
                key={item?.id}
                style={{
                  height: 50,
                  marginRight: 5,
                  padding: '2px 5px 2px 2px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    marginRight: 5,
                    width: 36,
                    height: 36,
                    background: `${item?.internalCode}`,
                    borderRadius: '2px',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: 50,
                  }}
                >
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: '14px',
                      margin: 0,
                    }}
                  >
                    {item?.name}
                  </p>
                  <span
                    style={{
                      fontSize: '12px',
                      lineHeight: '14px',
                      textDecoration: 'underline',
                    }}
                  >
                    {item?.pantoneLibrary}
                  </span>
                </div>
              </div>
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default function Index({
  isNew,
  data,
  info,
  userInfo,
  reqStylesInfoEdit,
  reqAddActivityLog,
  resTypeOptions,
  newStyleInfo,
  setNewStyleInfo,
  resAddTypeOptions,
  reqBooksList,
  reqTeamList,
}) {
  const [act, setAct] = useState(false);

  const editGridTable = async (data, value, isArr) => {
    if (isNew && data) {
      const newData = { ...newStyleInfo };

      console.log(data);
      if (data.name === 'styleNumber') {
        newData.styleNo = value;
        console.log(newData);
      }

      if (data.fixed) {
        let newValue = true;
        for (let i = 0; i < newData.taxonomy.length; i++) {
          if (newData.taxonomy[i].dictCode === data.name) {
            newData.taxonomy[i].dictValue = value + '';
            newValue = false;
          }
        }
        if (newValue) {
          newData.taxonomy.push({
            dictCode: data.name,
            dictValue: isArr ? value.join(',') : value + '',
          });
        }
      } else {
        let newValue = true;
        for (let i = 0; i < newData.fields.length; i++) {
          if (newData.fields[i].dictCode === data.name) {
            newData.fields[i].dictValue = value + '';
            newValue = false;
          }
        }
        if (newValue) {
          newData.fields.push({
            dictCode: data.name,
            dictValue: value + '',
          });
        }
      }
      setNewStyleInfo(newData);
    } else {
      const logData = {
        title: data.title,
        oldValue: data.value,
        nowValue: value,
      };

      if (data) {
        const newData = {
          styleId: info.styleId,
          styleImage: {
            fileId: info.styleImage.imageId,
            fileCategory: info.styleImage.imageType,
          },
        };

        if (data.name === 'styleNumber') {
          newData.styleNo = value + '';
        }

        if (data.fixed) {
          newData.taxonomy = [
            { fieldsId: data.id, dictCode: data.name, dictValue: value + '' },
          ];
        } else {
          newData.fields = [
            { fieldsId: data.id, dictCode: data.name, dictValue: value + '' },
          ];
        }

        const res = await reqStylesInfoEdit(newData);

        if (res.code !== API_STATUS.SUCCESS)
          return message.info(` ${res.msg}  `);

        addActivityLog(logData);
      }
    }
  };

  const addActivityLog = async (logData) => {
    const activityContent = {
      userInfo: userInfo,
      msg: logData.oldValue
        ? `updated the '${logData.title}' from '${logData.oldValue}' to '${logData.nowValue}'`
        : `updated the '${logData.title}' to '${logData.nowValue}'`,
    };

    const res = await reqAddActivityLog({
      activityContent: JSON.stringify(activityContent),
      activityType: 'text',
      meberType: userInfo.roles === 'style_vendor_role' ? 'vendor' : 'user',
      styleId: info.styleId,
      ...userInfo,
    });

    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}  `);
  };

  return (
    <div
      className={styles.dragTd}
      style={{
        background: act ? '#ffffff' : '#F5F5F5',
        border: act ? '2px solid #CCFF00' : '2px solid #F5F5F5',
      }}
      tabIndex="-1"
      onBlur={() => {
        setAct(false);
      }}
      onFocus={() => {
        setAct(true);
      }}
    >
      <div className={styles.key}>
        <i
          style={{
            fontSize: 24,
            color: 'rgba(0,0,0,.3)',
            cursor: 'move',
          }}
          className="iconfont icon-drag dragBtn"
        ></i>
        <span>{data.title}</span>
      </div>
      {data.type === 'input' && (
        <DargTdInput data={data} act={act} editGridTable={editGridTable} />
      )}
      {data.type === 'textArea' && (
        <DargTdInput data={data} act={act} editGridTable={editGridTable} />
      )}
      {data.type === 'select' && (
        <DargTdSelect
          data={data}
          act={act}
          editGridTable={editGridTable}
          resTypeOptions={resTypeOptions}
          resAddTypeOptions={resAddTypeOptions}
        />
      )}
      {data.type === 'styleStatus' && (
        <DargTdSelect
          act={act}
          data={data}
          editGridTable={editGridTable}
          type="customSelect"
          resTypeOptions={resTypeOptions}
          resAddTypeOptions={resAddTypeOptions}
        />
      )}
      {data.type === 'developmentPhase' && (
        <DargTdSelect
          act={act}
          data={data}
          editGridTable={editGridTable}
          type="customSelect"
          resTypeOptions={resTypeOptions}
          resAddTypeOptions={resAddTypeOptions}
        />
      )}
      {data.type === 'tags' && (
        <DargTdTags data={data} act={act} editGridTable={editGridTable} />
      )}
      {data.type === 'txt' && (
        <div className={styles.value}>
          {data.value.map((name) => (
            <span className={styles.tag}>{name}</span>
          ))}
        </div>
      )}
      {data.type === 'color' && (
        <DargTdSelectOther
          act={act}
          data={data}
          editGridTable={editGridTable}
          reqOptions={reqBooksList}
        />
      )}
      {data.type === 'size' && (
        <div className={styles.value}>
          <SizeBox
            info={info}
            data={data}
            act={act}
            editGridTable={editGridTable}
          />
        </div>
      )}
      {data.type === 'sampleSize' && (
        <div className={styles.value}>
          {info?.sizesResps?.length > 0 && info?.sizesResps?.[0]?.sampleSize}
        </div>
      )}
      {data.type === 'vendor' && (
        <DargTdSelectVender
          info={info}
          act={act}
          data={data}
          isNew={isNew}
          editGridTable={editGridTable}
          reqTeamList={reqTeamList}
        />
      )}
    </div>
  );
}
