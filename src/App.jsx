import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log('puppyList: ', puppyList);
  const featuredPup = puppies.find((pup) => pup.id===featPupId)
  console.log(featuredPup)
  {()=> {console.log('puppy.id: ', puppy.id)}}
  
  return (
    <>
    <h1>Puppy List</h1>
      <div className="App">
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{setFeatPupId(puppy.id)}} key = {puppy.id}>{puppy.name}</p>;
          })
        }  
      </div>
    </>
  )
}

export default App

