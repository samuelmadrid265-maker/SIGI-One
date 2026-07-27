import { useState } from "react";
import Modal from "../Modal";


function ClientForm({

  addClient

}){


  const [open,setOpen] = useState(false);


  const [client,setClient] = useState({

    name:"",
    document:"",
    phone:"",
    address:""

  });




  function saveClient(){


    addClient(client);


    setClient({

      name:"",
      document:"",
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

        + Nuevo cliente

      </button>




      {

        open &&

        (

          <Modal close={()=>setOpen(false)}>


            <h2 className="text-2xl font-bold mb-6">
              Nuevo cliente
            </h2>



            <input

              placeholder="Nombre completo"

              value={client.name}

              onChange={(e)=>

                setClient({

                  ...client,

                  name:e.target.value

                })

              }

              className="w-full border p-3 rounded-lg mb-3"

            />



            <input

              placeholder="DNI / RUC"

              value={client.document}

              onChange={(e)=>

                setClient({

                  ...client,

                  document:e.target.value

                })

              }

              className="w-full border p-3 rounded-lg mb-3"

            />



            <input

              placeholder="Teléfono"

              value={client.phone}

              onChange={(e)=>

                setClient({

                  ...client,

                  phone:e.target.value

                })

              }

              className="w-full border p-3 rounded-lg mb-3"

            />



            <input

              placeholder="Dirección"

              value={client.address}

              onChange={(e)=>

                setClient({

                  ...client,

                  address:e.target.value

                })

              }

              className="w-full border p-3 rounded-lg"

            />



            <button

              onClick={saveClient}

              className="
              mt-6
              w-full
              bg-green-600
              text-white
              py-3
              rounded-lg
              "

            >

              Guardar cliente

            </button>



          </Modal>

        )

      }


    </>

  );

}


export default ClientForm;