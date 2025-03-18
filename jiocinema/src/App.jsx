
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"

function App() {
  

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>

   
      </Routes>
   
    </BrowserRouter>
   </>
  )
}

export default App
