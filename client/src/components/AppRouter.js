import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

function AppRouter() {
  const { user, device } = useContext(Context);

  console.log('user', device);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route to={SHOP_ROUTE} />
    </Routes>
  );
}

export default AppRouter;
