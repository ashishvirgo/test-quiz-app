import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Score from "./components/Score"
import Quiz from './components/Quiz'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/score" element={<Score/>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}
export default App