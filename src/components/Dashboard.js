import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Space, Table, Tag, Typography } from "antd";
import DateRangePicker from "./DateRangePicker";
import { useStateContext } from "../contexts/ContextProvider";
const { Text } = Typography;
// https://62ff3dbf9350a1e548da5ec5.mockapi.io/mockData
const Dashboard = () => {
  const [name, setName] = useState("天才衝衝衝");
  const [category, setCategory] = useState("跑跑卡丁車");
  const [address, setAddress] = useState("台北市");
  const [tags, setTags] = useState(["啟用"]);
  const [income, setIncome] = useState(32750);
  const [payment, setpayment] = useState(100);
  const [dataSource, setDataSource] = useState(null);
  const { allData, rowData } = useStateContext();
  const [state, setState] = useState({ error: null });

  const columns = [
    {
      title: "make",
      dataIndex: "make",
      key: "make",
    },
    {
      title: "model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const postData = () => {
    axios.post(`https://62ff3dbf9350a1e548da5ec5.mockapi.io/mockData`, {
      name,
      category,
      address,
      tags,
      income,
      payment,
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
      {/* <button onClick={postData} type="submit">
        POST假數據
      </button>
      <button onClick={getData} type="submit">
        getData
      </button> */}
      <DateRangePicker />
      <Table
        size="middle"
        bordered
        dataSource={rowData}
        columns={columns}
        scroll={{
          x: 1500,
          y: 300,
        }}
        // summary={(pageData) => {
        //   let totalIncome = 0;
        //   let totalPayment = 0;
        //   pageData.forEach(({ income, payment }) => {
        //     totalIncome += income;
        //     totalPayment += payment;
        //   });
        //   return (
        //     <>
        //       <Table.Summary.Row align="center">
        //         <Table.Summary.Cell index={0} colSpan={2}>
        //           各項總額
        //         </Table.Summary.Cell>
        //         <Table.Summary.Cell index={3}>
        //           <Text>{totalIncome}</Text>
        //         </Table.Summary.Cell>
        //         <Table.Summary.Cell index={3}>
        //           <Text type="danger">{totalPayment}</Text>
        //         </Table.Summary.Cell>
        //       </Table.Summary.Row>
        //       <Table.Summary.Row align="center">
        //         <Table.Summary.Cell index={0} colSpan={2}>
        //           損益盈餘
        //         </Table.Summary.Cell>
        //         <Table.Summary.Cell index={2} colSpan={2}>
        //           <Text type="danger">{totalIncome - totalPayment}</Text>
        //         </Table.Summary.Cell>
        //       </Table.Summary.Row>
        //     </>
        //   );
        // }}
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

// const columns = [
//   {
//     title: "編號",
//     dataIndex: "id",
//     align: "center",
//     fixed: "left",
//     width: 100,
//   },
//   {
//     title: "玩家",
//     dataIndex: "name",
//     key: "name",
//     align: "center",
//     fixed: "left",
//     width: 100,
//   },
//   {
//     title: "營利",
//     dataIndex: "income",
//     key: "income",
//     align: "center",
//   },
//   {
//     title: "虧損",
//     dataIndex: "payment",
//     key: "payment",
//     align: "center",
//   },
//   {
//     title: "遊戲類別",
//     dataIndex: "category",
//     key: "category",
//     align: "center",
//     filters: [
//       {
//         text: "武俠遊戲",
//         value: "武俠遊戲",
//       },
//       {
//         text: "LOL",
//         value: "LOL",
//       },
//       {
//         text: "跑跑卡丁車",
//         value: "跑跑卡丁車",
//       },
//       {
//         text: "Lottery Ada",
//         value: "Lottery Ada",
//       },
//       {
//         text: "Rummy",
//         value: "Rummy",
//       },
//     ],
//     onFilter: (value, record) => record.category.indexOf(value) === 0,
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//     align: "center",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     align: "center",
//     width: 100,
//     filters: [
//       {
//         text: "啟用",
//         value: "啟用",
//       },
//       {
//         text: "停用",
//         value: "停用",
//       },
//     ],
//     onFilter: (value, record) => record.tags.indexOf(value) === 0,
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag === "啟用" ? "geekblue" : "green";

//           if (tag === "loser") {
//             color = "volcano";
//           }

//           return (
//             <Tag color={color} key={tag}>
//               {tag}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     align: "center",
//     fixed: "right",
//     width: 100,
//     render: (_, record) => (
//       <Space size="middle">
//         <Link to={record.name}>編輯</Link>
//       </Space>
//     ),
//   },
// ];
