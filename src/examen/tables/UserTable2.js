import React from 'react'

const UserTable2 = props => (
  <table>
    <thead>
      <tr>
        <th>Nombre Real</th>
        <th>Villano</th>
        <th>Edad</th>
        <th>Afilación</th>
        <th>Descripción</th>
        <th>Opcion</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.edad}</td>
            <td>{user.afi}</td>
            <td>{user.des}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                EDITAR
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                ELIMINAR
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7}>SIN DATOS</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable2