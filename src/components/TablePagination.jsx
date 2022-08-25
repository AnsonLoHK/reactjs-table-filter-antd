import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Space, Table, Tag, Button, Input } from "antd";
import DateRangePicker from "./DateRangePicker";
import { useStateContext } from "../contexts/ContextProvider";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const TablePagination = () => {
  const postData = () => {
    axios.post(`http://192.168.2.103:8081/api/admin/getAllUsers?page=1`);
  };
  return (
    <div>
      <button onClick={postData} type="submit">
        獲取該頁筆數
      </button>
    </div>
  );
};

export default TablePagination;
