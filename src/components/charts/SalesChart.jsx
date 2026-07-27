import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";





function SalesChart({sales}){





  const data = sales.map((sale)=>({


    name:sale.date,


    total:Number(sale.total)



  }));









  return(



    <div className="bg-white rounded-2xl shadow-sm border p-6">





      <h2 className="text-xl font-bold mb-5">

        Ventas realizadas

      </h2>









      {


        data.length===0



        ?



        <p className="text-slate-500">

          No hay ventas pagadas registradas.

        </p>





        :





        <ResponsiveContainer

          width="100%"

          height={300}

        >




          <LineChart

            data={data}

          >





            <CartesianGrid

              strokeDasharray="3 3"

            />







            <XAxis

              dataKey="name"

            />







            <YAxis />








            <Tooltip

              formatter={(value)=>

                `S/ ${Number(value).toFixed(2)}`

              }

            />









            <Line



              type="monotone"



              dataKey="total"



              stroke="#16a34a"



              strokeWidth={3}



              dot={{r:5}}



            />






          </LineChart>





        </ResponsiveContainer>



      }




    </div>



  );


}



export default SalesChart;