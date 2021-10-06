import styled from 'styled-components';
import { headerHeight, lgScreen, mdScreen, xlScreen } from '../../global';

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${({ theme, scroll }) => scroll ? theme.containerColor : "transparent"};
  box-shadow: ${({ theme, scroll }) => scroll ? theme.shadowColor : "none"};
  height: ${headerHeight};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.headerZ};

  @media screen and (max-width: ${lgScreen}) {
    padding: 0.5rem;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 25%;

  @media screen and (max-width: ${xlScreen}) {
    gap: 0.5rem;
    width: 30%;
  }

  @media screen and (max-width: ${lgScreen}) {
    transform: ${({ show }) => show ? "translateY(0)" : "translateY(-300px)"};
    transition: all 0.5s ease;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.bodyColor};
    box-shadow: ${({ theme }) => theme.shadowColor};
    gap: 2rem;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  transition: all 0.5s ease;

  :hover {
    transform: scale(1.1);
  }
`;

export const ListLink = styled.a`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.linkFontSize};
  text-transform: uppercase;
  letter-spacing: 0.063rem;
`;

export const Logo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.titleFontSize};
  color: ${({ theme }) => theme.titleColor};
  width: 50%;
  text-align: center;
  font-family: 'Shadows Into Light', cursive;

  @media screen and (max-width: ${xlScreen}) {
    width: 45%;
  }

  @media screen and (max-width: ${mdScreen}) {
    font-size: ${({ theme }) => theme.fontSize.normalFontSize};
  }
`;

export const ThemeIcon = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.textColor};
  width: 25%;
  font-size: ${({ theme }) => theme.fontSize.normalFontSize};
  cursor: pointer;
`;

export const BurgerIcon = styled.div`
  display: none;
  font-size: ${({ theme }) => theme.fontSize.normalFontSize};
  width: 25%;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};

  @media screen and (max-width: ${lgScreen}) {
    display: flex;
  }
`;

export const CloseIcon = styled.div`
  display: none;
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSize.normalFontSize};
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  top: 0;
  right: 1rem;

  @media screen and (max-width: ${lgScreen}) {
    display: block;
  }
`;