import { Trash2, Pencil } from "lucide-react";


function ProductTable({

  products,

  deleteProduct,

  setEditingProduct

}){

console.log("TABLA PRODUCTOS:", products);



  function stockStatus(stock){


    if(stock === 0){

      return (

        <span className="
        px-3 py-1
        rounded-full
        bg-red-100
        text-red-700
        font-semibold
        text-sm
        ">

          🔴 Agotado

        </span>

      );

    }



    if(stock <= 10){

      return (

        <span className="
        px-3 py-1
        rounded-full
        bg-yellow-100
        text-yellow-700
        font-semibold
        text-sm
        ">

          🟡 Bajo stock

        </span>

      );

    }





    return (

      <span className="
      px-3 py-1
      rounded-full
      bg-green-100
      text-green-700
      font-semibold
      text-sm
      ">

        🟢 Disponible

      </span>

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
              Producto
            </th>


            <th className="p-4 text-left">
              Categoría
            </th>


            <th className="p-4 text-left">
              Stock
            </th>


            <th className="p-4 text-left">
              Estado
            </th>


            <th className="p-4 text-left">
              Compra
            </th>


            <th className="p-4 text-left">
              Venta
            </th>


            <th className="p-4 text-left">
              Ganancia
            </th>


            <th className="p-4 text-left">
              Acción
            </th>


          </tr>


        </thead>





        <tbody>


        {


          products.map((product)=>(


            <tr

              key={product.id}

              className="border-t hover:bg-slate-50"

            >



              <td className="p-4">

                {product.code}

              </td>





              <td className="p-4 font-semibold">

                {product.name}

              </td>





              <td className="p-4">

                {product.category}

              </td>





              <td className="p-4 font-bold">


                {product.stock}


              </td>





              <td className="p-4">


                {stockStatus(product.stock)}


              </td>





              <td className="p-4">

                S/ {Number(product.buyPrice).toFixed(2)}

              </td>





              <td className="p-4">

                S/ {Number(product.salePrice).toFixed(2)}

              </td>





              <td className="p-4 text-green-600 font-bold">


                S/ {(Number(product.salePrice) - Number(product.buyPrice)).toFixed(2)}


              </td>





              <td className="p-4 flex gap-2">


                <button

                  onClick={()=>setEditingProduct(product)}

                  className="p-2 rounded-lg hover:bg-blue-100"

                >

                  <Pencil

                    size={18}

                    className="text-blue-600"

                  />

                </button>





                <button

                  onClick={()=>deleteProduct(product.id)}

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


export default ProductTable;