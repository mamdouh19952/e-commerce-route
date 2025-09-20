import axios from "axios";
import { ref } from "vue";


  export function useApi(link:string) {

const apiData =ref([]);
const apiError =ref(null)

        


    axios
    .get(link)

    .then ((res)=>{
console.log(res)
apiData.value=res.data.data
    })

.catch((err)=>{
  console.log(err)
  apiError.value=err.response.data.message;

 
})


return {
apiData,
apiError

}
  }