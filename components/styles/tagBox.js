import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import icon1 from "../../public/images/styles/icon1.png";
import icon2 from "../../public/images/styles/icon2.png";
import icon3 from "../../public/images/styles/icon3.png";
import icon4 from "../../public/images/styles/icon4.png";
import icon5 from "../../public/images/styles/icon5.png";
export default function TagBox({ type = 1 }) {
  return (
    <div className={styles.TagBox}>
      {type === 1 && (
        <div className={styles.item_One}>
          <div className={styles.itemLeft}>
            <Image
              className={styles.imgLt}
              width={16}
              height={16}
              src={icon2}
              alt="cs"
            />
          </div>
          <div className={styles.itemRight}>Approval Request from a Vendor</div>
        </div>
      )}
      {type === 2 && (
        <div className={styles.item_Two}>
          <div className={styles.btnItem}>
            <div className={styles.itemLeft}>
              <Image
                className={styles.imgLt}
                width={16}
                height={16}
                src={icon3}
                alt="cs"
              />
            </div>
            <div className={styles.itemRight}>
            2 mentions
            </div>
          </div>

          <div className={styles.btnItem}>
            <div className={styles.itemLeft}>
              <Image
                className={styles.imgLt}
                width={16}
                height={16}
                src={icon4}
                alt="cs"
              />
            </div>
            <div className={styles.itemRight}>
            2 mentions
            </div>
          </div>
        </div>
      )}
      {type === 3 && (
        <div className={styles.item_Three}>
          <div className={styles.itemLeft}>
            <Image
              className={styles.imgLt}
              width={16}
              height={16}
              src={icon1}
              alt="cs"
            />
          </div>
          <div className={styles.itemRight}>Behind schedule</div>
        </div>
      )}
      {type === 4 && (
        <div className={styles.item_Four}>
          <div className={styles.itemLeft}>
            <Image
              className={styles.imgLt}
              width={16}
              height={16}
              src={icon5}
              alt="cs"
            />
          </div>
          <div className={styles.itemRight}>Approval Request from a Vendor</div>
        </div>
      )}
      {type === 5 && (
        <div className={styles.item_Five}>
          <div className={styles.itemRight}>No new activity</div>
        </div>
      )}
    </div>
  );
}
