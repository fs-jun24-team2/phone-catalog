import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { Path } from './types/Path.ts';
import { HomePage } from './modules/HomePage';
import { NotFoundPage } from './modules/NotFoundPage';
import { CartPage } from './modules/CartPage';
import { FavouritesPage } from './modules/FavouritesPage';
import { ProductsPage } from './modules/ProductsPage/ProductsPage.tsx';
import { ProductDetailsPage } from './modules/ProductDetailsPage/ProductDetailsPage.tsx';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path={Path.main} element={<App />}>
        <Route index element={<HomePage />} />

        <Route
          path={Path.home}
          element={<Navigate to={Path.main} replace={true} />}
        />
        {[Path.phones, Path.tablets, Path.accessories].map(path => (
          <Route key={path} path={path} element={<ProductsPage />} />
        ))}

        {[Path.phonesId, Path.tabletsId, Path.accessoriesId].map(path => (
          <Route key={path} path={path} element={<ProductDetailsPage />} />
        ))}

        <Route path={Path.cart} element={<CartPage />} />
        <Route path={Path.favourites} element={<FavouritesPage />} />
      </Route>
      <Route path={Path.notFound} element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
