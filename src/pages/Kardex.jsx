import { useState, useContext } from "react";

import KardexTable from "../components/kardex/KardexTable";
import StatsCard from "../components/stats/StatsCard";

import { InventoryContext } from "../context/InventoryContext";

import {
  Package,
  ArrowDownCircle,
  ArrowUpCircle
} from "lucide-react";



function Kardex(){


  const {

    movements,
    setMovements

  } = useContext(InventoryContext);





  const [search,setSearch] = useState("");






  function deleteMovement(id){


    setMovements(

      movements.filter(

        movement=>movement.id !== id

      )

    );


  }








  const filteredMovements = movements.filter((movement)=>

    movement.product

    .toLowerCase()

    .includes(search.toLowerCase())

  );







  const totalEntries = movements.reduce(

    (total,movement)=>

      total + Number(movement.entry),

    0

  );







  const totalExits = movements.reduce(

    (total,movement)=>

      total + Number(movement.exit),

    0

  );








  const currentStock = movements.length > 0

    ?

    movements[movements.length - 1].stock

    :

    0;







  return(


    <div>





      <div className="mb-8">


        <h1 className="text-3xl font-bold">

          Kardex

        </h1>



        <p className="text-slate-500">

          Control de movimientos de inventario

        </p>


      </div>








      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">



        <StatsCard

          title="Stock actual"

          value={currentStock}

          icon={<Package />}

        />





        <StatsCard

          title="Entradas"

          value={totalEntries}

          icon={<ArrowDownCircle />}

        />





        <StatsCard

          title="Salidas"

          value={totalExits}

          icon={<ArrowUpCircle />}

        />



      </div>







      <input


        type="text"


        placeholder="Buscar producto..."


        value={search}


        onChange={(e)=>setSearch(e.target.value)}


        className="w-full border rounded-xl p-3 mb-5"



      />








      <KardexTable


        movements={filteredMovements}


        deleteMovement={deleteMovement}



      />





    </div>


  );

}



export default Kardex;