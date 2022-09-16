import { lazy, Suspense } from 'react';
import { Link, RouteObject, Outlet } from 'react-router-dom';
import Loading from '@components/Loading';
import Home from '@pages/Home';
import Dao from '@pages/Dao';
import DaoLists from '@pages/DaoLists';
import Profile from '@pages/Profile';
// import Header from '@components/Header';
// const Profile = lazy(() => import('@pages/Profile'));
// const Dao = lazy(() => import('@pages/Dao'));
import { Nothing, NothingText } from './style';
const Routes: RouteObject[] = [];
const Layout = () => (
  <div className="m-auto">
    {/* <Header /> */}
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  </div>
);

function NoMatch() {
  return (
    <Nothing>
      <NothingText>Nothing to see here!</NothingText>
      <NothingText>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </NothingText>
    </Nothing>
  );
}

const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    { path: '/daoLists', element: <DaoLists /> },
    { path: '/dao', element: <Dao /> },
    { path: '/profile', element: <Profile /> },
    { path: '/loading', element: <Loading /> },
    { path: '*', element: <NoMatch /> },
  ],
};

Routes.push(mainRoutes);

export default Routes;
