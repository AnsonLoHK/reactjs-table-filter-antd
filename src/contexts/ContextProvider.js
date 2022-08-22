import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();
export default StateContext;

// useStateContext 在這裡觸發function可以直接獲取這裡定義好的state => 公全局使用
export const useStateContext = () => useContext(StateContext);

// 作為context的提供方，要放在最高層級的元件上
// children: provider以下的元件都能吃到我們即將提供的context內容，作為props方式由上往下傳遞
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });
  const [dates, setDates] = useState([]);
  const [allData, setData] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    gender: "",
    from: "",
    to: "",
  });

  const [rowData, setRowData] = useState([
    {
      make: "toyoya",
      model: "Celica",
      price: "35000",
      date: "2022-08-23 23:04:04",
    },
    {
      make: "toyoya",
      model: "Celica",
      price: "35000",
      date: "2022-08-22 23:04:04",
    },
    {
      make: "toyoya",
      model: "Celica",
      price: "35000",
      date: "2022-08-25 23:04:04",
    },
    {
      make: "toyoya",
      model: "Celica",
      price: "35000",
      date: "2022-08-27 23:04:04",
    },
  ]);

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        dates,
        setDates,
        filters,
        setFilters,
        allData,
        setData,
        rowData,
        setRowData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { ContextProvider };

ContextProvider.propTypes = {
  children: PropTypes.any,
};
