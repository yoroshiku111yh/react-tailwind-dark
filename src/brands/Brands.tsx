import logo1 from "../assets/images/logo-brands-1.png";
import logo2 from "../assets/images/logo-brands-2.png";
import logo3 from "../assets/images/logo-brands-3.png";
import logo4 from "../assets/images/logo-brands-4.png";

export default function Brands() {
  const listBrands = [logo1, logo2, logo3, logo4, logo2, logo1];
  return (
    <div className="container mx-auto px-4 lg:mt-[100px] mt-9">
      <h3 className="text-light-neutral-800 dark:text-dark-neutral-1000 font-fontInter text-base leading-tight text-center">
        160,000+ customers in over 120 countries grow their businesses with
        Nimbus
      </h3>
      <div className="mt-8 text-center items-center gap-7">
        {listBrands.map((item, index) => {
          return (
            <img
              className=" inline-block w-auto max-w-full object-contain mx-3 my-2"
              src={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
