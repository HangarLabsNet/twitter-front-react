import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Inicio de Layout</h1>
        <Outlet />
      <h2>Fin del Layout</h2>
    </div>
  );
};

export default Layout;
