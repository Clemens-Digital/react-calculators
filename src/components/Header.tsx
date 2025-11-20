import React from "react";
import { Link } from "react-router";

interface HeaderProps {
    title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Calculators" }) => {
    return (
        <header className="bg-gray-100 with-shadow">
        <div className="container mx-auto px-4 flex items-center gap-4">
            <img
            src="/assets/cds-icon.png"
            alt="Logo"
            className="h-32 w-32 rounded-md object-contain"
            />
            <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            </div>
        </div>

        <div className="container mx-auto px-4 pb-3">
            <Link
            to={"/"}
            className="text-sm text-blue-600 hover:underline inline-block"
            >
            View All Calculators
            </Link>
        </div>
        </header>

    );
};

export default Header;
