import React,{Fragment} from 'react'
import {
    Topwear, indian_festive, bottomwear,
    Innerwear_Sleepwear, Footwear,
    Sports_Active_Wear, Gadgets, Fashion_Accessories,
  } from '../NavbarSub.js'
  import { useTransition, animated } from 'react-spring'
  import { Link } from "react-router-dom";

const Men = ({show, CMenu, parentCallback}) => {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })
  let H = window.screen.height 
    
  return (
   <Fragment>
       <div className={`w-[100%] h-screen bg-[#64646435] sticky top-0 ${CMenu} z-10 font1`}>
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className={`container max-w-[90%] w-[90%] mx-auto h-[480px] ${CMenu}  Mmenu bg-white `}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className='grid grid-cols-5 px-8 py-4 cursor-pointer'>

            <div className=" h-[418px]">
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Topwear</h1>
              {Topwear.map((data) =>
                <Link to="/products"><li className='litext list-none py-0.5 font-thin hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Indian&nbsp;&&nbsp;Festive&nbsp;Wear</h1>
              {indian_festive.map((data) =>
                <Link to="/products"><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>
            <div className=" h-[418px] ">
              <h1 className='text-[#ee5f73] text-sm  font-semibold py-1'>Bottomwear</h1>
              {bottomwear.map((data) =>
                <Link to="/products"><li className='litext list-none py-0.5  hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />

              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Innerwear&nbsp;&&nbsp;Sleepwear</h1>
              {Innerwear_Sleepwear.map((data) =>
                <Link to="/products"><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Plus&nbsp;Size</h1>

            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Footwear</h1>
              {Footwear.map((data) =>
                <Link to="/products"><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Personal&nbsp;Care&nbsp;&&nbsp;Grooming</h1>
              <hr className='py-1' />
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Sunglasses&nbsp;&&nbsp;Frames</h1>
              <hr className='py-1' />
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Watches</h1>
            </div>
            <div className=" h-[418px] ">
            <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Sports&nbsp;&&nbsp;Active&nbsp;Wear</h1>
              {Sports_Active_Wear.map((data) =>
                <Link to="/products"><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Gadgets</h1>
              {Gadgets.map((data) =>
                <Link to="/products"><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>
            <div className=" h-[418px] ">
            <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Fashion&nbsp;Accessories</h1>
              {Fashion_Accessories.map((data) =>
                <Link to="/products"><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Bags&nbsp;&&nbsp;Backpacks</h1>
              <hr className='py-1' />
              <h1 className='text-[#ee5f73] text-sm font-semibold py-1'>Luggages&nbsp;&&nbsp;Trolleys</h1>
            </div>

          </div>

        </div>
        </animated.div>
      )}
      </div>
   </Fragment>
  )
}

export default Men