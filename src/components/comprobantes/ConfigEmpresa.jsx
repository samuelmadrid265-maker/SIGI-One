import { useState } from "react";
import LogoUploader from "../../components/configuracion/LogoUploader";

function ConfigEmpresa(){

  const [empresa,setEmpresa]=useState(()=>{

    const saved = localStorage.getItem("companyData");

    return saved

      ? JSON.parse(saved)

      : {

          nombre:"",

          razon:"",

          ruc:"",

          direccion:"",

          telefono:""

        };

  });





  function handleChange(e){

    setEmpresa({

      ...empresa,

      [e.target.name]:e.target.value

    });

  }






  function guardar(){

    localStorage.setItem(

      "companyData",

      JSON.stringify(empresa)

    );



    alert("Datos de empresa guardados");

  }







  return(

    <div className="space-y-8">

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <h2 className="text-2xl font-bold mb-6">

          Datos de empresa

        </h2>





        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>

            <label>Nombre comercial</label>

            <input

              name="nombre"

              value={empresa.nombre}

              onChange={handleChange}

              className="w-full border rounded-xl p-3 mt-2"

            />

          </div>





          <div>

            <label>Razón social</label>

            <input

              name="razon"

              value={empresa.razon}

              onChange={handleChange}

              className="w-full border rounded-xl p-3 mt-2"

            />

          </div>





          <div>

            <label>RUC</label>

            <input

              name="ruc"

              value={empresa.ruc}

              onChange={handleChange}

              className="w-full border rounded-xl p-3 mt-2"

            />

          </div>





          <div>

            <label>Teléfono</label>

            <input

              name="telefono"

              value={empresa.telefono}

              onChange={handleChange}

              className="w-full border rounded-xl p-3 mt-2"

            />

          </div>





          <div className="md:col-span-2">

            <label>Dirección</label>

            <input

              name="direccion"

              value={empresa.direccion}

              onChange={handleChange}

              className="w-full border rounded-xl p-3 mt-2"

            />

          </div>

        </div>





        <button

          onClick={guardar}

          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"

        >

          Guardar datos

        </button>

      </div>



      <LogoUploader/>

    </div>

  );

}

export default ConfigEmpresa;