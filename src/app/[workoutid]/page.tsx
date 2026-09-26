import WorkoutDetailsCard from "@/components/cards/detailscard";
import GetAllWorkout from "@/lib/workouts";
import { TWorkout } from "@/types";
import { notFound } from "next/navigation";


type TWorkoutDetailsProps = { params: { workoutid: string } };

const WorkoutDetailsPage = async ({ params }: TWorkoutDetailsProps) => {
  const { workoutid } = await params;
  const allWorkouts = await GetAllWorkout();

  const workoutDetails = allWorkouts.find(
    (workout: TWorkout) => workout.id === Number(workoutid),
  );
  if(!workoutDetails)
  {notFound()}

  return (
    <div>
      <WorkoutDetailsCard workoutDetails={workoutDetails} />
    </div>
  );
};

export default WorkoutDetailsPage;
