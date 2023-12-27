import "../assets/css/layouts/header.css";
import "../assets/css/components/dropdownNav.css";
import "../assets/css/components/common.css";
import { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import { useTheme } from "../App";


interface TypeLink {
    href: string;
    text: string;
  }
  
  interface TypeMenuDropdown {
    list: TypeLink[];
    label: string;
  }

const listLinksDummy: TypeLink[] = [
  {
    text: "English",
    href: "/",
  },
  {
    text: "Vietnamese",
    href: "/",
  },
];

export default function Header() {
  return (
    <header>
      <div className="container px-4 mx-auto">
        <SupportNav />
        <NavHeader />
        <hr className="border-1 border-light-neutral-300" />
      </div>
    </header>
  );
}

function NavHeader() {
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center my-5">
      <a href="/" id="logo" className="text-base text-neutral-800 font-medium">
        <svg
          width={116}
          height={32}
          viewBox="0 0 116 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-auto max-w-full fill-light-neutral-1000 dark:fill-light-neutral-0"
        >
          <path
            d="M12.9953 5.67993C12.9953 5.10915 13.4612 4.64644 14.0358 4.64644H15.2799C15.8545 4.64644 16.3204 5.10915 16.3204 5.67993V22.699C16.3204 23.2697 15.8545 23.7325 15.2799 23.7325H13.453C13.114 23.7325 12.7963 23.5684 12.6015 23.2929L4.29872 11.549C4.00663 11.1359 3.35272 11.3412 3.35272 11.846V22.699C3.35272 23.2697 2.88688 23.7325 2.31224 23.7325H1.04045C0.46581 23.7325 -3.05176e-05 23.2697 -3.05176e-05 22.699V5.67993C-3.05176e-05 5.10915 0.465811 4.64644 1.04045 4.64644H2.78356C3.12293 4.64644 3.44097 4.81083 3.6357 5.0869L12.049 17.0145C12.3408 17.4282 12.9953 17.2231 12.9953 16.718V5.67993Z"
            //fill="#1C1F25"
          />
          <path
            d="M21.601 23.7325C21.0263 23.7325 20.5605 23.2697 20.5605 22.699V11.6477C20.5605 11.0769 21.0263 10.6142 21.601 10.6142H22.6234C23.198 10.6142 23.6638 11.0769 23.6638 11.6477V22.699C23.6638 23.2697 23.198 23.7325 22.6234 23.7325H21.601Z"
            //fill="#1C1F25"
          />
          <path
            d="M44.2088 10.426C47.1736 10.426 48.9469 12.2271 48.9469 16.1518V22.699C48.9469 23.2697 48.4811 23.7325 47.9065 23.7325H46.8841C46.3094 23.7325 45.8436 23.2697 45.8436 22.699V16.9045C45.8436 14.5389 45.04 13.1411 43.2112 13.1411C41.4656 13.1411 40.0524 14.6196 40.0524 17.2002V22.699C40.0524 23.2697 39.5866 23.7325 39.012 23.7325H37.9896C37.4149 23.7325 36.9491 23.2697 36.9491 22.699V16.9045C36.9491 14.5389 36.0901 13.1411 34.2613 13.1411C32.4049 13.1411 31.0194 14.6196 31.0194 17.2002V22.699C31.0194 23.2697 30.5536 23.7325 29.9789 23.7325H28.9565C28.3819 23.7325 27.916 23.2697 27.916 22.699V11.6477C27.916 11.0769 28.3819 10.6142 28.9565 10.6142H30.5264C30.7999 10.6142 31.0227 10.8322 31.0268 11.1038C31.0338 11.5647 31.6501 11.7981 32.0209 11.5211C32.9838 10.8016 34.1213 10.426 35.2588 10.426C36.8578 10.426 38.139 10.9603 38.9728 12.0827C39.1998 12.3883 39.5516 12.608 39.9044 12.4614C41.0674 11.978 42.6333 10.426 44.2088 10.426Z"
            //fill="#1C1F25"
          />
          <path
            d="M60.2094 10.426C63.9501 10.426 66.7487 13.2755 66.7487 17.2271C66.7487 21.2862 63.9501 23.9475 60.1817 23.9475C58.277 23.9475 56.8123 23.2538 55.815 21.9993C55.8079 21.9904 55.7971 21.9851 55.7856 21.9851C55.765 21.9851 55.7483 22.0017 55.7483 22.0222V22.8588C55.7483 23.3413 55.3545 23.7325 54.8688 23.7325H53.824C53.2493 23.7325 52.7835 23.2697 52.7835 22.699V4.981C52.7835 4.41022 53.2493 3.94751 53.824 3.94751H54.8499C55.4231 3.94751 55.8884 4.40812 55.8903 4.97756L55.9054 9.4774C55.9086 10.4283 57.2742 11.0275 58.1839 10.7314C58.8037 10.5297 59.4834 10.426 60.2094 10.426ZM59.7107 21.2056C61.9828 21.2056 63.5899 19.5658 63.5899 17.254C63.5899 14.7271 61.8442 13.1411 59.683 13.1411C57.3554 13.1411 55.7483 14.9153 55.7483 17.254C55.7483 19.6196 57.494 21.2056 59.7107 21.2056Z"
            //fill="#1C1F25"
          />
          <path
            d="M78.9708 11.6477C78.9708 11.0769 79.4367 10.6142 80.0113 10.6142H81.0337C81.6083 10.6142 82.0742 11.0769 82.0742 11.6477V22.699C82.0742 23.2697 81.6083 23.7325 81.0337 23.7325H79.4362C79.1792 23.7325 78.9708 23.5255 78.9708 23.2702C78.9708 22.84 78.3971 22.6149 78.0501 22.8723C77.0981 23.5781 75.9577 23.9475 74.7868 23.9475C71.7943 23.9475 69.7161 22.2155 69.7161 18.598V11.6477C69.7161 11.0769 70.182 10.6142 70.7566 10.6142H71.779C72.3536 10.6142 72.8195 11.0769 72.8195 11.6477V17.7916C72.8195 20.3991 73.6507 21.2056 75.5072 21.2056C77.3083 21.2056 78.9708 19.7271 78.9708 16.9045V11.6477Z"
            //fill="#1C1F25"
          />
          <path
            d="M90.3348 23.9475C88.5089 23.9475 86.9144 23.4612 85.6155 22.5978C85.1755 22.3053 85.1018 21.7106 85.4003 21.2762L85.7379 20.785C86.0995 20.2587 86.8445 20.1929 87.387 20.5331C88.2164 21.0531 89.1487 21.3131 90.3348 21.3131C91.5263 21.3131 92.219 20.8024 92.219 20.0228C92.219 19.3507 91.3324 19.0282 89.559 18.4368C87.3423 17.6841 85.4304 16.7163 85.4304 14.1357C85.4304 11.9851 87.4254 10.426 90.1963 10.426C91.621 10.426 92.9313 10.7403 94.1906 11.5222C94.6455 11.8047 94.7385 12.4068 94.4456 12.8533L94.0842 13.4043C93.7322 13.941 92.9792 14.0237 92.4217 13.7017C91.6123 13.2342 90.7729 13.0335 90.03 13.0335C89.4205 13.0335 88.5615 13.3561 88.5615 14.1626C88.5615 14.8077 89.3927 15.2647 90.6951 15.7486C93.5768 16.8507 95.3778 17.3615 95.3778 19.969C95.3778 22.1733 93.7707 23.9475 90.3348 23.9475Z"
            //fill="#1C1F25"
          />
          <path
            d="M107.264 8.25806C108.1 12.3956 111.142 15.6276 115.036 16.5161C111.142 17.4046 108.1 20.6367 107.264 24.7742C106.427 20.6367 103.385 17.4046 99.4909 16.5161C103.385 15.6276 106.427 12.3956 107.264 8.25806Z"
            fill="#387FF5"
          />
        </svg>
      </a>
      <div
        className="block lg:hidden"
        onClick={() => {
          setToggleHamburger(!toggleHamburger);
        }}
      >
        <Hamburger isToggle={toggleHamburger} />
      </div>
      <div
        className={`lg:flex-1 lg:ml-[7%] lg:flex lg:relative fixed px-4 lg:px-0 lg:top-0 lg:pt-0 pt-4 top-[126px] bottom-0 left-0 right-0 bg-light-neutral-0 dark:bg-dark-neutral-0 ${
          toggleHamburger ? "block" : "hidden"
        }`}
      >
        <div className="lg:flex-row lg:max-w-none container flex flex-col-reverse mx-auto px-0 lg:justify-between justify-end items-center">
          <div className="flex lg:items-center lg:gap-8 lg:flex-row flex-col gap-2 w-full lg:w-auto ">
            <HeaderMenuDropdown label="Features" list={listLinksDummy} />
            <HeaderMenuDropdown label="Case Studies" list={listLinksDummy} />
            <a
              href="/"
              className="text-base text-neutral-800 dark:text-dark-neutral-800 lg:font-medium font-bold"
            >
              Pricing
            </a>
            <a
              href="/"
              className="text-base text-neutral-800 dark:text-dark-neutral-800 lg:font-medium font-bold"
            >
              Applications
            </a>
          </div>
          <div className="flex justify-end lg:items-center gap-3 lg:flex-row flex-col w-full lg:w-auto lg:mb-0 mb-6">
            <a href="/" className="btn-border ">
              Get a demo
            </a>
            <a href="/" className="btn">
              Start your free trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportNav() {
  const {theme, toggleTheme} = useTheme();
  console.log(theme);
  return (
    <div className="support-nav flex flex-row justify-between items-center mt-6 ">
      <div className="lg:flex lg:gap-5 gap-2 lg:justify-start lg:items-center">
        <HeaderMenuDropDownSupport label="English" list={listLinksDummy} />
      </div>
      <div className="lg:flex lg:gap-5 gap-2 lg:items-center lg:justify-end ">
        <SwitchMode theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </div>
  );
}


const Hamburger = ({ isToggle = false }) => {
  if (!isToggle) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="w-9 h-9 stroke-light-neutral-1000 dark:stroke-dark-neutral-1000"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9 stroke-light-neutral-1000 dark:stroke-dark-neutral-1000"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    );
  }
};


const HeaderMenuDropDownSupport = (props: TypeMenuDropdown) => {
  const { label, list } = props;
  const { ref, toggle, setToggle } = useClickOutSide();
  const listLinks = list.map((item, index) => {
    return (
      <a href={item.href} key={index} className="dropdown-nav-link">
        {item.text}
      </a>
    );
  });
  const handleClick = () => {
    if (window.innerWidth <= 1024) {
      setToggle(!toggle);
    }
  };
  return (
    <div className="relative group" ref={ref} onClick={handleClick}>
      <p className=" inline-flextext-sm dropdown-nav-toggle ">
        {label}
        <svg
          className="group-hover:rotate-180 w-4 h-4 text-neutral-600 dark:text-dark-neutral-800"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </p>
      <div className={`dropdown-nav-menu gap-2 ${toggle ? "flex opacity-100" : ""}`}>
        {listLinks}
      </div>
    </div>
  );
};

const HeaderMenuDropdown = (props: TypeMenuDropdown) => {
  const { label, list } = props;
  const { ref, toggle, setToggle } = useClickOutSide();
  const listLinks = list.map((item, index) => {
    return (
      <a
        href={item.href}
        key={index}
        className="dropdown-nav-link text-base text-neutral-800 lg:dark:text-neutral-800 dark:text-dark-neutral-800 font-medium"
      >
        {item.text}
      </a>
    );
  });
  const handleClick = () => {
    if (window.innerWidth <= 1024) {
      setToggle(!toggle);
    }
  };
  return (
    <div className="relative group" ref={ref} onClick={handleClick}>
      <p className="inline-flex text-base text-neutral-800 dark:text-dark-neutral-800 dropdown-nav-toggle lg:font-medium font-bold">
        {label}
        <svg
          className="group-hover:rotate-180 w-4 h-4 text-neutral-800 dark:text-dark-neutral-800"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </p>
      <div className={`dropdown-nav-menu ${toggle ? "-mb-show" : ""}`}>
        {listLinks}
      </div>
    </div>
  );
};


const SwitchMode = (props : {theme : string, toggleTheme:() => void}) => {
    const {theme, toggleTheme} = props;
    return (
      <div className="relative inline-block">
        <input
          checked={theme === "dark" && true}
          onChange={toggleTheme}
          type="checkbox"
          id="hs-small-switch-with-icons"
          className="peer relative w-14 h-6 p-px bg-gray-200 border-gray-300 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600
  
    before:inline-block before:w-5 before:h-5 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-[158%] before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
        />
        <label htmlFor="hs-small-switch-with-icons" className="sr-only">
          switch
        </label>
        <span className="peer-checked:text-white text-gray-500 w-5 h-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </span>
        <span className="peer-checked:text-blue-600 text-gray-500 w-5 h-5 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </span>
      </div>
    );
  };