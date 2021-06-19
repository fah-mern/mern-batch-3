import React,{useState} from 'react'

 function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError,setEmailError]=useState('');
    const [passError,setpassError]=useState('');

    const handleSubmit=()=>{
        if(email === '' || email=== null){
            setEmailError('Please enter your email address');
        }else{
            setEmailError('')
        }
        if(password === '' || password=== null){
           setpassError('Please enter your password');
        }
        else{
            setEmailError('')
        }
    }

    
    return (
       
        <div>
           <form>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
    <p className='error'>{emailError}</p>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
    <p className='error'>{passError}</p>
  </div>
  
  <input type="button" className="btn btn-primary" onClick={handleSubmit} value="Login"/>
</form>
        </div>
    )
}
export default Login;
