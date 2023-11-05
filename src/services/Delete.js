import React, { useEffect } from 'react'
import axios from 'axios'

const Delete = () => {
    useEffect(()=>
    axios.delete('https://reqres.in/api/users/2')
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err)),[])
    return (
    <div>
      
    </div>
  )
}

export default Delete
