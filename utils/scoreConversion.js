import Fraction from './fraction'



const changeTs=(num1,num2,num3)=>{
    let add=num3
    // if(add?.indexOf(num1)!==-1 ){}
    add=add.replace(new RegExp(num1, "g"), num2)
    return add
}

export default function Index(value,type,oldType){
    // console.log(value,'传进来的值')
    //type的类型
    //in 小数转分数 cm转英寸
    //cm 小数转分数 英寸转cm
    //null 小数转分数
    //dm  分数转小数
    //dmIn 分数转小数 cm转英寸
    //dmCm 分数转小数  英寸转cm

    //oldType  转换之前的数据类型
    // console.log(value,type,oldType)
    // console.log(value,type,oldType,'传进来的值')
    let add=value
    // console.log(value)
    if(value+''==='0'){
       return '0'
    }
    else if((!value && value!==0  && value!=='0') || value==''){
        return false
    }else{
        add=add?.toString()?.replace(/(^\s*)|(\s*$)/g, "")   //首先去掉前后空格
    }

    // let v='sssssa/'
    // console.log(v.slice(0,-1))
    if(add[0]=='/'){
       add=add.slice(1)
    }else if(add[add?.length-1]=='/'){
        add=add.slice(0,-1)
    }
    if(add[add?.length-1]=='/' || add[0]=='/'){
        // console.log('格式不正确')
        return false
    }
    // console.log(add)
    // console.log(type)
    if(!isNaN(parseFloat(Number(value))) && isFinite(Number(value))){
        // console.log('是数字')
        //此时开始转化 type默认为英寸
        // if(type=='in' && oldType=='cm'){  //转换为in 英寸
        //     add=Number((Number(value) / 2.54).toFixed(4))
        // }else if(type=='cm' && oldType=='in'){ //转换为cm
        //     add=Number((Number(value) * 2.54).toFixed(4))
        // }else if(type=='mm' && oldType=='in'){ //转换为cm
        //     add=Number((Number(value) * 25.4).toFixed(4))
        //     // console.log(Number(value)/25.4,Number(value),add)
        // }else if(type=='in' && oldType=='mm'){ //转换为cm
        //     add=Number((Number(value) / 25.4).toFixed(4))
        // }else if(type=='m' && oldType=='in'){ //转换为cm
        //     add=Number((Number(value) * 0.0254).toFixed(4))
        // }else if(type=='in' && oldType=='m'){ //转换为cm
        //     add=Number((Number(value) / 0.0254).toFixed(4))
        // }else if(type=='foot' && oldType=='in'){ //转换为cm
        //     add=Number((Number(value) * 0.07 ).toFixed(4))
        // }else if(type=='in' && oldType=='foot'){ //转换为cm
        //     add=Number((Number(value) / 0.07 ).toFixed(4))
        // }else if(type=='yard' && oldType=='in'){ //转换为cm
        //     add=Number((Number(value) * 0.0278).toFixed(4))
        // }else if(type=='in' && oldType=='yard'){ //转换为cm
        //     add=Number((Number(value) / 0.0278 ).toFixed(4))
        // }else if(type=='dm'){  //分数转小数
        //     // add=Number(value)
        //     add=Number(Number(value).toFixed(4))
        //     // console.log(add)
        // }else{
        //     //不转换
        //     add=Fraction(Number(Number(value).toFixed(4)))
        // }



 
        if(type=='in' && oldType=='cm'){  //转换为in 英寸
            add=Number((Number(value) / 2.54))
        }else if(type=='cm' && oldType=='in'){ //转换为cm
            add=Number((Number(value) * 2.54))
        }else if(type=='mm' && oldType=='in'){ //转换为cm
            add=Number((Number(value) * 25.4))
            // console.log(Number(value)/25.4,Number(value),add)
        }else if(type=='in' && oldType=='mm'){ //转换为cm
            add=Number((Number(value) / 25.4))
        }else if(type=='m' && oldType=='in'){ //转换为cm
            add=Number((Number(value) * 0.0254))
        }else if(type=='in' && oldType=='m'){ //转换为cm
            add=Number((Number(value) / 0.0254))
        }else if(type=='foot' && oldType=='in'){ //转换为cm
            // add=Number((Number(value) * 0.0834  ))
            add=Number((Number(value) /12 ))

        }else if(type=='in' && oldType=='foot'){ //转换为cm
            // add=Number((Number(value) / 0.0834  ))
            add=Number((Number(value) *12 ))

        }else if(type=='yard' && oldType=='in'){ //转换为cm
            add=Number((Number(value) /36))
        }else if(type=='in' && oldType=='yard'){ //转换为cm
            add=Number((Number(value) *36 ))
        }else if(type=='dm'){  //分数转小数
            // add=Number(value)
            add=Number(Number(value).toFixed(4))
            // console.log(add)
        }else{
            //不转换
            add=Fraction(Number(Number(value)))
        }
        // console.log(add)
    }else{
        // console.log('不是数字，可能是分数')
        let copyAdd=add.split(' ')
        // console.log(copyAdd)
        if(copyAdd?.length===1){
            //此时可能是纯分数
            let isFs=copyAdd[0].split('/')
            // console.log(isFs)
            if(isFs?.length==2){
                //可能是正确的分数
                if(isFs[1]!=='0' && (!isNaN(parseFloat(Number(isFs[0]))) && isFinite(Number(isFs[0]))) && !isNaN(parseFloat(Number(isFs[1]))) && isFinite(Number(isFs[1]))){
                    add=eval(copyAdd[0])
                //   console.log(add,type)
                    //此时是正确的纯分数
                  //开始计算
                  if(type=='in' && oldType=='cm'){  //转换为in 英寸
                    add=Number((Number(add) / 2.54).toFixed(4))
                    // console.log(add)
                }else if(type=='cm' && oldType=='in'){ //转换为cm
                    add=Number((Number(add) * 2.54).toFixed(4))
                }else if(type=='mm' && oldType=='in'){ //转换为cm
                    add=Number((Number(add) * 25.4).toFixed(4))
                }else if(type=='in' && oldType=='mm'){ //转换为cm
                    add=Number((Number(add) / 25.4).toFixed(4))
                }else if(type=='m' && oldType=='in'){ //转换为cm
                    add=Number((Number(add) * 0.0254).toFixed(4))
                }else if(type=='in' && oldType=='m'){ //转换为cm
                    add=Number((Number(add) / 0.0254).toFixed(4))
                }else if(type=='yard' && oldType=='in'){ //转换为cm
                    add=Number((Number(add) /36).toFixed(4))
                }else if(type=='in' && oldType=='yard'){ //转换为cm
                    add=Number((Number(add) * 36).toFixed(4))
                }else if(type=='foot' && oldType=='in'){ //转换为cm
                    // add=Number((Number(add) * 0.0834 ))
            add=Number(Number(add) /12 )

                }else if(type=='in' && oldType=='foot'){ //转换为cm
                    // add=Number((Number(add) / 0.0834 ))
            add=Number(Number(add) *12 )

                }else if(type=='dm'){  //分数转小数
                    // add=Number(add)
                    add=Number(Number(add).toFixed(4))
                }else{
                    //不转换
                    add=Fraction(Number(Number(add).toFixed(4)))
                }
                  
                }else{
                    //不是正确的纯分数
                    add=false
                }
                
            }else{
                //不是正确的分数
                add=false
            }
        }else if(copyAdd?.length===2){   //此时可能是正确的 整数加分数
            if(!isNaN(parseFloat(Number(copyAdd[0]))) && isFinite(Number(copyAdd[0]))){
                //此时为正确的整数
                // console.log('此时为正确的整数')
                  let isFs=copyAdd[1].split('/')

                if(isFs?.length==2){
                   //此时可能为正确的分数
                   if(isFs[1]!=='0' && (!isNaN(parseFloat(Number(isFs[0]))) && isFinite(Number(isFs[0]))) && !isNaN(parseFloat(Number(isFs[1]))) && isFinite(Number(isFs[1]))){
                    //此时是正确的纯分数
                    add=eval(copyAdd[1])
                    // console.log('此时是正确的纯分数',add,copyAdd[0])
                 
                    //开始计算
                    if(add<0){
                      add=false
                    }else if(add>0){
                  
                        if(Number(copyAdd[0])>0){
                            add=Number(copyAdd[0])+add
                            // console.log('此时是正确的纯分数',add)
                            if(type=='in' && oldType=='cm'){  //转换为in 英寸
                                add=Number((Number(add) / 2.54).toFixed(4))
                                // console.log(add)
                            }else if(type=='cm' && oldType=='in'){ //转换为cm
                                add=Number((Number(add) * 2.54).toFixed(4))
                            }else if(type=='mm' && oldType=='in'){ //转换为cm
                                add=Number((Number(add) * 25.4).toFixed(4))
                            }else if(type=='in' && oldType=='mm'){ //转换为cm
                                add=Number((Number(add) / 25.4).toFixed(4))
                            }else if(type=='m' && oldType=='in'){ //转换为cm
                                add=Number((Number(add) * 0.0254).toFixed(4))
                            }else if(type=='in' && oldType=='m'){ //转换为cm
                                add=Number((Number(add) / 0.0254).toFixed(4))
                            }else if(type=='yard' && oldType=='in'){ //转换为cm
                                add=Number((Number(add) /36).toFixed(4))
                            }else if(type=='in' && oldType=='yard'){ //转换为cm
                                add=Number((Number(add) *36).toFixed(4))
                            }else if(type=='foot' && oldType=='in'){ //转换为cm
                                // add=Number((Number(add) * 0.0834  ))
            add=Number(Number(add) /12 )

                            }else if(type=='in' && oldType=='foot'){ //转换为cm
                                // add=Number((Number(add) / 0.0834  ))
            add=Number(Number(add) *12 )


                            }else if(type=='dm'){  //分数转小数
                                add=Number(Number(add).toFixed(4))
                            }else{
                                //不转换
                                add=Fraction(Number(Number(add).toFixed(4)))
                              
                            }
                        }else if(Number(copyAdd[0])<0){
                            add=Number(copyAdd[0])-add
                            // console.log('此时是正确的纯分数',add)
                            if(type=='in' && oldType=='cm'){  //转换为in 英寸
                                add=Number((Number(add) / 2.54).toFixed(4))
                                // console.log(add)
                            }else if(type=='cm' && oldType=='in'){ //转换为cm
                                add=Number((Number(add) * 2.54).toFixed(4))
                            }else if(type=='mm' && oldType=='in'){ //转换为cm
                                add=Number((Number(add) * 25.4).toFixed(4))
                            }else if(type=='in' && oldType=='mm'){ //转换为cm
                                add=Number((Number(add) / 25.4).toFixed(4))
                            }else if(type=='m' && oldType=='in'){ //转换为cm
                                add=Number((Number(add) * 0.0254).toFixed(4))
                            }else if(type=='in' && oldType=='m'){ //转换为cm
                                add=Number((Number(add) / 0.0254).toFixed(4))
                            }else if(type=='yard' && oldType=='in'){ //转换为cm
                                add=Number((Number(add) /36).toFixed(4))
                            }else if(type=='in' && oldType=='yard'){ //转换为cm
                                add=Number((Number(add) * 36).toFixed(4))
                            }else if(type=='foot' && oldType=='in'){ //转换为cm
                                // add=Number((Number(add) * 0.0834  ))
            add=Number(Number(add) /12 )

                            }else if(type=='in' && oldType=='foot'){ //转换为cm
                                // add=Number((Number(add) / 0.0834  ))
            add=Number(Number(add) *12 )

                            }else if(type=='dm'){  //分数转小数
                                add=Number(add)
                            }else{
                                //不转换
                                add=Fraction(Number(Number(add).toFixed(4)))
                            }
                        }else{
                            add=false
                        }
                      
                    }else{
                        add=false
                    }
                    
                  }else{
                      //不是正确的纯分数
                    //   console.log('不是正确的纯分数')
                      add=false
                  }
                }else{
                    //此时为错误的分数
                    // console.log('此时为错误的分数')

                    add=false
                }
                
          }else{
              //此时是不正确的整数 失败
            //   console.log('此时是不正确的整数 失败')
              add=false
          }
        }else{
            add=false
        }
    }

    //处理特殊数字
    if(add!==false){
        add=add.toString()
     }else{
        return add
     }
     if(add?.indexOf('3333/10000')!==-1 ){add=changeTs('3333/10000','1/3',add)}
     else if(add?.indexOf('6667/10000')!==-1){add=changeTs('6667/10000','2/3',add)}
     else if(add?.indexOf('8333/10000')!==-1){add=changeTs('8333/10000','5/6',add)}
     else if(add?.indexOf('9167/10000')!==-1){add=changeTs('9167/10000','11/12',add)}
     else if(add?.indexOf('1429/10000')!==-1 ){add=changeTs('1429/10000','1/7',add)}
     else if(add?.indexOf('1111/10000')!==-1 ){add=changeTs('1111/10000','1/9',add)}
     else if(add?.indexOf('4167/10000')!==-1){add=changeTs('4167/10000','5/12',add)}
     else if(add?.indexOf('5833/10000')!==-1){add=changeTs('5833/10000','7/12',add)}
     else if(add?.indexOf('1667/10000')!==-1){add=changeTs('1667/10000','1/6',add)}
     else if(add?.indexOf('909/10000')!==-1){add=changeTs('909/10000','1/11',add)}
     else if(add?.indexOf('833/10000')!==-1){add=changeTs('833/10000','1/12',add)}
     else if(add?.indexOf('769/10000')!==-1){add=changeTs('769/10000','1/13',add)}
     else if(add?.indexOf('667/10000')!==-1){add=changeTs('667/10000','1/15',add)}
     else  if(add?.indexOf('833/5000')!==-1 ){add=changeTs('833/5000','1/6',add)}
     else if(add?.indexOf('333/10000')!==-1){add=changeTs('333/10000','1/30',add)} 
     else if(add?.indexOf('417/10000')!==-1){add=changeTs('417/10000','1/24',add)}
     else if(add?.indexOf('357/10000')!==-1){add=changeTs('357/10000','1/28',add)}
     else  if(add?.indexOf('33/10000')!==-1){add=changeTs('33/10000','1/300',add)}
     else if(add?.indexOf('139/5000')!==-1){add=changeTs('139/5000','1/36',add)}
     else if(add?.indexOf('357/5000')!==-1){add=changeTs('357/5000','1/14',add)}
     else if(add?.indexOf('263/5000')!==-1){add=changeTs('263/5000','1/19',add)}
     else if(add?.indexOf('147/2500')!==-1){add=changeTs('147/2500','1/17',add)}
     else if(add?.indexOf('139/2500')!==-1){add=changeTs('139/2500','1/18',add)}
     else if(add?.indexOf('217/5000')!==-1){add=changeTs('217/5000','1/23',add)}
     else if(add?.indexOf('119/2500')!==-1){add=changeTs('119/2500','1/21',add)}
     else if(add?.indexOf('91/2000')!==-1){add=changeTs('91/2000','1/22',add)}
     else if(add?.indexOf('69/2000')!==-1){add=changeTs('69/2000','1/29',add)}
     else if(add?.indexOf('77/2000')!==-1){add=changeTs('77/2000','1/26',add)}
     else if(add?.indexOf('37/1000')!==-1){add=changeTs('37/1000','1/27',add)}

    return add
}