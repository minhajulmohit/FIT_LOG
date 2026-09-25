import GetAllWorkout from "@/lib/workouts";
import WorkoutLibraryCard from "../cards/workoutlibrarycard";
import { TWorkout } from "@/types";

const TheLibrary = async () => {
  const workouts = await GetAllWorkout();

  return (
    <div className="container mx-auto">
      <div className="mb-5">
        <h2 className="text-white font-bold text-4xl font-oswald ">
          THE LIBRARY
        </h2>
        <p className="text-slate-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        {workouts.map((workout: TWorkout) => (
          <div key={workout.id}>
            <WorkoutLibraryCard workout={workout}></WorkoutLibraryCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheLibrary;
