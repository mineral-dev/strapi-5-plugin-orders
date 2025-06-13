import { Page } from '@strapi/strapi/admin';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './HomePage';
import OrderSlug from './OrderSlug';

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path=":id" element={<OrderSlug />} />
      <Route path="*" element={<Page.Error />} />
    </Routes>
  );
};

export { App };
