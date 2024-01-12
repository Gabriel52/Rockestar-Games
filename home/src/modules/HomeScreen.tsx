import { FeaturedGames } from "@src/components/FeaturedGames";
import { Slider } from "@src/components/Sliders";

export function HomeScreen() {
    return (
      <>
        <Slider />
        <div className="px-36">
          <FeaturedGames />
        </div>
      </>
    );
}