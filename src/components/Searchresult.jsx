import React, { useEffect, useState } from 'react'
import { serchayah } from '../api/api'
import { useNavigate } from 'react-router-dom'

const Searchresult = ({aya}) => {
    const[t,sett]=useState({})
    const n = useNavigate()
    const g = async ()=>{
       const ff =await serchayah(aya.id)
      sett(ff)
    }
   
    useEffect(()=>{
     g()
    },[aya])

  return (
    <div className='ayah' onClick={()=>{n(`/page/${t.page}`)}} >
        <p style={{textAlign:'center'}}> {aya.t} </p>
        <p style={{textAlign:'center'}}> Surah : {t.name}  ----   Page : {t.page} --- Key: {aya.id} </p> 
    </div>
  )
}

export default Searchresult