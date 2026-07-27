export function getResetHistory(){

  return JSON.parse(

    localStorage.getItem("resetHistory") || "[]"

  );

}



export function saveResetHistory(history){

  localStorage.setItem(

    "resetHistory",

    JSON.stringify(history)

  );

}



export function addResetHistory(

  modulo,

  registros,

  usuario

){

  const history = getResetHistory();



  history.unshift({

    id:Date.now(),

    modulo,

    registros,

    usuario,

    fecha:new Date().toLocaleDateString(),

    hora:new Date().toLocaleTimeString()

  });



  saveResetHistory(history);

}