import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layouts/layout"
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailsSection from "./forms/manage-restaurant-form/DetailsSection";
import DetailPage from "./pages/DetailPage";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route
          path="/"
          element={
            <Layout showHero>
              <HomePage />
            </Layout>
          }
        />
        <Route element={<ProtectedRoute/>}>
          <Route
            path="/search/:city"
            element={
              <Layout>
                <SearchPage />
              </Layout>
            }
          />

          <Route
            path="/detail/:restaurantId"
            element={
              <Layout>
                <DetailPage/>
              </Layout>
            }
          />

        <Route element={<ProtectedRoute/>}>
          <Route
            path="/user-profile"
            element={
              <Layout>
                <UserProfilePage />
              </Layout>
            }
          />
          </Route>
          <Route
            path="/manage-restaurant"
            element={
              <Layout>
                <ManageRestaurantPage />
              </Layout>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
}

export default AppRoutes;