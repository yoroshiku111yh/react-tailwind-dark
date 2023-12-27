import "../assets/css/components/common.css";
import "../assets/css/components/card.css";
import card1 from "../assets/images/cover-1.png";
import card2 from "../assets/images/cover-2.png";
import card3 from "../assets/images/cover-3.png";
import card4 from "../assets/images/cover-4.png";
import card5 from "../assets/images/cover-5.png";
import card6 from "../assets/images/cover-6.png";
const data = [
  {
    thumb: card1,
    context:
      "Harness Nimbus's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.",
    headline: "Predictive Power",
    url: "/",
    tags: [
      {
        text: "Finance",
        url: "/",
      },
      {
        text: "Retail",
        url: "/",
      },
      {
        text: "E-commerc",
        url: "/",
      },
    ],
  },
  {
    thumb: card2,
    context:
      "Harness Nimbus's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.",
    headline: "Predictive Power",
    url: "/",
    tags: [
      {
        text: "Finance",
        url: "/",
      },
      {
        text: "Retail",
        url: "/",
      },
      {
        text: "E-commerc",
        url: "/",
      },
    ],
  },
  {
    thumb: card3,
    context:
      "Harness Nimbus's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.",
    headline: "Predictive Power",
    url: "/",
    tags: [
      {
        text: "Finance",
        url: "/",
      },
      {
        text: "Retail",
        url: "/",
      },
      {
        text: "E-commerc",
        url: "/",
      },
    ],
  },
  {
    thumb: card4,
    context:
      "Harness Nimbus's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.",
    headline: "Predictive Power",
    url: "/",
    tags: [
      {
        text: "Finance",
        url: "/",
      },
      {
        text: "Retail",
        url: "/",
      },
      {
        text: "E-commerc",
        url: "/",
      },
    ],
  },
  {
    thumb: card5,
    context:
      "Harness Nimbus's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.",
    headline: "Predictive Power",
    url: "/",
    tags: [
      {
        text: "Finance",
        url: "/",
      },
      {
        text: "Retail",
        url: "/",
      },
      {
        text: "E-commerc",
        url: "/",
      },
    ],
  },
  {
    thumb: card6,
    context:
      "Harness Nimbus's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.",
    headline: "Predictive Power",
    url: "/",
    tags: [
      {
        text: "Finance",
        url: "/",
      },
      {
        text: "Retail",
        url: "/",
      },
      {
        text: "E-commerc",
        url: "/",
      },
    ],
  },
];

export default function Insights() {
  const listitems = data.map((item, index) => {
    const listTags = item.tags.map((tag, indexTag) => {
      return (
        <a className="card__tag " href={tag.url} key={indexTag}>
          {tag.text}
          {indexTag < item.tags.length - 1 && ","}
        </a>
      );
    });
    return (
      <div
        className="block p-6 rounded-xl border-[1px] border-light-neutral-300"
        key={index}
      >
        <div className="card__thumb">
          <img src={item.thumb} />
        </div>
        <div className="flex gap-1 mt-3">{listTags}</div>
        <a href={item.url} className="card__headline">
          {item.headline}
        </a>
        <div className="card__context">{item.context}</div>
      </div>
    );
  });
  return (
    <section className="lg:mt-40 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="text-wrapper mb-6">Applications</div>
        <h3 className="headline mb-5">Insights and predictions made easy</h3>
        <p className="headline-desc max-w-[700px] mx-auto">
          Generative business intelligence drives efficiencies throughout your
          operations. From forecasting revenue to analyzing marketing
          attribution, Akkio gives you insights so you can make better
          decisions.
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-7 lg:mt-20 gap-9 mt-12">{listitems}</div>
        <div className="lg:pt-28 pt-20 relative">
          <div className="absolute -top-[40px] left-0 right-0 h-20 bg-gradient-to-t from-white to-[rgba(255,255,255,0.35)] dark:from-dark-neutral-0 dark:to-dark-neutral-300/20"></div>
          <a
            href="/"
            className="btn-border text-light-neutral-900 dark:text-dark-neutral-1000 border-light-neutral-300 text-base py-3 px-5 rounded-xl"
          >
            Explore more application
          </a>
        </div>
      </div>
    </section>
  );
}
