import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  useEffect(()=>
    axios.get('https://reqres.in/api/users?page=2')
    .then(res=>console.log(res))
    .catch(err=>console.log(err)),[]
  )
  return (
    <div>
      <h1>please check your console for get api response</h1>
    </div>
  )
}

export default App
