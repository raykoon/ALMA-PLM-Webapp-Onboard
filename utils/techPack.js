//根据盒子宽度  和文字宽度 计算文字居中的起始位置
export const TextCenter = (boxWidth, text,fontSize,defaultSeat) => {
  const font = `bold ${fontSize || 12}pt arial`;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  // console.log(context.measureText(text)?.width);
  const width = context.measureText(text)?.width;
  return {
    left:(boxWidth - width) / 2 + defaultSeat?.left,
    top:0 + defaultSeat?.top
  };
};


export const TextNowWidth=(text,size,weight)=>{
  const font = `${weight || 'bold'} ${size || 9}px Poppins`;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  // console.log(context.measureText(text)?.width);
  const width = context.measureText(text)?.width;
  return width
}



//根据图片宽高  取最大值完全显示  水平垂直居中显示
//boxWidth   存放图片的盒子的宽
//boxHeight   存放图片的盒子的高
//imgObj     图片的宽高
export const ImageCenter = (boxWidth,boxHeight,imgObj,defaultSeat) =>{
      //首先判断图片宽高谁大 取大的 若相同则取宽度
      let endNum
      let endType
      let newImage={}
      if(imgObj?.width>=imgObj?.height){
        endNum=imgObj?.width
        endType='width'
      }else{
        endNum=imgObj?.height
        endType='height'
      }
      //判断图片宽/高是否大于盒子宽高
      if(endType=='width'){
               endNum=boxWidth
               if(endNum * (imgObj?.height/imgObj?.width) < boxHeight){   //高度
                newImage['width']=parseInt(endNum)
                newImage['height']=parseInt((endNum * (imgObj?.height/imgObj?.width)))
               }else{
                endNum=boxHeight
                newImage['height']=parseInt(endNum)
                newImage['width']=parseInt((endNum * (imgObj?.width/imgObj?.height)))
               }
      }else{
            endNum=boxHeight
            if(endNum * (imgObj?.width/imgObj?.height) < boxWidth){
                newImage['height']=parseInt(endNum)
                newImage['width']=parseInt((endNum * (imgObj?.width/imgObj?.height)))
            }else{
                endNum=boxWidth
                newImage['width']=parseInt(endNum)
                newImage['height']=parseInt((endNum * (imgObj?.height/imgObj?.width)))
            }
      }
      //接下来开始计算图片居中所需要的left top
      newImage['left']=parseInt((boxWidth-newImage['width'])/2)
      newImage['top']=parseInt((boxHeight-newImage['height'])/2)
    return {
        width:newImage?.width ,
        left:newImage?.left + defaultSeat?.left,
        top:newImage?.top+ defaultSeat?.top,

    }
}


