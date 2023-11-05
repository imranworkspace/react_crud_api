import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData] = useState([])

  useEffect(()=>
    axios.get('https://reqres.in/api/users?page=2')
    .then(res=>setData(res.data.data))
    .catch(err=>console.log(err)),[]
  )
  return (
    <div>
      <h1>please check your console for get api response</h1>
      {
        data.map((d,id)=>{
          return <p key={id}>{d.email}</p>  
        })
      }
    </div>
  )
}

export default App
