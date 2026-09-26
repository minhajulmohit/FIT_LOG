import { TWorkout } from "@/types";
import TodaysWorkoutCard from "../cards/todaysworkoutcard";
import Link from "next/link";

const TodaysPlan = ({ workouts }: { workouts: TWorkout[] }) => {
  if (workouts.length === 0) {
    return (
      <div className="w-full border border-dashed border-slate-700 rounded-2xl py-20 text-center mt-5 flex flex-col items-center gap-2 ">
        <p className="text-white uppercase font-oswald text-2xl">
          Nothing here yet
        </p>
        <p className="text-slate-400">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href={"/"}
          className="text-black font-semibold py-2 px-4 rounded-3xl bg-[#ccff00]"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-4">
      {workouts.map((workout: TWorkout) => (
        <TodaysWorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default TodaysPlan;
