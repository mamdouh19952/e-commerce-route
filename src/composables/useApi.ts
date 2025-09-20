import axios from "axios";
import { ref } from "vue";
import  {useLoading}  from 'vue-loading-overlay';


  export function useApi(link:string) {

const apiData =ref([]);
const loading = useLoading({});
const apiError =ref(null)

          const loader = useLoading().show({ color: "#4CAF50" });


    axios
    .get(link)

    .then ((res)=>{
console.log(res)
apiData.value=res.data.data
    })

.catch((err)=>{
  console.log(err)
  apiError.value=err.response.data.message;

  loader.hide()
})
.finally(() => {
      loader.hide(); 
    });

return {
apiData,
loading,
apiError

}
  }