import styled from 'styled-components';
import { lgScreen } from '../../global';

export const BioSubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${lgScreen}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;

  img {
    border-radius: 1rem;
  }

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const BioStory = styled.p`
  width: 50%;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.normalFontSize};

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
  }
`;

export const ResumeButton = styled.a`
  background: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.buttonText};
  font-size: ${({ theme }) => theme.fontSize.linkFontSize};
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  outline: 0;
  border: 0;
  margin-top: 2rem;

  :hover {
    background: ${({ theme }) => theme.buttonHover};
  }
`;