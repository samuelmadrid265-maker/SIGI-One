import { useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";

import UsuarioModal from "./UsuarioModal";

import { Trash2, Pencil } from "lucide-react";



function UsuariosTabla(){


  const {


    usuarios,

    deleteUsuario


  } = useContext(UserContext);




  const [open,setOpen]=useState(false);

  const [usuarioEditar,setUsuarioEditar]=useState(null);







  function editar(usuario){


    setUsuarioEditar(usuario);

    setOpen(true);


  }







  function nuevo(){


    setUsuarioEditar(null);

    setOpen(true);


  }








  return(



    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">





      <div className="p-6 flex justify-between items-center border-b">


        <h2 className="text-xl font-bold">

          Usuarios registrados

        </h2>





        <button


          onClick={nuevo}


          className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"

        >

          + Nuevo usuario

        </button>


      </div>









      {


        usuarios.length===0

        ?

        <div className="p-10 text-center text-slate-500">

          No existen usuarios registrados.

        </div>


        :



        <table className="w-full">


          <thead className="bg-slate-100">


            <tr>


              <th className="p-4 text-left">

                Nombre

              </th>


              <th className="p-4 text-left">

                Usuario

              </th>


              <th className="p-4 text-left">

                Rol

              </th>


              <th className="p-4 text-center">

                Acción

              </th>


            </tr>


          </thead>






          <tbody>


          {


            usuarios.map(user=>(



              <tr

                key={user.id}

                className="border-t"

              >



                <td className="p-4">

                  {user.nombre}

                </td>




                <td className="p-4">

                  {user.usuario}

                </td>




                <td className="p-4">

                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">

                    {user.rol}

                  </span>

                </td>




                <td className="p-4 flex justify-center gap-2">



                  <button

                    onClick={()=>editar(user)}

                    className="p-2 hover:bg-blue-100 rounded-lg"

                  >

                    <Pencil size={18}/>

                  </button>





                  <button

                    onClick={()=>deleteUsuario(user.id)}

                    className="p-2 hover:bg-red-100 rounded-lg"

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



      }




      {


        open &&


        <UsuarioModal


          close={()=>setOpen(false)}

          usuarioEditar={usuarioEditar}


        />


      }




    </div>


  );


}


export default UsuariosTabla;