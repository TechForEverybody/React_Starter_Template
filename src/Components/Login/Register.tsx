import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { motion } from "framer-motion"
import { LoginContext } from '../../Contexts/UserContext';
import { userContext } from '../../App';
import { useNavigate } from 'react-router-dom';


type objectType={
    changeLoginType:(pageNo:number)=>void
}


function Register(object:objectType) {
    let {updateLoginState } = useContext(userContext) as LoginContext
    let navigate = useNavigate()
    let [loginDetails,updateLoginDetails]=useState({
        "name":"",
        "email":"",
        "phone":"",
        "password":""
    })
    function updateDetails(event:ChangeEvent<HTMLInputElement>) {
        updateLoginDetails((preValue)=>{
            return({
                ...preValue,
                [event.target.name]:event.target.value
            })
        })
    }
    function submitTheForm(event:FormEvent) {
        event.preventDefault()
        if (loginDetails.email==="abc@email.com" && loginDetails.password==="12345678") {
            updateLoginState({type:"LOGIN",user:true,username:"Farmer"})
            navigate("/dashboard")
        } else {
            window.alert("Invalid Credentials")
        }
    }
    return (<>
        <motion.div initial={{ y: "-100vh" }} animate={{ y: "0"}} exit={{ y: "0" }}>
            <div className='Register_Container'>
                <form onSubmit={submitTheForm} id='Login_Form'>
                    <h1>
                        Register Here
                    </h1>
                    <input type="text" value={loginDetails.name} onChange={updateDetails} name="name" id="name" placeholder='Enter Your Name' required/>
                    <input type="email" value={loginDetails.email} onChange={updateDetails} name="email" id="email" placeholder='Enter Your Email' required/>
                    <input type="number" value={loginDetails.phone} onChange={updateDetails} name="phone" id="phone" placeholder='Enter Your Phone Number' required/>
                    <input type="password" value={loginDetails.password} onChange={updateDetails} name="password" id="password" placeholder='Enter Your Password' required/>
                    <button type='submit'>Submit</button>
                    <p>Already have an Account? , <span className="blue_color" onClick={() => {
                        object.changeLoginType(0)
                    }}>Login Here</span></p>
                </form>
            </div>
        </motion.div>
    </>
    )
}

export default Register