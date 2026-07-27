import { useState } from "react";
import Modal from "../Modal";


function ProviderForm({

  addProvider

}){


  const [open,setOpen] = useState(false);



  const [provider,setProvider] = useState({

    name:"",
    ruc:"",
    phone:"",
    address:""

  });





  function saveProvider(){


    if(provider.ruc.length < 11){

      alert("El RUC debe tener 11 dígitos");

      return;

    }




    addProvider(provider);



    setProvider({

      name:"",
      ruc:"",
      phone:"",
      address:""

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

        + Nuevo proveedor

      </button>





      {

        open &&

        (

          <Modal close={()=>setOpen(false)}>



            <h2 className="text-2xl font-bold mb-6">

              Nuevo proveedor

            </h2>





            <input


              placeholder="Empresa / Nombre"


              value={provider.name}


              onChange={(e)=>

                setProvider({

                  ...provider,

                  name:e.target.value

                })

              }


              className="w-full border p-3 rounded-lg mb-3"


            />






            <input


              placeholder="RUC"


              value={provider.ruc}


              onChange={(e)=>

                setProvider({

                  ...provider,

                  ruc:e.target.value

                })

              }


              className="w-full border p-3 rounded-lg mb-3"


            />






            <input


              placeholder="Teléfono"


              value={provider.phone}


              onChange={(e)=>

                setProvider({

                  ...provider,

                  phone:e.target.value

                })

              }


              className="w-full border p-3 rounded-lg mb-3"


            />






            <input


              placeholder="Dirección"


              value={provider.address}


              onChange={(e)=>

                setProvider({

                  ...provider,

                  address:e.target.value

                })

              }


              className="w-full border p-3 rounded-lg"


            />







            <button


              onClick={saveProvider}


              className="
              mt-6
              w-full
              bg-green-600
              text-white
              py-3
              rounded-lg
              "


            >

              Guardar proveedor

            </button>




          </Modal>


        )

      }



    </>

  );


}



export default ProviderForm;