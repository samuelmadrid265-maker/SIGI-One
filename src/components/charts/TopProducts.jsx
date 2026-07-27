function TopProducts({ sales }) {


  const products = {};



  sales.forEach((sale) => {


    if (!sale.items) return;



    sale.items.forEach((item) => {


      if (products[item.product]) {

        products[item.product] += Number(item.quantity);

      }

      else {

        products[item.product] = Number(item.quantity);

      }


    });


  });




  const ranking = Object.entries(products)

    .sort((a, b) => b[1] - a[1])

    .slice(0, 5);






  return (


    <div className="bg-white rounded-2xl shadow-sm border p-6">


      <h2 className="text-xl font-bold mb-5">

        Productos más vendidos

      </h2>





      {

        ranking.length === 0

        ?

        <p className="text-slate-500">

          No hay ventas pagadas registradas.

        </p>

        :

        <div className="space-y-4">


          {

            ranking.map((item, index) => (

              <div

                key={item[0]}

                className="flex justify-between items-center border-b pb-3"

              >


                <div>

                  <p className="font-semibold">

                    #{index + 1} {item[0]}

                  </p>

                </div>



                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">

                  {item[1]} unidades

                </span>


              </div>

            ))

          }


        </div>

      }


    </div>


  );


}


export default TopProducts;