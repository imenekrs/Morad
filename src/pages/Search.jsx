import React, { useState , useEffect } from 'react'
import { serchfor } from '../api/api'
import Searchresult from '../components/Searchresult'

const Search = () => {
  const [term,Setterm] = useState('')
  const [results,Setresults] = useState([])

  const fetchy = async()=>{
   const gg = await serchfor(term)
   Setresults(gg)
      
  }

  return (
    <div className='Search'>
      <div style={{height:'20vh'}}>
         <h3> Search for a word or phrase in the quran and it will return 20 verses </h3>
         <div>
          <input value={term} onChange={(e)=>Setterm(e.target.value)}/>
          <button onClick={()=>fetchy()}>Search</button>
         </div>
      </div>
      <div  className='results'>   
        {results?results.map((r)=>(
          <Searchresult aya={r} key={r.id}/>
        )):(<></>)}

      </div>
    </div>
  )
}

export default Search