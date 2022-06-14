import React, { Fragment, useState, useCallback } from 'react'
import './Navbar.css'
import myntra from '../images/myntra.svg'
import { FaRegUser } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { BsHandbag } from 'react-icons/bs'
import Search from './Search.js'
import Men from './Submenu/Men'
import Women from './Submenu/Women'
import Kids from './Submenu/Kids'
import Home from './Submenu/Home'
import Beauty from './Submenu/Beauty'
import Studio from './Submenu/Studio'
import Profile from './Submenu/Profile'
import {Link} from 'react-router-dom'


const Navbar = ({user}) => {
  const [Menu1, setMenu1] = useState('hidden')
  const [Menu2, setMenu2] = useState('hidden')
  const [Menu3, setMenu3] = useState('hidden')
  const [Menu4, setMenu4] = useState('hidden')
  const [Menu5, setMenu5] = useState('hidden')
  const [Menu6, setMenu6] = useState('hidden')
  const [Menu7, setMenu7] = useState('hidden')
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  
  

  const callback = useCallback((Menu, v) => {
    setMenu1(Menu);
    setShow1(v)
  }, []);

  const Callbackmenu2 = useCallback((Menu2, v) => {
    setMenu2(Menu2);
    setShow2(v)
  }, []);

  const Callbackmenu3 = useCallback((Menu3, v) => {
    setMenu3(Menu3);
    setShow3(v)
  }, []);

  const Callbackmenu4 = useCallback((Menu4, v) => {
    setMenu4(Menu4);
    setShow4(v)
  }, []);

  const Callbackmenu5 = useCallback((Menu5, v) => {
    setMenu5(Menu5);
    setShow5(v)
  }, []);

  const Callbackmenu6 = useCallback((Menu6, v) => {
    setMenu6(Menu6);
    setShow6(v)
  }, []);

  const Callbackmenu7 = useCallback((Menu7, v) => {
    setMenu7(Menu7);
    setShow7(v)
  }, []);


  return (
    <Fragment>
      <div className="container sticky top-0 2xl:w-[100%] xl:w-[100%] lg:w-[100%] mx-auto max-w-[100%] h-[80px] bg-[#fff] contenthide z-10 ">
        <div className='2xl:grid xl:grid grid-cols-2 lg:flex h-full mx-6  '>

          <ul className=' h-full flex font1 font-semibold text-base md:text-[14px] text-[#282c3f] tracking-[.3px] uppercase'>
            <Link className='w-max px-3 flex items-stretch' to="/">
            <li className='w-max flex items-stretch'  >
              <img src={myntra} alt="Myntra Logo" className='w-14' />
            </li>
            </Link>
            <Link className='w-max px-3 flex items-stretch' to="/">
            <li className='w-max flex  justify-center items-center border-4 border-transparent cborder1'
              onMouseEnter={() => (setMenu1('block'), setShow1(true))} onMouseLeave={() => (setMenu1('hidden'), setShow1(false))}
            >
              <h1 className='px-3 ' >MEN</h1>
            </li>
            </Link>
            <li className='w-max flex justify-center items-center border-4 border-transparent cborder2 '
              onMouseEnter={() => (setMenu2('block'), setShow2(true))} onMouseLeave={() => (setMenu2('hidden'), setShow2(false))}
            >

              <h1 className='px-3'>WOMEN</h1>
            </li>
            <li className='w-max flex justify-center items-center border-4 border-transparent cborder3'
              onMouseEnter={() => (setMenu3('block'), setShow3(true))} onMouseLeave={() => (setMenu3('hidden'), setShow3(false))}
            >
              <h1 className='px-3'>KIDS</h1>
            </li>
            <li className='w-46 flex justify-center items-center border-4 border-transparent cborder4'
              onMouseEnter={() => (setMenu4('block'), setShow4(true))} onMouseLeave={() => (setMenu4('hidden'), setShow4(false))}
            >
              <h1 className='px-3'>HOME&nbsp;&&nbsp;LIVING</h1>
            </li>
            <li className='w-max flex justify-center items-center border-4 border-transparent cborder5'
              onMouseEnter={() => (setMenu5('block'), setShow5(true))} onMouseLeave={() => (setMenu5('hidden'), setShow5(false))}
            >
              <h1 className='px-3'>BEAUTY</h1>
            </li>
            <li className='w-max flex justify-center items-center border-4 border-transparent cborder6'
              onMouseEnter={() => (setMenu6('block'), setShow6(true))} onMouseLeave={() => (setMenu6('hidden'), setShow6(false))}
            >
              <h1 className='px-3 relative'>STUDIO<span className='text-[#fb56c1] text-[10px] absolute -top-1/2'>new</span></h1>
            </li>
          </ul>

          <div className=' h-full justify-center items-center '>
            <ul className='flex float-right  h-full  text-[#282c3f] tracking-[.3px] sent'>
              <li className='mr-6'>
                <Search />
              </li>
              <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent cborder1'
               onMouseEnter={() => (setMenu7('block'), setShow7(true))} onMouseLeave={() => (setMenu7('hidden'), setShow7(false))}
              >
                <h1 className='px-3 text-center text-xs relative'> <span className='text-lg block absolute -top-5 left-1/3'><FaRegUser /></span> <span className='block'>Profile</span> </h1>
              </li>
              <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >

                <Link to='/my_wishlist'><h1 className='px-3 text-xs text-center relative'> <span className='text-lg absolute -top-5 left-1/3'><BsHeart /></span>Wishlist</h1></Link>
              </li>
              <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >

               <Link to='/bag'> <h1 className='px-3 text-xs text-center relative'><span className='text-lg absolute -top-5 left-1/3'><BsHandbag /></span>Bag</h1></Link>
              </li>
            </ul>
          </div>

        </div>
        <Men show={show1} CMenu={Menu1} parentCallback={callback} />
        <Women show={show2} CMenu={Menu2} parentCallback={Callbackmenu2} />
        <Kids show={show3} CMenu={Menu3} parentCallback={Callbackmenu3} />
        <Home show={show4} CMenu={Menu4} parentCallback={Callbackmenu4} />
        <Beauty show={show5} CMenu={Menu5} parentCallback={Callbackmenu5} />
        <Studio show={show6} CMenu={Menu6} parentCallback={Callbackmenu6} />
        <Profile user={user} show={show7} CMenu={Menu7} parentCallback={Callbackmenu7} />

      </div>


    </Fragment>
  )
}

export default Navbar