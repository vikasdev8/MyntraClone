import React,{Fragment} from 'react'
import {Indian_FusionWear, Western_Wear,Shop_Occassion,
    WFootwear,Sports_ActiveWear,Lingerie_Sleepwear,
    Beauty_Personal_Care,
  } from '../NavbarSub.js'
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

const Women = ({show, CMenu, parentCallback}) => {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })
  let H = window.innerHeight - 80
    
  return (
   <Fragment>
       <div className={`w-[100%] h-screen bg-[#64646435] sticky top-0  ${CMenu} z-10 font1 `}>
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className={`container max-w-[90%] w-[90%] mx-auto h-[480px] ${CMenu}  Mmenu bg-white `}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className='grid grid-cols-5 px-8 py-4 cursor-pointer'>

            <div className=" h-[418px]">
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Indian&nbsp;&&nbsp;Fusion Wear</h1>
              {Indian_FusionWear.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 font-thin hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Belts,&nbsp;Scarves&nbsp;&&nbsp;More</h1>
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Watches&nbsp;&&nbsp;Wearables</h1>
            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#fb56c1] text-sm  font-semibold py-1'>Western&nbsp;Wear</h1>
              {Western_Wear.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5  hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Shop&nbsp;By&nbsp;Occassion</h1>
              {Shop_Occassion.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Plus&nbsp;Size</h1>
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Maternity</h1>
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Sunglasses&nbsp;&&nbsp;Frames</h1>
            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Footwear</h1>
              {WFootwear.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Sports&nbsp;&&nbsp;Active&nbsp;Wear</h1>
              {Sports_ActiveWear.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Lingerie&nbsp;&&nbsp;Sleepwear</h1>
              {Lingerie_Sleepwear.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Beauty&nbsp;&&nbsp;Personal&nbsp;Care</h1>
              {Beauty_Personal_Care.map((data) =>
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

export default Women