import React, { useState } from "react";
import { DatesRangeInput } from "semantic-ui-calendar-react";
import Moment from "react-moment";

const DateTimeForm = () => {
  const [timeState, setTimeState] = useState({
    date: "",
    time: "",
    dateTime: "",
    datesRange: "",
  });

  const handleChange = (event, { name, value }) => {
    if (timeState.hasOwnProperty(name)) {
      setTimeState({ [name]: value });
    }
  };

  const handleBlur = () => {};

  //   const dateToFormat = "1976-04-19T12:59-0500";

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <div>
      <Moment>{timeState.datesRange}</Moment>
      <DatesRangeInput
        name="datesRange"
        placeholder="From - To"
        value={timeState.datesRange}
        iconPosition="left"
        dateFormat={"YYYY-MM-DD'T'HH:mm:ss.SSS"}
        onBlur={handleBlur}
        onChange={handleChange}
        style={{ width: 180 }}
      />
    </div>
  );
};

export default DateTimeForm;
