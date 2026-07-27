import { useContext } from "react";


import {
  DollarSign,
  Package,
  Users,
  AlertTriangle,
  TrendingUp,
  Wallet,
  Boxes,
  ShoppingCart
} from "lucide-react";


import Card from "../components/Card";


import SalesChart from "../components/charts/SalesChart";

import TopProducts from "../components/charts/TopProducts";


import { InventoryContext } from "../context/InventoryContext";






function Dashboard(){



  const {

    products,

    purchases,

    sales,

    clients


  } = useContext(InventoryContext);







  // SOLO VENTAS PAGADAS CUENTAN



  const paidSales = sales.filter(


    sale=>sale.status==="Pagada"


  );









  const totalProductos = products.length;



  const totalClientes = clients.length;









  // VENTAS COBRADAS



  const ventasTotales = paidSales.reduce(


    (total,sale)=>


      total + Number(sale.total),


    0


  );









  // STOCK TOTAL EN UNIDADES



  const stockTotal = products.reduce(


    (total,product)=>


      total + Number(product.stock),


    0


  );









  // VALOR ACTUAL DEL INVENTARIO



  const valorInventarioActual = products.reduce(


    (total,product)=>


      total +

      (

        Number(product.stock)

        *

        Number(product.buyPrice)

      ),


    0


  );









  // COMPRAS ACUMULADAS



  const comprasAcumuladas = purchases.reduce(


    (total,purchase)=>


      total + Number(purchase.total),


    0


  );









  // COSTO DE PRODUCTOS VENDIDOS



  const costoVentas = paidSales.reduce(


    (total,sale)=>{



      const costoVenta = sale.items?.reduce(


        (sum,item)=>{



          const product = products.find(


            p=>p.name===item.product


          );





          if(product){


            return sum +


            (

              Number(product.buyPrice)

              *

              Number(item.quantity)

            );


          }





          return sum;



        },


        0


      ) || 0;






      return total + costoVenta;



    },


    0


  );









  // GANANCIA REAL



  const gananciaTotal =


    ventasTotales

    -

    costoVentas;









  // MARGEN DE GANANCIA



  const margen = ventasTotales > 0


  ?


  (

    gananciaTotal /

    ventasTotales

  )

  *

  100


  :


  0;









  const stockBajo = products.filter(


    product=>Number(product.stock)<=10


  ).length;









  const totalCompras = purchases.length;









  return(



    <div>






      <h1 className="text-3xl font-bold text-slate-800">

        Dashboard

      </h1>






      <p className="text-slate-500 mt-1">

        Resumen financiero y operativo del negocio

      </p>









      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 mt-8">






        <Card


          title="Ventas cobradas"


          value={`S/ ${ventasTotales.toFixed(2)}`}


          icon={DollarSign}


          color="bg-green-500"


        />







        <Card


          title="Inventario actual"


          value={`S/ ${valorInventarioActual.toFixed(2)}`}


          icon={Boxes}


          color="bg-blue-500"


        />







        <Card


          title="Compras acumuladas"


          value={`S/ ${comprasAcumuladas.toFixed(2)}`}


          icon={ShoppingCart}


          color="bg-orange-500"


        />







        <Card


          title="Ganancia real"


          value={`S/ ${gananciaTotal.toFixed(2)}`}


          icon={TrendingUp}


          color="bg-emerald-500"


        />







        <Card


          title="Clientes"


          value={totalClientes}


          icon={Users}


          color="bg-purple-500"


        />







        <Card


          title="Stock bajo"


          value={stockBajo}


          icon={AlertTriangle}


          color="bg-red-500"


        />





      </div>









      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">







        <div className="bg-white rounded-2xl shadow-sm border p-6">



          <h2 className="text-xl font-bold mb-4">

            Inventario

          </h2>







          <div className="space-y-3">





            <div className="flex justify-between">

              <span>

                Unidades disponibles

              </span>


              <span className="font-bold">

                {stockTotal}

              </span>


            </div>






            <div className="flex justify-between">

              <span>

                Compras registradas

              </span>


              <span className="font-bold">

                {totalCompras}

              </span>


            </div>






            <div className="flex justify-between">

              <span>

                Margen ganancia

              </span>


              <span className="font-bold">

                {margen.toFixed(1)}%

              </span>


            </div>





          </div>





        </div>









        <div className="bg-white rounded-2xl shadow-sm border p-6">



          <h2 className="text-xl font-bold mb-4">

            Alertas

          </h2>






          {


            stockBajo===0


            ?



            <p className="text-green-600 font-semibold">

              No hay productos con stock bajo.

            </p>



            :



            <div className="space-y-2">



              {


                products

                .filter(

                  product=>Number(product.stock)<=10

                )

                .map(product=>(



                  <div

                    key={product.id}

                    className="flex justify-between border-b pb-2"

                  >



                    <span>

                      {product.name}

                    </span>




                    <span className="text-red-600 font-bold">

                      {product.stock}

                    </span>




                  </div>



                ))



              }



            </div>



          }




        </div>





      </div>









      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">



        <SalesChart

          sales={paidSales}

        />





        <TopProducts

          sales={paidSales}

        />



      </div>






    </div>



  );


}



export default Dashboard;