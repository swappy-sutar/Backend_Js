import { useEffect, useState } from 'react'
import axios from "axios"

import './App.css'

function App() {
  const [students ,setStudents] = useState([]);

  useEffect( ()=>{
    axios.get('/api/students')
    .then(response => {
      setStudents(response.data)
      })
      .catch(error => {
        console.error(error)
        })
      
  },[])


  return (
    <>
      <h1> The collage Students</h1>
      <p>Students Counts is : {students.length}</p>

      {students.map((student) => (
        <div key={students.id}>
          <h2>{student.name}</h2>
          <p>{student.collage}</p>
        </div>
      ))} 
    </>
  );
}

export default App
 