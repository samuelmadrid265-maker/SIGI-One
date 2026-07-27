import { Navigate } from "react-router-dom";

import { useContext } from "react";

import { UserContext } from "../context/UserContext";



function ProtectedRoute({

  children,

  permission

}){


  const usuario = JSON.parse(

    localStorage.getItem("currentUser")

  );



  const {

    getPermisos

  } = useContext(UserContext);





  if(!usuario){


    return <Navigate to="/login" />;


  }






  const permisos = getPermisos(usuario.rol);





  if(permission && !permisos[permission]){


    return <Navigate to="/" />;


  }







  return children;


}



export default ProtectedRoute;