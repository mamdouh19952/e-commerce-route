import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import { ref } from "vue";
import { toast } from "vue3-toastify";

export function useFetchApi() {
  const authStore = useAuthStore();

  const fetchData = ref([]);
  const getData = ref([]);
  const apiError = ref<string | null>(null);
  const changeColor = ref(false);

  async function callApi(link: string, productID: string) {
    try {
      const res = await axios.post(
        link,
        { productId: productID },
        { headers: { token: authStore.token } }
      );
 console.log(fetchData.value);
      fetchData.value = res.data?.data || res.data;
      changeColor.value = !changeColor.value; 

      toast.success(res.data.message || "Success!", { theme: "auto" });
    } catch (err: any) {
      apiError.value = err.response?.data?.message || "Something went wrong";
      toast.error(apiError.value, { theme: "auto" });
    }
  }
  async function getApi(link: string, ) 
  {

    try {
      const res = await axios.get(link, {
  headers: { token: authStore.token }

      });
     



 console.log(getData.value);
      getData.value = res.data?.data || res.data;
      changeColor.value = !changeColor.value; 

    } catch (err: any) {
      apiError.value = err.response?.data?.message || "Something went wrong";
    }
    
  }

async function deleteApi(link: string, productID: string) {
  try {
    const res = await axios.delete(link, {
      headers: { token: authStore.token },
      
    });

    // إزالة العنصر من getData
    getData.value = getData.value.filter(item => item.id !== productID);

    toast.success(res.data.message || "Deleted!", { theme: "auto" });
  } catch (err: any) {
    apiError.value = err.response?.data?.message || "Something went wrong";
    toast.error(apiError.value, { theme: "auto" });
  }
}



  return {
    fetchData,
    getData,
    changeColor,
    apiError,
    callApi, 
    getApi,
    deleteApi
  };
}
