import { Route, Routes, useLocation } from "react-router-dom";
import { Filter } from "./pages/Filter";
import { Header } from "./components/Header";
import Graph from "./pages/Graph";

function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className={`bg-blue-950 ${location.pathname === '/'? 'min-h-screen': 'h-screen'}`}>
      <Header />
      <Routes>
        {/* Creamos dos rutas una que seria el formulario para poder filtrar los datos y crear el grafo dirigido */}
        {/* y otra ruta que es donde se encontrara el grafo dirigido */}
        <Route path="/filter" element={<Filter />}/>
        <Route path="/" element={<Graph />} />
      </Routes>
    </div>

  )
}

export default App