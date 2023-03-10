import { Coffee } from "./Coffee";
import { CoffeeContainer } from "./styles";
import { coffeeList } from "../../../data/coffeeList";

export function Coffees() {
  return (
    <CoffeeContainer>
      <h1>Nossos Cafés</h1>
      <div>
        {coffeeList.map(coffee => {
          return (
            <Coffee
              category={coffee.category}
              description={coffee.description}
              id={coffee.id}
              price={coffee.price}
              title={coffee.title}
              urlImage={coffee.urlImage}
            />
          );
        })}
      </div>
    </CoffeeContainer>
  );
}
