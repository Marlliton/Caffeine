import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <div className="flex justify-between py-8">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <div className="flex gap-3">
        <div className="hidden sm:flex bg-purple-200 rounded-md p-2 text-purple-800">
          <MapPin size={22} weight="fill" /> Simão Dias, SE
        </div>
        <a href="/checkout" className="relative bg-yellow-200 p-2 rounded-md text-yellow-700">
          <ShoppingCart size={22} weight="fill" />
          <span className={`
            absolute -top-2 -right-2 rounded-full bg-yellow-700 
            text-white h-5 w-5 flex justify-center items-center font-semibold text-[12px]
          `}>
            3
          </span>
        </a>
      </div>
    </div>
  );
}
