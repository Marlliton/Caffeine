import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CoffeeProps } from "../../../../core/coffee/Coffee";
import { ActionsWrapper, BadgeWrapper, ButtonAction, CoffeeBadge, CoffeeWrapper } from "./styles";

export function Coffee(props: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  return (
    <CoffeeWrapper>
      <img src={props.urlImage} alt="Coffee Image" />
      <BadgeWrapper>
      {props.category?.map((category) => {
        return <CoffeeBadge key={Date.now()}>{category.toUpperCase()}</CoffeeBadge>;
      })}
      </BadgeWrapper>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ActionsWrapper>
        <div>
          <span>R$</span>
          {String(props.price).padEnd(4, "0")}
        </div>
        <div>
          <span>
            <ButtonAction>
              <Minus size={16} />
            </ButtonAction>
            <span>{quantity}</span>
            <ButtonAction>
              <Plus size={16} />
            </ButtonAction>
          </span>
          <ButtonAction cart>
            <ShoppingCart size={22} weight="fill" />
          </ButtonAction>
        </div>
      </ActionsWrapper>
    </CoffeeWrapper>
  );
}
