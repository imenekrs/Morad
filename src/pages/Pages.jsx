import React ,{useState ,useEffect}from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { getepage } from '../api/api'
import{BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill} from'react-icons/Bs'


const Pages = () => {
  const{p}= useParams()
  const [all, setall] = useState([])
  const n = useNavigate()
  const f = async ()=>{
    const g = await getepage(p)
    setall(g)}

  useEffect(()=>{
    f()
  },[p])

  return (
    <div className='all'>
    <div className='page'>
     {all.map((a)=>(
      <p> {a} </p>
     ))}
    </div>
    <div style={{display:'flex',justifyContent:'space-between' }}>
    <BsFillArrowLeftCircleFill onClick={()=>{n(`/page/${p+1}`)}} style={{height:'60px' , width:'60px',margin : '10px'}}/> <BsFillArrowRightCircleFill onClick={()=>{n(`/page/${p-1}`)}}  style={{height:'60px' , width:'60px',margin:'10px'}}/>
    </div>
  
    </div>
  )
}

export default Pages