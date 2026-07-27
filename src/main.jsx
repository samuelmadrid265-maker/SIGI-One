import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";


import {
  InventoryProvider
} from "./context/InventoryContext.jsx";


import {
  CashProvider
} from "./context/CashContext.jsx";


import {
  UserProvider
} from "./context/UserContext.jsx";


import {
  NotificationProvider
} from "./context/NotificationContext.jsx";






createRoot(document.getElementById("root")).render(


  <StrictMode>


    <BrowserRouter>


      <UserProvider>


        <NotificationProvider>


          <CashProvider>


            <InventoryProvider>


              <App />


            </InventoryProvider>


          </CashProvider>


        </NotificationProvider>


      </UserProvider>


    </BrowserRouter>


  </StrictMode>


);