import { useState, useContext } from "react";

import Modal from "../Modal";

import { CashContext } from "../../context/CashContext.jsx";



function MovimientoModal({

  type,
  close

}){



  const {

    addMovement

  } = useContext(CashContext);





  const [description,setDescription]=useState("");

  const [amount,setAmount]=useState("");







  function saveMovement(){



    if(!description){


      alert("Ingrese una descripción");


      return;


    }





    if(Number(amount)<=0){


      alert("Ingrese un monto válido");


      return;


    }







    addMovement({


      type,

      description,

      amount:Number(amount)


    });







    setDescription("");

    setAmount("");



    close();


  }









  return(



    <Modal close={close}>


      <h2 className="text-2xl font-bold mb-6">


        {type}


      </h2>








      <input


        type="text"


        placeholder="Descripción"


        value={description}


        onChange={(e)=>setDescription(e.target.value)}


        className="w-full border rounded-lg p-3 mb-4"


      />








      <input


        type="number"


        placeholder="Monto"


        value={amount}


        onChange={(e)=>setAmount(e.target.value)}


        className="w-full border rounded-lg p-3 mb-4"


      />








      <button


        onClick={saveMovement}


        className={`

        w-full

        py-3

        rounded-lg

        text-white

        font-semibold

        ${

          type==="Ingreso"

          ?

          "bg-green-600 hover:bg-green-700"

          :

          "bg-red-600 hover:bg-red-700"

        }

        `}


      >


        Guardar


      </button>





    </Modal>


  );

}



export default MovimientoModal;