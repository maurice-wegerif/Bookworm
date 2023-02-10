import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

export const PageLayout = () => (
  <main>
    <Navbar />
    <section className="w-full max-w-5xl m-auto mt-8 mb-auto">
      <div className="mx-4 mb-8 xl:mx-0">
        <Outlet />
      </div>
    </section>
    <Footer />
  </main>
);
