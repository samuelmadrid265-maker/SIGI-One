import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export function generarPDF(empresa,boleta){

  const doc = new jsPDF();



  const logo = localStorage.getItem("companyLogo");



  if(logo){

    try{

      doc.addImage(

        logo,

        "PNG",

        80,

        8,

        50,

        30

      );

    }

    catch(error){

      console.log("Error cargando logo",error);

    }

  }





  let inicio = logo ? 48 : 18;





  doc.setFontSize(20);

  doc.text(

    empresa.nombre || "SIGI One",

    105,

    inicio,

    {align:"center"}

  );



  doc.setFontSize(11);

  doc.text(

    empresa.razon || "",

    105,

    inicio + 8,

    {align:"center"}

  );



  doc.text(

    `RUC: ${empresa.ruc || ""}`,

    105,

    inicio + 15,

    {align:"center"}

  );



  doc.text(

    empresa.direccion || "",

    105,

    inicio + 22,

    {align:"center"}

  );



  doc.text(

    `Tel: ${empresa.telefono || ""}`,

    105,

    inicio + 29,

    {align:"center"}

  );





  doc.line(

    15,

    inicio + 38,

    195,

    inicio + 38

  );







  doc.setFontSize(14);

  doc.text(

    "BOLETA ELECTRÓNICA",

    15,

    inicio + 50

  );





  doc.setFontSize(11);

  doc.text(

    `N° ${boleta.code}`,

    15,

    inicio + 57

  );



  doc.text(

    `Fecha: ${boleta.date}`,

    150,

    inicio + 57

  );





  doc.text(

    `Cliente: ${boleta.client || "Cliente general"}`,

    15,

    inicio + 67

  );







  autoTable(doc,{

    startY:inicio + 75,

    head:[

      [

        "Producto",

        "Cant.",

        "Precio",

        "Importe"

      ]

    ],

    body:boleta.items.map(item=>([

      item.product,

      item.quantity,

      `S/ ${Number(item.price).toFixed(2)}`,

      `S/ ${(item.price*item.quantity).toFixed(2)}`

    ]))

  });







  const finalY = doc.lastAutoTable.finalY + 10;





  doc.text(

    `Subtotal: S/ ${Number(boleta.subtotal).toFixed(2)}`,

    140,

    finalY

  );





  doc.text(

    `IGV: S/ ${Number(boleta.igv).toFixed(2)}`,

    140,

    finalY + 8

  );





  doc.setFontSize(14);

  doc.text(

    `TOTAL: S/ ${Number(boleta.total).toFixed(2)}`,

    140,

    finalY + 18

  );







  doc.save(

    `${boleta.code}.pdf`

  );

}