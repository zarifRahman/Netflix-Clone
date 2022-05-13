import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";


export default function useAuthListener(){
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        console.log(authUser, "---for removeItem");
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    // because this is a listener, we have to clean up the listener
    return () => listener();
  }, []);
  // why user is returned ?
  // returns user from this function
  return { user };
}