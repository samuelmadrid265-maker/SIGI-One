import { createContext, useEffect, useState } from "react";

import { generateCode } from "../utils/helpers";

export const ClientContext = createContext();

export function ClientProvider({ children }) {

  const initialClients = [

    {
      id:1,
      code:"CLI-0001",
      name:"Juan Pérez",
      document:"12345678",
      phone:"999999999",
      address:"Piura",
      status:"Activo"
    },

    {
      id:2,
      code:"CLI-0002",
      name:"María López",
      document:"87654321",
      phone:"988888888",
      address:"Castilla",
      status:"Activo"
    }

  ];



  const initialProviders=[

    {
      id:1,
      code:"PROV-0001",
      name:"Distribuidora Norte",
      ruc:"20123456789",
      phone:"999111222",
      address:"Piura"
    },

    {
      id:2,
      code:"PROV-0002",
      name:"Abarrotes El Sol",
      ruc:"20987654321",
      phone:"988777666",
      address:"Castilla"
    }

  ];



  const [clients,setClients]=useState(()=>{

    const saved=localStorage.getItem("clients");

    return saved

      ? JSON.parse(saved)

      : initialClients;

  });



  const [providers,setProviders]=useState(()=>{

    const saved=localStorage.getItem("providers");

    return saved

      ? JSON.parse(saved)

      : initialProviders;

  });



  useEffect(()=>{

    localStorage.setItem(

      "clients",

      JSON.stringify(clients)

    );

  },[clients]);



  useEffect(()=>{

    localStorage.setItem(

      "providers",

      JSON.stringify(providers)

    );

  },[providers]);



  function addClient(client){

    const newClient={

      ...client,

      id:Date.now(),

      code:generateCode(

        "CLI",

        clients.length

      ),

      status:"Activo"

    };



    setClients([

      ...clients,

      newClient

    ]);

  }



  function deleteClient(id){

    setClients(

      clients.filter(

        c=>c.id!==id

      )

    );

  }



  function addProvider(provider){

    const newProvider={

      ...provider,

      id:Date.now(),

      code:generateCode(

        "PROV",

        providers.length

      )

    };



    setProviders([

      ...providers,

      newProvider

    ]);

  }



  function deleteProvider(id){

    setProviders(

      providers.filter(

        p=>p.id!==id

      )

    );

  }



  return(

    <ClientContext.Provider

      value={{

        clients,

        providers,

        addClient,

        deleteClient,

        addProvider,

        deleteProvider,

        setClients,

        setProviders

      }}

    >

      {children}

    </ClientContext.Provider>

  );

}