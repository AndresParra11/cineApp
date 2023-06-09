import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getCiudades } from "../../services/getCiudades";
import { getFechasFunciones } from "../../services/getFechasFunciones";
import { searchParamsContext } from "../../Routes/AppRouter";
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
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  const { ubication, setUbication, cines, setCines, date, setDate } =
    useContext(searchParamsContext);

  useEffect(() => {
    getCiudades()
      .then((response) => {
        if (!cities.length) {
          setCities(response);
        }
      })
      .catch((error) => console.log(error));

    getFechasFunciones()
      .then((response) => {
        setDates(response);
      })
      .catch((error) => console.log(error));
  }, [cities]);

  const handleChangeUbication = (event) => {
    const cinema = event.target.value;
    setUbication(cinema);
  };
  const handleChangeCines = (event) => {
    const cine = event.target.value;
    setCines(cine);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, display: "flex", gap: "10px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ubicación</InputLabel>
        <Select
          name="ubication"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ubication}
          label="Ubicación"
          onChange={handleChangeUbication}
          sx={stylesInputs}
        >
          {cities.length &&
            cities.map((city) => {
              return (
                <MenuItem key={city.id} value={city.name}>
                  {city.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      {ubication && (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Cines cercanos</InputLabel>
          <Select
            name="cines"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cines}
            label="Cines cercanos"
            onChange={handleChangeCines}
            sx={stylesInputs}
          >
            {cities
              .find((city) => city.name === ubication)
              .teatros.map((theater) => {
                return (
                  <MenuItem key={theater.id} value={theater.name}>
                    {theater.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      )}
      {ubication && cines && (
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
            name="dates"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={date}
            label="Cines cercanos"
            onChange={handleChangeDate}
            sx={stylesInputs}
          >
            {dates.length &&
              dates.map((date, index) => {
                return (
                  <MenuItem key={index} value={date}>
                    {date}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      )}
    </Box>
  );
}
