import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
import { MainLayout } from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
