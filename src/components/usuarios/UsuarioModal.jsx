import { useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";

import Modal from "../Modal";



function UsuarioModal({

  close,

  usuarioEditar

}){



  const {

    addUsuario,

    updateUsuario

  } = useContext(UserContext);






  const [nombre,setNombre]=useState(

    usuarioEditar?.nombre || ""

  );


  const [usuario,setUsuario]=useState(

    usuarioEditar?.usuario || ""

  );


  const [password,setPassword]=useState(

    usuarioEditar?.password || ""

  );


  const [rol,setRol]=useState(

    usuarioEditar?.rol || "Vendedor"

  );









  function guardar(){



    if(

      !nombre ||

      !usuario ||

      !password

    ){

      alert("Complete todos los campos");

      return;

    }







    const datos={


      nombre,

      usuario,

      password,

      rol


    };







    if(usuarioEditar){



      updateUsuario(

        usuarioEditar.id,

        datos

      );



    }else{



      addUsuario(datos);



    }






    close();


  }











  return(



    <Modal close={close}>



      <h2 className="text-2xl font-bold mb-6">


        {


          usuarioEditar

          ?

          "Editar usuario"

          :

          "Nuevo usuario"


        }


      </h2>








      <div className="space-y-4">






        <div>


          <label className="text-slate-600">

            Nombre completo

          </label>



          <input


            value={nombre}


            onChange={(e)=>setNombre(e.target.value)}


            className="w-full border rounded-xl p-3 mt-2"


            placeholder="Nombre"


          />


        </div>









        <div>


          <label className="text-slate-600">

            Usuario

          </label>



          <input


            value={usuario}


            onChange={(e)=>setUsuario(e.target.value)}


            className="w-full border rounded-xl p-3 mt-2"


            placeholder="Usuario de acceso"


          />


        </div>









        <div>


          <label className="text-slate-600">

            Contraseña

          </label>



          <input


            type="password"


            value={password}


            onChange={(e)=>setPassword(e.target.value)}


            className="w-full border rounded-xl p-3 mt-2"


            placeholder="Contraseña"


          />


        </div>









        <div>


          <label className="text-slate-600">

            Rol

          </label>



          <select


            value={rol}


            onChange={(e)=>setRol(e.target.value)}


            className="w-full border rounded-xl p-3 mt-2"


          >


            <option value="Administrador">

              Administrador

            </option>



            <option value="Cajero">

              Cajero

            </option>



            <option value="Vendedor">

              Vendedor

            </option>


          </select>


        </div>






      </div>









      <div className="flex gap-3 mt-6">



        <button


          onClick={close}


          className="flex-1 bg-slate-200 py-3 rounded-xl"


        >

          Cancelar

        </button>







        <button


          onClick={guardar}


          className="flex-1 bg-blue-600 text-white py-3 rounded-xl"


        >

          Guardar

        </button>



      </div>






    </Modal>



  );



}


export default UsuarioModal;