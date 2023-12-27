import { useTheme } from "../App";
import "../assets/css/components/common.css";
import bannerLight from "../assets/images/screen.png";
import bannerDark from "../assets/images/screen-dark.png";
export default function HeroBanner() {
  const { theme } = useTheme();
  return (
    <div className="flex lg:justify-between items-center container mx-auto px-4 lg:flex-row flex-col-reverse">
      <div className="lg:max-w-[650px] lg:pr-3">
        <div className="text-wrapper mb-3 ">
          Generative Business Intelligence for Analysts
        </div>
        <h2 className="font-fontDM font-bold md:ext-5xl text-4xl leading-tight text-light-neutral-1000 dark:text-dark-neutral-1000">
          Empower Your Business <br /> with{" "}
          <b className="text-light-primary-700 bg-gradient-to-r from-[#2A88F4] to-[#3D68F5] bg-clip-text">
            AI-Driven Insights
          </b>
        </h2>
        <div className="font-fontInter text-base text-light-neutral-800 dark:text-dark-neutral-1000 leading-tight mt-5 max-w-[85%]">
          Nimbus harnesses the power of artificial intelligence to transform
          your business data into actionable insights, propelling you to new
          heights of success
        </div>
        <div className="flex lg:flex-row flex-col item-center gap-3 mt-6">
          <a href="/" className="btn">
            Start your free trial
          </a>
          <a
            href="/"
            className="btn-border flex gap-2 justify-center items-center border-light-neutral-300 text-neutral-900 dark:text-dark-neutral-1000 group"
          >
            <svg
              width={9}
              height={15}
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51624 6.40462C9.16125 6.96835 9.16125 8.03165 8.51623 8.59538L2.12145 14.1843C1.26962 14.9287 3.51629e-07 14.2732 4.03397e-07 13.0889L8.91992e-07 1.91112C9.4376e-07 0.726814 1.26962 0.0712611 2.12145 0.815738L8.51624 6.40462Z"
                fill="#343844"
                className="group-hover:fill-light-neutral-0 dark:fill-dark-neutral-800 transition-colors"
              />
            </svg>
            <b>Watch video</b>
          </a>
        </div>
      </div>
      <div className="lg:flex-1 lg:pl-[3%] lg:mb-0 mb-11 w-full lg:w-auto">
        {theme === "light" ? (
          <img src={bannerLight} className="w-full h-full object-contain" />
        ) : (
          <img src={bannerDark} className="w-full h-full object-contain" />
        )}
      </div>
    </div>
  );
}
