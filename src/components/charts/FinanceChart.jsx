import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";



function FinanceChart({ventas, compras}){



  const data=[


    {
      name:"Finanzas",
      Ventas:Number(ventas),
      Compras:Number(compras)
    }


  ];







  return(


    <div className="bg-white rounded-2xl shadow-sm border p-6">



      <h2 className="text-xl font-bold mb-5">

        Ventas vs Compras

      </h2>





      <ResponsiveContainer

        width="100%"

        height={300}

      >



        <BarChart data={data}>


          <CartesianGrid strokeDasharray="3 3"/>



          <XAxis dataKey="name"/>



          <YAxis/>



          <Tooltip/>



          <Legend/>



          <Bar

            dataKey="Ventas"

            fill="#16a34a"

          />



          <Bar

            dataKey="Compras"

            fill="#2563eb"

          />



        </BarChart>



      </ResponsiveContainer>



    </div>


  );


}



export default FinanceChart;