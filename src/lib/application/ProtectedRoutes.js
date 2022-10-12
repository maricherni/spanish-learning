import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuthContext } from "./routes";

const PATHNAMES_NOT_PROTECTED = ["/", "/Login", "/Signup"];

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserAuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!PATHNAMES_NOT_PROTECTED.includes(location.pathname)) {
      if (user === null) {
        navigate("/");
      }
    }
  }, [navigate, user, location.pathname]);

  return children;
};

export default ProtectedRoutes;
