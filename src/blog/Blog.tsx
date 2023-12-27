import blogThumb1 from "../assets/images/blog-1.png";
import "../assets/css/components/card.css";
import "../assets/css/components/common.css";

export default function Blog() {
  const listData = [];
  for (let i = 0; i < 6; i++) {
    listData.push(
      <a href="" key={i}>
        <div className="card__thumb mb-4">
          <img src={blogThumb1} />
        </div>
        <div className="card__date">19 Jan 2023</div>
        <div className="card__headline">
          The Rise of AI in Business <br />
          Analytics: What You Need to Know know know know
        </div>
      </a>
    );
  }
  return (
    <section className="lg:mt-28 mt-12 lg:mb-36 mb-14">
      <div className="container mx-auto px-4 text-center">
        <div className="text-wrapper">Blog</div>
        <h3 className="headline text-center mt-4">
          Dive into the World of AI-Powered Analytics
        </h3>
        <p className="headline-desc text-center leading-relaxed">
          Stay updated with the latest trends, tips, and insights in business
          analytics.
          <br />
          Explore our curated articles designed to empower your data-driven
          journey.
        </p>
        <div className="mt-32 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">{listData}</div>
      </div>
    </section>
  );
}
