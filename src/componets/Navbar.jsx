
import logorec from "../assets/logo_REC.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logorec} alt="logo" />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/ra%C3%BAl-cisnero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/RulyCisnero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500"
                >
                    <FaGithub />
                </a>
                <FaInstagram />
            </div>
        </nav>
    );
};

export default Navbar;
