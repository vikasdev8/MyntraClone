import React, { Fragment, useState } from 'react'
import Ripples from 'react-ripples'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {
  Topwear, indian_festive, bottomwear,
  Innerwear_Sleepwear, Footwear,
  Sports_Active_Wear, Gadgets, Fashion_Accessories,
} from '../../NavbarSub'
const MMen = ({ Men, fun1, fun2 }) => {
  const [MTopwear, setMTopwear] = useState(false)
  const [Indian, setIndian] = useState(false)
  const [Bottomwear, setBottomwear] = useState(false)
  const [Innerwear, setInnerwear] = useState(false)
  const [fFootwear, setfFootwear] = useState(false)
  const [Sports, setSports] = useState(false)
  const [GGadgets, setGGadgets] = useState(false)
  const [Fashion, setFashion] = useState(false)
  return (
    <Fragment>
      <ul className={`${Men} `}>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setMTopwear(MTopwear ? (false) : (true))}>
            <span className='float-left'>Topwear</span>
            <span className='absolute mx-5 right-0'>{MTopwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {MTopwear && Topwear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex' onClick={()=>(fun1(), fun2())} >{data.title}</li>
          </Ripples>
        )}
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setIndian(Indian ? (false) : (true))}>
            <span className='float-left'>Indian&nbsp;&&nbsp;Festive&nbsp;Wear</span>
            <span className='absolute mx-5 right-0'>{Indian ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Indian && indian_festive.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setBottomwear(Bottomwear ? (false) : (true))}>
            <span className='float-left'>Bottomwear</span>
            <span className='absolute mx-5 right-0'>{Bottomwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Bottomwear && bottomwear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setInnerwear(Innerwear ? (false) : (true))}>
            <span className='float-left'>Innerwear&nbsp;&&nbsp;Sleepwear</span>
            <span className='absolute mx-5 right-0'>{Innerwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Innerwear && Innerwear_Sleepwear.map((data) =>
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
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setfFootwear(fFootwear ? (false) : (true))}>
            <span className='float-left'>Footwear</span>
            <span className='absolute mx-5 right-0'>{fFootwear ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {fFootwear && Footwear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Personal&nbsp;Care&nbsp;&&nbsp;Grooming</span>
          </li>
        </Ripples>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Sunglasses&nbsp;&&nbsp;Frames</span>
          </li>
        </Ripples>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Watches</span>
          </li>
        </Ripples>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setSports(Sports ? (false) : (true))}>
            <span className='float-left'>Sports&nbsp;&&nbsp;Active&nbsp;Wear</span>
            <span className='absolute mx-5 right-0'>{Sports ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Sports && Sports_Active_Wear.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setGGadgets(GGadgets ? (false) : (true))}>
            <span className='float-left'>Gadgets</span>
            <span className='absolute mx-5 right-0'>{GGadgets ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {GGadgets && Gadgets.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex ' onClick={() => setFashion(Fashion ? (false) : (true))}>
            <span className='float-left'>Fashion&nbsp;Accessories</span>
            <span className='absolute mx-5 right-0'>{Fashion ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </li>
        </Ripples>
        {Fashion && Fashion_Accessories.map((data) =>
          <Ripples color="#fb56c1" className='w-full'>
            <li className='text-[#282c3f]  pl-12 pr-5 py-4 relative w-full flex'onClick={()=>(fun1(), fun2())}>{data.title}</li>
          </Ripples>
        )}
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Bags&nbsp;&&nbsp;Backpacks</span>
          </li>
        </Ripples>
        <Ripples color="#fb56c1" className='w-full'>
          <li className='text-[#282c3f]  pl-8 pr-5 py-4 relative w-full flex 'onClick={()=>(fun1(), fun2())}>
            <span className='float-left'>Luggages&nbsp;&&nbsp;Trolleys</span>
          </li>
        </Ripples>
      </ul>
    </Fragment>
  )
}
export default MMen