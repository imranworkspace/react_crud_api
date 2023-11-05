import axios from "axios"

import React, { useEffect } from 'react'

const Get = () => {
    useEffect(()=>
    axios.get("https://reqres.in/api/users?page=2")
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    )
  return (
    <>
      
    </>
  )
}

export default Get
