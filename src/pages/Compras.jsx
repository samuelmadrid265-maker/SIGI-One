import { useState, useContext } from "react";

import PurchaseTable from "../components/purchases/PurchaseTable";
import PurchaseForm from "../components/purchases/PurchaseForm";
import StatsCard from "../components/stats/StatsCard";

import { InventoryContext } from "../context/InventoryContext";

import {
  ShoppingCart,
  DollarSign,
  CalendarDays
} from "lucide-react";


function Compras(){


  const {

    purchases,
    addPurchase,
    setPurchases

  } = useContext(InventoryContext);



  const [search,setSearch] = useState("");




  function deletePurchase(id){

    setPurchases(

      purchases.filter(

        purchase=>purchase.id !== id

      )

    );

  }




  const filteredPurchases = purchases.filter((purchase)=>{


    const productos = purchase.items

      ? purchase.items.map(item=>item.product).join(" ")

      : purchase.product || "";



    return productos

      .toLowerCase()

      .includes(search.toLowerCase());


  });





  const totalInvertido = purchases.reduce(

    (total,purchase)=>

      total + Number(purchase.total || 0),

    0

  );





  const ultimaCompra = purchases.length;





  return(

    <div>


      <div className="flex justify-between items-center mb-8">


        <div>

          <h1 className="text-3xl font-bold">

            Compras

          </h1>


          <p className="text-slate-500">

            Registro de compras a proveedores

          </p>


        </div>



        <PurchaseForm

          addPurchase={addPurchase}

        />


      </div>





      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">


        <StatsCard

          title="Total compras"

          value={purchases.length}

          icon={<ShoppingCart />}

        />



        <StatsCard

          title="Total invertido"

          value={`S/ ${totalInvertido.toFixed(2)}`}

          icon={<DollarSign />}

        />



        <StatsCard

          title="Última compra"

          value={ultimaCompra}

          icon={<CalendarDays />}

        />


      </div>





      <input

        type="text"

        placeholder="Buscar compra..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="w-full border rounded-xl p-3 mb-5"

      />





      <PurchaseTable

        purchases={filteredPurchases}

        deletePurchase={deletePurchase}

      />


    </div>

  );

}



export default Compras;