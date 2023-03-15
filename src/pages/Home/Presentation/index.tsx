import bgImage from "../../../assets/intro-background.svg";
import introImage from "../../../assets/intro-image.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Presentation() {
  function renderInfo(icon: any, text: string, bg: string) {
    return (
      <div className="flex items-center gap-2 ">
        <span className={`p-2 rounded-full text-white ${bg}`}>{icon}</span>
        <p className="flex-1">{text}</p>
      </div>
    );
  }

  return (
    <div className="bg-bg-image bg-contain bg-no-repeat flex justify-center md:justify-between w-full">
      <div className="flex flex-col md:justify-evenly pb-10">
        <div>
          <h1 className="font-baloo text-xl md:text-4xl font-bold pb-4">
            Encontre o café perfeito a qualquer hora do dia
          </h1>
          <p className="text-sm md:text-base pb-8">
            Com o Caffeine você recebe o seu café onde estiver, a qualquer hora.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-1 flex-col  sm:flex-row gap-2">
            {renderInfo(<ShoppingCart weight="fill" />, "Compra simples e segura", "bg-yellow-700")}
            {renderInfo(
              <Package weight="fill" />,
              "Embalagem mantém o café intacto",
              "bg-brown-300"
            )}
          </div>
          <div className="flex flex-1 flex-col  sm:flex-row gap-2">
            {renderInfo(<Timer weight="fill" />, "Entrega rápida e rastreada", "bg-yellow-500")}
            {renderInfo(
              <Coffee weight="fill" />,
              "O café chaga fresquinho até você",
              "bg-purple-600"
            )}
          </div>
        </div>
      </div>
      <img
        className="hidden md:block md:w-72 lg:w-96 xl:w-auto"
        src={introImage}
        alt="Café Embalado"
      />
    </div>
  );
}
