import React, { Fragment, useState } from 'react'
import Ripples from 'react-ripples'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {BedLinenFurnishing, Flooring,Bath,
  LampsLighting,HomeDécor,KitchenTable,
  Storage,HBrands
} from '../../NavbarSub.js'
const Mhome = ({ Mhome, fun1, fun2 }) => {

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
      <ul className={`${Mhome} `}>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setTopwear(Topwear ? (false) : (true))}>
            <span className='float-left'>Bed&nbsp;Linen&nbsp;&&nbsp;Furnishing</span>
            <span className='absolute mx-5 right-0'>{Topwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Topwear && BedLinenFurnishing.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full' >
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setIndian(Indian ? (false) : (true))}>
            <span className='float-left'>Flooring</span>
          </li>
        </Ripples>
        {Indian && Flooring.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setBottomwear(Bottomwear ? (false) : (true))}>
            <span className='float-left'>Bath</span>
          </li>
        </Ripples>
        {Bottomwear && Bath.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setInnerwear(Innerwear ? (false) : (true))}>
            <span className='float-left'>Lamps&nbsp;&&nbsp;Lighting</span>
            <span className='absolute mx-5 right-0'>{Innerwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Innerwear && LampsLighting.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setFootwear(Footwear ? (false) : (true))}>
            <span className='float-left'>Home&nbsp;Décor</span>
            <span className='absolute mx-5 right-0'>{Footwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Footwear && HomeDécor.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Cushions&nbsp;&&nbsp;Cushion&nbsp;Covers</span>
          </li>
        </Ripples>


        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Curtains</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Home&nbsp;Gift&nbsp;Sets</span>
          </li>
        </Ripples>
       

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setGadgets(Gadgets ? (false) : (true))}>
            <span className='float-left'>Kitchen&nbsp;&&nbsp;Table</span>
            <span className='absolute mx-5 right-0'>{Gadgets ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Gadgets && KitchenTable.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setA(A ? (false) : (true))}>
            <span className='float-left'>Storage</span>
            <span className='absolute mx-5 right-0'>{A ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {A && Storage.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setBrand(Brand ? (false) : (true))}>
            <span className='float-left'>Brands</span>
            <span className='absolute mx-5 right-0'>{Brand ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Brand && HBrands.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}



      </ul>
    </Fragment>
  )
}
export default Mhome