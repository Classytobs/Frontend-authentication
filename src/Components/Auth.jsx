import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '../Context/Auth-context'; 

export default function Auth() {
    const auth = useContext(AuthContext);
    const [showAlert, setShowAlert]=useState(true)

    

    const closeAlert = () => {
      const fade1=setTimeout(() => {
        setShowAlert(false)
      },[showAlert] );
      return () => clearTimeout(fade1);
    }

    // useEffect(() => {
    //   const fade=setTimeout(() => {
    //     setShowAlert(false)
    //   },3000 )
    //   return () => clearTimeout(fade);
    // })

  return (
    <div>{
    auth.status === null? ( '' ) : auth.status === true? showAlert && (<div className='flex flex-row gap-x-5 
    bg-green-400 p-5 rounded-lg'><h1>Sign in sucessful</h1><span onClick={closeAlert}>x</span></div>) : null}
        {auth.status === null? ( <button
            type="submit"
            className=' shadow-md h-fit w-full mt-5 px-2 py-2 rounded-lg bg-blue-700 hover:bg-blue-500'
            onClick={auth.login}>
                Sign in
        </button> ) : auth.status===true? ( 
        <button
            type="submit"
            className=' shadow-md h-fit w-full mt-5 px-2 py-2 rounded-lg bg-red-700 hover:bg-red-500'
            onClick={auth.logout}>
            Sign out
        </button> ) : (<button
        type="submit"
        className=' shadow-md h-fit w-full mt-5 px-2 py-2 rounded-lg bg-blue-700 hover:bg-blue-500'
        onClick={auth.login}>
            Try Again
    </button>)}
    
</div>
  )
}
