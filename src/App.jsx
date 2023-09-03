import { Button } from "@mantine/core";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/Components/Layout";
import { routes } from "../src/routes";
import Login from "./Components/Login";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route path={routes.home} element={<LandingPage />} />
        <Route path={routes.login} element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
