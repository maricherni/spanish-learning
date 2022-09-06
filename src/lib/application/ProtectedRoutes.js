import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "./routes";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserAuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
     return navigate('/LogIn')
    }
  }, []);
  
  return children;

  
};

export default ProtectedRoutes;
