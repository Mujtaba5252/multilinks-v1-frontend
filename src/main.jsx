import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCS
        theme={{
          fontFamily: "Poppins, sans-serif",
          colors: {
            themeDark: "#1e1e1e",
            themeWhite: ["ffffff", "ffffff", "ffffff"],
            basicBlues: ["#0487FF", "0263BD", "#f76707"],
            basicColors:['#000','#fff'],
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
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
