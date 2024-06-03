import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  // google sign in
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success("Login Success!!");
      })
      .catch((err) => console.log(err.message));
  };
  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  //   logout
  const logOut = () => {
    signOut(auth).then(() => {
      toast.success("Logout Success!");
    });
  };

  const authData = { googleSignIn, user, logOut };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
