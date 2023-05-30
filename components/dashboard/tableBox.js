import React, { useState, useEffect } from "react";
import styles from "./progressBar.module.scss";
import { Table, Input, Checkbox, Col, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import icon3 from "../../public/images/icon3.png";
import icon4 from "../../public/images/icon4.png";

import Image from "next/image";

export default function TableBox() {
  const columns = [
    {
      title: "",
      dataIndex: "name",
      // width: "30%",
      render: (res) => {
        return <div className="TablePadding">{res}</div>;
      },
    },
    {
      title: "FALL 2022",
      dataIndex: "age",
      width:'122px',
      filters: [
        {
          text: <span>FALL 2022</span>,
          value: "FALL 2022",
        },
        {
          text: <span>SUMMER 2022</span>,
          value: "SUMMER 2022",
        },
        {
          text: <span>SPRING 2022</span>,
          value: "SPRING 2022",
        },
      ],
      filterDropdown: (a) => {
        return (
          <div className="customSelect">
            <div className="customSelect_list">
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                onChange={onChange}
              >
                <Row>
                  {
                    a?.filters && a?.filters?.map((res,index)=>{
                      return <Col className="item" key={index} span={24}>
                      <Checkbox value={res.value}>{res.value}</Checkbox>
                    </Col>
                    })
                  }
                </Row>
              </Checkbox.Group>
            </div>
            <div className="customSelect_btn">
              <Image height={16} width={14} src={icon4} alt="xl" />
              <span>Clear selection</span>
            </div>
          </div>
        );
      },
      // filterDropdownVisible: true,
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: false,
      filterIcon: (
        <div className="filterIcon">
          <Image height={25} width={25} src={icon3} alt="xl" />
        </div>
      ),
      render: (res) => {
        return <span style={{ fontWeight: "700" }}>{res}</span>;
      },
    },
    {
      title: "Dresses",
      dataIndex: "address",
      width:'122px',
      filters: [
        {
          text: <span>London</span>,
          value: "London",
        },
        {
          text: <span>New York</span>,
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: false,
      filterDropdown: (a) => {
        return (
          <div className="customSelect">
            <div className="customSelect_list">
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                onChange={onChange}
              >
                <Row>
                  {
                    a?.filters && a?.filters?.map((res,index)=>{
                      return <Col className="item" key={index} span={24}>
                      <Checkbox value={res.value}>{res.value}</Checkbox>
                    </Col>
                    })
                  }
                </Row>
              </Checkbox.Group>
            </div>
            <div className="customSelect_btn">
              <Image height={16} width={14} src={icon4} alt="xl" />
              <span>Clear selection</span>
            </div>
          </div>
        );
      },
      filterIcon: (
        <div className="filterIcon">
          <Image height={25} width={25} src={icon3} alt="xl" />
        </div>
      ),
      // width: "40%",
      render: (res) => {
        return <span style={{ fontWeight: "700" }}>{res}</span>;
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: "Avg. Unit Cost",
      age: "$19.24",
      address: "$16.72",
    },
    {
      key: "2",
      name: "Avg. Unit Retail",
      age: "$56.40",
      address: "$49.90",
    },
    {
      key: "3",
      name: "Avg. IMU",
      age: "78.3%",
      address: "77.8%",
    },
    {
      key: "4",
      name: "Sales Volume",
      age: "xxx GMV",
      address: "xxx GMV",
    },
  ];
  const onChange1 = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className={styles.TableBox}>
      <Table
        bordered={true}
        pagination={false}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}
