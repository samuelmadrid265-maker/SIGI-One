import { addResetHistory } from "./resetHistory";

export function resetModule(

  key,

  moduleName

){

  const usuario = JSON.parse(

    localStorage.getItem("currentUser")

  );



  const registros = JSON.parse(

    localStorage.getItem(key) || "[]"

  ).length;



  const confirmar = window.confirm(

    `¿Desea reiniciar ${moduleName}?`

  );



  if(!confirmar){

    return;

  }



  addResetHistory(

    moduleName,

    registros,

    usuario?.name || "Administrador"

  );



  localStorage.setItem(

    key,

    JSON.stringify([])

  );



  alert(

    `${moduleName} reiniciado correctamente`

  );



  window.location.reload();

}