import {
  Bell,
  Settings,
  UserCircle,
  LogOut
} from "lucide-react";


import {
  useNavigate
} from "react-router-dom";


import {
  useContext,
  useState
} from "react";


import {
  NotificationContext
} from "../context/NotificationContext";





function Header() {



  const navigate = useNavigate();



  const usuario = JSON.parse(

    localStorage.getItem("currentUser")

  );





  const {

    notifications,

    clearNotifications

  } = useContext(NotificationContext);





  const [openNotifications,setOpenNotifications] = useState(false);









  function cerrarSesion(){


    localStorage.removeItem(

      "currentUser"

    );


    navigate("/login");


  }









  return (



    <header className="h-20 bg-white border-b flex items-center justify-between px-8">





      <div>


        <h2 className="text-xl font-semibold text-slate-800">

          Panel de Control

        </h2>


        <p className="text-sm text-slate-500">

          Bienvenido nuevamente a SIGI One

        </p>


      </div>









      <div className="flex items-center gap-5">








        <div className="relative">



          <button


            onClick={()=>setOpenNotifications(!openNotifications)}


            className="relative p-2 rounded-lg hover:bg-slate-100 transition"


          >



            <Bell

              size={22}

              className="text-slate-600"

            />




            {


              notifications.length > 0 && (


                <span

                  className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"

                >

                  {notifications.length}

                </span>


              )


            }



          </button>







          {


            openNotifications && (



              <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border p-4 z-50">



                <div className="flex justify-between items-center mb-3">



                  <h3 className="font-bold">

                    Notificaciones

                  </h3>





                  <button


                    onClick={clearNotifications}


                    className="text-xs text-blue-600"


                  >

                    Limpiar

                  </button>



                </div>







                {


                  notifications.length === 0

                  ?


                  (

                    <p className="text-sm text-slate-500">

                      No hay notificaciones

                    </p>


                  )


                  :



                  notifications.map((notification)=>(



                    <div


                      key={notification.id}


                      className="border-b py-2 text-sm text-slate-700"


                    >


                      {notification.message}


                    </div>



                  ))



                }





              </div>



            )


          }



        </div>









        <button className="p-2 rounded-lg hover:bg-slate-100 transition">


          <Settings

            size={22}

            className="text-slate-600"

          />


        </button>









        <div className="flex items-center gap-3 border-l pl-5">





          <UserCircle


            size={40}


            className="text-blue-600"


          />






          <div>


            <p className="font-semibold text-slate-800">


              {usuario?.nombre || "Usuario"}


            </p>




            <p className="text-xs text-slate-500">


              {usuario?.rol || "Sin rol"}


            </p>


          </div>








          <button



            onClick={cerrarSesion}



            className="ml-3 p-2 rounded-lg hover:bg-red-100 transition"



            title="Cerrar sesión"



          >



            <LogOut


              size={20}


              className="text-red-600"


            />



          </button>





        </div>





      </div>





    </header>


  );

}





export default Header;