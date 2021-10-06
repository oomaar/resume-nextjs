import { ThemeProvider } from "styled-components";
import { Navbar } from "../../components";
import { darkTheme, GlobalStyle, lightTheme, typoTheme } from "..";
import { useSelector } from "react-redux";
import { selectDarkValue } from "../../redux/slices/darkSlice";
import {
    Container,
    Stars,
} from "./styledLayout";

export const Layout = ({ children }) => {
    const darkValue = useSelector(selectDarkValue);

    return (
        <ThemeProvider theme={typoTheme}>
            <ThemeProvider theme={darkValue === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Container>
                    <Stars></Stars>
                    <Navbar />
                    {children}
                    {/* Contact */}
                    {/* Footer */}
                </Container>
            </ThemeProvider>
        </ThemeProvider>
    );
};