import WorkoutDetailsCard from "@/components/cards/detailscard";
import GetAllWorkout from "@/lib/workouts";
import { TWorkout } from "@/types";


type TWorkoutDetailsProps = { params: { workoutid: string } };

const WorkoutDetailsPage = async ({ params }: TWorkoutDetailsProps) => {
  const { workoutid } = await params;
  const allWorkouts = await GetAllWorkout();

  const workoutDetails = allWorkouts.find(
    (workout: TWorkout) => workout.id === Number(workoutid),
  );

  

  return (
    <div>
      <WorkoutDetailsCard workoutDetails={workoutDetails} />
    </div>
  );
};

export default WorkoutDetailsPage;
