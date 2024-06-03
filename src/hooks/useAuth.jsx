import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const authData = useContext(AuthContext);
  return authData;
};

export default useAuth;
