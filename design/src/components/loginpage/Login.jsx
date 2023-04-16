import React from 'react'
import  './style.css'
const Login = () => {
  return (

    <div className='login'>
        <img src='' alt=''/>

    <div className='login1'>

        <p className='fle'>
        start for free
    </p>
    <h2 className='flexn'>
    <span>
        Create    ...
    </span>
        new account
    </h2>
    <p className='flex'>
        Already have an account ? <span>
            Log in
        </span>
    </p>
      <div className='login2'>
       <div className='meint'>
        
       </div>
        <div className='inlog2'>

         <div>

         <p className='int'>
            First Name
        </p>
       
        <input className='name' type='text' placeholder='firstname'/>
       </div>
       <div>
       <p className='int2'>
            last
        </p>
        <input className='name' type='text' placeholder='lastname'/>
        </div>
        </div>
        <div className='dint'> 
        <div className='din'>E-mail</div>
        <input className='non' type='email' placeholder='E-mail'/>
        <div className='din'>Passw</div>
        <input className='non' type='password' placeholder='******'/>
        </div>
        <div className='submit'>
        <input className='nont' type='submit'/>
        </div>
        
        <p className='sign'>
        <div className='red'>
            <p className='num'></p>
            <p className='num'></p>
            </div>  or sign up with
        </p>
        <div className='login4'>
            <img src="./images/apples.png" alt="" />
            <img src="./images/facebooks.png" alt="" />
            <img src="./images/googles.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
