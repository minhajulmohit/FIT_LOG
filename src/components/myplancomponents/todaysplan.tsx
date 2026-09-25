"use client";
import { workoutContext } from "@/app/context/workoutprovider";
import { TWorkout } from "@/types";
import { useContext } from "react";
import TodaysWorkoutCard from "../cards/todaysworkoutcard";
import Link from "next/link";

const TodaysPlan = () => {
  const { todaysWorkout } = useContext(workoutContext);

  if (todaysWorkout.length === 0) {
    return (
      <div className="w-full border border-dashed border-slate-700 rounded-2xl py-20 text-center mt-5 flex flex-col items-center gap-2 ">
        <p className="text-white uppercase font-oswald text-2xl">
          Nothing here yet
        </p>
        <p className="text-slate-400">
          Browse the library and a lift to get today moving.
        </p>
        <Link
          href={"#library"}
          className="text-black font-semibold py-2 px-4 rounded-3xl bg-[#ccff00]"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-4">
      {todaysWorkout.map((workout: TWorkout) => (
        <TodaysWorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default TodaysPlan;
