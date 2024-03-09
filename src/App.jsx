import MainPage from "./pages/MainPage"
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Routes>
    <Route path = "/" element={<MainPage />} />
    <Route path="/login" element={<SignInPage/>}/>
    <Route path="/home" element={<Home/>}/>
    </Routes>   
    </>
  )
}

export default App
