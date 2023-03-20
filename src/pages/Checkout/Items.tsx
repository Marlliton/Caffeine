import { Minus, Plus, Trash } from "phosphor-react";
import img from "../../assets/coffees/arabe.svg";

export function Items() {
  return (
    <div className="flex gap-5 items-center border-b border-gray-300/50 pt-3">
      <img src={img} alt="" className="w-16 h-16" />
      <div className="w-full pb-5">
        <div className="flex justify-between w-full pb-2">
          <p>expresso tradicional</p>
          <p className="font-baloo font-bold">
            <span className="text-xs font-roboto font-semibold">R$</span> 9.99
          </p>
        </div>

        <div className="flex gap-2">
          <div className="bg-gray-300 rounded flex items-center p-1 gap-2">
            <button type="button" className="text-purple-600">
              <Minus />
            </button>
            <span className="text-brown-600">3</span>
            <button type="button" className="text-purple-600">
              <Plus />
            </button>
          </div>
          <button type="button" className="flex gap-2 items-center p-1 bg-gray-300 rounded text-brown-600">
            <Trash className="text-purple-600 " /> Remover
          </button>
        </div>
      </div>
    </div>
  );
}
