import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./routes";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/")
  }, []);
  
  return children;
};

export default ProtectedRoutes;
