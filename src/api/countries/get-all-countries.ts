import axios from "axios";
import { Country } from "../../types/Country";
import { GET_ALL_COUNTRIES } from "../endpoints";

export const getAllCountries = () => {
  return axios.get<Country[]>(GET_ALL_COUNTRIES);
};
