import React, { useState, useEffect } from "react";
import styles from "./progressBar.module.scss";
import { Select, Input } from "antd";

const { Option } = Select;
let mrList = [];
export default function SelectBox({
  title = "Show Overview for",
  list = ["FALL 2022"],
  list1 = ["Overall"],

}) {
  const handleChange = (a) => {
    console.log(a);
  };
  return (
    <div className={styles.SelectBox}>
      <div className={styles.name}>{title}</div>
      <div>
        <Select
          defaultValue={list[0]}
          style={{
            minWidth: 120,
            fontSize: "12px",
          }}
          onChange={handleChange}
        >
          {list &&
            list.map((res, index) => {
              return (
                <Option key={index} value={res}>
                  {res}
                </Option>
              );
            })}
        </Select>
      </div>
      <div style={{marginLeft:'10px'}}>
        <Select
          defaultValue={list1[0]}
          style={{
            minWidth: 120,
            fontSize: "12px",
          }}
          onChange={handleChange}
        >
          {list1 &&
            list1.map((res, index) => {
              return (
                <Option key={index} value={res}>
                  {res}
                </Option>
              );
            })}
        </Select>
      </div>
    </div>
  );
}
