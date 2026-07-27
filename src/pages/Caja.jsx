import { useState, useContext } from "react";


import CajaResumen from "../components/caja/CajaResumen";
import CajaMovimientos from "../components/caja/CajaMovimientos";
import MovimientoModal from "../components/caja/MovimientoModal";
import AperturaCajaModal from "../components/caja/AperturaCajaModal";
import CierreCajaModal from "../components/caja/CierreCajaModal";
import HistorialCierres from "../components/caja/HistorialCierres";


import { CashContext } from "../context/CashContext";





function Caja(){



  const {


    cajaAbierta,

    abrirCaja,

    cerrarCaja,

    saldoInicial,

    saldoActual


  } = useContext(CashContext);








  const [openIngreso,setOpenIngreso]=useState(false);

  const [openEgreso,setOpenEgreso]=useState(false);

  const [openApertura,setOpenApertura]=useState(false);

  const [openCierre,setOpenCierre]=useState(false);









  return(



    <div>







      <div className="flex justify-between items-center mb-8">





        <div>


          <h1 className="text-3xl font-bold">

            Caja

          </h1>



          <p className="text-slate-500">

            Control de ingresos, egresos y cierres de caja

          </p>


        </div>








        <div className="flex gap-3">







          {


            !cajaAbierta && (



              <button


                onClick={()=>setOpenApertura(true)}


                className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"


              >

                + Abrir caja


              </button>



            )


          }








          {


            cajaAbierta && (



              <button


                onClick={()=>setOpenCierre(true)}


                className="bg-slate-700 text-white px-5 py-3 rounded-xl hover:bg-slate-800"


              >

                Cerrar caja


              </button>



            )


          }









          <button


            onClick={()=>setOpenIngreso(true)}


            disabled={!cajaAbierta}


            className="bg-green-600 disabled:bg-gray-400 text-white px-5 py-3 rounded-xl"


          >

            + Ingreso


          </button>









          <button


            onClick={()=>setOpenEgreso(true)}


            disabled={!cajaAbierta}


            className="bg-red-600 disabled:bg-gray-400 text-white px-5 py-3 rounded-xl"


          >

            + Egreso


          </button>







        </div>





      </div>













      <div className="bg-white rounded-2xl border shadow-sm p-5 mb-6">





        <div className="flex justify-between items-center">





          <div>


            <p className="text-slate-500">

              Estado de caja

            </p>



            <h2 className={

              cajaAbierta

              ?

              "text-green-600 text-2xl font-bold"

              :

              "text-red-600 text-2xl font-bold"

            }>


              {


                cajaAbierta

                ?

                "CAJA ABIERTA"

                :

                "CAJA CERRADA"


              }


            </h2>


          </div>







          <div>


            <p className="text-slate-500">

              Saldo inicial

            </p>


            <p className="text-xl font-bold">

              S/ {Number(saldoInicial).toFixed(2)}

            </p>


          </div>









          <div>


            <p className="text-slate-500">

              Saldo actual

            </p>


            <p className="text-xl font-bold text-emerald-600">

              S/ {Number(saldoActual).toFixed(2)}

            </p>


          </div>






        </div>






      </div>









      <CajaResumen />









      <div className="mt-8">


        <CajaMovimientos />


      </div>









      <HistorialCierres />













      {


        openIngreso && (



          <MovimientoModal


            type="Ingreso"


            close={()=>setOpenIngreso(false)}


          />


        )


      }









      {


        openEgreso && (



          <MovimientoModal


            type="Egreso"


            close={()=>setOpenEgreso(false)}


          />


        )


      }









      {


        openApertura && (



          <AperturaCajaModal


            close={()=>setOpenApertura(false)}


            abrirCaja={abrirCaja}


          />


        )


      }









      {


        openCierre && (



          <CierreCajaModal


            close={()=>setOpenCierre(false)}


            saldoEsperado={saldoActual}


            cerrarCaja={cerrarCaja}


          />


        )


      }






    </div>


  );


}





export default Caja;