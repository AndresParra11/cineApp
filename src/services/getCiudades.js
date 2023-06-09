import axios from "axios";
const API_FAKE = "https://minibackend-cine-app-production-1384.up.railway.app/";
const endpointCiudades = "ciudades";

export const getCiudades = async () => {
  try {
    const { data } = await axios.get(`${API_FAKE}${endpointCiudades}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCityCinema = async (idCity, idTheater) => {
  try {
    const { data } = await axios.get(
      `${API_FAKE}${endpointCiudades}?name=${idCity}`
    );

    const theater = data[0].teatros.find(
      (theater) => theater.name === idTheater
    );

    const infoFunciones = {
      city: data[0].name,
      cinema: theater.name,
    };

    return infoFunciones;
  } catch (error) {
    console.log(error);
    return {};
  }
};
