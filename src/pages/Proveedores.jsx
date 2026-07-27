import { useState, useContext } from "react";

import ProviderTable from "../components/providers/ProviderTable";
import ProviderForm from "../components/providers/ProviderForm";

import { InventoryContext } from "../context/InventoryContext";


function Proveedores(){


  const {

    providers,
    addProvider,
    deleteProvider

  } = useContext(InventoryContext);





  const [search,setSearch] = useState("");







  const filteredProviders = providers.filter((provider)=>

    provider.name

    .toLowerCase()

    .includes(search.toLowerCase())

  );








  return(


    <div>



      <div className="flex justify-between items-center mb-8">


        <div>


          <h1 className="text-3xl font-bold">

            Proveedores

          </h1>



          <p className="text-slate-500">

            Gestión de proveedores registrados

          </p>



        </div>




        <ProviderForm

          addProvider={addProvider}

        />



      </div>





      <input


        type="text"


        placeholder="Buscar proveedor..."


        value={search}


        onChange={(e)=>setSearch(e.target.value)}


        className="w-full border rounded-xl p-3 mb-5"



      />








      <ProviderTable


        providers={filteredProviders}


        deleteProvider={deleteProvider}



      />




    </div>

  );


}


export default Proveedores;