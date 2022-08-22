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
  savePhoto(photoFile){ 
    const formData=new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo/`, formData, {
      headers :{
        "Content-Type" : "multipart/form-data"
      }
    })},
    saveProfile(profile) {
      return instance.put(`profile`, profile );
  }

}
export const authApi={
  me() {
    return instance.get(`auth/me`);
  },
  login(values) {
    return instance.post(`auth/login`,
   values);
  },
  logout() {
    return instance.delete(`auth/login`
    );
  },

}
export const securityApi={
  getCaptchaApi() {
    return instance.get(`security/get-captcha-url`);
  }
}