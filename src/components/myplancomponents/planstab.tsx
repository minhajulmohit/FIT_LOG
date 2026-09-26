"use client";

import { workoutContext } from "@/app/context/workoutprovider";
import { useContext, useState } from "react";
import TodaysPlan from "./todaysplan";
import SaveLaterPlan from "./savelater";

const PlansTab = () => {
  const { activeTab, setActiveTab, todaysWorkout, savedWorkout } =
    useContext(workoutContext);
  const [sortBy, setSortBy] = useState("duration");
  const currentWorkouts = activeTab === "today" ? todaysWorkout : savedWorkout;
  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return b.duration - a.duration;
    }
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="tabs tabs-box bg-[#0d121f] border border-[#252a33] rounded-xl p-1 w-fit">
          <button
            onClick={() => setActiveTab("today")}
            className={`tab h-8 min-h-8 px-4 rounded-lg ${
              activeTab === "today"
                ? "bg-[#222731] text-white font-semibold"
                : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`tab h-8 min-h-8 px-4 rounded-lg ${
              activeTab === "saved"
                ? "bg-[#222731] text-white font-semibold"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 w-20">Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-sm bg-[#0d121f] border border-[#252a33] text-white rounded-lg focus:outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "today" ? (
          <TodaysPlan workouts={sortedWorkouts} />
        ) : (
          <SaveLaterPlan workouts={sortedWorkouts} />
        )}
      </div>
    </>
  );
};

export default PlansTab;
