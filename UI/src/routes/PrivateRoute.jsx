import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isLogged = localStorage.getItem("session");
    return isLogged ? <Outlet /> : <Navigate to="/login" />;
  };
  
  export default PrivateRoute;
  