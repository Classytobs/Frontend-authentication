import React, { useRef, useEffect } from "react";


function App() {

  // Autofocus
  const inputName = useRef(null);
  useEffect(() => {
    inputName.current.focus();
  }, [inputName]);


  return (
    <div className="text-black">
      <h1>
        SIGN IN TO CONTINUE
      </h1>

        <div>
          <form>
            <div>
            <label>
                <span>FULL NAME</span>
                  <input
                        name="name"
                        type="text"
                        ref={inputName}
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
                      placeholder='Enter your password' 
                      className='px-3 block py-2 bg-white border-slate-300 
                      rounded-md text-sm shadow-sm placeholder:italic focus:outline-none 
                      focus:border-sky-500 text-black'/>
            </label>
            </div>
            
          </form>
        </div>      
    </div>
  );
}

export default App;
