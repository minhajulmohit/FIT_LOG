"use client";
import { TWorkout } from "@/types";
import { createContext, useState } from "react";
type TWorkoutContext = {
  todaysWorkout: TWorkout[];
  setTodaysWorkout: React.Dispatch<React.SetStateAction<TWorkout[]>>;
  savedWorkout: TWorkout[];
  setSavedWorkout: React.Dispatch<React.SetStateAction<TWorkout[]>>;
};
const workoutContext = createContext<TWorkoutContext>({
  todaysWorkout: [],
  setTodaysWorkout: () => {},
  savedWorkout: [],
  setSavedWorkout: () => {},
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [todaysWorkout, setTodaysWorkout] = useState<TWorkout[]>([]);
  const [savedWorkout, setSavedWorkout] = useState<TWorkout[]>([]);
  const value = {
    todaysWorkout,
    setTodaysWorkout,
    savedWorkout,
    setSavedWorkout,
  };
  return (
    <workoutContext.Provider value={value}>{children}</workoutContext.Provider>
  );
};

export default WorkoutProvider;
