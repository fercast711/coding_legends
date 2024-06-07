import { Route, Routes, useLocation } from "react-router-dom";
import { Filter } from "./pages/Filter";
import { Header } from "./components/Header";
import { Table } from "./pages/Table";
import Graph from "./pages/Graph";

function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className={`bg-blue-950 ${location.pathname === '/'? 'min-h-screen': 'h-screen'}`}>
      <Header />
      <Routes>
        <Route path="/filter" element={<Filter />}/>
        <Route path="/" element={<Graph />} />
      </Routes>
    </div>

  )
}

export default App