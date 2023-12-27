import "../assets/css/components/common.css";
import "../assets/css/components/cardReview.css";

import Flickity from "react-flickity-component";

import logo1 from "../assets/images/logo-brands-1.png";

const flickityOptions = {
    prevNextButtons: false,
    pageDots: false,
    cellAlign: 'center',
    groupCells : true
};

export default function Experience() {
  const listItem = [];
  for (let i = 0; i < 15; i++) {
    listItem.push(
      <div className="card-review mr-10" key={i}>
        <div className="card-review__logo text-center mb-5">
          <img
            src={logo1}
            className="max-w-[50%] object-contain inline-block"
          />
        </div>
        <div className="card-review__context ">
          Project management is smoother with Nimbus. Its dashboards provide a
          clear view of progress and areas of improvement.
        </div>
        <div className="text-center">
          <div className="card-review__user-ava"></div>
          <div className="font-semibold font-fontInter text-light-neutral-1000 dark:text-dark-neutral-1000 mt-3">
            Nathan D.Hall
          </div>
          <div className="font-fontInter text-light-neutral-1000 dark:text-dark-neutral-1000 mt-1">
            Project Lead
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="lg:mt-40 mt-14">
      <div className="container mx-auto px-4">
        <h3 className="headline text-center">The Nimbus Experience</h3>
        <p className="headline-desc text-center">
          At Nimbus, we pride ourselves on delivering top-notch AI-driven
          business analytics.
          <br />
          But don't just take our word for it. Hear what our satisfied users
          have to say.
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto lg:mt-20 mt-12 overflow-hidden border-0">
        <Flickity className="border-0" options={flickityOptions}>{listItem}</Flickity>
      </div>
    </section>
  );
}
