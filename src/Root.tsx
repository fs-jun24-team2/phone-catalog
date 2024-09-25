import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { Path } from './types/Path.ts';
import { HomePage } from './modules/HomePage';
import { NotFoundPage } from './modules/NotFoundPage';
import { CartPage } from './modules/CartPage';
import { FavouritesPage } from './modules/FavouritesPage';
import { ProductsPage } from './modules/ProductsPage/ProductsPage.tsx';
import { ProductDetailsPage } from './modules/ProductDetailsPage/ProductDetailsPage.tsx';
import Login from './modules/shared/components/Auth/Login/Login.tsx';
import Register from './modules/shared/components/Auth/Register/Register.tsx';
import ForgotPassword from './modules/shared/components/Auth/ForgotPassword/ForgotPassword.tsx';
import Dashboard from './modules/shared/components/Auth/Dashboard/Dashboard.tsx';
import { Rights } from './modules/shared/components/Footer/Rights/Rights.tsx';

export const Root = () => (
  <HashRouter>
    <Routes>
      {/* Parent Route for your app */}
      <Route path={Path.main} element={<App />}>
        <Route index element={<HomePage />} />

        {/* Auth Routes should be part of the same Routes hierarchy */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Redirect /home to main */}
        <Route
          path={Path.home}
          element={<Navigate to={Path.main} replace={true} />}
        />

        {/* Products Pages */}
        {[Path.phones, Path.tablets, Path.accessories].map(path => (
          <Route key={path} path={path} element={<ProductsPage />} />
        ))}

        {/* Product Details Pages */}
        {[Path.phonesId, Path.tabletsId, Path.accessoriesId].map(path => (
          <Route key={path} path={path} element={<ProductDetailsPage />} />
        ))}

        {/* Other routes */}
        <Route path={Path.cart} element={<CartPage />} />
        <Route path={Path.favourites} element={<FavouritesPage />} />
        <Route path="/rights" Component={Rights} />
      </Route>

      {/* Catch all NotFoundPage */}
      <Route path={Path.notFound} element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
