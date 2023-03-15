import { Coffee } from "./Coffee";
import { coffeeList } from "../../../data/coffeeList";

export function Coffees() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-baloo text-xl md:text-4xl font-bold pb-4">Nossos Cafés</h1>
      <div className="flex flex-wrap justify-center">
        {coffeeList.map(coffee => {
          return (
            <Coffee
              key={coffee.id}
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
    </div>
  );
}
