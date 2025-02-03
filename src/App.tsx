import './App.css'
import { Route, Routes} from "react-router-dom"
import SignUp from './page/views/auth/signup'

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  )
}

export default App
