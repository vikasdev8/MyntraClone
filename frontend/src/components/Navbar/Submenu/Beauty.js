import React,{Fragment} from 'react'
import {Makeup, SkincareBathBody,Haircare,
    Fragrances,HairStraightener,MenGrooming,
    BeautyGiftMakeupSet,BTopBrands
  } from '../NavbarSub.js'
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

const Beauty = ({show, CMenu, parentCallback}) => {
    
  
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
              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Makeup</h1>
              {Makeup.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 font-thin hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
             
            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#0db7af] text-sm  font-semibold py-1'>Skincare,&nbsp;Bath&nbsp;&&nbsp;Body</h1>
              {SkincareBathBody.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5  hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />

              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Baby&nbsp;Care</h1>
              
              <hr className='py-1' />
              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Masks</h1>

            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Haircare</h1>
              {Haircare.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Fragrances</h1>
              {Fragrances.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Hair&nbsp;Straightener</h1>
              {HairStraightener.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Men's&nbsp;Grooming</h1>
              {MenGrooming.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Beauty&nbsp;Gift&nbsp;&&nbsp;Makeup&nbsp;Set</h1>
              {BeautyGiftMakeupSet.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Premium&nbsp;Beauty</h1>
              <hr className='py-1' />
              <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Wellness&nbsp;&&nbsp;Hygiene</h1>
            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#0db7af] text-sm font-semibold py-1'>Top&nbsp;Brands</h1>
              {BTopBrands.map((data) =>
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

export default Beauty