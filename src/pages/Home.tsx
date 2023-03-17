import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { Advertisement } from "../components/advertisement";
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

  return (
    <main>
      <div className="absolute top-40 left-16 w-48 overflow-y-auto">
        <Advertisement />
      </div>
      <Hero />
      <div className="absolute top-40 right-16 w-48 overflow-y-auto">
        <Advertisement />
      </div>
    </main>
  );
};
