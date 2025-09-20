import { IUserData } from "@/types/auyhTypes";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { toast } from "vue3-toastify";




export const useAuthStore = defineStore("auth", () => {


const apiErrors = ref('');
const fieldError = ref('');
const router = useRouter();
const loading = ref(false);
const token = ref<string | null>(null);
const userData=ref<IUserData>();

const IsLoggedIn = computed(() => {
  return token.value ? true : false;
});


  function login(values: { email: string; password: string }) {

      loading.value = true;
    axios
    .post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then((response) => {
        loading.value = false;
        token.value = response.data.token;
        localStorage.setItem("token",response.data.token)
localStorage.setItem("user", JSON.stringify(response.data.user));
        userData.value=response.data.user;
        console.log(response);
        console.log("User Data:", response.data.user);
        apiErrors.value = null;
        fieldError.value = null;
        router.push({name: "home"});
      })
      .catch((err) => {
        loading.value = false;
        console.log( err);
        apiErrors.value=
        err.response.data?.errors?.msg ?? err.response.data.message ;
        fieldError.value=
         err.response.data.errors ? err.response.data.errors.param : null;
      });
  }
  function register(values: { 
  name: string; 
  email: string; 
  password: string; 
  rePassword: string; 
  phone: string; 
}) {
    console.log("Sending to API:", values);
  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
    
      .then((response) => {
        console.log(response);
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user));

token.value = response.data.token;  
userData.value=response.data.user;
        apiErrors.value = null;
        fieldError.value = null;
        router.push({name:"home"});
      })
      .catch((err) => {
        console.log( err);
        apiErrors.value=
        err.response.data?.errors?.msg ?? err.response.data?.message ;
        fieldError.value=
         err.response.data.errors ? err.response.data.errors.param : null;
      });
  }
  function GetTokens() {
        if (localStorage.getItem("token")) {
        token.value = localStorage.getItem("token")};
        if (localStorage.getItem("user")) {
          userData.value = JSON.parse(localStorage.getItem("user"));
        }   
    }
    // Check if user is logged in
    function logout() {
        loading.value = true;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        token.value = null;
        userData.value = null;
        loading.value = false;
        router.push({ name: "signin" });

// router.push("/signin");
      }
    async function forgetPassword(values: { email: string }) {
  try {

    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
      values
    );
    toast(response.data.message, {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true
      });

    console.log(response);
    console.log(response.data.statusMsg);
    console.log(response.data.message);

    apiErrors.value = null;
    fieldError.value = null;

setTimeout(() => {
  router.push({ name: "signin" });
}, 1500);
  } catch (err: any) {
    console.error(err);

    // لو فيه response من السيرفر
    apiErrors.value =
      err.response?.data?.errors?.msg ?? err.response?.data?.message ?? "Something went wrong";

    fieldError.value = err.response?.data?.errors?.param ?? null;

  } finally {
    loading.value = false;
  }
}

  return {
    login,
    register,
    GetTokens,
    logout,
    forgetPassword,
    IsLoggedIn,
    userData,
    token,
    apiErrors,
    fieldError,
    loading,
    
  };
});
