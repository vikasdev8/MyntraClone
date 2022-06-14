import React,{Fragment} from 'react'
import {Boys_Clothing, Girls_Clothing,KFootwear,
    Toys,Infants,Kids_Accessories,
    KBrands,
  } from '../NavbarSub.js'
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

const Kids = ({show, CMenu, parentCallback}) => {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })
  let H = window.innerHeight - 80
    
  return (
   <Fragment>
       <div className={`w-[100%] h-screen bg-[#64646435] sticky top-0  ${CMenu} z-10 font1`}>
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className={`container max-w-[90%] w-[90%] mx-auto h-[480px] ${CMenu}  Mmenu bg-white `}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className='grid grid-cols-5 px-8 py-4 cursor-pointer'>

            <div className=" h-[418px]">
              <h1 className='text-[#f26a10] text-sm font-semibold py-1'>Boys&nbsp;Clothing</h1>
              {Boys_Clothing.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 font-thin hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#f26a10] text-sm  font-semibold py-1'>Girls&nbsp;Clothing</h1>
              {Girls_Clothing.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5  hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#f26a10] text-sm font-semibold py-1'>Footwear</h1>
              {KFootwear.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#f26a10] text-sm font-semibold py-1'>Toys</h1>
              {Toys.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#f26a10] text-sm font-semibold py-1'>Infants</h1>
              {Infants.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#f26a10] text-sm font-semibold py-1'>Home&nbsp;&&nbsp;Bath</h1>
              <hr className='py-1' />
              <h1 className='text-[#f26a10] text-sm font-semibold py-1'>Personal&nbsp;Care</h1>

            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#f26a10] text-sm font-semibold py-1'>Kids&nbsp;Accessories</h1>
              {Kids_Accessories.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#f26a10] text-sm font-semibold py-1'>Brands</h1>
              {KBrands.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
             
              
            </div>

          </div>

        </div>
        </animated.div>
      )}
      </div>
   </Fragment>
  )
}

export default Kids