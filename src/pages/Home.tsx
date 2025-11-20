import React, { useEffect, useState } from "react";
import CalculatorCard from "../components/CalculatorCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Calculator {
    title: string;
    description: string;
    href: string;
}

const Home: React.FC = () => {
    const [calculators, setCalculators] = useState<Calculator[]>([]);

    useEffect(() => {
        fetch("/data/calculators.json?t=" + Date.now())
        .then((res) => res.json())
        .then(setCalculators);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-400">
        <Header />

        {/* Main Content */}
        <main className="grow container mx-auto px-6 py-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Available Calculators
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc) => (
                <CalculatorCard
                key={calc.title}
                title={calc.title}
                description={calc.description}
                href={calc.href}
                />
            ))}
            </div>
        </main>

        <Footer />
        </div>
    );
};

export default Home;