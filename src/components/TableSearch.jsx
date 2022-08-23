import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";

const TableSearch = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      candidate: "candidate1",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      candidate: "candidate2",
    },
    {
      key: "3",
      name: "Barton",
      age: 12,
      address: "Downing Street",
      candidate: "candidate3",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightClassName="YourHighlightClass"
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape={true}
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
    },
    {
      title: "candidate",
      dataIndex: "candidate",
      key: "candidate",
      width: "16.66%",
      ...getColumnSearchProps("candidate"),
    },
  ];

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    console.log("selectedKeys, confirm, dataIndex", {
      selectedKeys,
      confirm,
      dataIndex,
    });
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  return (
    <div>
      TableSearch
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default TableSearch;
