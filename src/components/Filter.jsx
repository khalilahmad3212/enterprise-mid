import React, { useState } from 'react'
import './Filter.css'

const Filter = ({ data, setData }) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('select')
  const [occupation, setOccupation] = useState('select')

  const filter = () => {
    let temp = data;
    if (name) {
      temp = temp.filter((e) => e.name === name)
    }

    if (age) {
      temp = temp.filter((e) => e.age == age)

    }

    if (city) {
      temp = temp.filter((e) => e.city == city)
    }

    if (occupation) {
      temp = temp.filter((e) => e.occupation == occupation)
    }

    setData(temp)
  }

  return (
    <div className='container'>
      <div className='inputs'>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className='dropdowns'>
        <select onChange={(e) => setCity(e.target.value)}>
          <option value="">City</option>
          {
            data?.map((e) => (
              <option key={e.id} value={e.city}>{e.city}</option>
            ))
          }
        </select>
        <select onChange={(e) => setOccupation(e.target.value)}>
          <option value="">Occupation</option>
          {
            data?.map((e) => (
              <option key={e.id} value={e.occupation}>{e.occupation}</option>
            ))
          }
        </select>
      </div>
      <button onClick={filter}>Filter</button>
    </div>
  )
}

export default Filter