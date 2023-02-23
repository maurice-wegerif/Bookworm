import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect } from "react";
import { OtherHero } from "../components/hero";
import { Hero } from "../components/hero/Hero";
import { auth } from "../firebase";
import { DataContext } from "../helpers/DataContext";

export const Home = () => {
  const { setIsAdmin } = useContext(DataContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user
          .getIdTokenResult()
          .then((idTokenResult) => {
            if (!!idTokenResult.claims.admin) {
              setIsAdmin(true);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setIsAdmin(false);
        console.log("user is logged out");
      }
    });
  }, []);

  return <main>{auth.currentUser ? <Hero /> : <OtherHero />}</main>;
};
