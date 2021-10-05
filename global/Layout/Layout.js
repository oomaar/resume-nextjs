import { Navbar } from "../../components";

export const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            {/* Contact */}
            {/* Footer */}
        </div>
    );
};