import { CartAmount, HeaderActions, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <HeaderActions>
        <div>
          <MapPin size={22} weight="fill" /> Simão Dias, SE
        </div>
        <button>
          <ShoppingCart size={22} weight="fill" />
          <CartAmount>3</CartAmount>
        </button>
      </HeaderActions>
    </HeaderContainer>
  )
}