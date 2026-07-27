import { createContext, useState } from "react";


export const NotificationContext = createContext();



export function NotificationProvider({children}){


  const [notifications,setNotifications] = useState([

    {
      id:1,
      message:"Bienvenido a SIGI One",
      type:"info"
    }

  ]);




  function addNotification(notification){


    setNotifications(prev=>[

      {
        id:Date.now(),
        ...notification
      },

      ...prev

    ]);


  }






  function removeNotification(id){


    setNotifications(prev=>

      prev.filter(

        n=>n.id!==id

      )

    );


  }







  function clearNotifications(){


    setNotifications([]);


  }







  return(


    <NotificationContext.Provider

      value={{

        notifications,

        addNotification,

        removeNotification,

        clearNotifications

      }}

    >

      {children}

    </NotificationContext.Provider>


  );


}