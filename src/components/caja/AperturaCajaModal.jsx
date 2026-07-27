import { useState } from "react";

import Modal from "../Modal";


function AperturaCajaModal({

  close,

  abrirCaja

}){


  const [monto,setMonto]=useState("");





  function guardar(){


    if(Number(monto)<0){

      alert("Ingrese un monto válido");

      return;

    }



    abrirCaja(Number(monto));


    close();


  }







  return(


    <Modal close={close}>


      <h2 className="text-2xl font-bold mb-6">

        Apertura de caja

      </h2>





      <p className="text-slate-500 mb-4">

        Ingrese el dinero inicial con el que comienza la caja.

      </p>






      <input


        type="number"


        placeholder="Monto inicial"


        value={monto}


        onChange={(e)=>setMonto(e.target.value)}


        className="w-full border rounded-lg p-3 mb-5"


      />






      <button


        onClick={guardar}


        className="

        w-full

        bg-green-600

        hover:bg-green-700

        text-white

        py-3

        rounded-lg

        font-semibold

        "


      >

        Abrir caja

      </button>



    </Modal>


  );

}


export default AperturaCajaModal;