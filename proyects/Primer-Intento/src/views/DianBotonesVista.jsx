import React, { useState, Suspense } from "react";
import { fetchData } from "../fetchData";
import { VistaPdf } from "../components/PdfViewer";

const apiDataBtns = fetchData("https://localhost:44356/api/MenusDian");

const DianBotonesVista = () => {
  const datos = apiDataBtns.leer();
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleButtonClick = (rutaArchivo) => {
    // Puedes cambiar la lógica aquí para obtener la URL del servidor
    const archivoPruebaLocal = `file:///C:/Users/pual.moreno/Downloads/Lista%20Precios%20Planes%202024.pdf`;
    const urlServidor = 'IP' + rutaArchivo;
    setPdfUrl(archivoPruebaLocal);
  };

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      {datos?.map((user) => (
        <div className="cont-Info__Btns_btn" key={user.id}>
          <button onClick={() => handleButtonClick(user.url)}>
            {user.nombre}
          </button>
        </div>
      ))}
      {pdfUrl && <VistaPdf url={pdfUrl} />}
    </Suspense>
  );
};

export { DianBotonesVista };
