import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Post = () => {
    const [data,setData]=useState([])
    useEffect(()=>
    axios.post('https://reqres.in/api/users',{
        "name": "imran",
        "job": "fullstack engineer"})
        .then(res=>setData(res.data))
        .catch(err=>console.log(err)),[])
  return (
    <div>
      
    </div>
  )
}

export default Post
