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
    console.warn('Obsolete method. Please profileAPI object.')
    return profileAPI.getProfile(userId);
},
};

export const profileAPI={
  getProfile(userId){ return instance.get(`profile/` + userId)},
  getStatus(userId){ return instance.get(`profile/status/` + userId)},
  updateStatus(status){ return instance.put(`profile/status/`, { status })},

}
export const authApi={
  me() {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
  },
  login(email, password, rememberMe=false) {
    return instance.post(`auth/login`,
    {email, password, rememberMe});
  },
  logout() {
    return instance.delete(`auth/login`
    );
  },

}