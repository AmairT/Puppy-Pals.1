import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies)
  {()=> {console.log('puppy.id: ', puppy.id)}}
  return (
    <>
      <div className="App">
      {
        puppies.map((puppy) => {
          return <p onClick={()=>{}} key= {puppy.id}>{puppy.name}</p>;
        })        
      }   
      </div>

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App

