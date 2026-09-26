"use client";

import { TWorkout } from "@/types";
import Image from "next/image";
import { Clock3, Flame, Star, Check } from "lucide-react";
import { useContext } from "react";
import { workoutContext } from "@/app/context/workoutprovider";
import Link from "next/link";
import { toast } from "react-toastify";

const TodaysWorkoutCard = ({ workout }: { workout: TWorkout }) => {
  const { setTodaysWorkout, doneWorkoutIds, setDoneWorkoutIds } =
    useContext(workoutContext);

  const isDone = doneWorkoutIds.includes(workout.id);

  const handleRemove = () => {
    toast(`${workout.name} removed from today's plan`);

    setTodaysWorkout((prev) =>
      prev.filter((w: TWorkout) => w.id !== workout.id),
    );

    // Remove from completed list too
    setDoneWorkoutIds((prev) => prev.filter((id) => id !== workout.id));
  };

  const handleMarkAsDone = () => {
    if (isDone) {
      toast.info(`${workout.name} is already marked as done`);
      return;
    }

    setDoneWorkoutIds((prev) => [...prev, workout.id]);

    toast.success(`${workout.name} marked as done`);
  };

  return (
    <div
      className={
        "p-4 sm:p-5 bg-[#0d121f] border border-slate-800 rounded-2xl text-slate-400 flex flex-col gap-5 md:flex-row md:justify-between md:items-center"
      }
    >
      <div className="flex gap-4 min-w-0">
        <Image
          src={workout.image}
          alt={workout.name}
          height={250}
          width={500}
          className="w-28 h-20 sm:w-36 sm:h-24 md:w-45 md:h-25 rounded-2xl object-cover shrink-0"
        />

        <div className="grid grid-cols-1 gap-1 min-w-0">
          <h4
            className={`text-white font-oswald font-bold uppercase text-lg sm:text-xl truncate`}
          >
            {workout.name}
          </h4>

          <small className="truncate">{workout.equipment}</small>

          <small className="flex flex-wrap gap-x-3 gap-y-1">
            <span className="flex gap-2 items-center">
              <Clock3 size={15} className="text-[#ccff00]" />
              {workout.duration} min
            </span>

            <span className="flex gap-2 items-center">
              <Flame size={15} className="text-[#ccff00]" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex gap-2 items-center">
              <Star size={15} className="text-[#ccff00]" />
              {workout.rating}
            </span>
          </small>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center md:justify-center shrink-0">
        <Link href={`/${workout.id}`}>
          <button className="border border-slate-700 px-4 py-1 rounded-3xl text-white whitespace-nowrap">
            View Details
          </button>
        </Link>

        <button
          onClick={handleMarkAsDone}
          disabled={isDone}
          className={`rounded-3xl py-1 px-4 font-semibold whitespace-nowrap flex items-center gap-1 ${
            isDone
              ? "bg-slate-700 text-slate-300 cursor-not-allowed"
              : "bg-[#ccff00] text-black"
          }`}
        >
          <Check size={16} />

          {isDone ? "Done" : "Mark as Done"}
        </button>

        <button
          onClick={handleRemove}
          className="text-white px-2"
          aria-label={`Remove ${workout.name}`}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TodaysWorkoutCard;
