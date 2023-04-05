import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
    { name: 'home', link: "/" },
    { name: 'about', link: "/about" },
    { name: 'login/signin', link: "/signin" },
    { name: 'contact', link: "/contact" }
]

export default function NavbarComponent() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 500;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`${scrolled ? 'scrolled' : ''} h-14 w-full flex justify-between absolute px-8 md:px-[200px] py-2 z-20`}>
            <img className='h-full' src="/logo.png" alt="think big logo" />
            <ul className="nav-items hidden uppercase w-1/2 md:flex justify-between items-center">
                {navItems.map((item, i) => {
                    return <li className='cursor-pointer hover:underline underline-offset-4' key={i}><Link to={item.link}>{item.name}</Link></li>
                })}
            </ul>
        </nav>
    );
}