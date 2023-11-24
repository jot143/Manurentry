import { environment } from "src/environments/environment";

const API: any = {
  endpoints: {
    // Auth Process
    login: {
      requestType: "post",
      url: "/auth/login",
    },
    register: {
      requestType: "post",
      url: "/auth/register",
    },
    registerOtp: {
      requestType: "post",
      url: "/auth/register-send-otp",
    },
    forgotPassword: {
      requestType: "post",
      url: "/auth/forget-password",
    },
    resetPasswordUsingOtp: {
      requestType: "post",
      url: "/auth/reset-password",
    },

    // User
    myProfileGet: {
      requestType: "get",
      url: "/profile/me",
    },
    myProfileUpdate: {
      requestType: "put",
      url: "/profile/update-profile",
    },
    updatePassword: {
      requestType: "put",
      url: "/profile/update-password",
    },
    uploadProfilePic: {
      requestType: "put",
      url: "/profile/uploadProfilePic",
    },
    registerDeviceOnServer: {
      requestType: "put",
      url: "/profile/fcmToken",
    },

    //Categories
    getCategories: {
      requestType: "get",
      url: "/admin/category/index",
    },
    addCategory: {
      requestType: "post",
      url: "/admin/category/create",
    },
    editCategory: {
      requestType: "put",
      url: "/admin/category/{{id}}",
    },
    deleteCategory: {
      requestType: "delete",
      url: "/admin/category/{{id}}",
    },
    //

    //Items
    getItems: {
      requestType: "get",
      url: "/admin/item/index",
    },
    addItem: {
      requestType: "post",
      url: "/admin/item/create",
    },
    editItem: {
      requestType: "put",
      url: "/admin/item/{{id}}",
    },
    deleteItem: {
      requestType: "delete",
      url: "/admin/item/{{id}}",
    },
    //
  },

  defaultDomain: () => environment.API_URL,
};

export default API;
