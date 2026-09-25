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
  const handleAddTodaysWorkoutBtn = () => {
    if (isAlreadyAdded) {
      toast.error(`${workoutDetails.name} is already in today's plan`);
      return;
    }
    setTodaysWorkout([...todaysWorkout, workoutDetails]);

    toast.success(`${workoutDetails.name} added to today's plan`);
  };

  return (
    <button
      className="bg-[#ccff00] text-black font-semibold py-2 px-4 rounded-[10px] flex items-center gap-2 justify-center"
      onClick={() => handleAddTodaysWorkoutBtn()}
    >
      <LuCalendarPlus size={18} />
      Add to today&apos;s plan
    </button>
  );
};

export default AddTodaysWorkoutBtn;
