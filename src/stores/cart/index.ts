import axios from "axios";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import { useAuthStore } from "../auth";
import { ICartData } from "@/types";
import { ref } from "vue";
export const useCartStore = defineStore("cart", () => {
      const authStore=useAuthStore();
const cartData = ref<ICartData>();    
const totalCartNumber = ref<number>(0);

const cartId = ref<string | null>(null);
// const isAddingToCart = ref(false);

const addingToCartId = ref<string | null>(null);
const updatingCartId = ref(false);

// const cartData = ref<ICartData | null>(null);



  function addToCart(productID: string) {
// isAddingToCart.value = true;
  addingToCartId.value = productID; // المنتج اللي بيتعمله لودنج دلوقتي


    axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        productId: productID,
      },
      {
        headers: { token: authStore.token  },
      }
    )
    .then((res) => {

      console.log(res.data);
      toast(res.data.message, {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true
        
      });
      
    //   isAddingToCart.value=false;
        addingToCartId.value = null; // خلص

getUserCartData()
    })
    .catch((err) => {
        // isAddingToCart.value=false;

      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong", {
  theme: "auto"
});
    addingToCartId.value = null; // خلص

    });
  
}
  function getUserCartData() {

    axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      
      {
        headers: { token: authStore.token  },
      }
    )
    .then((res) => {
     
      cartData.value=res.data.data;
      totalCartNumber.value=res.data.numOfCartItems
cartId.value=res.data.cartId
       
     
    })
    .catch((err) => {
      console.log(err);
    });
  }


  function clearCart() {

    axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      
      {
        headers: { token: authStore.token  },
      }
    )
    .then((response) => {
 toast(response.data.message, {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true
      });


      getUserCartData()
//      cartData.value = { products: [], totalCartPrice: 0 } as ICartData;
// cartNumber.value = 0;
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong", {
  theme: "auto"
});
    });
  }

function delteCartItem( productID: string) {

    axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
      
      {
        headers: { token: authStore.token  },
      }
    )
    .then((response) => {
 toast(response.data.message, {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true
      });
// cartData.value=response.data.data;
// cartNumber.value=response.data.numOfCartItems


      getUserCartData()
     
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong", {
  theme: "auto"
});
    });
  }
  function updateCartProductQuantity( productID: string, count: number) {
    updatingCartId.value = true;
    axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
      {
    count

},
      
      {
        headers: { token: authStore.token  },
      }
    )
    .then((response) => {
             updatingCartId.value = false;

 toast(response.data.status, {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true
      });


      getUserCartData()
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong", {
  theme: "auto"
});
    });
  }


  return { addToCart , delteCartItem ,clearCart, getUserCartData,updateCartProductQuantity,cartData,totalCartNumber,addingToCartId ,updatingCartId,cartId};
});
