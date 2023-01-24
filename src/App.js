import React, { useState, useRef, useEffect } from "react";
import Auth from "./Components/Auth";
import Title from "./Components/Title";
import { AuthContext } from "./Context/Auth-context";


function App() {

  // Autofocus
  const inputName = useRef(null);
  useEffect(() => {
    inputName.current.focus();
  }, [inputName]);

  const [userAuth, setUserAuth] = useState({
    name: "",
    password: "",
  });

  const [ui, setUi] = useState({true:true, name:'Sign in to continue'})

  const handleSubmit = (e) => {
    e.preventDefault()

    setUserAuth({
      name: "",
      password: "",
    })
  }

  const handleChangeName = (e) => {
    setUserAuth({ ...userAuth, name: e.target.value });
  }

  const handleChangePassword = (e) => {
    setUserAuth({ ...userAuth, password: e.target.value });
  }


  const [authStatus, setAuthStatus] = useState(null);

  const login = () => {
    if (userAuth.name === "Oluwatobi" && userAuth.password === "1234") {
      setAuthStatus(true);
      authenticated()
      
    } else {
      setAuthStatus(false);
     
      setTimeout(() => {
      
      }, 600);
    }
  };

  const logout = () => {
    window.location.reload(true);
  };

  function authenticated() {
    setUi({true:false, name:`Welcome ${userAuth.name}`});
  }
  


  return (
    
    <div className="flex flex-col bg-blue-300 gap-y-5 h-screen font-serif content-center items-center justify-center p-12">
      <div className="text-4xl">
      <Title name={ui.name}/>
      </div>
        <AuthContext.Provider value={{ status: authStatus, login: login, logout: logout }}>
        <div>
          <form onSubmit={handleSubmit}>{ui.true &&
            (<><div>
            <label>
                <span>FULL NAME</span>
                  <input
                        name="name"
                        type="text"
                        ref={inputName}
                        onChange={handleChangeName}
                        value={userAuth.name}
                        placeholder='Enter your name' 
                        className='px-3 block py-2 bg-white border-slate-300 
                        rounded-md text-sm shadow-sm placeholder:italic focus:outline-none 
                        focus:border-sky-500 text-black'/>
              </label>
              </div>

            <div>
            <label>   
               <span>PASSWORD</span>
                 <input
                      name="password"
                      type="text"
                      onChange={handleChangePassword}
                      value={userAuth.password}
                      placeholder='Enter your password' 
                      className='px-3 block py-2 bg-white border-slate-300 
                      rounded-md text-sm shadow-sm placeholder:italic focus:outline-none 
                      focus:border-sky-500 text-black'/>
            </label>
            </div></>)}

            <div >
              <Auth delay={true}/>
            </div>
            
          </form>
        </div> 
        </AuthContext.Provider>
    </div>
  );
}

export default App;
