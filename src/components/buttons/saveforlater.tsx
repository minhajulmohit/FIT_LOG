"use client";
import { workoutContext } from "@/app/context/workoutprovider";
import { TWorkout } from "@/types";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SaveForLaterBtn = ({ workoutDetails }: { workoutDetails: TWorkout }) => {
  const { savedWorkout, setSavedWorkout } = useContext(workoutContext);
  const isAlreadySaved = savedWorkout.some((w) => w.id === workoutDetails.id);
  const handleSavedLaterWorkoutBtn = () => {
    if (isAlreadySaved) {
      toast.error(`${workoutDetails.name} is already in saved plan`);
      return;
    }
    setSavedWorkout([...savedWorkout, workoutDetails]);

    toast.success(`${workoutDetails.name} added to saved plan`);
  };

  return (
    <button
      className="text-white font-semibold py-2 px-4 rounded-[10px] flex items-center gap-2 border border-slate-700 justify-center"
      onClick={() => handleSavedLaterWorkoutBtn()}
    >
      <FaRegBookmark size={18} />
      Save for later
    </button>
  );
};

export default SaveForLaterBtn;
