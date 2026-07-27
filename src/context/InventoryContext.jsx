import { 
  createContext, 
  useState, 
  useEffect, 
  useContext 
} from "react";


import {
  generateCode,
  currentDate
} from "../utils/helpers";


import {
  CashContext
} from "./CashContext";


import {
  NotificationContext
} from "./NotificationContext";



export const InventoryContext = createContext();




export function InventoryProvider({children}){



  const {

    addMovement: addCashMovement

  } = useContext(CashContext);





  const {

    addNotification

  } = useContext(NotificationContext);








  const initialProducts = [


    {

      id:1,

      code:"PRO-0001",

      name:"Arroz Extra",

      category:"Abarrotes",

      stock:50,

      buyPrice:3,

      salePrice:5

    },


    {

      id:2,

      code:"PRO-0002",

      name:"Gaseosa Cola",

      category:"Bebidas",

      stock:20,

      buyPrice:2,

      salePrice:3.5

    }


  ];









  const initialClients=[


    {

      id:1,

      code:"CLI-0001",

      name:"Juan Pérez",

      document:"12345678",

      phone:"999999999",

      address:"Piura",

      status:"Activo"

    }


  ];









  const initialProviders=[


    {

      id:1,

      code:"PROV-0001",

      name:"Distribuidora Norte",

      ruc:"20123456789",

      phone:"999111222",

      address:"Piura"

    }


  ];









  const [products,setProducts]=useState(()=>{


    const saved=localStorage.getItem("products");


    return saved 

    ? 

    JSON.parse(saved) 

    : 

    initialProducts;


  });







  const [purchases,setPurchases]=useState(()=>{


    const saved=localStorage.getItem("purchases");


    return saved 

    ? 

    JSON.parse(saved) 

    : 

    [];


  });







  const [sales,setSales]=useState(()=>{


    const saved=localStorage.getItem("sales");


    return saved 

    ? 

    JSON.parse(saved) 

    : 

    [];


  });







  const [movements,setMovements]=useState(()=>{


    const saved=localStorage.getItem("movements");


    return saved 

    ? 

    JSON.parse(saved) 

    : 

    [];


  });







  const [clients,setClients]=useState(()=>{


    const saved=localStorage.getItem("clients");


    return saved 

    ? 

    JSON.parse(saved) 

    : 

    initialClients;


  });







  const [providers,setProviders]=useState(()=>{


    const saved=localStorage.getItem("providers");


    return saved 

    ? 

    JSON.parse(saved) 

    : 

    initialProviders;


  });









  useEffect(()=>{


    localStorage.setItem(

      "products",

      JSON.stringify(products)

    );


  },[products]);








  useEffect(()=>{


    localStorage.setItem(

      "purchases",

      JSON.stringify(purchases)

    );


  },[purchases]);








  useEffect(()=>{


    localStorage.setItem(

      "sales",

      JSON.stringify(sales)

    );


  },[sales]);








  useEffect(()=>{


    localStorage.setItem(

      "movements",

      JSON.stringify(movements)

    );


  },[movements]);








  useEffect(()=>{


    localStorage.setItem(

      "clients",

      JSON.stringify(clients)

    );


  },[clients]);








  useEffect(()=>{


    localStorage.setItem(

      "providers",

      JSON.stringify(providers)

    );


  },[providers]);









  // ==========================
  // NOTIFICACIONES DE STOCK
  // ==========================


  useEffect(()=>{


    products.forEach(product=>{


      if(product.stock === 0){


        addNotification({


          message:

          `🔴 ${product.name} está agotado`,


          type:"error"


        });


      }



      else if(product.stock <= 10){


        addNotification({


          message:

          `🟡 ${product.name} tiene stock bajo (${product.stock})`,


          type:"warning"


        });


      }



    });


  },[products]);
    // ==========================
  // REINICIO DE MODULOS
  // ==========================


  function resetProducts(){


    const cantidad = products.length;


    setProducts([]);


    return cantidad;


  }







  function resetPurchases(){


    const cantidad = purchases.length;


    setPurchases([]);


    return cantidad;


  }







  function resetSales(){


    const cantidad = sales.length;


    setSales([]);


    return cantidad;


  }







  function resetMovements(){


    const cantidad = movements.length;


    setMovements([]);


    return cantidad;


  }







  function resetClients(){


    const cantidad = clients.length;


    setClients([]);


    return cantidad;


  }







  function resetProviders(){


    const cantidad = providers.length;


    setProviders([]);


    return cantidad;


  }









  // ==========================
  // COMPRAS
  // ==========================



  function addPurchase(purchase){



    const newPurchase = {


      ...purchase,


      id:Date.now(),


      code:generateCode("COM",purchases.length),


      date:currentDate()


    };





    setPurchases([

      ...purchases,

      newPurchase

    ]);






    let updatedProducts=[...products];


    let newMovements=[...movements];







    purchase.items.forEach(item=>{



      const product=updatedProducts.find(


        p=>p.name===item.product


      );





      if(product){



        const newStock =


          Number(product.stock)

          +

          Number(item.quantity);







        updatedProducts = updatedProducts.map(p=>



          p.name===item.product


          ?


          {


            ...p,


            stock:newStock


          }


          :


          p



        );








        newMovements.push({


          id:Date.now()+Math.random(),


          date:newPurchase.date,


          product:item.product,


          type:"Entrada",


          entry:Number(item.quantity),


          exit:0,


          stock:newStock


        });



      }



    });








    setProducts(updatedProducts);


    setMovements(newMovements);








    addCashMovement({



      type:"Egreso",



      description:


      `Compra ${purchase.items.map(item=>item.product).join(", ")}`,



      amount:Number(purchase.total)



    });



  }














  // ==========================
  // VENTAS
  // ==========================



  function addSale(sale){





    const newSale={



      ...sale,



      id:Date.now(),



      code:generateCode("VEN",sales.length),



      date:currentDate()



    };









    for(const item of sale.items){





      const product=products.find(


        p=>p.name===item.product


      );






      if(!product){



        alert(

          `Producto no encontrado: ${item.product}`

        );


        return false;


      }









      if(

        Number(item.quantity)

        >

        Number(product.stock)

      ){



        alert(

          `Stock insuficiente de ${item.product}`

        );


        return false;


      }




    }









    setSales([

      ...sales,

      newSale

    ]);









    let updatedProducts=[...products];


    let newMovements=[...movements];









    sale.items.forEach(item=>{





      const product=updatedProducts.find(


        p=>p.name===item.product


      );






      const newStock=



        Number(product.stock)

        -

        Number(item.quantity);









      updatedProducts = updatedProducts.map(p=>


        p.name===item.product


        ?


        {


          ...p,


          stock:newStock


        }


        :


        p



      );









      newMovements.push({



        id:Date.now()+Math.random(),



        date:newSale.date,



        product:item.product,



        type:"Salida",



        entry:0,



        exit:Number(item.quantity),



        stock:newStock



      });




    });









    setProducts(updatedProducts);


    setMovements(newMovements);









    if(newSale.status==="Pagada"){



      addCashMovement({



        type:"Ingreso",



        description:


        `Venta ${newSale.items.map(item=>item.product).join(", ")}`,



        amount:Number(newSale.total)



      });



    }









    return true;



  }












  function updateSaleStatus(id,status){



    const sale=sales.find(


      sale=>sale.id===id


    );





    if(!sale){


      return;


    }









    if(

      status==="Pagada"

      &&

      sale.status!=="Pagada"

    ){



      addCashMovement({


        type:"Ingreso",


        description:`Pago venta ${sale.code}`,


        amount:Number(sale.total)


      });



    }









    if(

      status==="Anulada"

      &&

      sale.status!=="Anulada"

    ){



      let updatedProducts=[...products];


      let newMovements=[...movements];







      sale.items.forEach(item=>{





        const product=updatedProducts.find(


          p=>p.name===item.product


        );





        if(product){



          const newStock=



            Number(product.stock)

            +

            Number(item.quantity);









          updatedProducts=updatedProducts.map(p=>



            p.name===item.product


            ?


            {


              ...p,


              stock:newStock


            }


            :


            p



          );








          newMovements.push({


            id:Date.now()+Math.random(),


            date:currentDate(),


            product:item.product,


            type:"Entrada",


            entry:Number(item.quantity),


            exit:0,


            stock:newStock


          });



        }



      });








      setProducts(updatedProducts);


      setMovements(newMovements);








      if(sale.status==="Pagada"){



        addCashMovement({



          type:"Egreso",



          description:`Anulación ${sale.code}`,



          amount:Number(sale.total)



        });



      }



    }









    setSales(



      sales.map(sale=>



        sale.id===id


        ?


        {


          ...sale,


          status


        }


        :


        sale



      )



    );



  }
    // ==========================
  // CLIENTES
  // ==========================



  function addClient(client){



    const newClient={


      ...client,


      id:Date.now(),


      code:generateCode("CLI",clients.length),


      status:"Activo"


    };





    setClients([

      ...clients,

      newClient

    ]);



  }









  function deleteClient(id){



    setClients(


      clients.filter(

        client=>client.id!==id

      )


    );


  }









  // ==========================
  // PROVEEDORES
  // ==========================



  function addProvider(provider){



    const newProvider={


      ...provider,


      id:Date.now(),


      code:generateCode("PROV",providers.length)


    };





    setProviders([

      ...providers,

      newProvider

    ]);



  }









  function deleteProvider(id){



    setProviders(


      providers.filter(

        provider=>provider.id!==id

      )


    );


  }









  // ==========================
  // PRODUCTOS
  // ==========================



  function deleteProduct(id){



    setProducts(


      products.filter(

        product=>product.id!==id

      )


    );


  }









  return(



    <InventoryContext.Provider



      value={



        {


          products,

          setProducts,



          purchases,

          setPurchases,



          sales,

          setSales,



          movements,

          setMovements,



          clients,

          setClients,



          providers,

          setProviders,





          addPurchase,



          addSale,



          updateSaleStatus,





          addClient,



          deleteClient,





          addProvider,



          deleteProvider,





          deleteProduct,





          // REINICIOS

          resetProducts,

          resetPurchases,

          resetSales,

          resetMovements,

          resetClients,

          resetProviders



        }



      }



    >



      {children}



    </InventoryContext.Provider>



  );



}





export default InventoryProvider;
