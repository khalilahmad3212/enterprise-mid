import './App.css'
import TableData from './components/TableData'
const data = [
  { id: 1, name: 'Khalil', age: 22, city: 'Mianwali', occupation: 'Engineer' },
  { id: 1, name: 'Muhammad Ali', age: 22, city: 'Chakwal', occupation: 'Designer' },
]
function App() {

  return (
    <>
      <TableData data={data} />
    </>
  )
}

export default App
