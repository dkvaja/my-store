import MainLayout from "./layouts/MainLayout";
import Store from "./pages/Store";
import NotFound from './pages/NotFound';
import { FAVORITE_PRODUCT, HOME, NOT_FOUND, PRODUCT_DETAIL, SIGN_IN } from "./constants/routes";
import ProductDetail from './pages/ProductDetail';
import SignIn from "./pages/SignIn";
import AuthLessLayout from './layouts/AuthLessLayout/index';
import PrivateRoute from './components/Auth/PrivateRoute/index';
import PublicRoute from './components/Auth/PublicRoute/index';
import FavoriteProducts from './pages/Favorite/index';

export const appRoutes = [
  {
    path: HOME,
    element:
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>,
    children: [
      { index: true, element: <Store /> },
      { path: PRODUCT_DETAIL, element: <ProductDetail /> },
      { path: FAVORITE_PRODUCT, element: <FavoriteProducts /> },
    ],
  },
  {
    path: HOME,
    element:
      <PublicRoute>
        <AuthLessLayout />
      </PublicRoute>,
    children: [
      { path: SIGN_IN, element: <SignIn /> },
    ],
  },
  {
    path: NOT_FOUND,
    element: <NotFound />
  },
];
