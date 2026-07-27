import { Trash2 } from "lucide-react";

function PurchaseTable({

  purchases,
  deletePurchase

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
              Fecha
            </th>

            <th className="p-4 text-left">
              Proveedor
            </th>

            <th className="p-4 text-left">
              Productos
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

          purchases.map((purchase)=>(

            <tr

              key={purchase.id}

              className="border-t hover:bg-slate-50"

            >

              <td className="p-4">

                {purchase.code}

              </td>

              <td className="p-4">

                {purchase.date}

              </td>

              <td className="p-4 font-semibold">

                {purchase.provider}

              </td>

              <td className="p-4">

                {

                  purchase.items.map((item,index)=>(

                    <div key={index}>

                      {item.product}

                      {" - "}
                      {item.quantity}
                      {" x S/ "}
                      {Number(item.price).toFixed(2)}

                    </div>

                  ))

                }

              </td>

              <td className="p-4 font-bold text-green-600">

                S/ {Number(purchase.total).toFixed(2)}

              </td>

              <td className="p-4">

                <button

                  onClick={()=>deletePurchase(purchase.id)}

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

export default PurchaseTable;