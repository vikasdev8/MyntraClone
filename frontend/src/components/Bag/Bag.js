import React, { Fragment, useState, useEffect } from 'react'
import {BsCloudLightningRainFill, BsShieldFillCheck} from 'react-icons/bs'
import elementClass from 'element-class'
import './bag.css'
import {useSelector, useDispatch} from 'react-redux'
import {getbag, getqtyupdate, deletebag} from '../../action/orderaction'
import { getuser } from "../../action/useraction";
import m1 from '../images/ship-free.webp'
import {useAlert} from 'react-alert'
import { useNavigate, Link } from 'react-router-dom'
import Emptybag from './Emptybag'
import {GrClose} from 'react-icons/gr'


const Bag = () => {
    
    const {loading:userloading, user, isAuthentication } = useSelector(state => state.user)
    const {bag, loading:bagloading} = useSelector(state => state.bag_data)
    const [state, setstate] = useState(false)
    const [state1, setstate1] = useState(false)
    const [state2, setstate2] = useState(false)
    const Alert = useAlert()
    const redirect = useNavigate()
    const dispatch = useDispatch()
    const steps = ['10% Instant Discount on Canara Bank Credit and Debit cards on a min spend of Rs 2000. TCA',
    '15% Cashback up to Rs 500 on first ZestMoney transaction on a min spend of Rs 2,500.TCA',
    '10% Cashback up to Rs 300 on second or further ZestMoney transaction on a min spend of Rs 2,500.TCA',
    '10% Instant Discount on Bank Of Baroda Credit cards on a min spend of Rs 3,000.TCA',
    '5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA',
    '10% Cashback upto Rs 100 on Paytm Postpaid transaction on a min spend of Rs 1000 . TCA',
    '15% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA',
    '10% Cashback upto Rs 200 on Ola Money Postpaid or wallet transaction on a min spend of Rs 1000 . TCA',
    'Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 999.Use code MBK500 on Mobikwik. TCA',
    '5% Cashback upto Rs 150 on a minimum spend of Rs 1,500 with PayZapp. TCA',

];
const [mrp, setmrp] = useState(0)
const [sp, setsp] = useState(0)
const [ds, setds] = useState(0)

if (bagloading === false && state1 === false && bag !== null ) {
    setstate1(true)
    console.log(bag.orderItems.length)
    let va = 0
    let ss = 0
    for (let i = 0; i < bag.orderItems.length; i++) {
        va += bag.orderItems[i].product.mrp * bag.orderItems[i].qty
       ss += bag.orderItems[i].product.sellingPrice * bag.orderItems[i].qty
    }
    setmrp(va)
    setsp(ss)
    let dd = va - ss
    setds(dd)
    
}

function addclass() {
    let allli = document.querySelectorAll(`.vis`)

    for (let i = 0; i < allli.length; i++) {
        console.log(allli[i])
        elementClass(allli[i]).toggle('hi')
        // elementClass(allli[i]).add('vis')
      }
}

const [qtyvalue,setQtyvalue] = useState(1)
const [id,setid] = useState('')

function updateqty(e) {
    
   if (e.keyCode == 13) {
    const Data ={
        id:id,
        qty: Number(qtyvalue)
    }
    dispatch(getqtyupdate(Data))
    dispatch(getbag(user._id))
   
   }
    
   
}

const [state3, setstate3] =useState(false)
const {deletebag:baggggg} = useSelector(state=>state.deletebag)

if (state3=== false && baggggg === true ) {
    dispatch(getbag(user._id))
    setstate1(false)
    setstate3(true)
}

function place() {
    redirect('/address/bag')
}


function delbag(user, product) {
    console.log(user)
    const option = {
        product: product,
        user:user
    }
    
    dispatch(deletebag(option))
    setstate3(false)
    
}


useEffect(() => {
    if (state2 === false) {
        if (!user) {
            dispatch(getuser())
        }
        setstate2(true)
    }
  
    if (state === false) {
        if (userloading === false) {
            if (isAuthentication === false) {
                Alert.info('Log in to access BAG')
                setstate(true)
                
            } else {
                dispatch(getbag(user._id))
                setstate(true)
            }

        }
    }
    
}, [dispatch, user, state,userloading,isAuthentication,Alert, redirect ]);

    return (
        <Fragment>
            { isAuthentication === true ?
                
                <Fragment>{
                    bagloading === false &&

            <Fragment>
            {
                (bag !== null  && bag.orderItems.length > 0) ?
                <Fragment >
                <div className='relative h-max border-[0.5px] border-b-slate-100 py-5 select-none'>
                    <div className='mx-auto text-[#696B79] w-max'>
                        <span className="font text-[14px] underline  font-semibold tracking=[3px] text-[#0db7af]">BAG</span> ----------&nbsp;
                        <span className="font text-[14px] font-semibold tracking=[3px] text-[#696B79]">ADDRESS</span> ---------- &nbsp;
                        <span className="font text-[14px] font-semibold tracking=[3px] text-[#696B79]">PAYMENT</span>
                     </div>
                   <span className='absolute items-center flex right-0 top-0 2xl:right-10 xl:right-10 lg:right-10 2xl:top-2 xl:top-2 lg:top-2 '>
                       <BsShieldFillCheck className='text-[#0db7af] 2xl:text-3xl xl:text-3xl lg:text-3xl '/>
                     <span className='font1 font-semobold  text-[#535766] tracking-[3px]  2xl:text-[12px] xl:text-[12px] lg:text-[12px] text-[8px] ml-2  '>100% SECURE</span> 
                   </span>
                </div>
        {/* ***************************************************************************************************************** */}
                <div className=' mx-auto select-none 2xl:w-[70%] xl:w-[70%] lg:w-[70%] 2xl:grid-cols-12  xl:grid-cols-12  lg:grid-cols-12 2xl:grid xl:grid lg:grid min-h-screen'>
                <div className="col-span-7">
                    <div className={`w-full mt-2 border-[1px] border-slate-200 py-4 px-6 overflow-hidden`}>
                        <h1 className='items-center flex font1 font-bold text-sm'><svg width="18" height="18" viewBox="0 0 18 18" className='mr-2'><g fill="#000" fill-rule="evenodd"><path d="M15.292 10.687v.001c-.198.742.076 1.454.296 2.026l.045.12-.137.021c-.602.094-1.352.211-1.892.75-.538.54-.655 1.288-.748 1.89l-.022.138a22.096 22.096 0 0 1-.12-.045c-.443-.171-.946-.364-1.49-.364-.185 0-.366.023-.536.068-.728.194-1.198.78-1.577 1.249-.032.04-.07.088-.111.137l-.112-.138c-.378-.47-.848-1.054-1.575-1.248a2.092 2.092 0 0 0-.537-.068c-.543 0-1.046.193-1.49.364l-.12.045-.022-.138c-.093-.602-.21-1.35-.749-1.89-.539-.539-1.289-.656-1.891-.75l-.137-.022a15 15 0 0 1 .045-.118c.22-.573.494-1.286.296-2.027-.194-.728-.78-1.199-1.25-1.577L1.323 9l.137-.11c.47-.38 1.055-.85 1.249-1.577.198-.742-.076-1.455-.296-2.028l-.045-.118.137-.022c.602-.094 1.352-.211 1.891-.75.54-.539.656-1.289.75-1.891l.022-.137.119.045c.443.171.947.365 1.49.365.186 0 .367-.024.537-.07.727-.193 1.198-.778 1.576-1.248L9 1.322l.111.137c.379.47.85 1.055 1.576 1.249.17.045.352.069.537.069.544 0 1.047-.194 1.491-.365l.119-.045.022.137c.094.602.21 1.353.75 1.891.538.539 1.288.656 1.89.75l.138.022-.046.119c-.22.572-.494 1.285-.295 2.026.194.728.778 1.199 1.248 1.577.04.033.088.07.137.111l-.137.11c-.47.38-1.054.85-1.249 1.577M18 9c0-.744-1.459-1.286-1.642-1.972-.19-.71.797-1.907.437-2.529-.364-.63-1.898-.372-2.41-.884-.511-.511-.253-2.045-.883-2.41a.647.647 0 0 0-.33-.08c-.585 0-1.403.542-1.998.542a.778.778 0 0 1-.201-.025C10.286 1.46 9.743 0 9 0c-.744 0-1.286 1.459-1.972 1.642a.78.78 0 0 1-.2.025c-.596 0-1.414-.542-2-.542a.647.647 0 0 0-.33.08c-.63.365-.37 1.898-.883 2.41-.512.512-2.046.254-2.41.884-.36.62.627 1.819.437 2.529C1.46 7.714 0 8.256 0 9s1.459 1.286 1.642 1.972c.19.71-.797 1.908-.437 2.53.364.63 1.898.371 2.41.883.511.512.253 2.045.884 2.41.097.056.208.08.33.08.585 0 1.403-.542 1.998-.542a.78.78 0 0 1 .201.025C7.714 16.54 8.256 18 9 18s1.286-1.46 1.973-1.642a.774.774 0 0 1 .2-.025c.595 0 1.413.542 1.998.542a.647.647 0 0 0 .33-.08c.631-.365.373-1.898.884-2.41.512-.512 2.046-.254 2.41-.884.36-.62-.627-1.819-.437-2.529C16.54 10.286 18 9.744 18 9"></path><path d="M10.897 6.34l-4.553 4.562a.536.536 0 0 0 .76.758l4.552-4.562a.536.536 0 0 0-.76-.758M6.75 7.875a1.126 1.126 0 0 0 0-2.25 1.126 1.126 0 0 0 0 2.25M11.25 10.125a1.126 1.126 0 0 0 0 2.25 1.126 1.126 0 0 0 0-2.25"></path></g></svg>
                            Available Offers</h1>
                        <ul className='list-disc text-[12px] text-[#282c3f]'>
                        {
                            steps.map((e, i)=>
                            <li className={` mt-4 ml-4 vis hi he${i}`}>{e}</li>
                            )
                        }
                        </ul>
                        <h1 className='font1 font-bold text-sm text-[#ff3f6c] mt-2 cursor-pointer' onClick={addclass}>See More</h1>
                    </div>
        
                    <div className={`w-full mt-2 border-[1px] border-slate-200 py-2 px-4 overflow-hidden flex items-center text-sm`}>
                        <img src={m1} alt="" className='w-10 mr-2' /> <p>Yay! <span className='font1'>No convenience fee </span> on this order.</p>
                    </div>
        
                    <div className={`w-full mt-2  h-max  text-sm`}>
                        {
                            bagloading === false && bag.orderItems.map((e)=>
        
                            <div className='grid grid-cols-12 mt-2 border-[1px] border-slate-200 py-2 px-1 rounded-md 2xl:px-4 xl:px-4 lg:px-4'>
                            <div className="col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 flex items-center">
                              <Link to={`/products/${e.product._id}`}>  <img src={e.product.images[0].url} alt="" className='w-full min-h-[50px] '/></Link>
                            </div>
                            <div className="col-span-8 px-2 2xl:col-span-8 xl:col-span-8 lg:col-span-8 relative">
                                <h1 className='font1 font-bold'>{e.product.brand}</h1>
                                <h2 className='text-ellipsis text-left whitespace-nowrap overflow-hidden text-[#282c3f]'> {e.product.title} </h2>
                                <p className='text-xs text-[#94969f]'>Sold by: {e.product.brand}</p>
                               
                                <p className='pl-3 font1 font-bold mt-2'> <span className=''>Size:</span>  {e.product.size}  <span className='ml-10'>Qty:</span> 
                                <input type="number" name="quantity" id="quantity" min='1' max={e.product.stock} defaultValue={e.qty} 
                                className='active:border-none w-max'onChange={(f)=>(setQtyvalue(f.target.value) ,setid(e._id))} onKeyUp={(e)=>updateqty(e)}  /> <span className='text-[8px] ml-[-5px]'>&#9660;</span> </p>
                               
                                <p className='mt-2'> <span className="font1 font-bold">&#8377; {Math.round(e.product.sellingPrice)}</span><span className="ml-2 line-through text-slate-400">&#8377; {e.product.mrp}</span><span className="ml-2 text-[#f26a10]">&#8377; {-Math.round(e.product.mrp - e.product.sellingPrice)} OFF</span> </p>
                                <p className='text-[10px] font-bold'>Not returnable</p>
                                <p className='text-[10px] mt-2 flex items-center'>
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className='mr-2'><path fill="#03A685" fill-rule="evenodd" d="M2.553 3c-.282 0-.51.23-.51.515 0 .284.228.515.51.515h7.96c.217 0 .38.17.38.378v6.145H3.746V9.351a.513.513 0 00-.511-.515.513.513 0 00-.51.515v1.717c0 .284.228.515.51.515H4.91a1.74 1.74 0 00-.143.694c0 .949.76 1.723 1.702 1.723.943 0 1.702-.774 1.702-1.723a1.74 1.74 0 00-.143-.694h3.35a1.74 1.74 0 00-.143.694c0 .949.76 1.723 1.702 1.723.943 0 1.702-.774 1.702-1.723 0-.247-.05-.482-.143-.694h.994c.282 0 .511-.23.511-.515V8.321c0-.13-.05-.256-.138-.352l-1.913-2.06a.513.513 0 00-.373-.162h-1.661v-1.34c0-.78-.626-1.407-1.403-1.407h-7.96zm9.362 3.777v3.776h3.064V8.525l-1.624-1.748h-1.44zM.51 5.06a.513.513 0 00-.511.515c0 .284.229.515.51.515h5.447c.282 0 .511-.23.511-.515a.513.513 0 00-.51-.515H.51zm1.192 2.23c0-.284.229-.514.51-.514h3.065c.282 0 .51.23.51.514a.512.512 0 01-.51.515H2.213a.512.512 0 01-.51-.515zm4.766 4.292a.687.687 0 00-.68.694c0 .385.307.693.68.693.373 0 .68-.308.68-.694a.687.687 0 00-.68-.693zm5.787.694c0-.386.308-.694.681-.694.373 0 .681.308.681.694a.687.687 0 01-.68.693.688.688 0 01-.682-.694z" clip-rule="evenodd"></path></svg>
                                Delivery by <span className='font-semibold text-[#0db7af]'> &nbsp;tomorrow</span>
                                </p>
                                
                            </div>
                            <div className='col-span-1 relative 2xl:col-span-2 xl:col-span-2 lg:col-span-2'>
                            <span className='absolute top-1 right-1 text-lg cursor-pointer' onClick={()=>delbag( user._id, e.product._id)} ><GrClose/></span>
                            </div>
                        </div>
                            )
        
                        }
                    </div>
                </div>
        
                <div className="col-span-5 mx-2 border-l-[0px] border-slate-200 pl-4 text-[14px] 2xl:ml-4 xl:ml-4 lg:ml-4 2xl:border-l-[1px] xl:border-l-[1px] lg:border-l-[1px]">
                     <div className='mt-2 '>
                         <h1 className='font1 text-[#535766] '>PRICE DETAILS<span className='text-[12px]'>&nbsp;({bagloading === false && bag.orderItems.length} items)</span></h1>
                         <div className='text-[#535766] relative mt-2'>Total MRP<span className='absolute right-0'>&#8377;&nbsp;{mrp}</span></div>
                         <div className='text-[#535766] relative mt-2'>Discount on MRP<span className='absolute right-0 text-[#0db7af]'>-&#8377;&nbsp;{Math.round(ds)}</span></div>
                         <div className='text-[#535766] relative mt-2'> Coupon Discount<span className='absolute right-0 text-[#ff3f6c]'>Apply Coupon</span></div>
                         <div className='text-[#535766] relative mt-2 mb-2'> Convenience Fee<span className='absolute right-0 '><span className='line-through'>-&#8377;&nbsp;99</span> <span className='no-underline text-[#0db7af]'>FREE</span> </span></div>
                         <div className='py-2 border-t-[1px] border-slate-200 bg-white 2xl:relative xl:relative lg:relative'>
                            <div className='relative font1 text-base'>Total Amount<span className='absolute right-0'>&#8377;&nbsp;{Math.round(sp)}</span></div>
                            
                            <button className='mt-2 bg-[#ff3f6c] text-center w-full py-3 font1 text-bold text-white' onClick={place} > PLACE ORDER </button>
                         </div>
                    </div>   
        
                </div>
                </div>
                    </Fragment>

                :

                <Emptybag/> 

                
            }
                </Fragment> ///////////

        }
        </Fragment>
           
            :

            <Emptybag/>
        }
        </Fragment>
    )
}

export default Bag