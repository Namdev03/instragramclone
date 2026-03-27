import api from "./api";
import apiPath from "./apiPath";

export const registerUserApi = async (payload) => {
  try {

    // === check if email already exists ===
    const isExist = await api.get(`${apiPath.USERS}?email=${payload.email}`);

    if (isExist?.data?.length > 0) {
      return alert("user already registered");
    }

    // === register new user ===
    const response = await api.post(apiPath.USERS, payload);
    alert("success fully registerd")
    return response.data;

  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginApi = async (payload) => {
  try {

    const isExist = await api.get(`${apiPath.USERS}?email=${payload.email}`);

    if (isExist?.data?.length === 0) {
      throw new Error("User is not registered");
    }

    // password check
    if (isExist?.data[0].password !== payload.password) {
      throw new Error("Invalid credentials");
    }

    localStorage.setItem("loginStatus", "momentryLoggedIn");
    localStorage.setItem("loggedInUser", JSON.stringify(isExist.data[0]));

    return {
      user : isExist.data[0],
      loginStatus:"momentryLoggedIn"
    };

  } catch (error) {
    throw new Error(error.message);
  }
};
// ======postuploadpi========
export const postUploadApi = async (payload) => {
  try {
    const response = await api.post(apiPath.Post, payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const fetchAllpostApi = async () => {
  try {
    const response = await api.get(apiPath.Post);
    const getAllUser = await api.get(apiPath.USERS)
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const fetchuserpostApi = async (userId) => {
  try {
    const response = await api.get(`${apiPath.Post}?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
export const likePostApi = async (postId, likepayload) => {
  try {

    let response = await api.patch(
      `${apiPath.Post}/${postId}`,
      {
        likes: [likepayload]
      }
    );

    return response.data;

  } catch (error) {
    throw new Error(error.message);
  }
};
// export const notification = async(){

// }