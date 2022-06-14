import React, { Fragment, useState, useEffect } from 'react'
import img from '../images/mobile-verification.jpg'
import './Login.css'
import { otpverifie, resendotp, getuser } from '../../action/useraction'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useAlert } from 'react-alert'



const Otpverify = () => {
  const redirect = useNavigate()
  const alert = useAlert()
  const [otp, setotp] = useState('')
  const mobile = JSON.parse(localStorage.getItem('mobileno'))
  const dispatch = useDispatch()
  const { user, error, loading } = useSelector(state => state.userdetails)

  const H = window.innerHeight
  const Hpx = H - 56

  const continues = (e) => {
    e.preventDefault();
    const myForm = {
      otp: Number(otp)
    }

    dispatch(otpverifie(myForm))
  
    if (error) {
      let par = document.getElementById('error')
      par.innerHTML = error
    }
  
   
    
  }

  const Resndotp = () =>{
    dispatch(resendotp())
  }


  useEffect(() => {
    if (loading === false) {
      if (user) {
        if (user.verify === 'verified') {
          dispatch(getuser())
          if(!user.name){
            
            redirect('/registeruser')
          }
          if(user.name){
            alert.show('Logged In Successfully')
            redirect('/dashboard')
          }
          } 
        
      }
      
     
    }
   
  }, [user, loading, redirect,alert]);


  return (

    <Fragment>
      <form
        encType="multipart/form-data"
        onSubmit={continues}
      >
        <div className={`w-[100%] h-screen bg-[#fcecf4] py-10`}>
          <div className='h-[500px] bg-white mx-auto w-[100vw] sm:w-[430px] md:w-[430px] lg:w-[430px] xl:w-[430px] 2xl:w-[430px]'>
            <img src={img} alt="login" className='w-32 mx-auto min-h-[100px]' />
            <div className='mx-auto w-[330px] my-8'>

              <h1 className='font1 text-2xl font-medium '>Verify With OTP</h1>
              <p className='text-xs text-slate-600 mb-5'>Sent to {mobile.phonenumber}</p>

              <input type="number" name="phonenumber" className='w-full h-10 border-[1px] 
                focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none'
                onChange={(e) => setotp(e.target.value)} placeholder='Enter OTP' />
              <p id='error' className='text-xs text-red-500 '></p>

              <h1 onClick={Resndotp} className='font1 text-sm mt-5 text-[#ee5f73] cursor-pointer'>Resend OTP</h1>
              <button type='submit' className='bg-[#ee5f73] text-white w-full font-semibold text-lg py-[6px] my-5' > {loading !== false ? 'VERIFY': 'Loading...'} </button>
              <h1 className='font1 text-sm my-5'>Have trouble loggging in? <span className='text-[#ee5f73]'>Get help</span></h1>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Otpverify