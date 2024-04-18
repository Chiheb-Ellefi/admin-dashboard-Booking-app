import MainLayout from "../layouts/MainLayout";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import PrivateRoutes from "./PrivateRoutes";
import Users from "../pages/Users";
import Rooms from "../pages/Rooms";
import NotFound from "../pages/NotFound";
import { useSelector } from "react-redux";
import Reservations from "../pages/Reservations";
import Reports from "../pages/Reports";
const Router = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/login"
          element={!isLoggedIn ? <SignIn /> : <Navigate to="/users" replace />}
        />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/users" replace />} />
            <Route path="/users" element={<Users />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
