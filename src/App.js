import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData] = useState([])

  useEffect(()=>
    axios.delete('https://reqres.in/api/users/2')
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err)),[]
  )
  return (
    <div>
      <h1>please check your console for delete api response</h1>
      
    </div>
  )
}

export default App
