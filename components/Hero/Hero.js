import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine, RiFacebookLine } from "react-icons/ri";
import { BsMouse } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectDarkValue } from "../../redux/slices/darkSlice";
import Image from "next/image";
import {
    Container,
    Top,
    Bottom,
    MouseDiv,
    Scroll,
    Left,
    Right,
    SubContainer,
    Title,
    SubTitle,
    SocialLinks,
    SocialItem,
    SocialIcon,
} from "./styledHero";
import { useState } from "react";
import { useEffect } from "react";

export const Hero = () => {
    const darkValue = useSelector(selectDarkValue);
    const [scrollMouse, setScrollMouse] = useState(true);

    const handleScrollMouse = () => window.scrollY > 100 ? setScrollMouse(false) : setScrollMouse(true);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollMouse);
        return () => window.removeEventListener("scroll", handleScrollMouse);
    }, [scrollMouse]);

    return (
        <Container>
            <Top>
                <Left>
                    <SubContainer>
                        <Title>Hi. I'm Omar. <br /> A Programmer.</Title>
                        <SubTitle>
                            I'm also a front-end developer,<br />I love to build amazing things.
                        </SubTitle>
                        <SocialLinks>
                            <SocialItem>
                                <SocialIcon href="#">
                                    <FiGithub />
                                </SocialIcon>
                            </SocialItem>
                            <SocialItem>
                                <SocialIcon href="#">
                                    <RiLinkedinLine />
                                </SocialIcon>
                            </SocialItem>
                            <SocialItem>
                                <SocialIcon href="#">
                                    <RiFacebookLine />
                                </SocialIcon>
                            </SocialItem>
                        </SocialLinks>
                    </SubContainer>
                </Left>
                <Right>
                    <Image
                        src={`/profile${darkValue === "light" ? "" : "-white"}.png`}
                        width={800}
                        height={800}
                        objectFit="contain"
                    />
                </Right>
            </Top>
            <Bottom scrollMouse={scrollMouse}>
                <MouseDiv>
                    <Scroll></Scroll>
                </MouseDiv>
                <span>Scroll</span>
            </Bottom>
        </Container>
    );
};