"use client";
import React, { useContext } from "react";
import PlansTab from "./planstab";
import { workoutContext } from "@/app/context/workoutprovider";

const MyPlanLayout = ({ children }: { children: React.ReactNode }) => {
  const { todaysWorkout } = useContext(workoutContext);

  const currentWorkouts = todaysWorkout;
  const totalExercises = currentWorkouts.length;
  const totalTime = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );
  return (
    <div className="container mx-auto my-10">
      <h1
        className="font-oswald text-4xl font-bold text-white mb-1
      "
      >
        MY PLAN
      </h1>
      <p className="text-slate-400 mb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="border border-slate-800 p-8 rounded-2xl bg-[#0d121f] mb-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="border-r border-slate-700">
            <p className="text-slate-400">Exercises</p>
            <h1 className="font-oswald text-5xl text-[#ccff00]">
              {totalExercises}
            </h1>
          </div>
          <div className="border-r border-slate-700">
            <p className="text-slate-400">Minutes</p>
            <h1 className="font-oswald text-5xl text-white">{totalTime}</h1>
          </div>
          <div>
            <p className="text-slate-400">Calories</p>
            <h1 className="font-oswald text-5xl text-white">{totalCalories}</h1>
          </div>
        </div>
      </div>

      <div>
        <PlansTab></PlansTab>
      </div>

      {children}
    </div>
  );
};

export default MyPlanLayout;
