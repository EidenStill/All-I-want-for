import axios from "axios";

export const fetchsales = async () => {
  console.log("this is running");
  try {
    const res = await axios.get("http://localhost:8000/getsales");
    console.log("this", res.data)
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchEventById = async (eventId) => {
  try {
    const res = await axios.get(`http://localhost:8000/events/${eventId}`);
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