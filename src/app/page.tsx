import Hero from "@/components/home/hero";
import TheLibrary from "@/components/home/workoutlibrary";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Suspense fallback="Workout Library is Loading...">
        <TheLibrary></TheLibrary>
      </Suspense>
    </div>
  );
}
