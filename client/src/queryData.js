import axios from "axios";

export const fetchsales = async () => {
  try {
    const res = await axios.get("http://localhost:8000/getsales");
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchSaleById = async (salesID) => {
  try {
    const res = await axios.get(`http://localhost:8000/getsalesbyid/${salesID}`);
    return res.data
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchEventBySearch = async (search) => {
  try {
    const res = await axios.get(`http://localhost:8000/searchevents/${search}`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};