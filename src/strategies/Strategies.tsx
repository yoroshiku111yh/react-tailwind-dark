import '../assets/css/components/common.css';

const data = [
  {
    title: "AI-Driven Forecasts",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V8C20.25 8.41421 20.5858 8.75 21 8.75C21.4142 8.75 21.75 8.41421 21.75 8V4.5C21.75 3.25736 20.7426 2.25 19.5 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V9.5C2.25 10.0763 2.46664 10.6019 2.82292 11C2.46664 11.3981 2.25 11.9237 2.25 12.5V17.5C2.25 18.7426 3.25736 19.75 4.5 19.75H9C9.41421 19.75 9.75 19.4142 9.75 19C9.75 18.5858 9.41421 18.25 9 18.25H4.5C4.08579 18.25 3.75 17.9142 3.75 17.5V12.5C3.75 12.0858 4.08579 11.75 4.5 11.75H9C9.41421 11.75 9.75 11.4142 9.75 11C9.75 10.5858 9.41421 10.25 9 10.25H4.5C4.08579 10.25 3.75 9.91421 3.75 9.5V4.5ZM7.25 6.51251C7.25 6.0983 6.91421 5.76251 6.5 5.76251C6.08579 5.76251 5.75 6.0983 5.75 6.51251V7.51251C5.75 7.92673 6.08579 8.26251 6.5 8.26251C6.91421 8.26251 7.25 7.92673 7.25 7.51251V6.51251ZM12.25 7.01251C12.25 6.5983 12.5858 6.26251 13 6.26251H18.0125C18.4267 6.26251 18.7625 6.5983 18.7625 7.01251C18.7625 7.42673 18.4267 7.76251 18.0125 7.76251H13C12.5858 7.76251 12.25 7.42673 12.25 7.01251ZM6.4873 13.7375C6.90152 13.7375 7.2373 14.0733 7.2373 14.4875V15.4875C7.2373 15.9018 6.90152 16.2375 6.4873 16.2375C6.07309 16.2375 5.7373 15.9018 5.7373 15.4875V14.4875C5.7373 14.0733 6.07309 13.7375 6.4873 13.7375ZM9.5 5.76251C9.91421 5.76251 10.25 6.0983 10.25 6.51251V7.51251C10.25 7.92673 9.91421 8.26251 9.5 8.26251C9.08579 8.26251 8.75 7.92673 8.75 7.51251V6.51251C8.75 6.0983 9.08579 5.76251 9.5 5.76251ZM16.7803 15.2197L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L15.1893 15.75L14.4697 16.4697C14.1768 16.7626 14.1768 17.2374 14.4697 17.5303C14.7626 17.8232 15.2374 17.8232 15.5303 17.5303L16.7803 16.2803C17.0732 15.9874 17.0732 15.5126 16.7803 15.2197ZM17.25 17.5C17.25 17.0858 17.5858 16.75 18 16.75H19C19.4142 16.75 19.75 17.0858 19.75 17.5C19.75 17.9142 19.4142 18.25 19 18.25H18C17.5858 18.25 17.25 17.9142 17.25 17.5ZM15 10.25C12.9289 10.25 11.25 11.9289 11.25 14V18C11.25 20.0711 12.9289 21.75 15 21.75H19C21.0711 21.75 22.75 20.0711 22.75 18V14C22.75 11.9289 21.0711 10.25 19 10.25H15ZM12.75 14C12.75 12.7574 13.7574 11.75 15 11.75H19C20.2426 11.75 21.25 12.7574 21.25 14V18C21.25 19.2426 20.2426 20.25 19 20.25H15C13.7574 20.25 12.75 19.2426 12.75 18V14Z" fill="#4B5162" className="fill-light-neutral-1000 dark:fill-dark-neutral-1000">
</path>

      </svg>
    ),
    context: `Harness the unmatched power of artificial intelligence with
    Nimbus. Dive deep into predictive analytics, anticipate market
    trends, and stay steps ahead of your competition. Make informed
    decisions backed by data-driven insights`,
  },
  {
    title: "Connect & Streamline",
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M4 1.25C3.0335 1.25 2.25 2.0335 2.25 3V6C2.25 6.9665 3.0335 7.75 4 7.75H4.75V13.25H4C3.0335 13.25 2.25 14.0335 2.25 15V18C2.25 18.9665 3.0335 19.75 4 19.75H7C7.9665 19.75 8.75 18.9665 8.75 18V17.25H10C10.4142 17.25 10.75 16.9142 10.75 16.5C10.75 16.0858 10.4142 15.75 10 15.75H8.75V15C8.75 14.0335 7.9665 13.25 7 13.25H6.25V7.75H7C7.9665 7.75 8.75 6.9665 8.75 6V5.25H14.25V6C14.25 6.9665 15.0335 7.75 16 7.75H16.75V9C16.75 9.41421 17.0858 9.75 17.5 9.75C17.9142 9.75 18.25 9.41421 18.25 9V7.75H19C19.9665 7.75 20.75 6.9665 20.75 6V3C20.75 2.0335 19.9665 1.25 19 1.25H16C15.0335 1.25 14.25 2.0335 14.25 3V3.75H8.75V3C8.75 2.0335 7.9665 1.25 7 1.25H4ZM17.5 6.25H19C19.1381 6.25 19.25 6.13807 19.25 6V3C19.25 2.86193 19.1381 2.75 19 2.75H16C15.8619 2.75 15.75 2.86193 15.75 3V4.5V6C15.75 6.13807 15.8619 6.25 16 6.25H17.5ZM7.25 15V16.5V18C7.25 18.1381 7.13807 18.25 7 18.25H4C3.86193 18.25 3.75 18.1381 3.75 18V15C3.75 14.8619 3.86193 14.75 4 14.75H5.5H7C7.13807 14.75 7.25 14.8619 7.25 15ZM7.25 3V4.5V6C7.25 6.13807 7.13807 6.25 7 6.25H5.5H4C3.86193 6.25 3.75 6.13807 3.75 6V3C3.75 2.86193 3.86193 2.75 4 2.75H7C7.13807 2.75 7.25 2.86193 7.25 3ZM16 17C15.5858 17 15.25 17.3358 15.25 17.75C15.25 18.1642 15.5858 18.5 16 18.5H18C18.4142 18.5 18.75 18.1642 18.75 17.75C18.75 17.3358 18.4142 17 18 17H16ZM15.25 15.25C15.25 14.8358 15.5858 14.5 16 14.5H18C18.4142 14.5 18.75 14.8358 18.75 15.25C18.75 15.6642 18.4142 16 18 16H16C15.5858 16 15.25 15.6642 15.25 15.25ZM15 11.25C13.4812 11.25 12.25 12.4812 12.25 14V19C12.25 20.5188 13.4812 21.75 15 21.75H19C20.5188 21.75 21.75 20.5188 21.75 19V14C21.75 12.4812 20.5188 11.25 19 11.25H15ZM13.75 14C13.75 13.3096 14.3096 12.75 15 12.75H19C19.6904 12.75 20.25 13.3096 20.25 14V19C20.25 19.6904 19.6904 20.25 19 20.25H15C14.3096 20.25 13.75 19.6904 13.75 19V14Z" fill="#4B5162" className="fill-light-neutral-1000 dark:fill-dark-neutral-1000">
</path>

      </svg>
    ),
    context: `Harness the unmatched power of artificial intelligence with
    Nimbus. Dive deep into predictive analytics, anticipate market
    trends, and stay steps ahead of your competition. Make informed
    decisions backed by data-driven insights`,
  },
  {
    title: "Instant Insights",
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 6C3.75 4.75736 4.75736 3.75 6 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V8.25H3.75V6ZM2.25 9V6C2.25 3.92893 3.92893 2.25 6 2.25H18C20.0711 2.25 21.75 3.92893 21.75 6V9V12C21.75 12.4142 21.4142 12.75 21 12.75C20.5858 12.75 20.25 12.4142 20.25 12V9.75H3.75V18C3.75 19.2426 4.75736 20.25 6 20.25H9C9.41421 20.25 9.75 20.5858 9.75 21C9.75 21.4142 9.41421 21.75 9 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V9ZM11.5303 5.46466C11.2374 5.17177 10.7626 5.17177 10.4697 5.46466L10.4647 5.46967C10.1718 5.76256 10.1718 6.23743 10.4647 6.53032L10.4697 6.53533C10.7626 6.82822 11.2374 6.82822 11.5303 6.53533L11.5353 6.53032C11.8282 6.23743 11.8282 5.76256 11.5353 5.46967L11.5303 5.46466ZM7.96967 5.46466C8.26256 5.17177 8.73743 5.17177 9.03032 5.46466L9.03533 5.46967C9.32822 5.76256 9.32822 6.23743 9.03533 6.53032L9.03032 6.53533C8.73743 6.82822 8.26256 6.82822 7.96967 6.53533L7.96466 6.53032C7.67177 6.23743 7.67177 5.76256 7.96466 5.46967L7.96967 5.46466ZM6.53032 5.46466C6.23743 5.17177 5.76256 5.17177 5.46967 5.46466L5.46466 5.46967C5.17177 5.76256 5.17177 6.23743 5.46466 6.53032L5.46967 6.53533C5.76256 6.82822 6.23743 6.82822 6.53032 6.53533L6.53533 6.53032C6.82822 6.23743 6.82822 5.76256 6.53533 5.46967L6.53032 5.46466ZM13.2412 15.6585C13.241 15.6585 13.2416 15.657 13.2432 15.6541C13.2421 15.6571 13.2413 15.6585 13.2412 15.6585ZM13.25 15.6436C13.2616 15.6272 13.2868 15.5973 13.3375 15.5545C13.4715 15.4413 13.71 15.3056 14.0703 15.177C14.7843 14.922 15.82 14.75 17 14.75C18.18 14.75 19.2157 14.922 19.9297 15.177C20.29 15.3056 20.5285 15.4413 20.6625 15.5545C20.7132 15.5973 20.7384 15.6272 20.75 15.6436V16.8564C20.7384 16.8729 20.7132 16.9027 20.6625 16.9455C20.5285 17.0587 20.29 17.1944 19.9297 17.3231C19.2157 17.578 18.18 17.75 17 17.75C15.82 17.75 14.7843 17.578 14.0703 17.3231C13.71 17.1944 13.4715 17.0587 13.3375 16.9455C13.2868 16.9027 13.2616 16.8729 13.25 16.8564V15.6436ZM11.75 16.8929V15.6071C11.75 15.0789 12.0518 14.6769 12.3698 14.4085C12.6911 14.1371 13.1117 13.9265 13.5658 13.7643C14.4804 13.4377 15.6947 13.25 17 13.25C18.3053 13.25 19.5196 13.4377 20.4342 13.7643C20.8883 13.9265 21.3089 14.1371 21.6302 14.4085C21.9482 14.6769 22.25 15.0789 22.25 15.6071V16.8929V20.3929C22.25 20.9211 21.9482 21.3231 21.6302 21.5915C21.3089 21.8629 20.8883 22.0735 20.4342 22.2357C19.5196 22.5623 18.3053 22.75 17 22.75C15.6947 22.75 14.4804 22.5623 13.5658 22.2357C13.1117 22.0735 12.6911 21.8629 12.3698 21.5915C12.0518 21.3231 11.75 20.9211 11.75 20.3929V16.8929ZM20.75 18.6123V20.3564C20.7384 20.3728 20.7132 20.4027 20.6625 20.4455C20.5285 20.5587 20.29 20.6944 19.9297 20.823C19.2157 21.078 18.18 21.25 17 21.25C15.82 21.25 14.7843 21.078 14.0703 20.823C13.71 20.6944 13.4715 20.5587 13.3375 20.4455C13.2868 20.4027 13.2616 20.3728 13.25 20.3564V18.6123C13.3528 18.6562 13.4584 18.6973 13.5658 18.7357C14.4804 19.0623 15.6947 19.25 17 19.25C18.3053 19.25 19.5196 19.0623 20.4342 18.7357C20.5416 18.6973 20.6472 18.6562 20.75 18.6123ZM13.2412 20.3415C13.2413 20.3415 13.2421 20.3429 13.2432 20.3459C13.2416 20.343 13.241 20.3415 13.2412 20.3415ZM20.7588 20.3415C20.7589 20.3415 20.7589 20.3416 20.7587 20.342C20.7586 20.3423 20.7584 20.3429 20.758 20.3436C20.7577 20.3442 20.7573 20.345 20.7568 20.3459C20.7579 20.3429 20.7587 20.3415 20.7588 20.3415ZM20.7588 15.6585C20.7587 15.6585 20.7579 15.6571 20.7568 15.6541C20.7584 15.657 20.759 15.6585 20.7588 15.6585Z" fill="#1C1F25" className="fill-light-neutral-1000 dark:fill-dark-neutral-1000">
</path>

      </svg>
    ),
    context: `Harness the unmatched power of artificial intelligence with
    Nimbus. Dive deep into predictive analytics, anticipate market
    trends, and stay steps ahead of your competition. Make informed
    decisions backed by data-driven insights`,
  },
  {
    title: "Your Data, Your Way",
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M13.25 3C13.25 2.58579 13.5858 2.25 14 2.25H18C20.0711 2.25 21.75 3.92893 21.75 6V9C21.75 9.41421 21.4142 9.75 21 9.75C20.5858 9.75 20.25 9.41421 20.25 9V6C20.25 4.75736 19.2426 3.75 18 3.75H14C13.5858 3.75 13.25 3.41421 13.25 3ZM3 13.25C3.41421 13.25 3.75 13.5858 3.75 14V18C3.75 19.2426 4.75736 20.25 6 20.25H9C9.41421 20.25 9.75 20.5858 9.75 21C9.75 21.4142 9.41421 21.75 9 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V14C2.25 13.5858 2.58579 13.25 3 13.25ZM3.27827 2.25C2.73096 2.25 2.28262 2.68472 2.26575 3.23177C2.24887 3.77881 2.66957 4.24034 3.21583 4.27407C3.25742 4.27664 3.29912 4.27664 3.3407 4.27407C3.88697 4.24034 4.30766 3.77881 4.29079 3.23177C4.27391 2.68472 3.82557 2.25 3.27827 2.25ZM6.48064 2.25074C6.89471 2.24005 7.23906 2.56705 7.24975 2.98113C7.30913 5.27951 5.49406 7.19085 3.19568 7.25024C3.124 7.2521 3.0523 7.2521 2.98061 7.25024C2.56654 7.23953 2.23955 6.89518 2.25026 6.4811C2.26097 6.06703 2.60532 5.74003 3.0194 5.75074C3.06524 5.75193 3.11107 5.75193 3.15689 5.75074L3.15692 5.75074C4.62716 5.71276 5.78824 4.4901 5.75026 3.01986C5.73956 2.60579 6.06656 2.26144 6.48064 2.25074ZM10.75 3.00516C10.7526 2.59096 10.4189 2.25309 10.0047 2.2505C9.59047 2.24792 9.2526 2.58161 9.25002 2.99581C9.24528 3.75595 9.11542 4.51011 8.86564 5.22805L8.86534 5.22893C8.27435 6.93446 6.93397 8.27484 5.22844 8.86583L5.22822 8.8659C4.50967 9.11514 3.75516 9.24506 2.99463 9.25051C2.58043 9.25347 2.24705 9.59166 2.25002 10.0059C2.25299 10.4201 2.59117 10.7534 3.00537 10.7505C3.92962 10.7438 4.84655 10.586 5.71978 10.2831C7.8594 9.54159 9.54097 7.86008 10.2825 5.72049C10.5863 4.84717 10.7442 3.92979 10.75 3.00516ZM13.25 14.8936C13.2616 14.8772 13.2868 14.8473 13.3375 14.8045C13.4715 14.6913 13.71 14.5556 14.0703 14.427C14.7843 14.172 15.82 14 17 14C18.18 14 19.2157 14.172 19.9297 14.427C20.29 14.5556 20.5285 14.6913 20.6625 14.8045C20.7132 14.8473 20.7384 14.8772 20.75 14.8936V16.1064C20.7384 16.1229 20.7132 16.1527 20.6625 16.1955C20.5285 16.3087 20.29 16.4444 19.9297 16.5731C19.2157 16.828 18.18 17 17 17C15.82 17 14.7843 16.828 14.0703 16.5731C13.71 16.4444 13.4715 16.3087 13.3375 16.1955C13.2868 16.1527 13.2616 16.1229 13.25 16.1064V14.8936ZM11.75 16.1429V14.8571C11.75 14.3289 12.0518 13.9269 12.3698 13.6585C12.6911 13.3871 13.1117 13.1765 13.5658 13.0143C14.4804 12.6877 15.6947 12.5 17 12.5C18.3053 12.5 19.5196 12.6877 20.4342 13.0143C20.8883 13.1765 21.3089 13.3871 21.6302 13.6585C21.9482 13.9269 22.25 14.3289 22.25 14.8571V16.1429V19.6429C22.25 20.1711 21.9482 20.5731 21.6302 20.8415C21.3089 21.1129 20.8883 21.3235 20.4342 21.4857C19.5196 21.8123 18.3053 22 17 22C15.6947 22 14.4804 21.8123 13.5658 21.4857C13.1117 21.3235 12.6911 21.1129 12.3698 20.8415C12.0518 20.5731 11.75 20.1711 11.75 19.6429V16.1429ZM20.75 17.8623V19.6064C20.7384 19.6228 20.7132 19.6527 20.6625 19.6955C20.5285 19.8087 20.29 19.9444 19.9297 20.073C19.2157 20.328 18.18 20.5 17 20.5C15.82 20.5 14.7843 20.328 14.0703 20.073C13.71 19.9444 13.4715 19.8087 13.3375 19.6955C13.2868 19.6527 13.2616 19.6228 13.25 19.6064V17.8623C13.3528 17.9062 13.4584 17.9473 13.5658 17.9857C14.4804 18.3123 15.6947 18.5 17 18.5C18.3053 18.5 19.5196 18.3123 20.4342 17.9857C20.5416 17.9473 20.6472 17.9062 20.75 17.8623Z" fill="#4B5162" className="fill-light-neutral-1000 dark:fill-dark-neutral-1000">
</path>

      </svg>
    ),
    context: `Harness the unmatched power of artificial intelligence with
    Nimbus. Dive deep into predictive analytics, anticipate market
    trends, and stay steps ahead of your competition. Make informed
    decisions backed by data-driven insights`,
  },
];

