import HomePage from "../Pages/HomePage/HomePage";
import IntroducePage from "../Pages/IntroducePage/IntroducePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import ProductPage from "../Pages/ProductPage/ProductPage";

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
        path: "*",
        page: NotFoundPage,
    }
]