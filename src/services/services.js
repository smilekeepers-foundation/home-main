import axios from "axios";

const apiUrl = "https://dishaapi.dishatrust.org.in/api/";
export default function services() {
  const getBlogList = async () => {
    try {
      let res = await axios.get(`${apiUrl}Blog/GetAllBlog`);
      if (res.data.success) {
        return res.data.data;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const getBlogDetails = async (id) => {
    try {
      let res = await axios.get(apiUrl + `Blog/GetBlog?id=${id}`);
      if (res.data.success) {
        return res.data.data;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };
  const addTempUser = async (data) => {
    try {
      let res = await axios.post(apiUrl + `Users/AddTempUsers`, { ...data });
      if (res.data.success) {
        return { success: true, data: res.data.data };
      } else {
        return { success: false, message: "Something went wrong" };
      }
    } catch (error) {
      return { success: false, message: "Something went wrong" };
    }
  };
  const createOrder = async (data) => {
    try {
      let res = await axios.post(apiUrl + `Payment/CreateOrder`, { ...data });
      if (res.data.success) {
        return {
          success: true,
          data: res.data.data.orderDetails,
          message: "Added successfully",
        };
      } else {
        return { success: false, data: null, message: "Something went wrong" };
      }
    } catch (error) {
      return { success: false, data: null, message: "Something went wrong" };
    }
  };

  const addContactDetails = async (data) => {
    try {
      let res = await axios.post(apiUrl + `ContactUs/AddContactDetails`, {
        ...data,
      });
      if (res.data.success) {
        return { success: true, message: "Added successfully" };
      } else {
        return { success: false, message: "Something went wrong" };
      }
    } catch (error) {
      return { success: false, message: "Something went wrong" };
    }
  };
  return {
    getBlogList,
    getBlogDetails,
    addTempUser,
    addContactDetails,
    createOrder,
  };
}
