export function createBackup() {

  const backup = {

    date: new Date().toLocaleString(),

    products: JSON.parse(localStorage.getItem("products") || "[]"),

    purchases: JSON.parse(localStorage.getItem("purchases") || "[]"),

    sales: JSON.parse(localStorage.getItem("sales") || "[]"),

    movements: JSON.parse(localStorage.getItem("movements") || "[]"),

    clients: JSON.parse(localStorage.getItem("clients") || "[]"),

    providers: JSON.parse(localStorage.getItem("providers") || "[]"),

    users: JSON.parse(localStorage.getItem("users") || "[]"),

    cash: JSON.parse(localStorage.getItem("cashMovements") || "[]"),

    closures: JSON.parse(localStorage.getItem("cashClosures") || "[]")

  };



  const blob = new Blob(

    [

      JSON.stringify(

        backup,

        null,

        2

      )

    ],

    {

      type:"application/json"

    }

  );



  const url = URL.createObjectURL(blob);



  const link = document.createElement("a");



  link.href = url;



  link.download =

    `SIGI_Backup_${Date.now()}.json`;



  link.click();



  URL.revokeObjectURL(url);

}





export function restoreBackup(file){



  const reader = new FileReader();



  reader.onload=(e)=>{



    try{



      const backup=JSON.parse(e.target.result);



      localStorage.setItem(

        "products",

        JSON.stringify(backup.products || [])

      );



      localStorage.setItem(

        "purchases",

        JSON.stringify(backup.purchases || [])

      );



      localStorage.setItem(

        "sales",

        JSON.stringify(backup.sales || [])

      );



      localStorage.setItem(

        "movements",

        JSON.stringify(backup.movements || [])

      );



      localStorage.setItem(

        "clients",

        JSON.stringify(backup.clients || [])

      );



      localStorage.setItem(

        "providers",

        JSON.stringify(backup.providers || [])

      );



      localStorage.setItem(

        "users",

        JSON.stringify(backup.users || [])

      );



      localStorage.setItem(

        "cashMovements",

        JSON.stringify(backup.cash || [])

      );



      localStorage.setItem(

        "cashClosures",

        JSON.stringify(backup.closures || [])

      );



      alert("Backup restaurado correctamente.");



      window.location.reload();



    }

    catch{

      alert("El archivo seleccionado no es válido.");

    }

  };



  reader.readAsText(file);

}