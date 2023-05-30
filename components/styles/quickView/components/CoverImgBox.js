import React, { useState, useEffect } from 'react';
import { Upload, message, Skeleton } from 'antd';
import IconButton from '../../common/IconButton';
import { API_STATUS } from '../../../../utils/statusCode';
import styles from '../index.module.scss';

export default function Index({
  url,
  isNew,
  tenantId,
  info,
  userInfo,
  reqStylesInfoEdit,
  reqAddActivityLog,
  resUploadFile,
  resKeyToUrl,
  newStyleInfo,
  setNewStyleInfo,
  resUploadFileV2,
}) {
  const [coverImg, setCoverImg] = useState('');

  useEffect(() => {
    if (url) setCoverImg(url);
  }, [url]);

  const uploadImg = async (data, fileName, fileSuffix) => {
    const res = await resUploadFileV2(data);
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}  `);

    const fileData = res?.data;

    const newFileData = {
      fileCategory: 'Base',
      fileName: fileName,
      filePath: fileData?.filePath,
      fileSize: fileData?.size,
      fileSuffix: fileSuffix,
      md5: fileData?.md5,
      fileType: 'Image',
      fileWidth: fileData?.fileWidth,
      fileHeight: fileData?.fileHeight,
      fileWidthHeightCompare: fileData?.fileWidthHeightCompare,
    };

    setCoverImg(fileData?.fileUrl);
    onSaveCoverImg(newFileData);
  };

  const onSaveCoverImg = async (newFileData) => {
    if (isNew) {
      setNewStyleInfo({
        ...newStyleInfo,
        styleImage: {
          ...newFileData,
        },
      });
    } else {
      const res = await reqStylesInfoEdit({
        styleId: info.styleId,
        styleImage: {
          ...newFileData,
          fileId: info.styleImage.imageId,
        },
      });
      if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}  `);

      addActivityLog(newFileData?.filePath);
    }
  };

  const addActivityLog = async (key) => {
    const activityContent = {
      imagePath: key,
      userInfo: userInfo,
      msg: `Updated cover image to `,
    };

    const res = await reqAddActivityLog({
      activityContent: JSON.stringify(activityContent),
      activityType: 'img',
      meberType: userInfo.roles === 'style_vendor_role' ? 'vendor' : 'user',
      styleId: info.styleId,
      ...userInfo,
    });
    if (res.code !== API_STATUS.SUCCESS) return message.info(` ${res.msg}   `);
  };

  const beforeUpload = (file) => {
    const nameArr = file.name.split('.');
    const fileSuffix = nameArr[nameArr.length - 1];
    const fileName = file.name.split(`.${fileSuffix}`);
    console.log('nameArr', nameArr);
    console.log('fileSuffix', fileSuffix);
    console.log('fileName', fileName);

    setCoverImg('');
    const formData = new FormData();
    formData.append('file', file);
    if (!isNew) formData.append('styleId', info.styleId);
    formData.append('tenantId', tenantId);
    formData.append('type', 'Base');
    uploadImg(formData, fileName[0], fileSuffix);
    return false;
  };

  return (
    <div
      className={`${styles.coverImgBox} ${!coverImg && styles.coverImgHover}`}
    >
      {coverImg && (
        <img
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src={coverImg}
        />
      )}
      <div className={`${styles.uploadBox} ${!coverImg && styles.show}`}>
        <Upload beforeUpload={beforeUpload}>
          <p>
            Drag and Drop an image here
            <br />
            OR
            <br />
            Select from your computer
          </p>
          <IconButton
            name="Upload a file"
            buttonStyle={{
              marginTop: 10,
              padding: '0 15px',
              height: 44,
              background: '#f2f2f2',
            }}
            icon="icon_stylesDownload"
            iconStyle={{ fontSize: 24 }}
          />
        </Upload>
      </div>
    </div>
  );
}
