import React,{useState} from 'react'
import './Coupon.css'
import {VscTriangleLeft, VscTriangleRight} from 'react-icons/vsc'
import gen from '../images/gen.PNG'
import coup from '../images/coup.webp'
import {Link} from 'react-router-dom'
const Coupon = () => {
  const [cou, setcou] = useState(false)
  return (

    <div  >
        {
            window.screen.width > 1024 &&

            
                <div className='fixed w-max  right-0 top-1/3 z-10 flex'>

                  <div className={`h-[288px] w-[44px] p-2 text-center bg-[#535766]`} onClick={()=>(cou ? setcou(false):setcou(true))}>
                   { cou ?  <VscTriangleRight className='text-[#fcfcfc] text-4xl mx-auto text-center '/> : <VscTriangleLeft className='text-[#fcfcfc] text-4xl mx-auto text-center'/>}
                    <p className='-rotate-180 text-2xl text-[#fcfcfc] text-center font-semibold mode absolute bottom-8'>FLAT ₹300 OFF</p>
                  </div>
                  <div className={`${cou ? 'block': 'hidden'} w-[576px] h-[288px] background`}>
                      <div className="h-[80%] py-[24px] px-[40px]">
                        <div className="flex font1 text-[#3e4152]">
                          <div className='w-3/4'>
                            <span className='text-sm'>AVAIL FLAT</span> <br />
                            <span className='text-4xl font-semibold'>
                           <span className='text-5xl'>₹300 OFF</span><br />
                            + FREE SHIPPING
                            </span>
                          </div>
                          <img src={coup} alt="" className='w-2/6' />
                        </div>

                        <div className="flex py-4">
                          <div className="text-[#3e4152] font1 font-semibold w-4/6">
                          <span className='text-base'>Coupon Code:</span> <span className='text-lg'>MYNTRA300</span>
                          <div className='text-xs font-sans font-light'>Applicable on your first order</div>
                          </div>
                          <div className="">
                           <Link to='/Login'>
                           <button className='bg-[#ff3f6c] text-center rounded-[4px] mx-auto font1 text-white px-6 py-3'onClick={()=>(cou ? setcou(false):setcou(true))}>
                                SING UP NOW >
                            </button>
                            </Link> 
                          </div>
                        </div>
                      </div>



                      <div className="h-[20%] border-t-[1px] border-slate-300 grid grid-cols-3">
                          <div className='font1 text-center items-center justify-center text-[#3e4152]  flex text-sm'>
                          <img src={gen} alt="" className='w-5 mr-2'/>
                            Genuine Products</div>
                          <div className='font1 text-center items-center justify-center text-[#3e4152] flex text-sm'>
                          <svg viewBox="0 0 24 24" color="#03a685" className='w-5 mr-2'><g fill="#03a685" stroke="#03a685" stroke-width="0.6"><path d="M16.606 21.888H6.398a.436.436 0 01-.307-.121.405.405 0 01-.125-.296V11.4l-1.555 1.916a.44.44 0 01-.607.075l-2.415-1.804a.41.41 0 01-.184-.392.42.42 0 01.274-.339.444.444 0 01.439.075l2.088 1.549 2.05-2.55a.441.441 0 01.485-.146c.177.058.295.22.292.4V21.06h9.334V10.184a.417.417 0 01.292-.4.441.441 0 01.485.145l2.058 2.55 2.084-1.549a.444.444 0 01.446-.085c.154.055.261.19.278.347a.411.411 0 01-.199.394l-2.419 1.789a.443.443 0 01-.606-.075l-1.556-1.916V21.47a.424.424 0 01-.424.417zM11.5 5.774a.424.424 0 01-.432-.417V5.23a2.093 2.093 0 01.965-1.706.86.86 0 00.355-.816.88.88 0 00-.565-.696.933.933 0 00-.906.135.854.854 0 00-.327.668c0 .23-.193.416-.432.416a.424.424 0 01-.431-.416c-.002-.808.584-1.507 1.404-1.675.82-.168 1.65.24 1.99.98.34.738.097 1.605-.583 2.079a1.28 1.28 0 00-.606 1.031v.127c0 .11-.046.217-.127.295a.44.44 0 01-.305.122z"></path><path d="M21.354 11.672a.43.43 0 01-.342-.16l-1.621-2.018c-1.894-2.347-4.805-3.72-7.89-3.72-3.083 0-5.994 1.373-7.888 3.72L1.988 11.5a.443.443 0 01-.594.064.406.406 0 01-.09-.57l1.64-2.01c2.057-2.552 5.22-4.045 8.572-4.045 3.351 0 6.514 1.493 8.57 4.045L21.709 11a.407.407 0 01-.077.582.43.43 0 01-.277.09z"></path><path d="M11.5 21.888a.424.424 0 01-.432-.417V5.346c0-.23.194-.416.432-.416s.432.186.432.416v16.125a.405.405 0 01-.126.296.436.436 0 01-.306.12z"></path></g></svg>
                            Try & Buy</div>
                          <div className='font1 text-center items-center justify-center text-[#3e4152] flex text-sm'>
                          <svg viewBox="0 0 24 24" color="#03a685" className='w-5 mr-2'><g fill="#03a685"><path d="M15.19 8.606V4.3a.625.625 0 00-.622-.625H6.384V.672a.624.624 0 00-.407-.588.62.62 0 00-.687.178L.367 6.048a.628.628 0 000 .812l4.923 5.778a.626.626 0 00.687.182.624.624 0 00.407-.588V9.228h8.184a.62.62 0 00.621-.622zm-1.244-.625H5.762a.625.625 0 00-.621.625v1.938l-3.484-4.09L5.14 2.362V4.3c0 .344.28.625.621.625h8.184v3.056z"></path><path d="M22.708 13.028L17.785 7.25a.616.616 0 00-.687-.178.624.624 0 00-.407.587v3.003H8.507a.625.625 0 00-.622.625v4.304c0 .343.28.625.622.625h8.184v3.003a.624.624 0 00.621.625.626.626 0 00.473-.219l4.923-5.781a.632.632 0 000-.816zm-4.774 4.497v-1.937a.625.625 0 00-.622-.625H9.13v-3.054h8.183a.625.625 0 00.622-.625V9.347l3.484 4.09-3.484 4.088z"></path></g></svg>
                            Easy Exchanges & Returns</div>
                      </div>
                  </div>
                    
                </div>
           
        }
        
    </div>
  )
}

export default Coupon