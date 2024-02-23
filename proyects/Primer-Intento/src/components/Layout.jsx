import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../assets/images/logo.png';
import ImgAlianza from '../assets/images/alianza.png';
import '../assets/css/Layout.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export const Layout = ({ children }) => {
    const [showFooter, setShowFooter] = useState(false);

    const toggleFooter = () => {
        setShowFooter((prev) => !prev);
    };

    return (
        <div>
            <nav>
                <div className="menu-nav">
                    <div className="menu-nav__logo">
                        <img
                            alt="Logo de Inversiones y Planes de la Paz"
                            src={ImgLogo}
                        />
                    </div>
                    <ul className="menu-nav__lista">
                        <li className="menu-nav__item">
                            <Link to="https://inverpaz.com/">Volver</Link>
                        </li>
                        <li className="menu-nav__item">
                            <Link to="/*">Inicio</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Contenido específico de cada página */}
            <main><div className='contPag'>{children}</div></main>

            {/* Botón para mostrar/ocultar el footer */}
            <button className="toggleFooterBtn" onClick={toggleFooter}>
                {showFooter ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Pie de página */}
            <footer role="contentinfo" className={showFooter ? 'footerVisible' : 'footerHidden'}>
                <section className="cont-Footer">
                    <article className="columna">
                        <h1>Contacto</h1>
                        <div className="contactoFooter">
                            <label>Línea Nacional: <a href="tel:+573009126680">+(57) 300 912 6680</a></label>
                            <label>Línea Celular: <a href="tel:+573124496080">+(57) 312 449 6080</a></label>
                            <label>Correo electrónico: <a href="mailto:servicioalcliente@cooinpaz.com">servicioalcliente@cooinpaz.com</a></label>
                            <label>Correo electrónico: <a href="mailto:contactenos@oferthsop.com">contactenos@oferthsop.com</a></label>
                        </div>
                    </article>
                    <article className="columna">
                    <div className="admin">
                    <h1>Administrar sitio</h1>
                        <div className="contactoFooter">
                            <li className="menu-nav__item">
                                <Link to="/admin">Administración</Link>
                            </li>
                        </div>
                    </div>
                    </article>
                    <article className="columna">
                        <div className="logoAlianza">
                            <img src={ImgAlianza} alt="Logo de Alianza"/>
                        </div>
                    </article>
                </section>
            </footer>
        </div>
    );
};
