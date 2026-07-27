import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Package,
  Users,
  Truck,
  ShoppingCart,
  ShoppingBag,
  ClipboardList,
  Wallet,
  FileText,
  UserCog,
  Settings
} from "lucide-react";

import { useContext } from "react";

import { UserContext } from "../context/UserContext";



const menuItems = [

  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    permission: null
  },

  {
    name: "Productos",
    path: "/productos",
    icon: Package,
    permission: "productos"
  },

  {
    name: "Clientes",
    path: "/clientes",
    icon: Users,
    permission: "clientes"
  },

  {
    name: "Proveedores",
    path: "/proveedores",
    icon: Truck,
    permission: "compras"
  },

  {
    name: "Compras",
    path: "/compras",
    icon: ShoppingCart,
    permission: "compras"
  },

  {
    name: "Ventas",
    path: "/ventas",
    icon: ShoppingBag,
    permission: "ventas"
  },

  {
    name: "Kardex",
    path: "/kardex",
    icon: ClipboardList,
    permission: "productos"
  },

  {
    name: "Caja",
    path: "/caja",
    icon: Wallet,
    permission: "caja"
  },

  {
    name: "Comprobantes",
    path: "/comprobantes",
    icon: FileText,
    permission: "ventas"
  },

  {
    name: "Usuarios",
    path: "/usuarios",
    icon: UserCog,
    permission: "usuarios"
  },

  {
    name: "Administración",
    path: "/administracion",
    icon: Settings,
    permission: "usuarios"
  }

];





function Sidebar(){



  const usuario = JSON.parse(

    localStorage.getItem("currentUser")

  );



  const { getPermisos } = useContext(UserContext);




  const permisos = usuario

    ? getPermisos(usuario.rol)

    : {};







  const menuFiltrado = menuItems.filter(item=>{


    if(item.permission===null){

      return true;

    }


    return permisos[item.permission];

  });








  return(

    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5 flex flex-col">


      <div className="mb-8">


        <h1 className="text-3xl font-bold text-blue-400">

          SIGI One

        </h1>


        <p className="text-sm text-slate-400">

          Gestión Empresarial

        </p>


      </div>








      <nav className="space-y-2 flex-1">


        {


          menuFiltrado.map((item)=>{


            const Icon=item.icon;


            return(


              <NavLink


                key={item.name}


                to={item.path}


                className={({isActive})=>


                  `flex items-center gap-3 px-4 py-3 rounded-lg transition

                  ${

                    isActive

                    ?

                    "bg-blue-600 text-white"

                    :

                    "text-slate-300 hover:bg-slate-800"

                  }`

                }


              >


                <Icon size={20}/>


                <span>

                  {item.name}

                </span>


              </NavLink>


            );


          })


        }


      </nav>








      <div className="pt-6 border-t border-slate-800 text-xs text-slate-500">


        Powered by Nexora Systems


      </div>



    </aside>


  );


}



export default Sidebar;