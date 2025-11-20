import React from "react";

interface CalculatorCardProps {
    title: string;
    description: string;
    href: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, description, href }) => {
    return (
        <a
        href={href}
        className="block rounded-lg bg-white p-8 hover:scale-105 transition-transform"
        >
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
        <button className="blue-button mt-4">Open</button>
        </a>
    );
};

export default CalculatorCard;