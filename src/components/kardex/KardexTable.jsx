import { Trash2 } from "lucide-react";


function KardexTable({

  movements,
  deleteMovement

}){


  return(

    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">


      <table className="w-full">


        <thead className="bg-slate-100">


          <tr>


            <th className="p-4 text-left">
              Fecha
            </th>


            <th className="p-4 text-left">
              Producto
            </th>


            <th className="p-4 text-left">
              Movimiento
            </th>


            <th className="p-4 text-left">
              Entrada
            </th>


            <th className="p-4 text-left">
              Salida
            </th>


            <th className="p-4 text-left">
              Stock
            </th>


            <th className="p-4 text-left">
              Acción
            </th>


          </tr>


        </thead>




        <tbody>


        {


          movements.map((movement)=>(


            <tr

              key={movement.id}

              className="border-t hover:bg-slate-50"

            >



              <td className="p-4">

                {movement.date}

              </td>





              <td className="p-4 font-semibold">

                {movement.product}

              </td>





              <td className="p-4">


                <span className={

                  movement.type === "Entrada"

                  ?

                  "px-3 py-1 rounded-full bg-green-100 text-green-700"

                  :

                  "px-3 py-1 rounded-full bg-red-100 text-red-700"

                }>

                  {movement.type}

                </span>


              </td>





              <td className="p-4 text-green-600 font-bold">

                {movement.entry}

              </td>





              <td className="p-4 text-red-600 font-bold">

                {movement.exit}

              </td>





              <td className="p-4 font-bold">

                {movement.stock}

              </td>





              <td className="p-4">


                <button

                  onClick={()=>deleteMovement(movement.id)}

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


    </div>


  );

}


export default KardexTable;