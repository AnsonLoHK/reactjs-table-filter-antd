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

  console.log("dates", rowData);
  const handleBlur = () => {
    const fromADate = new Date(dates[0]).getTime();
    console.log("fromADate", fromADate);
    const toADate = new Date(dates[1]).getTime();
    console.log("toADate", toADate);

    // eslint-disable-next-line array-callback-return
    const myDates = rowData.filter((row) => {
      const beforeCheck = new Date(row.date).getTime();

      if (beforeCheck > fromADate && beforeCheck <= fromADate) {
        return row;
      } else {
        return null;
      }
    });

    console.log("myDates", myDates);

    setRowData(myDates);
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
