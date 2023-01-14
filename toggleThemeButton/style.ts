import styled from "styled-components";

export const Button = styled.button`

  border: 0;
  block-size: 2em;
  aspect-ratio: 1;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  outline-offset: 5px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover .sun-and-moon .sun,
  .moon,
  .sun-beams {
    fill: ${props => props.theme.secondaryBorder};
    opacity: 0.7;
  }

  & > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  .sun-and-moon {
    & > .moon,
    .sun,
    .sun-beams {
      transform-origin: center center;
    }
    & > .moon,
    .sun {
      fill: ${props => props.theme.secondaryBorder};
    }
  }

  & .sun-beams {
    stroke: ${props => props.theme.secondaryBorder};
    stroke-width: 2px;
  }

  &.dark {
    .sun {
      transform: scale(1.75);
      transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
      transition-duration: 0.25s;
      transition: transform 0.5s cubic-bezier(0.5, 1.25, 0.75, 1.25);
    }

    .sun-beams {
      opacity: 0;
      transition: transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25),
    opacity 0.5s cubic-bezier(0.25, 0, 0.3, 1);
      transform: rotateZ(-25deg);
      transition-duration: 0.15s;
    }

    .moon > circle {
      transform: translateX(-7px);
      transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
      transition-delay: 0.25s;
      transition-duration: 0.5s;
    }
  }
`;
