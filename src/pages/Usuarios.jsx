import UsuariosTabla from "../components/usuarios/UsuariosTabla";


function Usuarios(){


  return(


    <div>


      <div className="mb-8">


        <h1 className="text-3xl font-bold">

          Usuarios y permisos

        </h1>



        <p className="text-slate-500">

          Administración de usuarios y accesos del sistema

        </p>


      </div>





      <UsuariosTabla />


    </div>


  );


}


export default Usuarios;