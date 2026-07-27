import { Trash2 } from "lucide-react";


function SaleTable({

  sales,

  deleteSale,

  updateSaleStatus

}){



  function changeStatus(id,status){


    updateSaleStatus(

      id,

      status

    );


  }






  return(


    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">



      <table className="w-full">



        <thead className="bg-slate-100">


          <tr>


            <th className="p-4 text-left">
              Código
            </th>


            <th className="p-4 text-left">
              Fecha
            </th>


            <th className="p-4 text-left">
              Cliente
            </th>


            <th className="p-4 text-left">
              Productos
            </th>


            <th className="p-4 text-left">
              Pago
            </th>


            <th className="p-4 text-left">
              Estado
            </th>


            <th className="p-4 text-left">
              Total
            </th>


            <th className="p-4 text-left">
              Acción
            </th>


          </tr>


        </thead>






        <tbody>



        {


          sales.map((sale)=>(



            <tr

              key={sale.id}

              className="border-t hover:bg-slate-50"

            >




              <td className="p-4">

                {sale.code}

              </td>






              <td className="p-4">

                {sale.date}

              </td>






              <td className="p-4 font-semibold">

                {sale.client || "Cliente general"}

              </td>







              <td className="p-4">


                {


                  sale.items && sale.items.length > 0


                  ?


                  sale.items.map((item,index)=>(


                    <div key={index}>


                      {item.product}


                      <span className="text-slate-500">


                        {" "}x{item.quantity}


                      </span>


                    </div>


                  ))



                  :



                  <span>

                    Sin productos

                  </span>


                }



              </td>








              <td className="p-4">


                {sale.payment || "Efectivo"}


              </td>









              <td className="p-4">



                <select



                  value={sale.status || "Pagada"}



                  onChange={(e)=>

                    changeStatus(

                      sale.id,

                      e.target.value

                    )

                  }



                  className={`

                    border

                    rounded-lg

                    p-2

                    font-semibold


                    ${

                      sale.status==="Pagada"

                      ?

                      "text-green-600"

                      :

                      sale.status==="Pendiente"

                      ?

                      "text-yellow-600"

                      :

                      "text-red-600"

                    }


                  `}



                >



                  <option value="Pagada">

                    Pagada

                  </option>



                  <option value="Pendiente">

                    Pendiente

                  </option>



                  <option value="Anulada">

                    Anulada

                  </option>



                </select>



              </td>









              <td className="p-4 text-green-600 font-bold">


                S/ {Number(sale.total).toFixed(2)}


              </td>








              <td className="p-4">



                <button


                  onClick={()=>deleteSale(sale.id)}



                  className="

                  p-2

                  rounded-lg

                  hover:bg-red-100

                  "



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



export default SaleTable;