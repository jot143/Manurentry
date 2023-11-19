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
      url: '/biz/categories',
    },

    //biz
    getBizs: {
      requestType: 'post',
      url: '/biz/filter',
    },
    getBiz: {
      requestType: 'get',
      url: '/biz/{{id}}',
    },
    getTagSuggestion: {
      requestType: 'get',
      url: '/biz/get-tag-suggestion/{{searchText}}',
    },

    //redeem
    showCode: {
      requestType: 'post',
      url: '/redeem/show-code',
    },
    getCode: {
      requestType: 'post',
      url: '/redeem/get-code',
    },
    redeemHistory: {
      requestType: 'get',
      url: '/redeem/history',
    },
    updateRedeemStatus: {
      requestType: 'put',
      url: '/redeem/response',
    },


    //favorite product
    getFavorites: {
      requestType: 'get',
      url: '/biz/favorites',
    },
    toggleFavoriteProduct: {
      requestType: 'post',
      url: '/biz/toggle-favorite',
    },

    //

  },

  defaultDomain: () => environment.API_URL,
};

export default API;
