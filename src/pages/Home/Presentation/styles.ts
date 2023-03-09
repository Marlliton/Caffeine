import styled from "styled-components";

interface PresentationContainerProps {
  bgImage: string;
}

const iconColor = {
  yellowDark: "yellow-700",
  yellowLight: "yellow-500",
  purple: "purple-600",
  brown: "brown-600",
} as const;

interface PresentationIconProps {
  background: keyof typeof iconColor;
}

export const PresentationContainer = styled.div<PresentationContainerProps>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-height: 34rem;

  background-image: url(${props => props.bgImage});
  padding: 5.75rem 10rem;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    line-height: 3.125rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.65rem;

    color: ${props => props.theme["brown-300"]};
  }

  img {
    width: 29.77rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const PresentationWrapperInfo = styled.div`
  display: flex;
  gap: 3rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme["brown-300"]};

    & svg {
      color: ${props => props.theme.white};
    }
  }
`;

export const PresentationIcon = styled.span<PresentationIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: calc(2rem * 2);
  line-height: 0;

  background-color: ${props => props.theme[iconColor[props.background]]};

  display: flex;
  justify-content: center;
  align-items: center;
`;
