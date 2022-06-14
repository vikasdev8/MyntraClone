import React, {Fragment} from 'react'
import emptywish from '../images/emptywish.PNG'
import {useNavigate} from 'react-router-dom'

const Nowishlist = () => {
    const redirect = useNavigate()

    function re() {
        redirect('/Login')
    }
  return (
    <Fragment>
        <div className='w-full h-full items-center '>
            <div className='h-max text-center w-max mx-auto my-auto pt-[10%]'>
            <h1 className='text-[#282c3f] font-bold font1 text-[20px]'>PLEASE LOG IN</h1>
            <h1 className='mt-4 text-[#94989f] text-[18px] font1'>Login to view items in your wishlist.</h1>
            <img src={emptywish} alt="" className='w-[150px] mt-10 mb-10 mx-auto min-h-[150px]' />
            <button className='py-2 px-8 font1 font-bold text-[20px] text-[#3466e8] border-[1px] border-[#3466e8] rounded-md' onClick={re}>LOGIN</button>
            </div>
               
        </div>
    </Fragment>
  )
}

export default Nowishlist