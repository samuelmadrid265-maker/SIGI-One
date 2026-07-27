import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Productos from "./pages/Productos";
import Clientes from "./pages/Clientes";
import Proveedores from "./pages/Proveedores";
import Compras from "./pages/Compras";
import Ventas from "./pages/Ventas";
import Kardex from "./pages/Kardex";
import Caja from "./pages/Caja";
import Comprobantes from "./pages/Comprobantes";
import Usuarios from "./pages/Usuarios";
import Administracion from "./pages/Administracion";



function Layout() {


  return (


    <div className="flex min-h-screen bg-slate-100">


      <Sidebar />



      <div className="flex-1">


        <Header />



        <main className="p-6">


          <Routes>



            <Route
              path="/"
              element={<Dashboard />}
            />





            <Route
              path="/productos"
              element={
                <ProtectedRoute permission="productos">
                  <Productos />
                </ProtectedRoute>
              }
            />







            <Route
              path="/clientes"
              element={
                <ProtectedRoute permission="clientes">
                  <Clientes />
                </ProtectedRoute>
              }
            />







            <Route
              path="/proveedores"
              element={
                <ProtectedRoute permission="compras">
                  <Proveedores />
                </ProtectedRoute>
              }
            />







            <Route
              path="/compras"
              element={
                <ProtectedRoute permission="compras">
                  <Compras />
                </ProtectedRoute>
              }
            />







            <Route
              path="/ventas"
              element={
                <ProtectedRoute permission="ventas">
                  <Ventas />
                </ProtectedRoute>
              }
            />







            <Route
              path="/kardex"
              element={
                <ProtectedRoute permission="productos">
                  <Kardex />
                </ProtectedRoute>
              }
            />







            <Route
              path="/caja"
              element={
                <ProtectedRoute permission="caja">
                  <Caja />
                </ProtectedRoute>
              }
            />







            <Route
              path="/comprobantes"
              element={
                <ProtectedRoute permission="ventas">
                  <Comprobantes />
                </ProtectedRoute>
              }
            />







            <Route
              path="/usuarios"
              element={
                <ProtectedRoute permission="usuarios">
                  <Usuarios />
                </ProtectedRoute>
              }
            />







            <Route
              path="/administracion"
              element={
                <ProtectedRoute permission="usuarios">
                  <Administracion />
                </ProtectedRoute>
              }
            />



          </Routes>


        </main>


      </div>


    </div>


  );


}









function App() {


  return (


    <Routes>


      <Route
        path="/login"
        element={<Login />}
      />


      <Route
        path="/*"
        element={<Layout />}
      />


    </Routes>


  );


}



export default App;