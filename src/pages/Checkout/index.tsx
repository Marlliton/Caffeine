import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { Items } from "./Items";

export function Checkout() {
  return (
    <div>
      <form className="flex flex-col md:flex-row md:p-10 gap-4">
        <div className="flex-1">
          <h2 className="font-baloo font-bold text-lg mb-4">Complete o seu pedido</h2>
          <div className="flex flex-col gap-4 bg-gray-100 p-7 rounded-md">
            <div className="flex gap-1 pb-8">
              <MapPin size={22} className="text-yellow-700" />
              <span className="text-brown-600">
                <h2>Endereço de entrega</h2>
                <p>Informe o endereço onde deseja receber o seu pedido.</p>
              </span>
            </div>
            <input
              className="p-3 placeholder:text-brown-200 md:max-w-[12.5rem] w-full"
              placeholder="CPF"
              name="cpf"
              type="text"
            />
            <input
              className="p-3 placeholder:text-brown-200"
              placeholder="Rua"
              name="rua"
              type="text"
            />
            <div className="flex flex-col md:flex-row gap-3">
              <input
                className="p-3 placeholder:text-brown-200 md:max-w-[12.5rem] w-full"
                placeholder="Número"
                name="numero"
                type="text"
              />
              <span className="relative flex-1">
                <input
                  className="p-3 placeholder:text-brown-200 w-full"
                  placeholder="Complemento"
                  name="complemento"
                  type="text"
                />
                <p className="absolute text-xs text-brown-300 italic right-4 top-[18px]">
                  Opcional
                </p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                className="p-3 placeholder:text-brown-200 md:max-w-[12.5rem] w-full"
                placeholder="Bairro"
                name="bairro"
                type="text"
              />
              <input
                className="p-3 placeholder:text-brown-200 flex-1"
                placeholder="Cidade"
                name="cidade"
                type="text"
              />
              <input
                className="p-3 placeholder:text-brown-200 md:max-w-[3.7rem]"
                placeholder="UF"
                name="uf"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col py-10 bg-gray-100 rounded-md mt-4 p-7">
            <div className="flex gap-3">
              <CurrencyDollar size={22} className="text-purple-600" />
              <span>
                <h2 className="font-baloo ">Pagamento</h2>
                <p className="text-brown-300">
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar!
                </p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-3 pt-8">
              <label htmlFor="credito" className="relative flex-1">
                <input
                  name="payment"
                  className="peer invisible absolute"
                  type="radio"
                  id="credito"
                />
                <span className="flex justify-center items-center gap-4 p-4 rounded bg-gray-200 text-brown-300 border border-transparent peer-checked:bg-purple-200 peer-checked:border-purple-600">
                  <CreditCard className="text-purple-600" /> Cartão de Crédito
                </span>
              </label>
              <label htmlFor="debito" className="relative flex-1">
                <input
                  name="payment"
                  className="peer invisible absolute"
                  type="radio"
                  id="debito"
                />
                <span className="flex justify-center items-center gap-4 p-4 rounded bg-gray-200 text-brown-300 border border-transparent peer-checked:bg-purple-200 peer-checked:border-purple-600">
                  <Bank className="text-purple-600" /> Cartão de Débito
                </span>
              </label>
              <label htmlFor="dinheiro" className="relative flex-1">
                <input
                  name="payment"
                  className="peer invisible absolute"
                  type="radio"
                  id="dinheiro"
                />
                <span className="flex justify-center items-center gap-4 p-4 rounded bg-gray-200 text-brown-300 border border-transparent peer-checked:bg-purple-200 peer-checked:border-purple-600">
                  <Money className="text-purple-600" /> Dinheiro
                </span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-baloo font-bold text-lg mb-4">Cafés selecionados</h2>
          <div className="flex justify-center flex-col p-10 w-[28rem] bg-gray-100 rounded-tr-3xl rounded-bl-3xl">
            <Items />
            <Items />
            <div className="pt-4 text-sm font-extralight">
              <div className="flex justify-between">
                <p>Total de itens</p>
                <p>
                  <span>R$</span> 19.99
                </p>
              </div>
              <div className="flex justify-between pt-2">
                <p>Entrega</p>
                <p>
                  <span>R$</span> 3.99
                </p>
              </div>
              <div className="flex justify-between pt-2 font-bold text-base">
                <p>Total</p>
                <p>
                  <span className="mr-2 text-xs font-semibold">R$</span>23.98
                </p>
              </div>

              <a href="/success" type="submit" className="block text-center bg-yellow-500 w-full mt-6 text-white font-bold p-3 rounded-md">CONFIRMAR PEDIDO</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
