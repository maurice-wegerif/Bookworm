import { useContext } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { DataContext } from "../../helpers/DataContext";

export const PageLayout = () => {
  const { darkmode } = useContext(DataContext);

  return (
    <main
      className={`${
        darkmode ? "theme-dark" : "theme-light"
      } bg-background transition-colors`}
    >
      <ScrollRestoration />
      <Navbar />
      <section className="w-full max-w-5xl m-auto mt-8 mb-auto">
        <div className="mx-4 mb-8 xl:mx-0">
          <Outlet />
        </div>
      </section>
      <Footer />
    </main>
  );
};
