import React, { Fragment, useState } from 'react'
import Ripples from 'react-ripples'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {Indian_FusionWear, Western_Wear,Shop_Occassion,
  WFootwear,Sports_ActiveWear,Lingerie_Sleepwear,
  Beauty_Personal_Care,
} from '../../NavbarSub'
const MWoMen = ({ WoMen, fun1, fun2 }) => {
  const [Topwear, setTopwear] = useState(false)
  const [Indian, setIndian] = useState(false)
  const [Bottomwear, setBottomwear] = useState(false)
  const [Innerwear, setInnerwear] = useState(false)
  const [Footwear, setFootwear] = useState(false)
  const [Sports, setSports] = useState(false)
  const [Gadgets, setGadgets] = useState(false)
  return (
    <Fragment>
      <ul className={`${WoMen} `}>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setTopwear(Topwear ? (false) : (true))}>
            <span className='float-left'>Indian&nbsp;&&nbsp;Fusion&nbsp;Wear</span>
            <span className='absolute mx-5 right-0'>{Topwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Topwear && Indian_FusionWear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Belts,&nbsp;Scarves&nbsp;&&nbsp;More</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Watches&nbsp;&&nbsp;Wearables</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setInnerwear(Innerwear ? (false) : (true))}>
            <span className='float-left'>Western&nbsp;Wear</span>
            <span className='absolute mx-5 right-0'>{Innerwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Innerwear && Western_Wear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setIndian(Indian ? (false) : (true))}>
            <span className='float-left'>Shop&nbsp;By&nbsp;Occassion</span>
            <span className='absolute mx-5 right-0'>{Indian ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Indian && Shop_Occassion.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Plus&nbsp;Size</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Maternity</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Sunglasses&nbsp;&&nbsp;Frames</span>
          </li>
        </Ripples>

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setBottomwear(Bottomwear ? (false) : (true))}>
            <span className='float-left'>Footwear</span>
            <span className='absolute mx-5 right-0'>{Bottomwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Bottomwear && WFootwear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setSports(Sports ? (false) : (true))}>
            <span className='float-left'>Sports&nbsp;&&nbsp;Active&nbsp;Wear</span>
            <span className='absolute mx-5 right-0'>{Sports ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Sports && Sports_ActiveWear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setGadgets(Gadgets ? (false) : (true))}>
            <span className='float-left'>Lingerie&nbsp;&&nbsp;Sleepwear</span>
            <span className='absolute mx-5 right-0'>{Gadgets ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Gadgets && Lingerie_Sleepwear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setFootwear(Footwear ? (false) : (true))}>
            <span className='float-left'>Beauty&nbsp;&&nbsp;Personal&nbsp;Care</span>
            <span className='absolute mx-5 right-0'>{Footwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Footwear && Beauty_Personal_Care.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}

      </ul>
    </Fragment>
  )
}
export default MWoMen