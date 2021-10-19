import { Bio, Hero, Services } from "../../components";
import { HeadTag, Main } from "../../global";
import {
    Container,
} from "./styledHomeContainer";

export const HomeContainer = () => {
    return (
        <Container>
            <HeadTag title="Omar's Resume | Portfolio | Works" />
            <Main>
                <Hero />
                <Bio />
                <Services />
            </Main>
        </Container>
    );
};