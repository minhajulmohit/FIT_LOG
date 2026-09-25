import { TWorkout } from "@/types";
import Image from "next/image";

type TWorkoutDetailsProps = { workoutDetails: TWorkout };

const WorkoutDetailsCard = ({ workoutDetails }: TWorkoutDetailsProps) => {
  return (
    <div className="container mx-auto grid grid-cols-2 mt-10 gap-10">
      <Image
        src={workoutDetails.image}
        alt={workoutDetails.name}
        width={700}
        height={350}
        className="h-full w-full rounded-2xl"
      ></Image>
      <div className="text-slate-400 flex flex-col gap-3">
        <h1 className="text-white uppercase font-oswald text-3xl font-bold">
          {workoutDetails.name}
        </h1>
        <p>{workoutDetails.description}</p>
        <p className="flex gap-3">
          {workoutDetails.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-semibold text-black"
            >
              {muscle}
            </span>
          ))}
        </p>
        <div
          className="overflow-x-auto rounded-box border border-base-content/5 bg-[#151922]
        mb-3"
        >
          <table className="table border border-slate-800">
            <tbody>
              <tr className="flex justify-between border-b border-slate-800">
                <td className="uppercase font-semibold text-semibold">
                  Equipment
                </td>

                <td className="text-white">{workoutDetails.equipment}</td>
              </tr>
              <tr className="flex justify-between border-b border-slate-800">
                <td className="uppercase font-semibold text-semibold">
                  Difficulty
                </td>

                <td className="text-white">{workoutDetails.difficulty}</td>
              </tr>
              <tr className="flex justify-between border-b border-slate-800">
                <td className="uppercase font-semibold text-semibold">Sets</td>

                <td className="text-white">{workoutDetails.sets}</td>
              </tr>
              <tr className="flex justify-between border-b border-slate-800">
                <td className="uppercase font-semibold text-semibold">Reps</td>

                <td className="text-white">{workoutDetails.reps}</td>
              </tr>
              <tr className="flex justify-between border-b border-slate-800">
                <td className="uppercase font-semibold text-semibold">
                  Duration
                </td>

                <td className="text-white">{workoutDetails.duration}</td>
              </tr>
              <tr className="flex justify-between border-b border-slate-800">
                <td className="uppercase font-semibold text-semibold">
                  Calories
                </td>

                <td className="text-white">{workoutDetails.caloriesBurned}</td>
              </tr>
              <tr className="flex justify-between">
                <td className="uppercase font-semibold text-semibold">
                  Rating
                </td>

                <td className="text-white">{workoutDetails.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="text-white font-bold">INSTRUCTIONS</h5>
        <ol className="list-decimal pl-4">
          {workoutDetails.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ol>
        <div>
          <button>ww</button>

          <button>ww</button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsCard;
