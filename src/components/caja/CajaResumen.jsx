import { useContext } from "react";

import {
  DollarSign,
  ArrowDownCircle,
  ArrowUpCircle,
  Wallet
} from "lucide-react";

import { CashContext } from "../../context/CashContext";



function CajaResumen() {



  const {

    saldoInicial,

    ingresos,

    egresos,

    saldoActual

  } = useContext(CashContext);







  return (



    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">





      <div className="bg-white rounded-2xl shadow-sm border p-6">


        <div className="flex justify-between items-center">


          <div>


            <p className="text-slate-500">

              Saldo inicial

            </p>



            <h2 className="text-3xl font-bold mt-2">

              S/ {Number(saldoInicial).toFixed(2)}

            </h2>


          </div>





          <Wallet

            className="text-blue-600"

            size={36}

          />


        </div>


      </div>









      <div className="bg-white rounded-2xl shadow-sm border p-6">


        <div className="flex justify-between items-center">


          <div>


            <p className="text-slate-500">

              Ingresos

            </p>




            <h2 className="text-3xl font-bold mt-2 text-green-600">


              S/ {Number(ingresos).toFixed(2)}


            </h2>


          </div>





          <ArrowUpCircle

            className="text-green-600"

            size={36}

          />


        </div>


      </div>









      <div className="bg-white rounded-2xl shadow-sm border p-6">


        <div className="flex justify-between items-center">


          <div>


            <p className="text-slate-500">

              Egresos

            </p>





            <h2 className="text-3xl font-bold mt-2 text-red-600">


              S/ {Number(egresos).toFixed(2)}


            </h2>


          </div>





          <ArrowDownCircle

            className="text-red-600"

            size={36}

          />


        </div>


      </div>









      <div className="bg-white rounded-2xl shadow-sm border p-6">


        <div className="flex justify-between items-center">


          <div>


            <p className="text-slate-500">

              Saldo actual

            </p>





            <h2 className="text-3xl font-bold mt-2 text-emerald-600">


              S/ {Number(saldoActual).toFixed(2)}


            </h2>


          </div>





          <DollarSign

            className="text-emerald-600"

            size={36}

          />


        </div>


      </div>





    </div>


  );


}



export default CajaResumen;