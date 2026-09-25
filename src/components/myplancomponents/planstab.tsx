"use client";

import { workoutContext } from "@/app/context/workoutprovider";
import { useContext } from "react";
import TodaysPlan from "./todaysplan";
import SaveLaterPlan from "./savelater";

const PlansTab = () => {
  const { activeTab, setActiveTab } = useContext(workoutContext);
  return (
    <div>
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

      {activeTab === "today" ? <TodaysPlan /> : <SaveLaterPlan />}
    </div>
  );
};

export default PlansTab;
