import { useState, useContext } from "react";

import Modal from "../Modal";

import { InventoryContext } from "../../context/InventoryContext";

import { Trash2 } from "lucide-react";


function SaleForm({addSale}){


  const {products}=useContext(InventoryContext);



  const [open,setOpen]=useState(false);



  const [cart,setCart]=useState([]);




  const [sale,setSale]=useState({

    client:"",

    product:"",

    quantity:"",

    price:"",

    payment:"Efectivo",

    status:"Pagada",

    observation:""

  });






  function addToCart(){


    if(!sale.product){

      alert("Seleccione un producto");

      return;

    }



    if(Number(sale.quantity)<=0){

      alert("Ingrese una cantidad válida");

      return;

    }




    const item={

      product:sale.product,

      quantity:Number(sale.quantity),

      price:Number(sale.price)

    };





    setCart([

      ...cart,

      item

    ]);





    setSale({

      ...sale,

      product:"",

      quantity:"",

      price:""

    });



  }








  function removeItem(index){


    setCart(

      cart.filter(

        (_,i)=>i!==index

      )

    );


  }








  const totalVenta = cart.reduce(

    (total,item)=>

      total +

      (

        Number(item.quantity)

        *

        Number(item.price)

      ),

    0

  );







  function saveSale(){



    if(cart.length===0){

      alert("Agregue productos al carrito");

      return;

    }





    addSale({


      ...sale,


      items:cart,


      total:totalVenta


    });






    setCart([]);




    setSale({

      client:"",

      product:"",

      quantity:"",

      price:"",

      payment:"Efectivo",

      status:"Pagada",

      observation:""

    });




    setOpen(false);



  }









  return(


    <>


      <button

        onClick={()=>setOpen(true)}

        className="
        bg-blue-600
        text-white
        px-5
        py-3
        rounded-xl
        hover:bg-blue-700
        "

      >

        + Nueva venta

      </button>








      {

        open &&

        <Modal close={()=>setOpen(false)}>



          <h2 className="text-2xl font-bold mb-6">

            Nueva venta

          </h2>






          <input

            placeholder="Cliente"

            value={sale.client}

            onChange={(e)=>

              setSale({

                ...sale,

                client:e.target.value

              })

            }

            className="w-full border p-3 rounded-lg mb-3"

          />






          <select

            value={sale.product}

            onChange={(e)=>{


              const product=products.find(

                p=>p.name===e.target.value

              );


              setSale({

                ...sale,

                product:e.target.value,

                price:product.salePrice

              });


            }}

            className="w-full border p-3 rounded-lg mb-3"

          >


            <option value="">

              Seleccionar producto

            </option>



            {

              products.map(product=>(

                <option

                  key={product.id}

                  value={product.name}

                >

                  {product.name}

                </option>

              ))

            }


          </select>







          <input

            type="number"

            placeholder="Cantidad"

            value={sale.quantity}

            onChange={(e)=>

              setSale({

                ...sale,

                quantity:e.target.value

              })

            }

            className="w-full border p-3 rounded-lg mb-3"

          />







          <input

            type="number"

            placeholder="Precio"

            value={sale.price}

            onChange={(e)=>

              setSale({

                ...sale,

                price:e.target.value

              })

            }

            className="w-full border p-3 rounded-lg mb-3"

          />







          <button

            onClick={addToCart}

            className="
            w-full
            bg-blue-500
            text-white
            py-3
            rounded-lg
            "

          >

            + Agregar al carrito

          </button>







          <div className="mt-5">


            <h3 className="font-bold mb-3">

              Carrito

            </h3>




            {

              cart.length===0

              ?

              <p className="text-slate-500">

                No hay productos agregados

              </p>


              :



              cart.map((item,index)=>(


                <div

                  key={index}

                  className="
                  flex
                  justify-between
                  items-center
                  border-b
                  py-2
                  "

                >


                  <span>

                    {item.product}

                    {" "}x{item.quantity}

                  </span>



                  <span>

                    S/ {(item.quantity*item.price).toFixed(2)}

                  </span>



                  <button

                    onClick={()=>removeItem(index)}

                  >

                    <Trash2

                      size={18}

                      className="text-red-600"

                    />


                  </button>


                </div>


              ))

            }


          </div>







          <div className="font-bold mt-4">

            Total:

            {" "}

            S/ {totalVenta.toFixed(2)}

          </div>








          <select

            value={sale.payment}

            onChange={(e)=>

              setSale({

                ...sale,

                payment:e.target.value

              })

            }

            className="w-full border p-3 rounded-lg mt-4"

          >

            <option>Efectivo</option>

            <option>Yape / Plin</option>

            <option>Tarjeta</option>

            <option>Transferencia</option>


          </select>








          <select

            value={sale.status}

            onChange={(e)=>

              setSale({

                ...sale,

                status:e.target.value

              })

            }

            className="w-full border p-3 rounded-lg mt-3"

          >

            <option>Pagada</option>

            <option>Pendiente</option>

            <option>Anulada</option>


          </select>








          <textarea

            placeholder="Observación"

            value={sale.observation}

            onChange={(e)=>

              setSale({

                ...sale,

                observation:e.target.value

              })

            }

            className="w-full border p-3 rounded-lg mt-3"

          />







          <button

            onClick={saveSale}

            className="
            mt-6
            w-full
            bg-green-600
            text-white
            py-3
            rounded-lg
            "

          >

            Registrar venta

          </button>




        </Modal>

      }



    </>

  );


}


export default SaleForm;