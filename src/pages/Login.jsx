import { useContext, useState } from "react";

import { UserContext } from "../context/UserContext";

import { useNavigate } from "react-router-dom";



function Login(){



  const {

    usuarios

  } = useContext(UserContext);





  const navigate = useNavigate();




  const [usuario,setUsuario]=useState("");

  const [password,setPassword]=useState("");

  const [error,setError]=useState("");









  function ingresar(){



    const user = usuarios.find(


      u =>

      u.usuario === usuario

      &&

      u.password === password


    );







    if(!user){


      setError("Usuario o contraseña incorrectos");


      return;


    }








    localStorage.setItem(

      "currentUser",

      JSON.stringify(user)

    );







    navigate("/");



  }









  return (


    <div className="min-h-screen flex items-center justify-center bg-slate-100">


      <div className="bg-white p-10 rounded-2xl shadow-xl w-96">


        <h1 className="text-4xl font-bold text-blue-600 text-center">

          SIGI One

        </h1>



        <p className="text-center text-gray-500 mt-2">

          Sistema de Gestión Empresarial

        </p>







        {

          error &&

          <p className="text-red-600 text-center mt-5">

            {error}

          </p>

        }







        <div className="mt-8">


          <label className="block text-sm font-medium mb-2">

            Usuario

          </label>



          <input

            type="text"

            value={usuario}

            onChange={(e)=>setUsuario(e.target.value)}

            placeholder="Ingrese usuario"

            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"

          />


        </div>







        <div className="mt-5">


          <label className="block text-sm font-medium mb-2">

            Contraseña

          </label>



          <input

            type="password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

            placeholder="Ingrese contraseña"

            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"

          />


        </div>







        <button

          onClick={ingresar}

          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"

        >

          Ingresar

        </button>







        <p className="text-center text-xs text-gray-400 mt-8">

          Powered by Nexora Systems

        </p>



      </div>


    </div>


  );

}


export default Login;