import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import Homepage from "./components/Homepage"
import AddUser from "./components/AddUser"
import UpdateUser from "./components/UpdateUser"

import './css/App.css'


function App() {
  return (
    <>
      <div className="content">
        <BrowserRouter>
        <Navigation/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/add-user" element={<AddUser/>}></Route>
              <Route path="/update-user/:id" element={<UpdateUser />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
