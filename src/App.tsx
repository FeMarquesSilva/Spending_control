//Importação dos frameworks e bibliotecas
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importação das páginas
import Home from "./pages/home";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
