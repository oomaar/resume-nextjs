import styled from 'styled-components';
import { lgScreen, mdScreen, smScreen } from '../../global';
import { Bounce, Small } from "../../global/animations/animations";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
`;

export const Bottom = styled.div`
  display: ${({ scrollMouse }) => scrollMouse ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.smallFontSize};
`;

export const MouseDiv = styled.div`
  height: 2rem;
  width: 1.25rem;
  border: 1px solid red;
  border-radius: 1rem;
  position: relative;
  animation: ${Bounce} 2s linear infinite;
`;

export const Scroll = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: red;
  animation: ${Small} 3s linear infinite;
`;

export const Left = styled.div`
  width: 50%;

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    @media screen and (max-width: 1350px) {
        width: 700px;
    }
  }

  @media screen and (max-width: ${mdScreen}) {
    display: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin-left: auto;

  @media screen and (max-width: 1350px) {
    margin-left: 5rem;
  }

  @media screen and (max-width: 1220px) {
    margin: 0 auto;
  }

  @media screen and (max-width: ${mdScreen}) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: calc(${({ theme }) => theme.fontSize.bigFontSize} + 3rem);
  font-family: 'Shadows Into Light', cursive;
  margin: 0;
  background: ${({ theme }) => theme.textGradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  z-index: 10;

  @media screen and (max-width: 1350px) {
    font-size: calc(${({ theme }) => theme.fontSize.bigFontSize} + 2rem);
  }

  @media screen and (max-width: 1060px) {
    font-size: calc(${({ theme }) => theme.fontSize.bigFontSize} + 0.5rem);
  }

  @media screen and (max-width: 802px) {
    font-size: ${({ theme }) => theme.fontSize.bigFontSize};
  }

  @media screen and (max-width: ${mdScreen}) {
    font-size: calc(${({ theme }) => theme.fontSize.bigFontSize} + 1rem);
  }

  @media screen and (max-width: ${smScreen}) {
    font-size: calc(${({ theme }) => theme.fontSize.largeFontSize} + 0.5rem);
  }

  @media screen and (max-width: 330px) {
    font-size: ${({ theme }) => theme.fontSize.largeFontSize};
  }

  @media screen and (max-width: 283px) {
    font-size: calc(${({ theme }) => theme.fontSize.largeFontSize} - 0.1rem);      
  }
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mediumFontSize};
  color: ${({ theme }) => theme.textColor};

  @media screen and (max-width: ${lgScreen}) {
    font-size: ${({ theme }) => theme.fontSize.normalFontSize};
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  gap: 3rem;
  padding: 0;

  @media screen and (max-width: ${mdScreen}) {
    align-self: center;
  }
`;

export const SocialItem = styled.li`
  list-style: none;
  transition: all 0.5s ease;

  :hover {
    transform: scale(1.1);
  }
`;

export const SocialIcon = styled.a`
  font-size: ${({ theme }) => theme.fontSize.mediumFontSize};
  color: ${({ theme }) => theme.titleColor};

  @media screen and (max-width: ${lgScreen}) {
    font-size: ${({ theme }) => theme.fontSize.normalFontSize};
  }
`;