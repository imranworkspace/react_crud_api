import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Put = () => {
    const [data,setData] = useState([])

    useEffect(()=>
    axios.put('https://reqres.in/api/users/2',{
        "name": "irfan",
        "job": "thekedaar"
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    )

  return (
    <div>
      
    </div>
  )
}

export default Put
