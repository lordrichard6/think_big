import { Outlet } from "react-router-dom";
import FooterComponent from './Footer';
import NavbarComponent from './Navbar';

export default function LayoutComponent() {
    return (
        <>
            <NavbarComponent />
            <Outlet />
            <FooterComponent />
        </>
    );
}