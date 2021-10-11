import { keyframes } from "styled-components";

// ********** animatedLayout **********
export const starsEffect = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-2000px);
    }
`;
// ********** animatedLayout **********

// ********** animatedHero **********
export const Bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Small = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(15px) scale(0);
  }

  100% {
    transform: translateY(0) scale(1);
  }
`;
// ********** animatedHero **********