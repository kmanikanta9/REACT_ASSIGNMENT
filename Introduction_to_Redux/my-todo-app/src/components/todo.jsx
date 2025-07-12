import {useSelector,useDispatch} from 'react-redux'
import { COMPLETE, DELETE } from '../redux/action'
import Add from './todoAdd'

export default function Todo(){
    
    const data= useSelector((state)=>state)

    console.log(data)
    const dispatch=useDispatch()
    const complete=(id)=>{
        dispatch(COMPLETE(id))
    }
    return(
        <>
            <h1>Add Tasks</h1>
            <Add/>
            {data && data.map((e,i)=>(
                <div key={i}>
                    <li onClick={()=>{complete(e.id)}} style={{textDecoration:(e.status)?"line-through":"none"}}>{e.title}
                    <button onClick={()=>{dispatch(DELETE(e.id))}}>Delete</button></li>
                </div>
            ))}
        </>
    )
}