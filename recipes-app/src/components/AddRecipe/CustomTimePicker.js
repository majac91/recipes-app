import React from "react";
import { Input } from "@mui/material";



const CustomTimePicker = ({ time, handleChange }) => {
  return (
    <>
      <label>Preparation time</label>
      <Input
        sx={{ mb: 2 }}
        type="time"
        label="Preparation time"
        value={time}
        onChange={(e) => handleChange("time", e)}
      />
    </>
  );
};

export default CustomTimePicker;
