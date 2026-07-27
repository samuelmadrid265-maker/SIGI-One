import { useState, useContext } from "react";
import Modal from "../Modal";
import { InventoryContext } from "../../context/InventoryContext";


function PurchaseForm({ addPurchase }) {


  const { products } = useContext(InventoryContext);



  const [open,setOpen] = useState(false);



  const emptyItem = {

    product:"",
    quantity:"",
    price:""

  };



  const [provider,setProvider] = useState("");

  const [item,setItem] = useState(emptyItem);

  const [items,setItems] = useState([]);




  function agregarProducto(){


    if(

      item.product === "" ||

      Number(item.quantity)<=0 ||

      Number(item.price)<=0

    ){

      alert("Complete los datos del producto");

      return;

    }




    const nuevoItem = {

      product:item.product,

      quantity:Number(item.quantity),

      price:Number(item.price),

      subtotal:

        Number(item.quantity) *

        Number(item.price)

    };





    setItems(prev=>[

      ...prev,

      nuevoItem

    ]);





    setItem(emptyItem);


  }







  function eliminarProducto(index){


    setItems(prev=>

      prev.filter(

        (_,i)=>i!==index

      )

    );


  }







  const totalCarrito = items.reduce(

    (total,item)=>

      total + item.subtotal,

    0

  );
  console.log("ITEMS DEL CARRITO:", items);
console.log("TOTAL CARRITO:", totalCarrito);








  function guardarCompra(){



    if(provider===""){


      alert("Ingrese proveedor");

      return;

    }



    if(items.length===0){


      alert("Agregue productos");

      return;

    }






    addPurchase({


      provider,

      items,

      total:totalCarrito


    });






    setProvider("");

    setItems([]);

    setItem(emptyItem);

    setOpen(false);



  }









  return(


    <>


      <button

        onClick={()=>setOpen(true)}

        className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"

      >

        + Nueva compra

      </button>







      {

        open && (


          <Modal

            close={()=>{


              setOpen(false);

              setProvider("");

              setItems([]);

              setItem(emptyItem);


            }}

          >



            <h2 className="text-2xl font-bold mb-6">

              Nueva compra

            </h2>








            <input


              placeholder="Proveedor"


              value={provider}


              onChange={(e)=>

                setProvider(e.target.value)

              }


              className="w-full border p-3 rounded-lg mb-4"


            />









            <div className="grid grid-cols-3 gap-3">



              <select


                value={item.product}


                onChange={(e)=>

                  setItem({

                    ...item,

                    product:e.target.value

                  })

                }


                className="border p-3 rounded-lg"


              >


                <option value="">

                  Producto

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


                value={item.quantity}


                onChange={(e)=>

                  setItem({

                    ...item,

                    quantity:e.target.value

                  })

                }


                className="border p-3 rounded-lg"


              />









              <input


                type="number"


                placeholder="Precio compra"


                value={item.price}


                onChange={(e)=>

                  setItem({

                    ...item,

                    price:e.target.value

                  })

                }


                className="border p-3 rounded-lg"


              />





            </div>








            <button


              onClick={agregarProducto}


              className="w-full bg-slate-700 text-white py-2 rounded-lg mt-4 mb-5"


            >

              + Agregar al carrito

            </button>









            {

              items.length>0 && (



                <div className="border rounded-xl overflow-hidden mb-5">


                  <table className="w-full">


                    <thead className="bg-slate-100">


                      <tr>


                        <th className="p-2 text-left">

                          Producto

                        </th>


                        <th>

                          Cant.

                        </th>


                        <th>

                          Precio

                        </th>


                        <th>

                          Subtotal

                        </th>


                        <th>

                        </th>


                      </tr>


                    </thead>






                    <tbody>



                      {

                        items.map((producto,index)=>(


                          <tr

                            key={index}

                            className="border-t"

                          >



                            <td className="p-2">

                              {producto.product}

                            </td>




                            <td>

                              {producto.quantity}

                            </td>




                            <td>

                              S/ {producto.price.toFixed(2)}

                            </td>




                            <td className="font-bold text-green-600">


                              S/ {producto.subtotal.toFixed(2)}


                            </td>




                            <td>


                              <button

                                onClick={()=>eliminarProducto(index)}

                                className="text-red-600"

                              >

                                🗑

                              </button>


                            </td>



                          </tr>



                        ))

                      }




                    </tbody>



                  </table>



                </div>


              )

            }







            <div className="text-xl font-bold mb-5">


              Total carrito:


              {" "}


              S/ {totalCarrito.toFixed(2)}



            </div>







            <button


              onClick={guardarCompra}


              className="w-full bg-green-600 text-white py-3 rounded-lg"


            >

              Guardar compra


            </button>




          </Modal>


        )


      }



    </>

  );

}


export default PurchaseForm;