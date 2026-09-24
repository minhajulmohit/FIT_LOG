import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
const Links = (
  <>
    <li>Workouts</li>
    <li>My Plan</li>
  </>
);
const NavigationBer = () => {
  return (
    <nav className="navbar bg-[#0f1115] shadow-sm border-b-2">
      <div className="flex justify-between container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-[#0f1115] lg:hidden p-2"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-4 gap-1.5 shadow text-slate-400 bg-black "
            >
              {Links}
            </ul>
          </div>
          <Image className="w-5 md:w-8" src={Logo} alt="Logo" />
          <h3 className="font-oswald text-xl md:text-2xl lg:text-3xl font-bold text-white">
            FITLOG
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-400 gap-5">
            {Links}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <Link href={"/myPlan"} className="text-white">
            <p className="flex flex-row items-center justify-center gap-2">
              Plan
              <span className="bg-[#C2F800] rounded-full w-6 h-6 flex justify-center items-center text-black">
                0
              </span>
            </p>
          </Link>
          <Link href={"/myPlan"} className=" text-slate-400">
            <p className="flex flex-row items-center justify-center gap-2">
              Saved{" "}
              <span className="bg-none border border-slate-400 rounded-full w-6 h-6 flex justify-center items-center text-white">
                0
              </span>
            </p> 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBer;
