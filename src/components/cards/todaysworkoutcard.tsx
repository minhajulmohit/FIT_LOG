"use client";
import { TWorkout } from "@/types";
import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { useContext } from "react";
import { workoutContext } from "@/app/context/workoutprovider";
import Link from "next/link";
const TodaysWorkoutCard = ({ workout }: { workout: TWorkout }) => {
  const { setTodaysWorkout } = useContext(workoutContext);
  const handleRemove = () => {
    const removeValue = (prev: TWorkout[]): TWorkout[] =>
      prev.filter((w: TWorkout) => w.id !== workout.id);
    setTodaysWorkout(removeValue);
  };

  return (
    <div className="p-5 bg-[#0d121f] border border-slate-800 rounded-2xl text-slate-400 flex justify-between items-center">
      <div className="flex gap-4">
        <Image
          src={workout.image}
          alt={workout.name}
          height={250}
          width={500}
          className="w-45 h-25 rounded-2xl object-cover"
        ></Image>
        <div className="grid grid-cols-1 gap-1">
          <h4 className="text-white font-oswald font-bold uppercase text-xl">
            {workout.name}
          </h4>
          <small>{workout.equipment}</small>
          <small className="flex gap-4">
            <span className="flex  gap-2 items-center justify-center">
              <Clock3 size={15} className="text-[#ccff00]"></Clock3>
              {workout.duration} min
            </span>
            <span className="flex  gap-2 items-center justify-center">
              <Flame size={15} className="text-[#ccff00]"></Flame>
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex  gap-2 items-center justify-center">
              <Star size={15} className="text-[#ccff00]"></Star>{" "}
              {workout.rating}
            </span>
          </small>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Link href={`/${workout.id}`}>
          <button className="border border-slate-700 px-4 py-1 rounded-3xl text-white">
            View Details
          </button>
        </Link>
        <button className="bg-[#ccff00] rounded-3xl text-black py-1 px-4 font-semibold">
          ✓ Mark as Done
        </button>
        <button onClick={() => handleRemove()}>✕</button>
      </div>
    </div>
  );
};

export default TodaysWorkoutCard;
