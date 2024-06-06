import { Route, Routes } from "react-router-dom";
import { Filter } from "./pages/Filter";
import { Header } from "./components/Header";
import { Table } from "./pages/Table";

function App() {

  return (
    <div className="bg-blue-950 h-screen">
      <Header />
      <Routes>
        <Route path="/filter" element={<Filter />}/>
        <Route path="/" element={<Table />} />
      </Routes>
    </div>

  )
}

export default App