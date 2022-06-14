import React,{Fragment} from 'react'
import { useTransition, animated } from 'react-spring'
import {Link} from 'react-router-dom'
import { getuser, logout } from '../../../action/useraction'
import { useDispatch} from 'react-redux'
import { useAlert } from 'react-alert'
import {registermobile, otpverifie} from '../../../action/useraction'

const Profile = ({show, CMenu, parentCallback, user}) => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })

  const logoutBTN = () =>{
    dispatch(logout())
    localStorage.removeItem('mobileno')
    dispatch(getuser())
    alert.show('Logout Successfully')
    dispatch(registermobile())
    dispatch(otpverifie())
  }
    
  return (
   <Fragment>
     
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className={`container absolute  top-20 right-4  z-10 font1 max-w-[25%] w-[25%] h-[480px] ${CMenu}  Mmenu bg-white `}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className='px-8 py-8 '>
            <div className=' w-full'>
               <h1 className='font1 font-semibold'>Welcome</h1>
               {user ? "" : <h1 className='font1 font-extralight text-sm '>To access account and manage orders  <br /></h1>}
                
                {
                user ? 
                <div>
                    {`${user.name}`} <br />
                    <Link to='/dashboard' className='font1 hover:font-semibold'>Dashboard</Link>
                </div>
                
                :
                     
                   <Link className='dec' to="/Login">
                   <button className=' font1 font-smibold text-[#ff3f6c] text-sm border-[1px] px-3 py-2 
                   border-[#d4d5d8] hover:border-[#ff3f6c] '>LOGIN/&nbsp;SIGNUP</button>
                   </Link>
 
                  }
               
               
                <hr className='my-4' />
                <h1 className='litext list-none py-0.5  hover:font-semibold'>Orders</h1>
                <h1 className='litext list-none py-0.5  hover:font-semibold'>Wishlist</h1>
                <h1 className='litext list-none py-0.5  hover:font-semibold'>Gift Cards</h1>
                <h1 className='litext list-none py-0.5  hover:font-semibold'>Contact Us</h1>
                <div className='flex'>
                <h1 className='litext list-none py-0.5  hover:font-semibold'>Myntra Insider </h1><div className='bg-[#ff3f6c] flex w-max h-max ml-2 mt-2 float-left px-1 text-xs skewnew text-white'>New</div>
                </div>
               

                <hr className='my-4' />

                <h1 className='litext list-none py-0.5  hover:font-semibold'>Myntra Credit</h1>
                <h1 className='litext list-none py-0.5  hover:font-semibold'>Coupons</h1>
                <h1 className='litext list-none py-0.5  hover:font-semibold'>Saved Cards</h1>
                <h1 className='litext list-none py-0.5  hover:font-semibold'>Saved Addresses</h1>
                <br />

                {
                  user ? 

                  
                   <button className=' font1 font-smibold text-[#ff3f6c] text-sm border-[1px] px-3 py-2 
                   border-[#d4d5d8] hover:border-[#ff3f6c] ' onClick={logoutBTN}>LOGOUT</button>
                

                :

                ""
                }
   
            </div>
           

          </div>

        </div>
        </animated.div>
      )}
      
   </Fragment>
  )
}

export default Profile