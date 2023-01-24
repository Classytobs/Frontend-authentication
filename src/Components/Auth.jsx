import React,{useContext} from 'react'
import { AuthContext } from '../Context/Auth-context'; 

export default function Auth() {
    const auth = useContext(AuthContext);

  return (
    <div>{
    auth.status === null? ( '' ) : auth.status === true? (<div><h1>Sign in sucessful</h1></div>) : null}
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
