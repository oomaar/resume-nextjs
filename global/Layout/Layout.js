import { ThemeProvider } from "styled-components";
import { Navbar } from "../../components";
import { darkTheme, GlobalStyle, lightTheme, typoTheme } from "..";
import { useSelector } from "react-redux";
import { selectDarkValue } from "../../redux/slices/darkSlice";

export const Layout = ({ children }) => {
    const darkValue = useSelector(selectDarkValue);

    return (
        <ThemeProvider theme={typoTheme}>
            <ThemeProvider theme={darkValue === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Navbar />
                {children}
                {/* Contact */}
                {/* Footer */}
            </ThemeProvider>
        </ThemeProvider>
    );
};