
const Footer: React.FC = () =>  {
    return (
    <footer className="bg-gray-100 py-4 text-center text-gray-500 text-sm with-shadow">
        © {new Date().getFullYear()} <a href="https://www.clemensdigital.com/">Clemens Digital</a>. All rights reserved.
    </footer>
    );
};
export default Footer;