import { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "./Button";
import Menu from "../assets/icons/icon.svg"
import Close from "../assets/icons/close.svg"

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo" width={105} height={40} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <p>Home</p>
                            </li>
                            <li>
                                <p>Soluções</p>
                            </li>
                            <li>
                                <p>Depoimentos</p>
                            </li>
                            <li>
                                <p>Preços</p>
                            </li>
                            <li>
                                <p>Contato</p>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <p className="reverse-color ml-lg" >Login</p>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                    {showMobileMenu ?
                        <div className="mobile-menu-content">
                            <div className="container flex">
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/">Soluções</a>
                                    </li>
                                    <li>
                                        <a href="/">Depoimentos</a>
                                    </li>
                                    <li>
                                        <a href="/">Preços</a>
                                    </li>
                                    <li>
                                        <a href="/">Contato</a>
                                    </li>
                                    <li>
                                        <a className="reverse-color" href="/">Login</a>
                                    </li>
                                </ul>
                                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                </span>
                            </div>
                        </div>
                        :
                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                            <img src={Menu} alt="ícone menu" width={24} height={24} />
                        </span>
                    }
                </div>
                
                </nav>

            </header>
        </>
    )
}