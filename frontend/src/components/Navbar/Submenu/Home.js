import React,{Fragment} from 'react'
import {BedLinenFurnishing, Flooring,Bath,
    LampsLighting,HomeDécor,KitchenTable,
    Storage,HBrands
  } from '../NavbarSub.js'
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

const Home = ({show, CMenu, parentCallback}) => {

  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })
  let H = window.innerHeight - 80
    
  return (
   <Fragment>
       <div className={`w-[100%] h-screen bg-[#64646435] sticky top-0 ${CMenu} z-10  `}>
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className={`container max-w-[90%] w-[90%] mx-auto h-[480px] ${CMenu}  Mmenu bg-white `}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className='grid grid-cols-5 px-8 py-4 cursor-pointer'>

            <div className=" h-[418px]">
              <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Bed&nbsp;Linen&nbsp;&&nbsp;Furnishing</h1>
              {BedLinenFurnishing.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />
              <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Flooring</h1>
              {Flooring.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#f2c210] text-sm  font-semibold py-1'>Bath</h1>
              {Bath.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5  hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />

              <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Lamps&nbsp;&&nbsp;Lighting</h1>
              {LampsLighting.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" h-[418px] ">
              <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Home&nbsp;Décor</h1>
              {HomeDécor.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Cushions&nbsp;&&nbsp;Cushion&nbsp;Covers</h1>
              <hr className='py-1' />
              <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Curtains</h1>
              <hr className='py-1' />
              <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Home&nbsp;Gift&nbsp;Sets</h1>
            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Kitchen&nbsp;&&nbsp;Table</h1>
              {KitchenTable.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Storage</h1>
              {Storage.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#f2c210] text-sm font-semibold py-1'>Brands</h1>
              {HBrands.map((data) =>
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

export default Home