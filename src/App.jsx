import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import TableData from './components/TableData'
const tableData = [
  { id: 1, name: 'Khalil', age: 22, city: 'Mianwali', occupation: 'Engineer' },
  { id: 2, name: 'Muhammad Ali', age: 22, city: 'Chakwal', occupation: 'Designer' },
]
function App() {
  const [data, setData] = useState(tableData)
  return (
    <div className='app'>
      <Filter data={tableData} setData={setData} />
      <TableData data={data} />
    </div>
  )
}

export default App
