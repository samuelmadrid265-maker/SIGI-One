import { useState } from "react";

import ConfigEmpresa from "../components/comprobantes/ConfigEmpresa";
import GenerarBoleta from "../components/comprobantes/GenerarBoleta";
import BoletaPreview from "../components/comprobantes/BoletaPreview";
import HistorialComprobantes from "../components/comprobantes/HistorialComprobantes";

function Comprobantes(){

  const [boleta,setBoleta]=useState(null);

  return(

    <div>

      <div className="mb-8">

        <h1 className="text-3xl font-bold">

          Comprobantes

        </h1>

        <p className="text-slate-500">

          Gestión de boletas y documentos de venta

        </p>

      </div>





      <ConfigEmpresa />





      <GenerarBoleta

        setBoleta={setBoleta}

      />





      <BoletaPreview

        key={boleta?.id || boleta?.code}

       boleta={boleta}

     />





      <HistorialComprobantes

        setBoleta={setBoleta}

      />



    </div>

  );

}

export default Comprobantes;