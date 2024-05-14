import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import HomePage from "../Pages/HomePage/HomePage";
import IntroducePage from "../Pages/IntroducePage/IntroducePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import ProductDetailPage from "../Pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import RegistrationPage from "../Pages/RegisterPage/RegisterPage";
export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeaderFooter: true
    },
    {
        path: "/product",
        page: ProductPage,
        isShowHeaderFooter: true
    },
    {
        path: "/introduce",
        page: IntroducePage,
        isShowHeaderFooter: true
    },
    {
        path: '/productdetail',
        page: ProductDetailPage,
        isShowHeaderFooter: true
    },
    {
        path: '/checkoutpage',
        page:  CheckoutPage,
        isShowHeaderFooter: true
    },
    {
        path: '/login',
        page: LoginPage,
        isShowHeaderFooter: true
    },
    {
        path: '/register',
        page: RegistrationPage,
        isShowHeaderFooter: true
    },
    {
        path: "*",
        page: NotFoundPage,
    },
    
]