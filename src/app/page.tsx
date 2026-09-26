import Hero from "@/components/home/hero";
import LibrarySkeleton from "@/components/home/libraryskeleton";
import TheLibrary from "@/components/home/workoutlibrary";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <div id="library" className="scroll-mt-10">
        <Suspense fallback={<LibrarySkeleton></LibrarySkeleton>}>
          <TheLibrary></TheLibrary>
        </Suspense>
      </div>
    </div>
  );
}
