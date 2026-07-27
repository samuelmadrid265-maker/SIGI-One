import { useState, useContext } from "react";

import { InventoryContext } from "../context/InventoryContext";

import { exportToExcel } from "../utils/excelExport";

import { createBackup, restoreBackup } from "../utils/backup";

import { resetModule } from "../utils/resetModule";

import ResetHistoryModal from "../components/admin/ResetHistoryModal";



function Administracion(){


  const {

    products,

    purchases,

    sales,

    clients,

    providers,

    movements

  } = useContext(InventoryContext);



  const [showHistory,setShowHistory] = useState(false);





  function importarBackup(e){


    const archivo = e.target.files[0];


    if(!archivo){

      return;

    }


    restoreBackup(archivo);


  }





  return(


    <div>



      <div className="mb-8">


        <h1 className="text-3xl font-bold">

          Administración

        </h1>


        <p className="text-slate-500">

          Herramientas administrativas del sistema

        </p>


      </div>







      <div className="grid md:grid-cols-2 gap-6">







        <div className="bg-white rounded-2xl shadow border p-6">


          <h2 className="text-xl font-bold mb-3">

            📋 Historial de reinicios

          </h2>



          <p className="text-slate-500 mb-5">

            Consulta todas las limpiezas realizadas en el sistema.

          </p>



          <button


            onClick={()=>setShowHistory(true)}


            className="bg-blue-600 text-white px-5 py-2 rounded-lg"


          >

            Ver historial

          </button>


        </div>









        <div className="bg-white rounded-2xl shadow border p-6">


          <h2 className="text-xl font-bold mb-3">

            📤 Exportar Excel

          </h2>



          <p className="text-slate-500 mb-5">

            Exporta la información del sistema.

          </p>





          <div className="flex flex-wrap gap-3">



            <button

              onClick={()=>exportToExcel(products,"Productos")}

              className="bg-green-600 text-white px-4 py-2 rounded-lg"

            >

              Productos

            </button>




            <button

              onClick={()=>exportToExcel(purchases,"Compras")}

              className="bg-green-600 text-white px-4 py-2 rounded-lg"

            >

              Compras

            </button>




            <button

              onClick={()=>exportToExcel(sales,"Ventas")}

              className="bg-green-600 text-white px-4 py-2 rounded-lg"

            >

              Ventas

            </button>




            <button

              onClick={()=>exportToExcel(clients,"Clientes")}

              className="bg-green-600 text-white px-4 py-2 rounded-lg"

            >

              Clientes

            </button>




            <button

              onClick={()=>exportToExcel(providers,"Proveedores")}

              className="bg-green-600 text-white px-4 py-2 rounded-lg"

            >

              Proveedores

            </button>




            <button

              onClick={()=>exportToExcel(movements,"Kardex")}

              className="bg-green-600 text-white px-4 py-2 rounded-lg"

            >

              Kardex

            </button>



          </div>


        </div>









        <div className="bg-white rounded-2xl shadow border p-6">


          <h2 className="text-xl font-bold mb-3">

            💾 Crear Backup

          </h2>



          <p className="text-slate-500 mb-5">

            Descarga un respaldo completo del sistema.

          </p>



          <button


            onClick={createBackup}


            className="bg-purple-600 text-white px-5 py-2 rounded-lg"


          >

            Crear respaldo

          </button>



        </div>









        <div className="bg-white rounded-2xl shadow border p-6">


          <h2 className="text-xl font-bold mb-3">

            📥 Restaurar Backup

          </h2>



          <p className="text-slate-500 mb-5">

            Recupera un respaldo anterior.

          </p>




          <label

            className="bg-orange-600 text-white px-5 py-2 rounded-lg cursor-pointer inline-block"

          >


            Restaurar



            <input

              type="file"

              accept=".json"

              onChange={importarBackup}

              className="hidden"

            />



          </label>



        </div>









        <div className="bg-white rounded-2xl shadow border p-6">


          <h2 className="text-xl font-bold mb-3">

            🔄 Reinicio de módulos

          </h2>




          <p className="text-slate-500 mb-5">

            Limpia información específica del sistema.

          </p>






          <div className="grid grid-cols-2 gap-3">





            <button

              onClick={()=>resetModule("products","Productos")}

              className="bg-red-600 text-white px-4 py-2 rounded-lg"

            >

              Productos

            </button>





            <button

              onClick={()=>resetModule("purchases","Compras")}

              className="bg-red-600 text-white px-4 py-2 rounded-lg"

            >

              Compras

            </button>





            <button

              onClick={()=>resetModule("sales","Ventas")}

              className="bg-red-600 text-white px-4 py-2 rounded-lg"

            >

              Ventas

            </button>





            <button

              onClick={()=>resetModule("clients","Clientes")}

              className="bg-red-600 text-white px-4 py-2 rounded-lg"

            >

              Clientes

            </button>





            <button

              onClick={()=>resetModule("providers","Proveedores")}

              className="bg-red-600 text-white px-4 py-2 rounded-lg"

            >

              Proveedores

            </button>





            <button

              onClick={()=>resetModule("movements","Kardex")}

              className="bg-red-600 text-white px-4 py-2 rounded-lg"

            >

              Kardex

            </button>





            <button

              onClick={()=>resetModule("cashMovements","Caja")}

              className="bg-red-600 text-white px-4 py-2 rounded-lg"

            >

              Caja

            </button>





          </div>



        </div>





      </div>









      {


        showHistory &&


        (

          <ResetHistoryModal

            close={()=>setShowHistory(false)}

          />

        )


      }






    </div>


  );

}



export default Administracion;