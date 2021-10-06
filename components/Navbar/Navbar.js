import { FaTimes, FaBars } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectDarkValue, setDarkMode } from "../../redux/slices/darkSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {
    Nav,
    LinksList,
    ListItem,
    ListLink,
    Logo,
    ThemeIcon,
    BurgerIcon,
    CloseIcon,
} from "./styledNavbar";

export const Navbar = () => {
    const darkValue = useSelector(selectDarkValue);
    const dispatch = useDispatch();
    const [scroll, setScroll] = useState(false);
    const [show, setShow] = useState(false);

    const handleLight = () => dispatch(setDarkMode("light"));
    const handleDark = () => dispatch(setDarkMode("dark"));

    const scrollNav = () => window.scrollY > 100 ? setScroll(true) : setScroll(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollNav);
        return () => window.removeEventListener("scroll", scrollNav);
    }, [scroll]);

    return (
        <Nav scroll={scroll}>
            <BurgerIcon>
                <FaBars onClick={() => setShow(true)} />
            </BurgerIcon>
            <LinksList show={show}>
                <CloseIcon>
                    <FaTimes onClick={() => setShow(false)} />
                </CloseIcon>
                <ListItem>
                    <ListLink href="#">About</ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="#">Skills</ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="#">Education</ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="#">Works</ListLink>
                </ListItem>
            </LinksList>
            <Logo>Omar Hassan</Logo>
            <ThemeIcon>
                {darkValue === "light" ? <BsMoonFill onClick={handleDark} /> : <BsSunFill onClick={handleLight} />}
            </ThemeIcon>
        </Nav>
    );
};