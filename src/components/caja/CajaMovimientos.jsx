import { useContext } from "react";

import { CashContext } from "../../context/CashContext";

import { Trash2 } from "lucide-react";



function CajaMovimientos() {



  const {

    movimientosCaja,

    deleteMovement


  } = useContext(CashContext);







  return (



    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">





      <div className="p-6 border-b">


        <h2 className="text-xl font-bold">

          Historial de movimientos

        </h2>


      </div>







      {


        movimientosCaja.length===0



        ?



        <div className="p-10 text-center text-slate-500">


          Aún no hay movimientos registrados.


        </div>





        :





        <table className="w-full">



          <thead className="bg-slate-100">


            <tr>


              <th className="p-4 text-left">

                Fecha

              </th>



              <th className="p-4 text-left">

                Tipo

              </th>



              <th className="p-4 text-left">

                Descripción

              </th>



              <th className="p-4 text-left">

                Monto

              </th>



              <th className="p-4 text-left">

                Acción

              </th>



            </tr>


          </thead>







          <tbody>


          {


            movimientosCaja.map((movimiento)=>(



              <tr

                key={movimiento.id}

                className="border-t hover:bg-slate-50"

              >





                <td className="p-4">

                  {movimiento.date}

                </td>






                <td className="p-4">


                  <span

                    className={

                      movimiento.type==="Ingreso"

                      ?

                      "px-3 py-1 rounded-full bg-green-100 text-green-700"

                      :

                      "px-3 py-1 rounded-full bg-red-100 text-red-700"

                    }

                  >

                    {movimiento.type}

                  </span>


                </td>







                <td className="p-4">


                  {movimiento.description}


                </td>







                <td

                  className={`p-4 font-bold ${

                    movimiento.type==="Ingreso"

                    ?

                    "text-green-600"

                    :

                    "text-red-600"

                  }`}

                >


                  S/ {Number(movimiento.amount).toFixed(2)}


                </td>








                <td className="p-4">


                  <button


                    onClick={()=>deleteMovement(movimiento.id)}


                    className="p-2 rounded-lg hover:bg-red-100"


                  >


                    <Trash2

                      size={18}

                      className="text-red-600"

                    />


                  </button>


                </td>







              </tr>



            ))



          }



          </tbody>



        </table>



      }



    </div>


  );

}



export default CajaMovimientos;