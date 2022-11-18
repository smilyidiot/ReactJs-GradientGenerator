import {useState, useEffect} from 'react'
import axios from 'axios'

const Index = () => {
  const [data, setData] = useState({id: '', todo: '', priority: '', status: ''})
  const EmployeeDetails = () => {
    axios
      .get(`http://localhost:3000/todos/`)
      .then(res => {
        setData(res.data)
      })
      .catch(res => console.log(res))
  }

  useEffect(() => EmployeeDetails)
  return (
    <div>
      <h1>hie</h1>
      <h1>{data.id}</h1>
      <h1>{data.todo}</h1>
      <h1>{data.priority}</h1>
      <h1>{data.status}</h1>
    </div>
  )
}
export default Index
