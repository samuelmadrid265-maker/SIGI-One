import { useEffect, useRef, useState } from "react";

function LogoUploader(){

  const inputRef = useRef(null);

  const [logo,setLogo]=useState("");



  useEffect(()=>{

    const saved = localStorage.getItem("companyLogo");

    if(saved){

      setLogo(saved);

    }

  },[]);





  function seleccionarArchivo(e){

    const file = e.target.files[0];

    if(!file){

      return;

    }



    if(

      !file.type.startsWith("image/")

    ){

      alert("Seleccione una imagen válida.");

      return;

    }



    const reader = new FileReader();



    reader.onload=(evento)=>{

      const image = evento.target.result;

      setLogo(image);

      localStorage.setItem(

        "companyLogo",

        image

      );

    };



    reader.readAsDataURL(file);

  }





  function eliminarLogo(){

    setLogo("");

    localStorage.removeItem(

      "companyLogo"

    );



    if(inputRef.current){

      inputRef.current.value="";

    }

  }





  return(

    <div className="bg-white rounded-2xl shadow-sm border p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">

        Logo de la empresa

      </h2>



      <div className="flex flex-col items-center">

        {

          logo

          ?

          <img

            src={logo}

            alt="Logo"

            className="w-40 h-40 object-contain border rounded-xl p-2"

          />

          :

          <div className="w-40 h-40 border-2 border-dashed rounded-xl flex items-center justify-center text-slate-400">

            Sin logo

          </div>

        }



        <input

          ref={inputRef}

          type="file"

          accept="image/*"

          onChange={seleccionarArchivo}

          className="mt-6"

        />



        {

          logo &&

          <button

            onClick={eliminarLogo}

            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"

          >

            Eliminar logo

          </button>

        }

      </div>

    </div>

  );

}

export default LogoUploader;