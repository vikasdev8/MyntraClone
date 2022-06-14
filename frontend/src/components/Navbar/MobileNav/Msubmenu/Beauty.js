import React, { Fragment, useState } from 'react'
import Ripples from 'react-ripples'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {Makeup, SkincareBathBody,Haircare,
  Fragrances,HairStraightener,MenGrooming,
  BeautyGiftMakeupSet,BTopBrands
} from '../../NavbarSub.js'
const Mbeauty = ({ Mbeauty, fun1, fun2 }) => {

  const [Topwear, setTopwear] = useState(false)
  const [Indian, setIndian] = useState(false)
  const [Bottomwear, setBottomwear] = useState(false)
  const [Innerwear, setInnerwear] = useState(false)
  const [Footwear, setFootwear] = useState(false)
  const [Gadgets, setGadgets] = useState(false)
  const [Brand, setBrand] = useState(false)
  const [A, setA] = useState(false)

  return (
    <Fragment>
      <ul className={`${Mbeauty} `}>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setTopwear(Topwear ? (false) : (true))}>
            <span className='float-left'>Makeup</span>
            <span className='absolute mx-5 right-0'>{Topwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Topwear && Makeup.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full' >
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setIndian(Indian ? (false) : (true))}>
            <span className='float-left'>Skincare,&nbsp;Bath&nbsp;&&nbsp;Body</span>
          </li>
        </Ripples>
        {Indian && SkincareBathBody.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Baby&nbsp;Care</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Masks</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setBottomwear(Bottomwear ? (false) : (true))}>
            <span className='float-left'>Haircare</span>
          </li>
        </Ripples>
        {Bottomwear && Haircare.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setInnerwear(Innerwear ? (false) : (true))}>
            <span className='float-left'>Fragrances</span>
            <span className='absolute mx-5 right-0'>{Innerwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Innerwear && Fragrances.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setFootwear(Footwear ? (false) : (true))}>
            <span className='float-left'>Hair&nbsp;Straightener</span>
            <span className='absolute mx-5 right-0'>{Footwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Footwear && HairStraightener.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setGadgets(Gadgets ? (false) : (true))}>
            <span className='float-left'>Men's&nbsp;Grooming</span>
            <span className='absolute mx-5 right-0'>{Gadgets ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Gadgets && MenGrooming.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setA(A ? (false) : (true))}>
            <span className='float-left'>Beauty&nbsp;Gift&nbsp;&&nbsp;Makeup&nbsp;Set</span>
            <span className='absolute mx-5 right-0'>{A ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {A && BeautyGiftMakeupSet.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Premium&nbsp;Beauty</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Wellness&nbsp;&&nbsp;Hygiene</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setBrand(Brand ? (false) : (true))}>
            <span className='float-left'>Top&nbsp;Brands</span>
            <span className='absolute mx-5 right-0'>{Brand ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Brand && BTopBrands.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}



      </ul>
    </Fragment>
  )
}
export default Mbeauty