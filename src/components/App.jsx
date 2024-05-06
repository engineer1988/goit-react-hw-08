import "./App.css";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const HomePage = lazy(() => import("../pages/home_page/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/registration_page/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/login_page/LoginPage"));
const ContactsPage = lazy(() => import("../pages/contacts_page/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}
export default App;
