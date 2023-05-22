import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
/* import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"; */

const stylesInputs = {
  backgroundColor: "white",
  borderColor: "white",
  minWidth: "200px",
};

export default function Form() {
  const [ubication, setUbication] = useState("");
  const [cines, setCines] = useState("");
  const [date, setDate] = useState("");

  const handleChangeUbication = (event) => {
    setUbication(event.target.value);
  };
  const handleChangeCines = (event) => {
    setCines(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, display: "flex", gap: "10px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ubicación</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ubication}
          label="Ubicación"
          onChange={handleChangeUbication}
          sx={stylesInputs}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cines cercanos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cines}
          label="Cines cercanos"
          onChange={handleChangeCines}
          sx={stylesInputs}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Cines cercanos</InputLabel> */}
        {/*         <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={[
              "DatePicker",
              "MobileDatePicker",
              "DesktopDatePicker",
              "StaticDatePicker",
            ]}
            sx={{ padding: "0px", borderRadius: "4px" }}
          >
            <DemoItem>
              <MobileDatePicker sx={stylesInputs} label="Fecha" />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider> */}
        <InputLabel id="demo-simple-select-label">Fecha</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label="Cines cercanos"
          onChange={handleChangeDate}
          sx={stylesInputs}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
