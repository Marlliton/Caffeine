import { PresentationContainer, PresentationIcon, PresentationWrapperInfo } from "./styles";
import bgImage from "../../../assets/intro-background.svg";
import introImage from "../../../assets/intro-image.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Presentation() {
  return (
    <PresentationContainer bgImage={bgImage}>
      <div>
        <div>
          <h1>Encontre o café perfeito a qualquer hora do dia</h1>
          <p>Com o Caffeine você recebe o seu café onde estiver, a qualquer hora.</p>
        </div>

        <footer>
          <PresentationWrapperInfo>
            <span>
              <PresentationIcon background="yellowDark">
                <ShoppingCart weight="fill" />
              </PresentationIcon>
              Compra simples e segura
            </span>
            <span>
              <PresentationIcon background="brown">
                <Package weight="fill" />
              </PresentationIcon>
              Embalagem mantém o café intacto
            </span>
          </PresentationWrapperInfo>
          
          <PresentationWrapperInfo>
            <span>
              <PresentationIcon background="yellowLight">
                <Timer weight="fill" />
              </PresentationIcon>
              Entrega rápida e rastreada
            </span>
            <span>
              <PresentationIcon background="purple">
                <Coffee weight="fill" />
              </PresentationIcon>
              O café chaga fresquinho até você
            </span>
          </PresentationWrapperInfo>
        </footer>
      </div>
      <img src={introImage} alt="Café Embalado" />
    </PresentationContainer>
  );
}
