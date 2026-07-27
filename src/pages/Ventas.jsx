import { useContext, useState } from "react";


import SaleForm from "../components/sales/SaleForm";

import SaleTable from "../components/sales/SaleTable";

import StatsCard from "../components/stats/StatsCard";


import { InventoryContext } from "../context/InventoryContext";


import {
  ShoppingBag,
  DollarSign,
  Package
} from "lucide-react";





function Ventas(){



  const {


    sales,

    setSales,

    addSale,

    updateSaleStatus



  } = useContext(InventoryContext);







  const [search,setSearch]=useState("");








  function deleteSale(id){



    setSales(


      sales.filter(


        sale=>sale.id!==id


      )


    );



  }








  const filteredSales = sales.filter((sale)=>{


    const text = sale.items

    ?

    sale.items

    .map(item=>item.product)

    .join(" ")

    :

    sale.product || "";




    return text

    .toLowerCase()

    .includes(search.toLowerCase());



  });









  const ventasPagadas = sales.filter(


    sale=>sale.status==="Pagada"


  );








  const totalVentas = ventasPagadas.reduce(


    (total,sale)=>


      total + Number(sale.total),


    0


  );









  const productosVendidos = ventasPagadas.reduce(


    (total,sale)=>{


      if(sale.items){


        return total +

        sale.items.reduce(

          (sum,item)=>

            sum + Number(item.quantity),

          0

        );


      }



      return total;


    },


    0


  );












  return(



    <div>






      <div className="flex justify-between items-center mb-8">





        <div>


          <h1 className="text-3xl font-bold">

            Ventas

          </h1>



          <p className="text-slate-500">

            Registro y control de ventas

          </p>



        </div>






        <SaleForm

          addSale={addSale}

        />



      </div>









      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">





        <StatsCard


          title="Ventas pagadas"


          value={ventasPagadas.length}


          icon={<ShoppingBag />}


        />






        <StatsCard


          title="Ingresos"


          value={`S/ ${totalVentas.toFixed(2)}`}


          icon={<DollarSign />}


        />






        <StatsCard


          title="Productos vendidos"


          value={productosVendidos}


          icon={<Package />}


        />



      </div>









      <input



        type="text"



        placeholder="Buscar venta..."



        value={search}



        onChange={(e)=>

          setSearch(e.target.value)

        }



        className="w-full border rounded-xl p-3 mb-5"



      />









      <SaleTable



        sales={filteredSales}



        deleteSale={deleteSale}



        updateSaleStatus={updateSaleStatus}



      />





    </div>



  );


}



export default Ventas;