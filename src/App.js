import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData] = useState([])

  useEffect(()=>
    axios.post('https://reqres.in/api/users',{
      "name": "imran",
      "job": "fullstack developer"
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err)),[]
  )
  return (
    <div>
      <h1>please check your console for post api response</h1>
      
    </div>
  )
}

export default App
