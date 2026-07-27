import { useContext, useMemo, useState } from "react";
import { InventoryContext } from "../../context/InventoryContext";
import { generarPDF } from "../../utils/pdfGenerator";

function HistorialComprobantes({ setBoleta }){

  const {

    sales,

    setSales

  } = useContext(InventoryContext);



  const [buscar,setBuscar]=useState("");



  const empresa=useMemo(()=>{

    const saved=localStorage.getItem("companyData");

    return saved

      ? JSON.parse(saved)

      : {};

  },[]);





  const comprobantes=sales.filter((sale)=>{

    const texto=buscar.toLowerCase();

    return(

      sale.client?.toLowerCase().includes(texto)

      ||

      sale.code?.toLowerCase().includes(texto)

      ||

      sale.date?.includes(texto)

    );

  });







  function eliminarComprobante(id){

    const confirmar=window.confirm(

      "¿Desea eliminar este comprobante?"

    );



    if(!confirmar){

      return;

    }



    const nuevasVentas=sales.filter(

      sale=>sale.id!==id

    );



    setSales(nuevasVentas);



    localStorage.setItem(

      "sales",

      JSON.stringify(nuevasVentas)

    );



    alert("Comprobante eliminado correctamente.");

  }







  return(

    <div className="bg-white rounded-2xl shadow-sm border p-6 mt-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">

          Historial de comprobantes

        </h2>



        <input

          type="text"

          placeholder="Buscar cliente, número o fecha..."

          value={buscar}

          onChange={(e)=>setBuscar(e.target.value)}

          className="border rounded-xl px-4 py-2 w-80"

        />

      </div>





      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-3 text-left">

                Boleta

              </th>

              <th className="p-3 text-left">

                Fecha

              </th>

              <th className="p-3 text-left">

                Cliente

              </th>

              <th className="p-3 text-center">

                Total

              </th>

              <th className="p-3 text-center">

                Estado

              </th>

              <th className="p-3 text-center">

                Acciones

              </th>

            </tr>

          </thead>





          <tbody>

          {

            comprobantes.length===0

            ?

            <tr>

              <td

                colSpan="6"

                className="text-center py-8 text-slate-500"

              >

                No existen comprobantes.

              </td>

            </tr>

            :

            comprobantes.map((sale)=>(

              <tr

                key={sale.id}

                className="border-t"

              >

                <td className="p-3">

                  {sale.code}

                </td>



                <td className="p-3">

                  {sale.date}

                </td>



                <td className="p-3">

                  {sale.client}

                </td>



                <td className="p-3 text-center">

                  S/ {Number(sale.total).toFixed(2)}

                </td>



                <td className="p-3 text-center">

                  {sale.status}

                </td>



                <td className="p-3">

                  <div className="flex justify-center gap-2 flex-wrap">

                    
                    <button

  onClick={()=>

    setBoleta({

      ...sale

    })

  }

  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"

>

  Ver

</button>



                    <button

                      onClick={()=>

                        generarPDF(

                          empresa,

                          sale

                        )

                      }

                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"

                    >

                      PDF

                    </button>



                    <button

                      onClick={()=>

                        eliminarComprobante(sale.id)

                      }

                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"

                    >

                      Eliminar

                    </button>

                  </div>

                </td>

              </tr>

            ))

          }

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default HistorialComprobantes;