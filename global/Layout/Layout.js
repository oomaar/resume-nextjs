import { ThemeProvider } from "styled-components";
import { Navbar } from "../../components";
import { darkTheme, GlobalStyle, lightTheme, typoTheme } from "..";
import { useSelector } from "react-redux";
import { selectDarkValue } from "../../redux/slices/darkSlice";
import {
    LayoutContainer
} from "./styledLayout";
import { Background } from "../../components/Background/Background";

export const Layout = ({ children }) => {
    const darkValue = useSelector(selectDarkValue);

    return (
        <ThemeProvider theme={typoTheme}>
            <ThemeProvider theme={darkValue === "light" ? lightTheme : darkTheme}>
                <LayoutContainer>
                    <GlobalStyle />
                    {/* <Background /> */}
                    <Navbar />
                    {children}
                    {/* Contact */}
                    {/* Footer */}
                </LayoutContainer>
            </ThemeProvider>
        </ThemeProvider>
    );
};