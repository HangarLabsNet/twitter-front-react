import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "../pages";
import { MainLayout } from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
