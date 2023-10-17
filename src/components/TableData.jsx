import React from 'react'
import './TableData.css'

const TableData = ({ data }) => {
  return (
    <div className='tableContainer'>
      <table>
        <thead>
          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((item) => (
              <tr key={item.id}>
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