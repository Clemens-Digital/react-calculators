import Footer from "../components/Footer";
import Header from "../components/Header";

const TipCalc: React.FC = () =>  {
    return (
        <div className="min-h-screen flex flex-col bg-gray-400">
        <Header title="Tip Calculator" />
        <main className="grow container mx-auto px-6 py-10">
            <h1 className="text-black">Nothing yet! Come back another time</h1>
        </main>
        <Footer />
        </div>
    );
};
export default TipCalc;