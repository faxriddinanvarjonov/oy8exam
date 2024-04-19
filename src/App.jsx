import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CryptoView from "./pages/CryptoView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/view" element={<CryptoView />}></Route>
    </Routes>
  );
}

export default App;
