import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData] = useState([])

  useEffect(()=>
    axios.put('https://reqres.in/api/users/2',{
      "name": "imran",
      "job": "fullstack developer"
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err)),[]
  )
  return (
    <div>
      <h1>please check your console for put api response</h1>
      
    </div>
  )
}

export default App
