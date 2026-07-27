import { useState } from "react";


function CierreCajaModal({

  close,

  saldoEsperado,

  cerrarCaja


}){


  const [dineroContado,setDineroContado]=useState("");

  const [observacion,setObservacion]=useState("");







  const diferencia =

    Number(dineroContado || 0)

    -

    Number(saldoEsperado);









  function confirmar(){


    const cierre={


      contado:Number(dineroContado),


      diferencia,


      observacion


    };



    cerrarCaja(cierre);


    close();


  }









  return(


    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">



      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">





        <h2 className="text-2xl font-bold mb-6">

          Cierre de caja

        </h2>







        <div className="space-y-4">





          <div>


            <p className="text-slate-500">

              Saldo esperado

            </p>


            <p className="text-2xl font-bold">

              S/ {Number(saldoEsperado).toFixed(2)}

            </p>


          </div>







          <div>


            <label className="text-slate-600">

              Dinero contado

            </label>



            <input


              type="number"


              value={dineroContado}


              onChange={(e)=>

                setDineroContado(e.target.value)

              }


              className="w-full border rounded-lg p-3 mt-2"


              placeholder="Ingrese monto contado"


            />


          </div>








          <div>


            <label className="text-slate-600">

              Diferencia

            </label>



            <p

              className={

                diferencia===0

                ?

                "text-green-600 font-bold text-xl"

                :

                diferencia>0

                ?

                "text-blue-600 font-bold text-xl"

                :

                "text-red-600 font-bold text-xl"

              }

            >

              S/ {diferencia.toFixed(2)}

            </p>


          </div>








          <div>


            <label className="text-slate-600">

              Observación

            </label>



            <textarea


              value={observacion}


              onChange={(e)=>

                setObservacion(e.target.value)

              }


              className="w-full border rounded-lg p-3 mt-2"


              placeholder="Comentario del cierre"


            />


          </div>





        </div>








        <div className="flex gap-3 mt-6">





          <button


            onClick={close}


            className="

            flex-1

            bg-slate-200

            py-3

            rounded-xl

            "


          >

            Cancelar

          </button>







          <button


            onClick={confirmar}


            className="

            flex-1

            bg-red-600

            text-white

            py-3

            rounded-xl

            "


          >

            Confirmar cierre

          </button>





        </div>






      </div>



    </div>


  );


}


export default CierreCajaModal;