import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Guard = ({ token, routeRedirect }) => {
  console.log({ token, routeRedirect });
  const location = useLocation();
  console.log("location", location);
  return localStorage.getItem(token) ? (
    <Outlet />
  ) : (
    <Navigate to={routeRedirect} replace state={{ from: location }} />
  );
};
