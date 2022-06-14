import React, { Fragment, useState } from 'react'
import Ripples from 'react-ripples'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {Boys_Clothing, Girls_Clothing,KFootwear,
  Toys,Infants,Kids_Accessories,
  KBrands,
} from '../../NavbarSub.js'
const MKids = ({ MKids, fun1, fun2 }) => {
  const [Topwear, setTopwear] = useState(false)
  const [Indian, setIndian] = useState(false)
  const [Bottomwear, setBottomwear] = useState(false)
  const [Innerwear, setInnerwear] = useState(false)
  const [Footwear, setFootwear] = useState(false)
  const [Sports, setSports] = useState(false)
  const [Gadgets, setGadgets] = useState(false)
  return (
    <Fragment>
      <ul className={`${MKids} `}>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setTopwear(Topwear ? (false) : (true))}>
            <span className='float-left'>Boys&nbsp;Clothing</span>
            <span className='absolute mx-5 right-0'>{Topwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Topwear && Boys_Clothing.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full' >
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setIndian(Indian ? (false) : (true))} >
            <span className='float-left'>Girls&nbsp;Clothing</span>
            <span className='absolute mx-5 right-0'>{Indian ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Indian && Girls_Clothing.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={() => setBottomwear(Bottomwear ? (false) : (true))}>
            <span className='float-left'>Footwear</span>
            <span className='absolute mx-5 right-0'>{Bottomwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Bottomwear && KFootwear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setInnerwear(Innerwear ? (false) : (true))}>
            <span className='float-left'>Toys</span>
            <span className='absolute mx-5 right-0'>{Innerwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Innerwear && Toys.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setFootwear(Footwear ? (false) : (true))}>
            <span className='float-left'>Infants</span>
            <span className='absolute mx-5 right-0'>{Footwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Footwear && Infants.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Home&nbsp;&&nbsp;Bath</span>
          </li>
        </Ripples>
      

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Personal&nbsp;Care</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={() => setSports(Sports ? (false) : (true))}>
            <span className='float-left'>Kids&nbsp;Accessories</span>
            <span className='absolute mx-5 right-0'>{Sports ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Sports && Kids_Accessories.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>

          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setGadgets(Gadgets ? (false) : (true))}>
            <span className='float-left'>Brands</span>
            <span className='absolute mx-5 right-0'>{Gadgets ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Gadgets && KBrands.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        

      </ul>
    </Fragment>
  )
}
export default MKids