import { Clock, MapPin, Money } from "phosphor-react";
import illustration from "../../assets/illustration.svg"

export function Success() {
  return (
    <div className="flex justify-center items-end gap-24 pt-20 w-full">
      <div>
        <div className="pb-10">
          <h1 className="text-4xl font-bold text-yellow-700">Uhu! Pedido confirmado</h1>
          <p className="text-xl">Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="bg-info-gradient p-[1px] rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl">
          <div className="bg-background rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl">
            <div className="flex flex-col gap-5 p-10">
              <p className="flex items-center gap-2">
                <MapPin size={30} className="rounded-full bg-purple-600 text-white p-1" />
                Entrega em <strong>Rua Genis Gomes, 139</strong> Simão dias - SE
              </p>
              <p className="flex items-center gap-2">
                <Clock size={30} className="rounded-full bg-yellow-500 text-white p-1" />
                Entrega em <strong>Rua Genis Gomes, 139</strong> Simão dias - SE
              </p>
              <p className="flex items-center gap-2">
                <Money size={30} className="rounded-full bg-yellow-700 text-white p-1" />
                Entrega em <strong>Rua Genis Gomes, 139</strong> Simão dias - SE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={illustration} alt="Moto boy fazendo entrega" />
      </div>
    </div>
  );
}
