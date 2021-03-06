import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



function Usuarios() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const resp = axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resp => setUsers(resp.data))
  },[])

  // const users = [
  //   {name:"Juan Cruz" , email:"juancb@bidete.com", page:"juancb.com"},
  //   {name:"Teo" , email:"tg27@teogol.com", page:"fcbajunior.com"},
  //   {name:"Santino" , email:"santinogb@gmail.com", page:"santinog.com"},
  //   {name:"Nacho" , email:"nacho@wetzel.com", page:"igna.com"},
  // ]

  // const renderInfo = () => {
  //   return users.map((user) => {
  //     return(
  //       <tr>
  //         <td>{user.name}</td>
  //         <td>{user.email}</td>
  //         <td>{user.page}</td>
  //     </tr>
  //     )
  //   })
  // }

  // const ponerFilas = () => [ 
  //   <tr>
  //     <td>Juan </td>
  //     <td>admin@email.com</td>
  //     <td>jcbidegain.com</td>
  //   </tr>,
  //     <tr>
  //       <td>Santino </td>
  //       <td>santino.g@email.com</td>
  //       <td>santinobidgain.com</td>
  //     </tr>
  //  ]



  return (
    <div >
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return(
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><a href="">{user.website}</a></td>
            </tr>
          )
        })}
      </tbody>
    </table>

    </div>
  );
}

export default Usuarios;