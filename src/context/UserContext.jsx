import { createContext, useState, useEffect } from "react";


export const UserContext = createContext();




export function UserProvider({children}){



  const [usuarios,setUsuarios]=useState(()=>{


    const saved = localStorage.getItem("users");


    return saved

      ? JSON.parse(saved)

      : [

          {

            id:1,

            nombre:"Administrador",

            usuario:"admin",

            password:"123456",

            rol:"Administrador"

          }

        ];


  });







  useEffect(()=>{


    localStorage.setItem(

      "users",

      JSON.stringify(usuarios)

    );


  },[usuarios]);









  function addUsuario(usuario){



    const nuevoUsuario={


      id:Date.now(),


      ...usuario


    };



    setUsuarios([


      ...usuarios,


      nuevoUsuario


    ]);



  }









  function updateUsuario(id,data){



    setUsuarios(


      usuarios.map(user=>


        user.id===id

        ?

        {

          ...user,

          ...data

        }


        :

        user


      )


    );


  }









  function deleteUsuario(id){



    setUsuarios(


      usuarios.filter(


        user=>user.id!==id


      )


    );


  }









  function getPermisos(rol){



    if(rol==="Administrador"){


      return {


        caja:true,

        ventas:true,

        compras:true,

        productos:true,

        clientes:true,

        usuarios:true,

        configuracion:true


      };


    }







    if(rol==="Cajero"){


      return {


        caja:true,

        ventas:true,

        compras:false,

        productos:false,

        clientes:true,

        usuarios:false,

        configuracion:false


      };


    }








    if(rol==="Vendedor"){


      return {


        caja:false,

        ventas:true,

        compras:false,

        productos:false,

        clientes:true,

        usuarios:false,

        configuracion:false


      };


    }







    return {};



  }











  return(



    <UserContext.Provider



      value={{


        usuarios,


        addUsuario,


        updateUsuario,


        deleteUsuario,


        getPermisos



      }}



    >



      {children}



    </UserContext.Provider>



  );



}