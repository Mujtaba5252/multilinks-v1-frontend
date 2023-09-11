import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { AuthProvider } from "./Contexts/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <MantineProvider
          withGlobalStyles
          withNormalizeCS
          theme={{
            fontFamily: "Poppins, sans-serif",
            colors: {
              themeDark: "#1e1e1e",
              themeWhite: ["ffffff", "ffffff", "ffffff"],
              basicBlues: ["#0487FF", "0263BD", "#f76707"],
              basicColors: ['#000', '#fff'],
              container: ["#F8F9FA"],
            },
            primaryColor: "blue",
            globalStyles: () => ({
              ".mantine-Modal-title": {
                margin: "auto",
                fontWeight: "bold",
                color: "rgb(0,0,0,0.5)",
              },
            }),
          }}
        >
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthProvider>
        </MantineProvider>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
