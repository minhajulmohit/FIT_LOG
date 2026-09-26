"use client";
import { workoutContext } from "@/app/context/workoutprovider";
import { TWorkout } from "@/types";
import { useContext } from "react";
import { LuCalendarPlus } from "react-icons/lu";
import { toast } from "react-toastify";

const AddTodaysWorkoutBtn = ({
  workoutDetails,
}: {
  workoutDetails: TWorkout;
}) => {
  const { todaysWorkout, setTodaysWorkout } = useContext(workoutContext);
  const isAlreadyAdded = todaysWorkout.some((w) => w.id === workoutDetails.id);

  const isPlanFull = todaysWorkout.length >= 5;
  const handleAddTodaysWorkoutBtn = () => {
    if (isAlreadyAdded) {
      toast.error(`${workoutDetails.name} is already in today's plan`);
      return;
    }
    if (isPlanFull) {
      toast.error("Today's plan is full. You can add up to 5 workouts.");
      return;
    }
    setTodaysWorkout((prev) => [...prev, workoutDetails]);
    toast.success(`${workoutDetails.name} added to today's plan`);
  };

  return (
    <button
      className={`font-semibold py-2 px-4 rounded-[10px] flex items-center gap-2 justify-center ${
        isPlanFull
          ? "bg-slate-700 text-slate-400 cursor-not-allowed"
          : "bg-[#ccff00] text-black"
      }`}
      onClick={handleAddTodaysWorkoutBtn}
      disabled={isPlanFull}
    >
      <LuCalendarPlus size={18} />

      {isPlanFull ? "Plan Full" : "Add to today's plan"}
    </button>
  );
};

export default AddTodaysWorkoutBtn;
