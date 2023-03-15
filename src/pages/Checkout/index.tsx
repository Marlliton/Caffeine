import { MapPin, Minus, Plus, Trash } from "phosphor-react";

export function Checkout() {
  return (
    <div>
      <div>
        <h2>Complete o seu pedido</h2>
        <h2>Cafés selecionados</h2>
      </div>
      <form>
        <div>
          <MapPin size={22} />
          <span>
            <h2>Endereço de entrega</h2>
            <p>Informe o endereço onde deseja receber o seu pedido.</p>
          </span>
        </div>
        <div>
          <input placeholder="CPF" name="cpf" type="text" />
          <input placeholder="Rua" name="rua" type="text" />
          <span>
            <input placeholder="Número" name="numero" type="text" />
            <input placeholder="Complemento" name="complemento" type="text" />
          </span>
          <span>
            <input placeholder="Bairro" name="bairro" type="text" />
            <input placeholder="Cidade" name="cidade" type="text" />
            <input placeholder="" name="uf" type="text" />
          </span>
        </div>
        <div>
          <div>
            <img src="" alt="Preview" />
            <div>
              <p>expresso tradicional</p>
              <span>9.99</span>
            </div>
            <div>
              <div>
                <div>
                  <button type="button">
                    <Minus size={16} />
                  </button>
                  <span>{1}</span>
                  <button type="button">
                    <Plus size={16} />
                  </button>
                </div>
                <button type="button">
                  <Trash size={16} /> Remover
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
