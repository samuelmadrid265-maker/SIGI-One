import { useState, useContext } from "react";


import ClientTable from "../components/clients/ClientTable";
import ClientForm from "../components/clients/ClientForm";
import StatsCard from "../components/stats/StatsCard";


import { InventoryContext } from "../context/InventoryContext.jsx";


import {
  Users,
  UserCheck,
  UserPlus
} from "lucide-react";




function Clientes(){



  const context = useContext(InventoryContext);



  if(!context){

    return (

      <div className="p-8">

        Error: InventoryContext no está conectado.

      </div>

    );

  }





  const {

    clients,

    addClient,

    deleteClient


  } = context;







  const [search,setSearch] = useState("");







  function handleAddClient(client){



    if(client.document.length < 8){


      alert(
        "El documento debe tener mínimo 8 caracteres"
      );


      return;


    }



    addClient(client);


  }








  const filteredClients = clients.filter((client)=>



    client.name

    .toLowerCase()

    .includes(search.toLowerCase())



  );








  const activeClients = clients.filter(


    client=>client.status==="Activo"


  ).length;










  return(


    <div>




      <div className="flex justify-between items-center mb-8">



        <div>



          <h1 className="text-3xl font-bold">

            Clientes

          </h1>




          <p className="text-slate-500">

            Gestión de clientes registrados

          </p>



        </div>






        <ClientForm

          addClient={handleAddClient}

        />



      </div>








      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">



        <StatsCard

          title="Total clientes"

          value={clients.length}

          icon={<Users />}

        />





        <StatsCard

          title="Clientes activos"

          value={activeClients}

          icon={<UserCheck />}

        />





        <StatsCard

          title="Nuevos clientes"

          value={clients.length}

          icon={<UserPlus />}

        />



      </div>









      <input



        type="text"



        placeholder="Buscar cliente..."



        value={search}



        onChange={(e)=>setSearch(e.target.value)}



        className="w-full border rounded-xl p-3 mb-5"



      />









      <ClientTable



        clients={filteredClients}



        deleteClient={deleteClient}



      />





    </div>


  );


}




export default Clientes;