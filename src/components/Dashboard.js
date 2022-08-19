import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";

const Dashboard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Barton",
      age: 27,
      address: "台北市",
      tags: ["members"],
    },
    {
      key: "2",
      name: "Feza",
      age: 30,
      address: "台北市",
      tags: ["members"],
    },
    {
      key: "3",
      name: "Lencs",
      age: 40,
      address: "台北市",
      tags: ["mod", "members"],
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";

            if (tag === "loser") {
              color = "volcano";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={record.name}>編輯</Link>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Dashboard;
