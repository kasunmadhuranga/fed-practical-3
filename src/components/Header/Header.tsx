import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import Button from "../Buttons/Buttons";
import { NavLink } from "./NavLink/NavLink";
import { Dropdown } from "../Dropdown/Dropdown";
import { MobileDropdown } from "./MobileDropdown/MobileDropdown";

const Header = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const homeDropdown = [
        { name: "Home", path: "/home" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    const pagesDropdown = [
        { name: "About", path: "/about" },
        { name: "Team", path: "/team" },
        { name: "Pricing", path: "/pricing" },
    ];

    const servicesDropdown = [
        { name: "Service 1", path: "/service1" },
        { name: "Service 2", path: "/service2" },
        { name: "Service 3", path: "/service3" },
    ];

    const blogDropdown = [
        { name: "All Posts", path: "/blog" },
        { name: "Categories", path: "/blog/categories" },
        { name: "Popular", path: "/blog/popular" },
    ];

    const isHomeActive = homeDropdown.some((item) =>
        location.pathname.startsWith(item.path)
    );
    const isPagesActive = pagesDropdown.some((item) =>
        location.pathname.startsWith(item.path)
    );
    const isServicesActive = servicesDropdown.some((item) =>
        location.pathname.startsWith(item.path)
    );
    const isBlogActive = blogDropdown.some((item) =>
        location.pathname.startsWith(item.path)
    );

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="bg-white shadow-sm py-4 px-6">
            <div className="px-10 mx-auto flex items-center justify-between">
                <a href="/" className="text-xl font-semibold text-gray-800">
                    <img src={logo} alt="Company Logo" />
                </a>

                <div className="hidden md:flex items-center space-x-4">
                    {/* <NavLink
                        to="/"
                        end
                        activeClassName="border-l-4 border-[#f4c006] pl-1 text-gray-700"
                        inactiveClassName="border-l-4 border-[#ffff] pl-1 hover:text-gray-700"
                        className="text-sm font-medium transition-colors duration-200"
                    >
                        HOME
                    </NavLink> */}
                    <Dropdown
                        title="HOME"
                        items={homeDropdown}
                        isActive={isHomeActive}
                    />

                    <Dropdown
                        title="PAGES"
                        items={pagesDropdown}
                        isActive={isPagesActive}
                    />
                    

                    <NavLink
                        to="/tracking"
                        activeClassName="border-l-4 border-[#f4c006] pl-1 text-gray-700"
                        inactiveClassName="border-l-4 border-[#ffff] pl-1 hover:text-gray-700"
                        className="text-sm font-medium transition-colors duration-200"
                    >
                        TRACKING
                    </NavLink>

                    <Dropdown
                        title="SERVICES"
                        items={servicesDropdown}
                        isActive={isServicesActive}
                    />

                    <Dropdown
                        title="BLOG"
                        items={blogDropdown}
                        isActive={isBlogActive}
                    />

                    <Button
                        className="font-medium"
                        text="GET A QUOTE"
                        buttonColor="bg-[#f4c006]"
                        textColor="text-white"
                    />
                    <Button
                        className="font-medium"
                        text="SIGN IN"
                        buttonColor="bg-black"
                        textColor="text-white"
                    />
                </div>

                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <IoCloseSharp /> : <AiOutlineMenu />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden mt-4">
                    <div className="flex flex-col space-y-3">
                        <MobileDropdown
                            title="PAGES"
                            items={homeDropdown}
                            isActive={isHomeActive}
                            onItemClick={closeMobileMenu}
                        />
                        <MobileDropdown
                            title="PAGES"
                            items={pagesDropdown}
                            isActive={isPagesActive}
                            onItemClick={closeMobileMenu}
                        />

                        <NavLink
                            to="/tracking"
                            onClick={closeMobileMenu}
                            className="block py-2 px-4 rounded-md text-gray-600 hover:bg-gray-100"
                            activeClassName="bg-blue-50 text-blue-600"
                        >
                            TRACKING
                        </NavLink>

                        <MobileDropdown
                            title="SERVICES"
                            items={servicesDropdown}
                            isActive={isServicesActive}
                            onItemClick={closeMobileMenu}
                        />

                        <MobileDropdown
                            title="BLOG"
                            items={blogDropdown}
                            isActive={isBlogActive}
                            onItemClick={closeMobileMenu}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;