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
    <Route exact path="/" component={Usuarios}  />
    <Route exact path="/tareas" component={Tareas}  />
  </BrowserRouter>
)     

export default App
