import Hero from "@/components/home/hero";
import TheLibrary from "@/components/home/workoutlibrary";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <div id="library" className="scroll-mt-10">
        <Suspense fallback="Workout Library is Loading...">
          <TheLibrary></TheLibrary>
        </Suspense>
      
      </div>
    </div>
  );
}
