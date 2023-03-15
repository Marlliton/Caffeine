import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CoffeeProps } from "../../../../core/coffee/Coffee";

export function Coffee(props: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="text-xs md:text-base flex flex-col items-center max-w-xs p-5">
      <img src={props.urlImage} className="h-20 w-20 md:h-32 md:w-32" alt="Coffee Image" />
      <div className="flex gap-1 text-xs py-3">
        {props.category?.map((category, i) => {
          return <span className="rounded-lg px-2 py-1 bg-yellow-200 text-yellow-700" key={i}>{category.toUpperCase()}</span>;
        })}
      </div>
      <h2 className="font-bold text-base md:text-xl pb-3">{props.title}</h2>
      <p className="text-center">{props.description}</p>
      <div className="w-full flex justify-between mt-5 md:mt-8">
        <div className="font-baloo font-bold text-lg md:text-2xl">
          <span className="mr-1 text-xs font-light font-roboto">R$</span>
          {String(props.price).padEnd(4, "0")}
        </div>
        <div className="flex gap-2 justify-between">
          <span className="bg-gray-200 flex justify-center items-center md:gap-2 rounded-lg md:text-base">
            <button className="active:brightness-95 transition-all bg-gray-200 rounded-full p-2 text-purple-800">
              <Minus size={16} />
            </button>
            <span>{quantity}</span>
            <button className="active:brightness-95 transition-all bg-gray-200 rounded-full p-2 text-purple-800">
              <Plus size={16} />
            </button>
          </span>
          <button className="active:brightness-95 transition-all p-1 md:p-3 rounded-lg bg-purple-600 text-white">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
