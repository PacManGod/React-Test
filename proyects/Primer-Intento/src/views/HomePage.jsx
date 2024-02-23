// src/views/HomePage.jsx
import React from 'react';
import { DianBotonesVista } from './DianBotonesVista';
import '../assets/css/HomePage.css';

export const PaginaInicio = () => {
    return (
        <section className='cont-Info'>
            <article className='cont-Info__Texto'>
                <div className='cont-Info__Titul'>
                    <h1>Régimen Tributario Especial - RTE</h1>
                </div>
                <div className='cont-Info__Parrafo'>
                    <p>
                        De acuerdo con el Decreto 2150, articulo 1.2.1.5.1.5, los sujetos obligados al registro web para el trámite de solicitud de permanencia en el Régimen Tributario Especial,
                        como es el caso de la Cooperativa Inversiones y Planes de la Paz, deberán publicar en su página web por el termino de 10 días calendario y simultáneamente a la publicación
                        que realice la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN), la información y sus anexos con el fin de garantizar la participación de
                        la sociedad civil a través de los comentarios que se consideren pertinentes.
                    </p>
                </div>
            </article>
            <article className='cont-Info__Btns'>
                <DianBotonesVista />
            </article>
        </section>
    );
};
const HomePageError = () => {
    return (
        <div>
            <h1>
                Página no encontrada
            </h1>
            <p>
                La página que buscas no existe. Por favor, verifica la URL e intenta nuevamente.
            </p>
        </div>
    );
};

export default HomePageError;
