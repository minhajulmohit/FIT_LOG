"use client";
import { TWorkout } from "@/types";
import { createContext, useState } from "react";
type TWorkoutContext = {
  todaysWorkout: TWorkout[];
  setTodaysWorkout: React.Dispatch<React.SetStateAction<TWorkout[]>>;
  savedWorkout: TWorkout[];
  setSavedWorkout: React.Dispatch<React.SetStateAction<TWorkout[]>>;
  activeTab: "today" | "saved";
  setActiveTab: React.Dispatch<React.SetStateAction<"today" | "saved">>;
};
export const workoutContext = createContext<TWorkoutContext>({
  todaysWorkout: [],
  setTodaysWorkout: () => {},
  savedWorkout: [],
  setSavedWorkout: () => {},
  activeTab: "today",
  setActiveTab: () => {},
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [todaysWorkout, setTodaysWorkout] = useState<TWorkout[]>([]);
  const [savedWorkout, setSavedWorkout] = useState<TWorkout[]>([]);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const value = {
    todaysWorkout,
    setTodaysWorkout,
    savedWorkout,
    setSavedWorkout,
    activeTab,
    setActiveTab,
  };
  return (
    <workoutContext.Provider value={value}>{children}</workoutContext.Provider>
  );
};

export default WorkoutProvider;
