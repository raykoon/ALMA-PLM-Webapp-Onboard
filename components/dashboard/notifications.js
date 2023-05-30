import React, { useState, useEffect } from "react";
import styles from './progressBar.module.scss'
import Image from "next/image";
import warning from "../../public/images/warning.png";
import icon from "../../public/images/icon.png";

let nowTypeColor={
    'default':styles.defaultColor,
    'warning':styles.warningColor,
    'error':styles.errorColor,

}
export default function Notifications({type='default'}) {
  return (
    <div className={styles.Notifications}>
        <div className={nowTypeColor[type]}>
             <div className={styles.left}>
                <Image layout="responsive" src={warning} alt='warning' />
             </div>
             <div className={styles.content}>
                 <div className={styles.title}>BEHIND SCHEDULE</div>
                 <div className={styles.textTime}>1h ago</div>
                 <div className={styles.textAll}>Your style <span style={{textDecoration:'underline'}}>LAPDR0022-BLANCA</span> VI has fallen behind schedule. <br /><span style={{fontWeight:'700'}}>Follow-up now before it’s too late!</span></div>
             </div>
             <div className={styles.right}>
                <div><Image layout="responsive" src={icon} alt='warning' /></div>
             </div>
        </div>
    </div>
  );
}
