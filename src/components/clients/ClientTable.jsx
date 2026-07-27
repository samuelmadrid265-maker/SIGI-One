import { Trash2 } from "lucide-react";


function ClientTable({

  clients,
  deleteClient

}){


  return(

    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">


      <table className="w-full">


        <thead className="bg-slate-100">

          <tr>


            <th className="p-4 text-left">
              Código
            </th>


            <th className="p-4 text-left">
              Nombre
            </th>


            <th className="p-4 text-left">
              Documento
            </th>


            <th className="p-4 text-left">
              Teléfono
            </th>


            <th className="p-4 text-left">
              Dirección
            </th>


            <th className="p-4 text-left">
              Estado
            </th>


            <th className="p-4 text-left">
              Acción
            </th>


          </tr>

        </thead>



        <tbody>


        {

          clients.map((client)=>(


            <tr

              key={client.id}

              className="border-t hover:bg-slate-50"

            >


              <td className="p-4">

                {client.code}

              </td>



              <td className="p-4 font-semibold">

                {client.name}

              </td>



              <td className="p-4">

                {client.document}

              </td>



              <td className="p-4">

                {client.phone}

              </td>



              <td className="p-4">

                {client.address}

              </td>




              <td className="p-4">


                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">

                  🟢 {client.status}

                </span>


              </td>




              <td className="p-4">


                <button

                  onClick={()=>deleteClient(client.id)}

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


export default ClientTable;