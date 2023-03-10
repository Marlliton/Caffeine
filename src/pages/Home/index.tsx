import { Coffees } from "./Coffees";
import { Presentation } from "./Presentation";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Presentation />
      <Coffees />
    </HomeContainer>
  )
}