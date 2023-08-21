import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCS
      theme={{
        fontFamily: "Poppins, sans-serif",
        colors: {
          themeDark: "#1e1e1e",
          themeWhite: ["ffffff", "ffffff", "ffffff"],
          themeOrange: ["#ffa803", "#7d5103", "#f76707"],
          container: ["#F8F9FA"],
        },
        primaryColor: "orange",
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
  </React.StrictMode>
);
