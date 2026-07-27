export function generateCode(prefix, total){

  return `${prefix}-${String(total + 1).padStart(4,"0")}`;

}





export function currentDate(){

  return new Date().toLocaleDateString("es-PE",{

    day:"2-digit",

    month:"2-digit",

    year:"numeric"

  });

}





export function formatMoney(value){

  return `S/ ${Number(value).toFixed(2)}`;

}