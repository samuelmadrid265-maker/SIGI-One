import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";



export function generateInvoice(sale){



  const doc = new jsPDF();





  doc.setFontSize(20);

  doc.text(

    "SIGI ONE",

    20,

    20

  );





  doc.setFontSize(12);

  doc.text(

    "Sistema de Gestión Integral",

    20,

    30

  );







  doc.text(

    `Boleta: ${sale.code}`,

    20,

    45

  );





  doc.text(

    `Fecha: ${sale.date}`,

    20,

    55

  );





  doc.text(

    `Cliente: ${sale.client || "Cliente general"}`,

    20,

    65

  );









  autoTable(doc,{



    startY:80,



    head:[

      [

        "Producto",

        "Cantidad",

        "Precio",

        "Total"

      ]

    ],




    body:



      sale.items.map((item)=>([


        item.product,


        item.quantity,


        `S/ ${Number(item.price).toFixed(2)}`,


        `S/ ${Number(item.total).toFixed(2)}`



      ]))



  });









  const finalY = doc.lastAutoTable.finalY + 20;






  doc.text(


    `TOTAL: S/ ${Number(sale.total).toFixed(2)}`,


    20,


    finalY


  );






  doc.text(


    "Gracias por su compra",


    20,


    finalY + 20


  );








  doc.save(

    `${sale.code}.pdf`

  );



}