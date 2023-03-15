import { Coffees } from "./Coffees";
import { Presentation } from "./Presentation";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <Presentation />
      <Coffees />
    </div>
  );
}
