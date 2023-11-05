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
        data.map((d,i)=>{
          // return <p key={id}>{d.email}</p>
          return <table align='center'>
            <thead>
              <tr>
                <th>id</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>img path</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{d.id}</td>
                <td>{d.first_name}</td>
                <td>{d.last_name}</td>
                <td>{d.email}</td>
                <td>{d.avatar}</td>
              </tr>
            </tbody>
          </table>  
        })
      }
    </div>
  )
}

export default App
