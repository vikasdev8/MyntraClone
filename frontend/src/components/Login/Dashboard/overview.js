import React, {Fragment} from 'react'
import Footer from '../../Footer/Footer'
import Sidebar from './sidebar'

const overview = ({user}) => {
  return (
      <Fragment>
          <div>
              <div className=' py-4 border-b-[1px] mx-auto w-[90%]  mt-5 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
                  <h1 className='font-semibold text-lg font1'>Account</h1>
                  <p className='text-xs'>{user.name}</p>
              </div>
              <div className='flex w-[90%] h-auto mx-auto 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
              <div className='w-[30%] border-r-2 2xl:w-[20%] xl:w-[20%] lg:w-[20%]'>
              <Sidebar/>
              </div>
              <div className=' w-[70%] h-full 2xl:w-[80%] xl:w-[80%] lg:w-[80%] '>
                <div className='w-[100%] mx-auto text-xs 2xl:w-[60%] xl:w-[60%] lg:w-[60%] 2xl:text-base xl:text-base lg:text-base'>
                <h1 className='font-semibold text-lg font1 border-b-[1px] my-4 py-4'>Profile Details</h1>
                <div className='flex w-full'>
                <div className='w-[40%] '>
                <h1 className='my-4 ml-[4px]'>Full&nbsp;Name</h1>
                <h1 className='my-4 ml-[4px]'>Mobile&nbsp;Number</h1>
                <h1 className='my-4 ml-[4px]'>Email&nbsp;ID</h1>
                <h1 className='my-4 ml-[4px]'>Gender</h1>
                <h1 className='my-4 ml-[4px]'>Date&nbsp;of&nbsp;Birth</h1>
                <h1 className='my-4 ml-[4px]'>Location</h1>
                </div>
                <div className='w-[60%]'>
                <h1 className='my-4'>{user.name}</h1>
                <h1 className='my-4'>{user.phonenumber}</h1>
                <h1 className='my-4'>{user.email}</h1>
                <h1 className='my-4'>{user.gender}</h1>
                <h1 className='my-4'>{user.dob ? user.dob : "Not Set"}</h1>
                <h1 className='my-4'>{user.address.citystate}</h1>
                </div>
                </div>
               

                </div>
              
              </div>
              </div>
             
          </div>

          <Footer/>
        
      </Fragment>
    
  )
}

export default overview