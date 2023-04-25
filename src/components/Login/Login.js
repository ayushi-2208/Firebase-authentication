import React, { useState } from 'react'
import './login.css';
import InputControl from '../InputControl/InputControl';
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = () => {
    const navigate = useNavigate();
    const[values,setValues] = useState({
        email:"",
        pass:"",
    });

    const[errorMsg, setErrorMsg] = useState("");
    const[submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const handleSubmission=()=>{
        console.log(values)
        if(!values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("")
        setSubmitButtonDisabled(true);
        
        signInWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            setSubmitButtonDisabled(false)
            
            navigate('/')
        })
        .catch((err)=>{
             setSubmitButtonDisabled(false);
             setErrorMsg(err.message)
             
        });
    }
  return (
    <div className='container'>
      <div className='innerBox'>
        <h1 className='heading'>Login</h1>

        <InputControl label="Email" placeholder="Enter email address" onChange={(event)=> setValues((prev)=>({...prev, email:event.target.value}))}/>
        <InputControl label="Password" placeholder="Enter Password" onChange={(event)=> setValues((prev)=>({...prev, pass:event.target.value}))}/>

        <div className='footer'>
            <b className='error'>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
          <p>Already have an account? {" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login
