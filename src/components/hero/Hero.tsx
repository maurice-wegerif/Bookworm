import { HomepageBookList } from "../homepageBookList/HomepageBookList";

export const Hero = () => (
  <div className="bg-white py-24 px-6 sm:py-6 lg:px-8">
    <HomepageBookList category="New books:" />
    <HomepageBookList category="Our favorites:" />
    <HomepageBookList category="Top rated:" />
  </div>
);


