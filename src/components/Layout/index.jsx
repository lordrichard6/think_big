import { Outlet } from "react-router-dom";
import React, { useState } from "react";

import FooterComponent from './Footer';
import NavbarComponent from './Navbar';
import SidebarComponent from "./sidebar";

export default function LayoutComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SidebarComponent isOpen={isOpen} toggle={toggle} />
            <NavbarComponent toggle={toggle} />
            <Outlet />
            <FooterComponent />
        </>
    );
}