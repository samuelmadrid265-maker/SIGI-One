import { Trash2 } from "lucide-react";


function ProviderTable({

  providers,
  deleteProvider

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
              Empresa / Nombre
            </th>


            <th className="p-4 text-left">
              RUC
            </th>


            <th className="p-4 text-left">
              Teléfono
            </th>


            <th className="p-4 text-left">
              Dirección
            </th>


            <th className="p-4 text-left">
              Acción
            </th>


          </tr>


        </thead>



        <tbody>


        {


          providers.map((provider)=>(


            <tr

              key={provider.id}

              className="border-t hover:bg-slate-50"

            >



              <td className="p-4">

                {provider.code}

              </td>




              <td className="p-4 font-semibold">

                {provider.name}

              </td>




              <td className="p-4">

                {provider.ruc}

              </td>




              <td className="p-4">

                {provider.phone}

              </td>




              <td className="p-4">

                {provider.address}

              </td>




              <td className="p-4">


                <button

                  onClick={()=>deleteProvider(provider.id)}

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


export default ProviderTable;