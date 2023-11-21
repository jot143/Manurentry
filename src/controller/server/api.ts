import { environment } from 'src/environments/environment';

const API: any = {
  endpoints: {

    // Auth Process
    login: {
      requestType: 'post',
      url: '/auth/login',
    },
    register: {
      requestType: 'post',
      url: '/auth/register',
    },
    registerOtp: {
      requestType: 'post',
      url: '/auth/register-send-otp',
    },
    forgotPassword: {
      requestType: 'post',
      url: '/auth/forget-password',
    },
    resetPasswordUsingOtp: {
      requestType: 'post',
      url: '/auth/reset-password',
    },

    // User
    myProfileGet: {
      requestType: 'get',
      url: '/profile/me',
    },
    myProfileUpdate: {
      requestType: 'put',
      url: '/profile/update-profile',
    },
    updatePassword: {
      requestType: 'put',
      url: '/profile/update-password',
    },
    uploadProfilePic: {
      requestType: 'put',
      url: '/profile/uploadProfilePic',
    },
    registerDeviceOnServer: {
      requestType: 'put',
      url: '/profile/fcmToken',
    },

    //Categories
    getCategories: {
      requestType: 'get',
      url: '/admin/category-get',
    },
    addCategories: {
      requestType: 'post',
      url: '/admin/category/create',
    }
    //

  },

  defaultDomain: () => environment.API_URL,
};

export default API;
