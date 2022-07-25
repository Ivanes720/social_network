import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "92884aa1-cc8c-4976-ab89-33d5ae5da50e",
  },
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },

  getProfile(userId) {
    return instance.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    );
  },
};
export const authApi={
  me() {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
  },

}