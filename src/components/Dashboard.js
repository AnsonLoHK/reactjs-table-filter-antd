import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";

// https://62ff3dbf9350a1e548da5ec5.mockapi.io/mockData
const Dashboard = () => {
  const [name, setName] = useState("Feza");
  const [age, setAge] = useState(40);
  const [address, setAddress] = useState("台北市");
  const [tags, setTags] = useState(["停用"]);
  const [dataSource, setDataSource] = useState(null);
  const [state, setState] = useState({ error: null });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      align: "center",
      fixed: "left",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 100,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      align: "center",
      width: 100,
      filters: [
        {
          text: "啟用",
          value: "啟用",
        },
        {
          text: "停用",
          value: "停用",
        },
      ],
      onFilter: (value, record) => record.tags.indexOf(value) === 0,
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag === "啟用" ? "geekblue" : "green";

            if (tag === "loser") {
              color = "volcano";
            }

            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <Link to={record.name}>編輯</Link>
        </Space>
      ),
    },
  ];
  const postData = () => {
    axios.post(`https://62ff3dbf9350a1e548da5ec5.mockapi.io/mockData`, {
      name,
      age,
      address,
      tags,
    });
  };

  async function getData() {
    try {
      // get
      const { data: items } = await axios.get(
        "https://62ff3dbf9350a1e548da5ec5.mockapi.io/mockData"
      );
      setDataSource(items);
    } catch (error) {
      setState({ error });
    }
  }

  if (state.error) {
    return <h1>{state.error.message}</h1>;
  }

  return (
    <div>
      <button onClick={postData} type="submit">
        POST假數據
      </button>
      <button onClick={getData} type="submit">
        getData
      </button>
      <Table
        size="middle"
        bordered
        dataSource={dataSource}
        columns={columns}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />
      ;
    </div>
  );
};

export default Dashboard;

// const dataSource = [
//   {
//     key: "1",
//     name: "Barton",
//     age: 27,
//     address: "台北市",
//     tags: ["members"],
//   },
//   {
//     key: "2",
//     name: "Feza",
//     age: 30,
//     address: "台北市",
//     tags: ["members"],
//   },
//   {
//     key: "3",
//     name: "Lencs",
//     age: 40,
//     address: "台北市",
//     tags: ["mod", "members"],
//   },
// ];

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";

//           if (tag === "loser") {
//             color = "volcano";
//           }

//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         <Link to={record.name}>編輯</Link>
//       </Space>
//     ),
//   },
// ];
