import { environment } from "src/environments/environment";

const API: any = {
  endpoints: {

    //core
    countryIndex: {
      requestType: 'get',
      url: '/country/index',
      domain: environment.CORE_URL
    },
    provinceIndex: {
      requestType: 'get',
      url: '/country/1/province/index',
      domain: environment.CORE_URL
    },
    cityIndex: {
      requestType: 'get',
      url: '/province/1/city/index',
      domain: environment.CORE_URL
    },



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

    //Features
    getFeatures: {
      requestType: "get",
      url: "/admin/feature/index",
    },
    addFeature: {
      requestType: "post",
      url: "/admin/feature/create",
    },
    editFeature: {
      requestType: "put",
      url: "/admin/feature/{{id}}",
    },
    deleteFeature: {
      requestType: "delete",
      url: "/admin/feature/{{id}}",
    },
    //

    //Raw Categories
    getRawCategories: {
      requestType: "get",
      url: "/admin/raw-category/index",
    },
    addRawCategory: {
      requestType: "post",
      url: "/admin/raw-category/create",
    },
    editRawCategory: {
      requestType: "put",
      url: "/admin/raw-category/{{id}}",
    },
    deleteRawCategory: {
      requestType: "delete",
      url: "/admin/raw-category/{{id}}",
    },
    //

    //Items
    getRawItems: {
      requestType: "get",
      url: "/admin/raw-item/index",
    },
    addRawItem: {
      requestType: "post",
      url: "/admin/raw-item/create",
    },
    editRawItem: {
      requestType: "put",
      url: "/admin/raw-item/{{id}}",
    },
    deleteRawItem: {
      requestType: "delete",
      url: "/admin/raw-item/{{id}}",
    },
    //

    //Warehouse
    getWarehouses: {
      requestType: "get",
      url: "/admin/warehouse/index",
    },
    addWarehouse: {
      requestType: "post",
      url: "/admin/warehouse/create",
    },
    editWarehouse: {
      requestType: "put",
      url: "/admin/warehouse/{{id}}",
    },
    deleteWarehouse: {
      requestType: "delete",
      url: "/admin/warehouse/{{id}}",
    },
    //

    //Store
    getStores: {
      requestType: "get",
      url: "/admin/store/index",
    },
    addStore: {
      requestType: "post",
      url: "/admin/store/create",
    },
    editStore: {
      requestType: "put",
      url: "/admin/store/{{id}}",
    },
    deleteStore: {
      requestType: "delete",
      url: "/admin/store/{{id}}",
    },
    //
  },

  defaultDomain: () => environment.API_URL,
};

export default API;
