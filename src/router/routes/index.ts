//  import "../../assets/main.css";
 import MainLayout from '../../MainLayout/MainLayout.vue';
import  Home from '../../pages/Home/index.vue' ;
import  Product from '../../pages/Product/index.vue' ; 
import  Cart from '../../pages/Cart/index.vue' ; 
import  Catagory from '../../pages/Catagory/index.vue' ; 
import  Brands from '../../pages/Brands/index.vue' ; 
import Register from '@/pages/Register/Register.vue';
import PageNotFound from '@/MainLayout/PageNotFound.vue';
import SignIn from '@/pages/SignIn/SignIn.vue';
import ProductDetails from '@/components/Home/ProductDetails.vue';
import Payment from '@/pages/Payment/Payment.vue';
import AllOrders from '@/pages/Payment/AllOrders/AllOrders.vue';
import BrandDetails from '@/pages/Brands/brandDetails.vue';
import CatagoryDetails from '@/pages/Catagory/CatagoryDetails.vue';
import Wishlist from '@/pages/wishlist/wishlist.vue';
import ForgetPassward from '@/pages/ForgetPassward/ForgetPassward.vue';
 
 export const routes = [
{    
    path:'/',
    component : MainLayout,
    children:[
        {
            path:'',    
            component: Home,
            name:'home',
            meta: { requireAuth: true }
        },
         {
            path:'/cart',
            component:Cart,
            name:'cart',
            meta: { requireAuth: true }
        },
         {
            path:'/wishlist',
            component:Wishlist,
            name:'wishlist',
            meta: { requireAuth: true }
        },
        {
            path:'/product',
            component:Product,
            name:'product',
            meta: { requireAuth: true }
        },
        {
            path:'/payment',
            component:Payment,
            name:'payment',
            meta: { requireAuth: true }
        },
        {
            path:'/allorders',
            component:AllOrders,
            name:'allorders',
            meta: { requireAuth: true }
        },
         {
            path:'/product/:id',
            component:ProductDetails,
            name:'ProductDetails',      
            meta: { requireAuth: true }
        },
         {
            path:'/brands/:id',
            component:BrandDetails,
            name:'brandDetails',      
            meta: { requireAuth: true }
        },
        {
            path:'/catagory',
            component:Catagory,
            name:'catagory',
            meta: { requireAuth: true }
        },
        {
            path:'/catagory/:id',
            component:CatagoryDetails,
            name:'CatagoryDetails',
            meta: { requireAuth: true }
        },
      
        {
            path:'/brands',
            component:Brands,
            name:'brands',
            meta: { requireAuth: true }
        },
        {
            path:'/reset-password',
            component:ForgetPassward,
            name:'forget-password',
            meta: { guestOnly: true }
        },
        {
            path:'/register',
            component:Register,
            name:'register',
              meta: { guestOnly: true }

            // meta: { requireAuth: false }
        },
        {
            path:'/signin',
            component:SignIn,
            name:'signin',
              meta: { guestOnly: true }

            // meta: { requireAuth: false }
        }
        
    ]
},
{
   path: '/:pathMatch(.*)*',
   component:PageNotFound,
   name:'not-found',
   
},
]

