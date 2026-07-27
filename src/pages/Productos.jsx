import { useState, useContext, useMemo } from "react";

import ProductTable from "../components/products/ProductTable";
import ProductForm from "../components/products/ProductForm";

import { InventoryContext } from "../context/InventoryContext";



function Productos(){


  const {

    products,
    setProducts

  } = useContext(InventoryContext);




  const [search,setSearch] = useState("");

  const [editingProduct,setEditingProduct] = useState(null);








  function addProduct(product){


    setProducts([


      ...products,


      {

        ...product,


        id:Date.now(),


        code:`PRO-${String(products.length + 1).padStart(4,"0")}`,


        stock:Number(product.stock),

        buyPrice:Number(product.buyPrice),

        salePrice:Number(product.salePrice)

      }


    ]);


  }










  function updateProduct(productUpdated){


    setProducts((prevProducts)=>


      prevProducts.map((product)=>


        product.id === productUpdated.id


        ?


        {

          ...product,

          ...productUpdated,

          stock:Number(productUpdated.stock),

          buyPrice:Number(productUpdated.buyPrice),

          salePrice:Number(productUpdated.salePrice)

        }


        :


        product


      )


    );



    setEditingProduct(null);


  }










  function deleteProduct(id){


    setProducts(


      products.filter(

        product=>product.id !== id

      )


    );


  }









  const filteredProducts = useMemo(()=>{


    return products.filter((product)=>


      product.name

      .toLowerCase()

      .includes(search.toLowerCase())


    );


  },[products,search]);









  return(


    <div>



      <div className="flex justify-between items-center mb-8">



        <div>


          <h1 className="text-3xl font-bold">

            Productos

          </h1>


          <p className="text-slate-500">

            Gestión de inventario y ganancias

          </p>


        </div>







        <ProductForm


          addProduct={addProduct}


          updateProduct={updateProduct}


          editingProduct={editingProduct}


          setEditingProduct={setEditingProduct}


        />



      </div>









      <input


        type="text"


        placeholder="Buscar producto..."


        value={search}


        onChange={(e)=>setSearch(e.target.value)}


        className="w-full border rounded-xl p-3 mb-5"


      />









      <ProductTable

  key={JSON.stringify(products)}

  products={filteredProducts}

  deleteProduct={deleteProduct}

  setEditingProduct={setEditingProduct}

/>





    </div>


  );


}



export default Productos;