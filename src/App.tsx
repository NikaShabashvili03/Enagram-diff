import { Routes, Route } from "react-router-dom"
import CustomOutler from "./components/CustomOutler"
import DiffPage from "./pages/DiffPage"


function App() {
  return (
      <Routes>
        <Route element={<CustomOutler/>}>
          <Route path="/" element={<DiffPage/>}/>
          <Route path="/1" element={<div>Hello 1</div>}/>
          <Route path="/2" element={<div>Hello 2</div>}/>
          <Route path="/3" element={<div>Hello 3</div>}/>
          <Route path="/4" element={<div>Hello 4</div>}/>

        </Route>
      </Routes>
  )
}

export default App
