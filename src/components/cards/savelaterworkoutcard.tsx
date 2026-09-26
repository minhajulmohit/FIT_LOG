"use client";
import { TWorkout } from "@/types";
import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { workoutContext } from "@/app/context/workoutprovider";
import { toast } from "react-toastify";
const SaveLaterWorkoutCard = ({ workout }: { workout: TWorkout }) => {
  const { setSavedWorkout } = useContext(workoutContext);
  const handleRemove = () => {
    toast(`${workout.name} removed from saved`);
    interface RemoveValue {
      (prev: TWorkout[]): TWorkout[];
    }
    const removeValue: RemoveValue = (prev) =>
      prev.filter((w: TWorkout) => w.id !== workout.id);
    setSavedWorkout(removeValue);
  };

  return (
    <div className="p-4 sm:p-5 bg-[#0d121f] border border-slate-800 rounded-2xl text-slate-400 flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
      <div className="flex gap-4 min-w-0">
        <Image
          src={workout.image}
          alt={workout.name}
          height={250}
          width={500}
          className="w-28 h-20 sm:w-36 sm:h-24 md:w-45 md:h-25 rounded-2xl object-cover shrink-0"
        />

        <div className="grid grid-cols-1 gap-1 min-w-0">
          <h4 className="text-white font-oswald font-bold uppercase text-lg sm:text-xl truncate">
            {workout.name}
          </h4>

          <small className="truncate">{workout.equipment}</small>

          <small className="flex flex-wrap gap-x-3 gap-y-1">
            <span className="flex gap-2 items-center justify-center">
              <Clock3 size={15} className="text-[#ccff00]" />
              {workout.duration} min
            </span>

            <span className="flex gap-2 items-center justify-center">
              <Flame size={15} className="text-[#ccff00]" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex gap-2 items-center justify-center">
              <Star size={15} className="text-[#ccff00]" />
              {workout.rating}
            </span>
          </small>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-start md:justify-center shrink-0">
        <Link href={`/${workout.id}`}>
          <button className="border border-slate-700 px-4 py-1 rounded-3xl text-white whitespace-nowrap">
            View Details
          </button>
        </Link>

        <button onClick={() => handleRemove()} className="text-white px-2">
          ✕
        </button>
      </div>
    </div>
  );
};

export default SaveLaterWorkoutCard;
