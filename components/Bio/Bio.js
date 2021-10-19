import Image from "next/image";
import { Container, Title } from "../../global/styles/GlobalStyle";
import {
    BioSubContainer,
    ImageContainer,
    BioStory,
    ResumeButton,
} from "./styledBio";

export const Bio = () => {
    return (
        <Container>
            <Title>Bio</Title>

            <BioSubContainer>
                <ImageContainer>
                    <Image
                        src="/about.jpg"
                        width={400}
                        height={400}
                        objectFit="contain"
                    />
                </ImageContainer>
                <BioStory>
                    I am a creative Frontend Engineer and a Self-Learner.
                    I have always been passionate about everything related to technology and programming,
                    especially the web professions, which I made my career by always giving the best I can give as a Web Developer.
                    I also love to code from scratch, and I enjoy bringing ideas to life in the browser.
                    Aside code I love travelling and making new friends, I love life and people.
                </BioStory>
            </BioSubContainer>
            <ResumeButton>Download Resume</ResumeButton>
        </Container>
    );
};