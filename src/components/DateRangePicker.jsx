import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { useStateContext } from "../contexts/ContextProvider";
const { RangePicker } = DatePicker;

const DateRangePicker = () => {
  const { dates, setDates, rowData, setRowData } = useStateContext();

  const disabledRangeTime = (_, type) => {
    if (type === "start") {
      return {
        disabledHours: () => [1, 25],
        disabledMinutes: () => [55, 56],
        disabledSeconds: () => [55, 56],
      };
    }
  };

  const handleBlur = () => {
    const fromADate = Date.parse(dates[0]);

    const toADate = Date.parse(dates[1]);

    // eslint-disable-next-line array-callback-return
    return rowData.filter(
      (user) =>
        // eslint-disable-next-line no-unused-expressions
        Date.parse(user.date) * 1000 >= fromADate &&
        Date.parse(user.date) * 1000 <= toADate
    );
  };
  return (
    <div>
      <RangePicker
        disabledTime={disabledRangeTime}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [
            moment("00:00:00", "HH:mm:ss"),
            moment("11:59:59", "HH:mm:ss"),
          ],
        }}
        // format="YYYY-MM-DD HH:mm:ss"
        onChange={(values) => {
          setDates(
            values.map((item) => {
              return moment(item).format("YYYY-MM-DD HH:mm:ss");
            })
          );
        }}
        onBlur={handleBlur}
        // 2022-08-01 00:01:01
      />
    </div>
  );
};

export default DateRangePicker;
