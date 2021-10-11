import styled from 'styled-components';

export const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 1;
`;

export const BlueMoon = styled.div`
  background: linear-gradient(to top left, hsl(210, 74%, 70%), hsl(215, 9%, 93%));
  position: absolute;
  top: 12%;
  left: 9%;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

export const NightMoon = styled.div`
  background: linear-gradient(to top right, hsl(225, 53%, 42%), hsl(226, 49%, 57%), hsl(215, 9%, 93%));
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  top: 42%;
  left: 89%;
`;

export const SmallMoon = styled.div`
  background: linear-gradient(to top right, hsl(226, 49%, 57%), hsl(215, 9%, 93%));
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  top: 48%;
  left: 23%;
`;

export const Star = styled.div`
  border-radius: 50%;
  position: absolute;

  background: ${({ Alkaid, Mizar, Alioth, Megrez, Dubhe, Merak, Phecda }) => (
    Alkaid || Mizar || Alioth || Megrez || Dubhe || Merak || Phecda
  ) ? "hsla(215, 9%, 93%, 0.9)" : "hsla(215, 9%, 93%, 0.5)"};

  height: ${({ Alkaid, Mizar, Alioth, Megrez, Dubhe, Merak, Phecda }) => (
    Alkaid || Mizar || Alioth || Megrez || Dubhe || Merak || Phecda
  ) ? "5px" : "2px"};

  width: ${({ Alkaid, Mizar, Alioth, Megrez, Dubhe, Merak, Phecda }) => (
    Alkaid || Mizar || Alioth || Megrez || Dubhe || Merak || Phecda
  ) ? "5px" : "2px"};

  top: ${({
    one, two, three, four, five, six, seven, eight, nine, ten,
    one1, two1, three1, four1, five1, six1, seven1, eight1, nine1, ten1,
    Alkaid, Mizar, Alioth, Megrez, Dubhe, Merak, Phecda
  }) => (
    one ? "70%" : two ? "75%" : three ? "63%" : four ? "22%" : five ? "80%" : six ? "88%" : seven ? "14%" :
      eight ? "69%" : nine ? "11%" : ten ? "43%" : one1 ? "72%" : two1 ? "94%" : three1 ? "75%" : four1 ? "66%" :
        five1 ? "89%" : six1 ? "45%" : seven1 ? "33%" : eight1 ? "85%" : nine1 ? "9%" : ten1 ? "65%" : Alkaid ? "11%" :
          Mizar ? "15%" : Alioth ? "22%" : Megrez ? "29%" : Dubhe ? "39%" : Merak ? "37%" : Phecda ? "30%" : "0"
  )};

  left: ${({
    one, two, three, four, five, six, seven, eight, nine, ten,
    one1, two1, three1, four1, five1, six1, seven1, eight1, nine1, ten1,
    Alkaid, Mizar, Alioth, Megrez, Dubhe, Merak, Phecda
  }) => (
    one ? "20%" : two ? "10%" : three ? "33%" : four ? "22%" : five ? "80%" : six ? "88%" : seven ? "34%" :
      eight ? "49%" : nine ? "51%" : ten ? "43%" : one1 ? "52%" : two1 ? "44%" : three1 ? "45%" : four1 ? "56%" :
        five1 ? "89%" : six1 ? "45%" : seven1 ? "33%" : eight1 ? "15%" : nine1 ? "19%" : ten1 ? "15%" : Alkaid ? "85%" :
          Mizar ? "92%" : Alioth ? "94%" : Megrez ? "94.5%" : Dubhe ? "95.3%" : Merak ? "90%" : Phecda ? "90%" : "0"
  )};
`;

export const AlkaidMizar = styled.div`
  position: absolute;
  height: 1px;
  width: 123px;
  background: hsla(0, 0%, 100%, 0.4);
  top: 13.3%;
  left: 85.5%;
  transform: rotate(16deg);
`;

export const MizarAlioth = styled.div`
  position: absolute;
  height: 1px;
  width: 74px;
  background: hsla(0, 0%, 100%, 0.4);
  top: 18.5%;
  left: 91.25%;
  transform: rotate(59deg);
`;

export const LineAliothMegrez = styled.div`
  position: absolute;
  height: 1px;
  width: 59px;
  background: hsla(0, 0%, 100%, 0.4);
  top: 25.8%;
  left: 92.87%;
  transform: rotate(83deg);
`;

export const LineMegrezDubhe = styled.div`
  position: absolute;
  height: 1px;
  width: 91px;
  background: hsla(0, 0%, 100%, 0.4);
  top: 34.2%;
  left: 92.7%;
  transform: rotate(81deg);
`;

export const LineDubheMerak = styled.div`
  position: absolute;
  height: 1px;
  width: 91px;
  background: hsla(0, 0%, 100%, 0.4);
  top: 38.4%;
  left: 90.5%;
  transform: rotate(9deg);
`;

export const LineMerakPhecda = styled.div`
  position: absolute;
  height: 1px;
  width: 64px;
  background: hsla(0, 0%, 100%, 0.4);
  top: 33.4%;
  left: 88.5%;
  transform: rotate(90deg);
`;

export const LineMerakMegrez = styled.div`
  position: absolute;
  height: 1px;
  width: 80px;
  background: hsla(0, 0%, 100%, 0.4);
  top: 29.8%;
  left: 90.5%;
  transform: rotate(-7deg);
`;