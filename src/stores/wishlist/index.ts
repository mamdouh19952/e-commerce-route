// stores/wishlist.ts
import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useAuthStore } from "../auth";
import { toast } from "vue3-toastify";

export const useWishlistStore = defineStore("wishlist", () => {
  const authStore = useAuthStore();
  const items = ref<any[]>([]); // هنا هتتخزن المنتجات اللي في الـ wishlist

  // ✅ 1. تحميل الـ wishlist من الـ API
  async function fetchWishlist() {
    try {
      const res = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: { token: authStore.token }
      });
      items.value = res.data.data; // السيرفر بيرجع array
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  }

  // ✅ 2. هل المنتج موجود بالفعل في الـ wishlist؟
  function isInWishlist(id: string) {
    return items.value.some(item => String(item.id) === String(id));
  }

  // ✅ 3. إضافة للـ wishlist (مع API)
  async function addToWishlist(id: string) {
  try {
    const res = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      { productId: id },
      { headers: { token: authStore.token } }
    );

    // هنا تقدر تعرض رسالة النجاح
    toast.success(res.data.message || "Added to wishlist!", { theme: "auto" });

    // نجيب البيانات من جديد عشان القائمة تتحدث
    await fetchWishlist();

  } catch (err: any) {
    console.error("Error adding to wishlist:", err);
    toast.error(
      err.response?.data?.message || "Failed to add to wishlist",
      { theme: "auto" }
    );
  }
}


  // ✅ 4. إزالة من الـ wishlist (مع API)
  async function removeFromWishlist(id: string) {
    try {
      const res =  await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        { headers: { token: authStore.token } }
      );
          toast.success(res.data.message || "deleted from wishlist!", { theme: "auto" });

      await fetchWishlist(); 
    } catch (err) {
      console.error("Error removing from wishlist:", err);
      toast.error(
      err.response?.data?.message || "Failed to add to wishlist",
      { theme: "auto" }
    );
    }
  }

  // ✅ 5. toggle (لو موجود يشيله، لو مش موجود يضيفه)
  async function toggleWishlist(id: string) {
    if (isInWishlist(id)) {
      await removeFromWishlist(id);
    } else {
      await addToWishlist(id);
    }
  }

  return { items, fetchWishlist, isInWishlist, addToWishlist, removeFromWishlist, toggleWishlist };
});
