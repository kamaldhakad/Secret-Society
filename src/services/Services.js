import axios from "axios";

export const GetNftData = async (requestMethod, path) => {
  try {
    const res = await axios(path, {
      method: requestMethod,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
