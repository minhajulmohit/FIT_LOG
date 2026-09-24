import Image from "next/image";
import Logo from "../../../public/logo.png";
const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className=" flex justify-between container mx-auto items-center py-3">
        <div className="flex items-center">
          <Image
            className="w-4 md:w-6 lg:w-7 mr-1"
            src={Logo}
            alt="Footer Logo"
          ></Image>
          <h3 className="font-oswald md:text-xl lg:text-2xl  text-white">
            FITLOG
          </h3>
        </div>
        <p className="text-slate-400 text-[9px] md:text-[18px] lg:text-[20px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>{" "}
    </footer>
  );
};

export default Footer;
