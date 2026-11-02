# E-Commerce Web App (Vue 3)

A responsive online store built with **Vue 3, TypeScript, Pinia and Tailwind CSS**. It covers the full shopping flow: authentication, product browsing, cart, wishlist, checkout and order history.

**Live demo:** https://e-commerce-route-8jma.vercel.app

> The app talks to the public Route Academy e-commerce API (`ecommerce.routemisr.com`), so there is no backend in this repo.
> Every page except sign-in / sign-up requires login. On the live demo, create an account with any email, then sign in.

## Features

- **Authentication:** sign up, sign in, password reset, and route guards (protected pages for logged-in users, guest-only pages for sign-in / sign-up)
- **Catalog:** product list, product details, categories, brands, and a home page with sliders
- **Cart:** add items, change quantity, remove an item, clear the cart
- **Wishlist:** add and remove products
- **Checkout:** shipping details form, online payment through a checkout session, and an order history page
- **UX:** form validation, toast notifications, loading overlay, a 404 page, and a responsive layout

## Tech Stack

| Area | Tools |
|---|---|
| Framework | Vue 3 (Composition API), TypeScript |
| State | Pinia (auth, cart, wishlist stores) |
| Routing | Vue Router with navigation guards |
| Styling | Tailwind CSS 4 |
| Forms | vee-validate + yup |
| HTTP | Axios |
| Build | Vite |

## Project Structure

```
src/
  components/     Navbar, Footer, home sliders, product cards
  composables/    reusable API fetching helpers
  MainLayout/     layout wrapper and 404 page
  pages/          Home, Product, Brands, Category, Cart, Wishlist, Payment, Orders, SignIn, Register
  router/         routes and auth guards
  stores/         Pinia stores (auth, cart, wishlist)
  types/          TypeScript types
```

## Getting Started

Requirements: Node.js 20.19+ (or 22.12+).

```sh
git clone https://github.com/mamdouh19952/e-commerce-route.git
cd e-commerce-route
npm install
npm run dev
```

Build for production:

```sh
npm run build
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` so that page refreshes work with Vue Router history mode.

## Author

**Mamdouh Mahmoud** — Full Stack Developer (Laravel · Vue)
[LinkedIn](https://linkedin.com/in/mamdouh-mahmoud) · [Portfolio](https://mamdouh19952.github.io/portfolio/)
