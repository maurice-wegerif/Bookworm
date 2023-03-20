import { Link } from "react-router-dom";

export const Footer = () => {
  const links = {
    company: [
      { name: "About", href: "#" },
      { name: "Butterflies", href: "#" },
      { name: "Worms", href: "#" },
    ],
  };

  return (
    <footer
      className="bg-surface font-thin text-text"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex flex-row mx-auto max-w-5xl text-center pt-14 sm:pt-14 lg:pt-14">
        <div className="basis-1/5">
          <Link to="/Information"> About us </Link>
        </div>
        <div className="basis-1/5">
          <Link to="/Information"> Advertising </Link>
        </div>
        <div className="basis-1/5">
          <Link to="/Information"> Help </Link>
        </div>
        <div className="basis-1/5">
          <Link to="/Information"> Contact</Link>
        </div>
        <div className="basis-1/5">Privacy Policy</div>
      </div>
      <div className="flex flex-row mx-auto max-w-5xl px-6 py-8 sm:py-8 lg:px-8 lg:py-8 text-center text-2xl">
        <div className="basis-full">An Independent Company</div>
      </div>

      <div className="flex flex-row mx-auto max-w-5xl px-6 pb-12 sm:pb-12 lg:px-8 lg:pb-24 text-center text-sm">
        <div className="basis-full">© 2023, Booklet.com</div>
      </div>
    </footer>
  );
};