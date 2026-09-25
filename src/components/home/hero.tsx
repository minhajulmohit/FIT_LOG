import Image from "next/image";
import HeroImage from "@/assets/banner.png";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div className="container mx-auto my-15 bg-[#15171d] p-5 md:p-10 rounded-3xl flex flex-col gap-5 md:flex md:flex-row justify-between items-center ">
        <div className="flex flex-col items-start  gap-4 md:gap-8">
          <p className="text-[#c2f800] font-semibold">WORKOUT LIBRARY</p>
          <h1 className="font-oswald text-white font-bold text-4xl md:text-6xl">
            TRAIN WITH INTENT. LOG <br />
            EVERY SET.
          </h1>
          <p className="text-slate-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a href={"#library"}>
            <button className="bg-[#c2f800] font-semibold p-2 rounded-[5px]">
              BROWSE WORKOUTS
            </button>
          </a>
        </div>
        <Image src={HeroImage} alt="Hero image" priority></Image>
      </div>
    </div>
  );
};

export default Hero;
