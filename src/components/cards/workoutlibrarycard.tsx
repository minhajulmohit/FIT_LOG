import { TWorkout } from "@/types";
import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import Link from "next/link";
type WorkoutCardProps = {
  workout: TWorkout;
};

export default function WorkoutLibraryCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/${workout.id}`}>
      <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-[#15171c] text-slate-300 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ">
        <Image
          width={500}
          height={250}
          src={workout.image}
          alt={workout.name}
          className="h-54 w-full object-cover"
        />

        <div className="p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold uppercase text-white">
            {workout.name}
          </h3>

          <small className="text-sm text-slate-400">{workout.equipment}</small>

          <div className="my-4 border-t border-slate-800"></div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <p className="flex items-center gap-1">
              <Clock3 size={14} />
              {workout.duration} min
            </p>

            <p className="flex items-center gap-1">
              <Flame size={14} />
              {workout.caloriesBurned} kcal
            </p>

            <p className="flex items-center gap-1">
              <Star size={14} />
              {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
