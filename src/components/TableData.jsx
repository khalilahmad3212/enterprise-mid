import React from 'react'
import './TableData.css'

const TableData = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Occupation</th>
        </thead>
        <tbody>
          {
            data?.map((item) => (
              <tr id={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.occupation}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableData