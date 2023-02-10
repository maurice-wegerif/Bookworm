import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { OtherHero } from "../components/hero";
import { Hero } from "../components/hero/Hero";
import { auth } from "../firebase";

export const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return <main>{auth.currentUser ? <Hero /> : <OtherHero />}</main>;
};
