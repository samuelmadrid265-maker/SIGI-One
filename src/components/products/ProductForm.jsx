import { useEffect, useState } from "react";
import Modal from "../Modal";


function ProductForm({

  addProduct,
  updateProduct,
  editingProduct,
  setEditingProduct

}){


  const emptyProduct = {

    name:"",
    category:"",
    stock:"",
    buyPrice:"",
    salePrice:""

  };


  const [open,setOpen] = useState(false);

  const [product,setProduct] = useState(emptyProduct);




  useEffect(()=>{


    if(editingProduct){


      setProduct({

        id:editingProduct.id,

        code:editingProduct.code,

        name:editingProduct.name,

        category:editingProduct.category,

        stock:editingProduct.stock,

        buyPrice:editingProduct.buyPrice,

        salePrice:editingProduct.salePrice

      });


      setOpen(true);


    }


  },[editingProduct]);






  function changeValue(e){


    setProduct({

      ...product,

      [e.target.name]:e.target.value

    });


  }






  function saveProduct(){


    const finalProduct={


      ...product,

      stock:Number(product.stock),

      buyPrice:Number(product.buyPrice),

      salePrice:Number(product.salePrice)


    };





    if(editingProduct){


      updateProduct(finalProduct);


    }

    else{


      addProduct(finalProduct);


    }






    setProduct(emptyProduct);


    setOpen(false);



  }






  function closeModal(){


    setOpen(false);

    setEditingProduct(null);

    setProduct(emptyProduct);


  }







  return(

    <>


      <button

        onClick={()=>setOpen(true)}

        className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"

      >

        + Nuevo producto

      </button>






      {

        open && (



          <Modal close={closeModal}>


            <h2 className="text-2xl font-bold mb-6">


              {

                editingProduct

                ?

                "Editar producto"

                :

                "Nuevo producto"


              }


            </h2>







            <input

              name="name"

              value={product.name}

              onChange={changeValue}

              placeholder="Nombre"

              className="w-full border p-3 rounded-lg mb-3"

            />







            <input

              name="category"

              value={product.category}

              onChange={changeValue}

              placeholder="Categoría"

              className="w-full border p-3 rounded-lg mb-3"

            />







            <input

              name="stock"

              type="number"

              value={product.stock}

              onChange={changeValue}

              placeholder="Stock"

              className="w-full border p-3 rounded-lg mb-3"

            />







            <input

              name="buyPrice"

              type="number"

              value={product.buyPrice}

              onChange={changeValue}

              placeholder="Precio compra"

              className="w-full border p-3 rounded-lg mb-3"

            />







            <input

              name="salePrice"

              type="number"

              value={product.salePrice}

              onChange={changeValue}

              placeholder="Precio venta"

              className="w-full border p-3 rounded-lg"

            />







            <button

              onClick={saveProduct}

              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg"

            >

              Guardar producto

            </button>




          </Modal>


        )

      }



    </>


  );

}



export default ProductForm;