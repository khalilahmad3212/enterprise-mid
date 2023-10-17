import React, { useState } from 'react'

const Filter = ({ data, setData }) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const filter = () => {
    let temp = data;
    if (name) {
      temp = temp.filter((e) => e.name === name)
    }

    if (age) {
      temp = temp.filter((e) => e.age == age)

    }

    setData(temp)
  }

  return (
    <div>
      <div>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <button onClick={filter}>Filter</button>
    </div>
  )
}

export default Filter