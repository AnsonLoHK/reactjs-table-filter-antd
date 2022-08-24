import React, { useState } from "react";
import { DatePicker, Space, Table, Button } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import { constant } from "lodash";

const { RangePicker } = DatePicker;

const data = [
  {
    key: 1,
    name: "Screem",
    platform: "iOS",
    version: "10.3.4.5654",
    upgradeNum: 500,
    creator: "Jack",
    date: "2022-12-24",
  },
  {
    key: 2,
    name: "Screem",
    platform: "iOS",
    version: "10.3.4.5654",
    upgradeNum: 500,
    creator: "Jack",
    date: "2022-8-24",
  },
  {
    key: 3,
    name: "Screem",
    platform: "iOS",
    version: "10.3.4.5654",
    upgradeNum: 500,
    creator: "Jack",
    date: "2022-9-24",
  },
];
const DateTableSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const onChangeHandler = (event) => {
    let filters = {};
    filters["startDate"] = moment(event[0]).toDate();
    filters["endDate"] = moment(event[1]).toDate();
    console.log("filters", filters);
    fetch("/getAllForAdmin", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {});
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Space>
          <RangePicker
            format={"DD-MM-YY"}
            value={selectedKeys[0]}
            // onChange={(e) => {

            //   setSelectedKeys([e.format("YYYY-MM-DDT00:00:00Z")]);
            // }}
            onChange={(e) =>
              setSelectedKeys(e !== null ? [e.format("DD-MM-YYYY")] : [])
            }
            onPressEnter={() => {
              confirm();
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          />
        </Space>
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

          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    // onFilter: (value, record) => {
    //   return record[dataIndex]
    //     ? record[dataIndex]
    //         .toString()
    //         .toLowerCase()
    //         .includes(value.toLowerCase())
    //     : "";
    // },
    // onFilter: (value, record) => {

    //   return (
    //     moment(record[dataIndex]).format("DD-MM-YYYY") ===
    //     value.format("DD-MM-YYYY")
    //   );
    // },
    onFilter: (value, record) =>
      record[dataIndex]
        ? moment(record[dataIndex]).isBetween(value[0], value[1], "day", "[]")
        : "",

    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        // setTimeout(() => this.searchInput.select(), 100);
      }
    },

    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ""}
    //     />
    //   ) : (
    //     text
    //   ),
    render: (text) => moment(text).format("DD/MM/YYYY"),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform",
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version",
    },
    {
      title: "Upgraded",
      dataIndex: "upgradeNum",
      key: "upgradeNum",
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "20%",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      ...getColumnSearchProps("date"),
    },
  ];
  const dateFormat = "YYYY/MM/DD";
  return (
    <>
      {/* 畫面會消失 */}
      <RangePicker onChange={() => onChangeHandler} format={dateFormat} />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default DateTableSearch;
