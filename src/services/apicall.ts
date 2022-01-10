import axios from "axios";

export const getNasaImages = async (earthdate = "2015-04-15") => {
  try {
    let apiresponse = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&api_key=a7lA9n1ymU3FqjG9VE2bYIVudb2gOv8KSzvKXqAD&earth_date=${earthdate}`
    );
    let data = apiresponse.data;
    return data;
  } catch (err) {
    throw err;
  }
};
