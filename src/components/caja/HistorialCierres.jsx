import { useContext, useState } from "react";

import { CashContext } from "../../context/CashContext";

import { Trash2 } from "lucide-react";



function HistorialCierres(){



  const {

    cierresCaja,

    deleteCierre


  } = useContext(CashContext);



  const [verCierre,setVerCierre]=useState(null);






  return(



<div className="bg-white rounded-2xl shadow-sm border overflow-hidden mt-8">



<div className="p-6 border-b">


<h2 className="text-xl font-bold">

Historial de cierres de caja

</h2>


<p className="text-slate-500 text-sm">

Registro de cierres realizados

</p>


</div>







{

cierresCaja.length===0

?

<div className="p-10 text-center text-slate-500">

Aún no hay cierres registrados.

</div>


:


<table className="w-full">


<thead className="bg-slate-100">

<tr>

<th className="p-4 text-left">
Fecha
</th>


<th className="p-4 text-left">
Esperado
</th>


<th className="p-4 text-left">
Contado
</th>


<th className="p-4 text-left">
Diferencia
</th>


<th className="p-4 text-left">
Acción
</th>


</tr>

</thead>




<tbody>


{

cierresCaja.map((cierre)=>(


<tr key={cierre.id} className="border-t">



<td className="p-4">

{cierre.date}

</td>



<td className="p-4">

S/ {Number(cierre.esperado).toFixed(2)}

</td>



<td className="p-4">

S/ {Number(cierre.contado).toFixed(2)}

</td>



<td className="p-4 font-bold">

S/ {Number(cierre.diferencia).toFixed(2)}

</td>



<td className="p-4">


<button

onClick={()=>setVerCierre(cierre)}

className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-3"

>

Ver

</button>



<button

onClick={()=>deleteCierre(cierre.id)}

className="p-2 hover:bg-red-100 rounded-lg"

>

<Trash2 size={18} className="text-red-600"/>

</button>



</td>


</tr>


))


}


</tbody>


</table>


}




{

verCierre && (


<div className="fixed inset-0 bg-black/40 flex items-center justify-center">


<div className="bg-white rounded-2xl p-6 w-[600px]">


<h2 className="text-xl font-bold mb-5">

Movimientos del {verCierre.date}

</h2>




<table className="w-full">


<thead className="bg-slate-100">

<tr>

<th className="p-3 text-left">
Tipo
</th>

<th className="p-3 text-left">
Descripción
</th>

<th className="p-3 text-left">
Monto
</th>


</tr>


</thead>



<tbody>


{

verCierre.movimientos?.map((mov)=>(


<tr key={mov.id} className="border-t">


<td className="p-3">

{mov.type}

</td>


<td className="p-3">

{mov.description}

</td>


<td className="p-3">

S/ {Number(mov.amount).toFixed(2)}

</td>


</tr>


))


}


</tbody>


</table>




<button

onClick={()=>setVerCierre(null)}

className="mt-5 bg-slate-700 text-white px-5 py-2 rounded-xl"

>

Cerrar

</button>


</div>


</div>


)


}



</div>



  );


}


export default HistorialCierres;