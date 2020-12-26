import React from 'react'
import Menu from "./menu"
import Usuarios from './usuarios'
import { BrowserRouter, Route } from 'react-router-dom'



const Tareas = () => (
  <div id="tareas">Sin tareas por el momento . . .</div>
)

 
const App = () => (
  <BrowserRouter className="">
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios}  />
      <Route exact path="/tareas" component={Tareas}  />
    </div>
  </BrowserRouter>
)     

export default App
