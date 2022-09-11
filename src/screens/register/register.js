import React, {Fragment, useState} from "react";
import Navbar from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner from "../../components/img/banner.png"
import {Link, Navigate} from 'react-router-dom'
import UsersService from "../../services/users";

const Register = () => {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [redirectToLogin, setRedirectToLogin] = useState(false);
     const [error, setError] = useState(false);

    const HandleSubmit = async(evt) => {
        evt.preventDefault()
        try {
            const user = await UsersService.register({name: name, email: email, password: password})
            setRedirectToLogin(true)
        } catch (error) {
            setError(true)
        }
    }

    if(redirectToLogin)
    return <Navigate to={{pathname: "/login"}}/>

    return(
    <Fragment>
        <Navbar/>
        <div  className="pt-32 pb-36">
        <div  id="form" className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <img id="form_IMG" className="flex items-center ml-12 mt-12" src={banner}/>
      </div>
    
      <div  className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        
         <form onSubmit={HandleSubmit} >

        
          <p className="text-xl text-center text-gray-700 ">
              Register now
          </p>
          
  
  
         

          <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 " for="loggingName">Name</label>
              <input 
                 type="name"
                 required
                 name="name"
                value={name}
                onChange={e => setName(e.target.value)}
               id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
  
          <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 " for="LoggingEmailAddress">Email Address</label>
              <input
                 type="email"
                required
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
               id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"  />
          </div>
  
          <div className="mt-4">
              <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600 " for="loggingPassword">Password</label>
              </div>
  
              <input
               type="password"
               required
               name="password"
               value={password}
               onChange={e => setPassword(e.target.value)}
              id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
  
          <div className="mt-8">
              <button id="login" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Register
              </button>
          </div>
  
          <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b md:w-1/4"></span>
  
              <a onClick={e => setRedirectToLogin(true)} className="text-xs text-gray-500 uppercase  hover:underline">or sign in</a>
  
              <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
          </form>
      </div>
  </div>
        </div>
        <Footer/>
    </Fragment>

)
}


export default Register