import React from "react";
import { Input, InputLabel } from "@mui/material";



const CustomTimePicker = ({ time, handleChange }) => {
  return (
    <>
      <InputLabel>Preparation time</InputLabel>
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
