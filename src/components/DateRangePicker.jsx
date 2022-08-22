import React, { useEffect } from "react";
import { DatePicker } from "antd";

import moment from "moment";
import { useStateContext } from "../contexts/ContextProvider";

const { RangePicker } = DatePicker;

const DateRangePicker = () => {
  const { dates, setDates, setFilters, filters } = useStateContext();

  useEffect(() => {
    if (dates.length !== 0) {
      setFilters({ ...filters, from: dates[0], to: dates[1] });
    }
  }, [dates]);

  console.log("filters", filters);

  return (
    <div>
      <RangePicker
        onChange={(values) => {
          setDates(
            values.map((item) => {
              return moment(item).format("MM-DD-YYYY");
            })
          );
        }}
      />
    </div>
  );
};

export default DateRangePicker;
