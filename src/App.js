import logo from "./logo.svg";
import "./App.css";
import Index from "./Frontend/Pages/Index";
import { Route, Routes } from "react-router-dom";
import Detail from "./Frontend/Pages/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
