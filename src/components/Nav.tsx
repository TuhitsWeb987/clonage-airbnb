import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const navigate = useNavigate();

    return (
        <nav className="w-full flex items-center justify-between p-3 px-20">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-[#ff5a5f]" >
                <FaAirbnb  className="text-4xl"/>
                <span>airbnb</span>
            </Link>

            <ul className="flex items-center justify-center gap-4">
                <li className="font-bold text-[#484848]"><a href="#">Logement</a></li>
                <li className=" text-[#484848]"><a href="#">Expérience</a></li>
                <li className=" text-[#484848]"><a href="#">Expérience en ligne</a></li>
            </ul>

            <div className="flex items-center justify-center gap-3">
                <a href="#" ><TbWorld /></a>
                <div onClick={toggleMenu}className="flex items-center justify-center gap-3 border border-[rgb(237,237,237)] p-3 rounded-full hover:shadow-md cursor-pointer">
                    <IoIosMenu className="text-xl"/>
                    <FaRegUserCircle className="text-xl"/>
                </div>
                {isOpen && (
                    <div className="absolute top-10 right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-lg">
                        <button onClick={() => navigate("/auth")} className="block px-4 py-2 hover:bg-gray-100">
                            Connexion
                        </button>
                        <button onClick={() => navigate("/register")} className="block px-4 py-2 hover:bg-gray-100">
                            Inscription
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}
