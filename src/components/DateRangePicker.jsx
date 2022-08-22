import React, { useEffect } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { useStateContext } from "../contexts/ContextProvider";
const { RangePicker } = DatePicker;

const DateRangePicker = () => {
  const { dates, setDates, setFilters, filters, setData } = useStateContext();

  const handleFilterDate = (filters) => {
    console.log("filters!", filters.from);
    // setData(filteredData);
  };

  const range = (start, end) => {
    const result = [];

    for (let i = start; i < end; i++) {
      result.push(i);
    }

    return result;
  }; // eslint-disable-next-line arrow-body-style

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };
  const disabledRangeTime = (_, type) => {
    if (type === "start") {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }

    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  };

  return (
    <div>
      <RangePicker
        disabledDate={disabledDate}
        disabledTime={disabledRangeTime}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [
            moment("00:00:00", "HH:mm:ss"),
            moment("11:59:59", "HH:mm:ss"),
          ],
        }}
        format="YYYY-MM-DD HH:mm:ss"
      />
    </div>
  );
};

export default DateRangePicker;
