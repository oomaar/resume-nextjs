import { Hero } from "../../components";
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
            </Main>
        </Container>
    );
};