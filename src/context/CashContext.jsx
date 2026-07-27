import { createContext, useState, useEffect } from "react";


export const CashContext = createContext();




export function CashProvider({children}){



  const [movimientosCaja,setMovimientosCaja]=useState(()=>{

    const saved = localStorage.getItem("cashMovements");

    return saved ? JSON.parse(saved) : [];

  });





  const [saldoInicial,setSaldoInicial]=useState(()=>{

    const saved = localStorage.getItem("cashInitial");

    return saved ? Number(saved) : 0;

  });





  const [cajaAbierta,setCajaAbierta]=useState(()=>{

    const saved = localStorage.getItem("cashOpen");

    return saved === "true";

  });





  const [fechaApertura,setFechaApertura]=useState(()=>{

    return localStorage.getItem("cashDate") || "";

  });





  const [cierresCaja,setCierresCaja]=useState(()=>{

    const saved = localStorage.getItem("cashClosings");

    return saved ? JSON.parse(saved) : [];

  });








  useEffect(()=>{

    localStorage.setItem(
      "cashMovements",
      JSON.stringify(movimientosCaja)
    );

  },[movimientosCaja]);






  useEffect(()=>{

    localStorage.setItem(
      "cashInitial",
      saldoInicial
    );

  },[saldoInicial]);






  useEffect(()=>{

    localStorage.setItem(
      "cashOpen",
      cajaAbierta
    );

  },[cajaAbierta]);






  useEffect(()=>{

    localStorage.setItem(
      "cashDate",
      fechaApertura
    );

  },[fechaApertura]);






  useEffect(()=>{

    localStorage.setItem(
      "cashClosings",
      JSON.stringify(cierresCaja)
    );

  },[cierresCaja]);










  function abrirCaja(monto){


    const fecha = new Date().toLocaleDateString();



    setSaldoInicial(Number(monto));


    setCajaAbierta(true);


    setFechaApertura(fecha);




    localStorage.setItem(
      "cashInitial",
      Number(monto)
    );


    localStorage.setItem(
      "cashOpen",
      "true"
    );


    localStorage.setItem(
      "cashDate",
      fecha
    );

  }












  function cerrarCaja(datos){


const nuevoCierre={

  id:Date.now(),

  date:new Date().toLocaleDateString(),

  esperado:Number(saldoActual),

  contado:Number(datos.contado),

  diferencia:

    Number(datos.contado)

    -

    Number(saldoActual),

  observacion:datos.observacion || "",

  movimientos:[...movimientosCaja]

};






    setCierresCaja(prev=>[

      ...prev,

      nuevoCierre

    ]);







    // limpiar caja actual


    setMovimientosCaja([]);


    setSaldoInicial(0);


    setFechaApertura("");


    setCajaAbierta(false);






    // actualizar almacenamiento inmediatamente


    localStorage.setItem(

      "cashMovements",

      JSON.stringify([])

    );


    localStorage.setItem(

      "cashInitial",

      0

    );


    localStorage.setItem(

      "cashOpen",

      "false"

    );


    localStorage.setItem(

      "cashDate",

      ""

    );



  }












  function deleteCierre(id){


    setCierresCaja(

      cierresCaja.filter(

        cierre=>cierre.id!==id

      )

    );


  }












  function addMovement(movement){


    const newMovement={


      id:Date.now(),


      date:new Date().toLocaleDateString(),


      ...movement


    };




    setMovimientosCaja(prev=>[

      ...prev,

      newMovement

    ]);



  }












  function deleteMovement(id){


    setMovimientosCaja(

      movimientosCaja.filter(

        movement=>movement.id!==id

      )

    );


  }












  function clearCash(){


    setMovimientosCaja([]);


    setSaldoInicial(0);


    setCajaAbierta(false);


    setFechaApertura("");


    setCierresCaja([]);




    localStorage.removeItem(
      "cashMovements"
    );


    localStorage.removeItem(
      "cashClosings"
    );


    localStorage.removeItem(
      "cashInitial"
    );


    localStorage.removeItem(
      "cashOpen"
    );


    localStorage.removeItem(
      "cashDate"
    );


  }












  const ingresos = movimientosCaja.reduce(


    (total,movement)=>


      movement.type==="Ingreso"


      ?


      total + Number(movement.amount)


      :


      total,


    0


  );












  const egresos = movimientosCaja.reduce(


    (total,movement)=>


      movement.type==="Egreso"


      ?


      total + Number(movement.amount)


      :


      total,


    0


  );












  const saldoActual =


    Number(saldoInicial)

    +

    ingresos

    -

    egresos;
    console.log({
  saldoInicial,
  ingresos,
  egresos,
  saldoActual,
  movimientosCaja,
  cajaAbierta
});












  return(


    <CashContext.Provider


      value={{


        movimientosCaja,


        addMovement,


        deleteMovement,


        clearCash,



        ingresos,


        egresos,


        saldoActual,



        saldoInicial,


        abrirCaja,


        cerrarCaja,


        cajaAbierta,


        fechaApertura,



        cierresCaja,


        deleteCierre


      }}


    >


      {children}


    </CashContext.Provider>


  );


}