export default function Strategies() {
  return (
    <section className="lg:mt-40 mt-9">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-row flex-col lg:items-end lg:gap-20 gap-4">
          <div className="lg:w-[45%] w-full">
            <div className="text-wrapper">Our strategies</div>
            <h3 className="text-light-neutral-1000 dark:text-dark-neutral-1000 font-bold text-[39px] leading-tight mt-6">
              Improve your Continuous
              <br /> Design Data workflow
            </h3>
          </div>
          <div className="lg:flex-1">
            <p className="text-light-neutral-800 leading-tight text-base font-fontInter max-w-[500px] dark:text-dark-neutral-1000">
              Specify helps you gain control of your design system across teams
              and products.
            </p>
            <div className="flex gap-3 mt-6">
              <a className="btn">Get a demo</a>
              <a className="btn-border">Research</a>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-start lg:gap-20 gap-4 lg:mt-20 mt-10">
          <div className="lg:w-[45%] w-full">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card-text lg:mb-9 mb-6 lg:px-5 px-3 py-4"
                >
                  <div className="flex items-center gap-2 mb-4 dark:text-dark-neutral-1000">
                    {item.icon}
                    <b>{item.title}</b>
                  </div>
                  <div className="card-text__context">
                    {item.context}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:flex-1 lg:w-auto w-full">
            <div className="aspect-[576/524] w-full bg-chart bg-no-repeat bg-cover relative flex justify-center items-center">
                <div className="text-wrapper rounded-[25px] relative text-light-neutral-1000 lg:text-2xl text-sm font-medium font-fontInter bg-light-neutral-0 py-2 pl-10 pr-5 bg-[12px] bg-[length:22px]">
                    <div className='aura-1 rounded-[30px] lg:block hidden'></div>
                    <div className='aura-circle circle-1 lg:block hidden'></div>
                    <div className='aura-circle circle-2 lg:block hidden'></div>
                    <div className='aura-circle circle-3 lg:block hidden'></div>
                    <p className='relative z-20'>Connect & streamline</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
