import React, { Fragment, useEffect, useState } from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { getuser, updatedetailsuser } from "../../action/useraction";
import { getbag } from '../../action/orderaction'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GrClose } from 'react-icons/gr'

const Address = () => {
  const [state, setstate] = useState(false)
  const [state1, setstate1] = useState(false)
  const [edit, setedit] = useState('hidden')
  const { loading: userloading, user, isAuthentication } = useSelector(state => state.user)
  const { bag, loading: bagloading } = useSelector(state => state.bag_data)
  const { success } = useSelector(state => state.updateuser2)
  const Alert = useAlert()
  const redirect = useNavigate()
  const dispatch = useDispatch()

  const [mrp, setmrp] = useState(0)
  const [sp, setsp] = useState(0)
  const [ds, setds] = useState(0)
  if (bagloading === false && state1 === false) {
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


  const [name, setname] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [pincode, setpincode] = useState('')
  const [address1, setaddress1] = useState('')
  const [address2, setaddress2] = useState('')
  const [citystate, setcitystate] = useState('')


  function saveaddress() {
    const option = {
      name: name,
      phonenumber: Number(phonenumber),
      pincode: Number(pincode),
      address1: address1,
      address2: address2,
      citystate: citystate
    }

    dispatch(updatedetailsuser(option, user._id))
    Alert.success(success)
    setedit('hidden')
    dispatch(getuser())
  }

  useEffect(() => {
    if (!user) {
      dispatch(getuser())
    }


    if (state === false) {
      if (userloading === false) {
        if (isAuthentication === false) {
          Alert.info('Log in to access BAG')
          redirect('/Login')
          setstate(true)

        } else {
          dispatch(getbag(user._id))
          setname(user.name)
          setphonenumber(user.phonenumber)
          setpincode(user.address.pincode)
          setaddress1(user.address.address1)
          setaddress2(user.address.address2)
          setcitystate(user.address.citystate)
          setstate(true)
        }

      }
    }
  }, [dispatch, user, state, userloading, isAuthentication, Alert, redirect]);
  return (
    <Fragment>
      {
        (userloading === false) &&

        <Fragment >
          <div className='relative h-max border-[0.5px] border-b-slate-100 py-5 select-none'>
            <div className='mx-auto text-[#696B79] w-max'>
              <span className="font text-[14px]   font-semibold tracking=[3px] text-[#696B79]">BAG</span> ----------&nbsp;
              <span className="font text-[14px] underline font-semibold tracking=[3px] text-[#0db7af]">ADDRESS</span> ---------- &nbsp;
              <span className="font text-[14px] font-semibold tracking=[3px] text-[#696B79]">PAYMENT</span>
            </div>
            <span className='absolute items-center flex right-0 top-0 2xl:right-10 xl:right-10 lg:right-10 2xl:top-2 xl:top-2 lg:top-2 '>
              <BsShieldFillCheck className='text-[#0db7af] 2xl:text-3xl xl:text-3xl lg:text-3xl ' />
              <span className='font1 font-semobold  text-[#535766] tracking-[3px]  2xl:text-[12px] xl:text-[12px] lg:text-[12px] text-[8px] ml-2  '>100% SECURE</span>
            </span>
          </div>

          <div className=' mx-auto select-none 2xl:w-[70%] xl:w-[70%] lg:w-[70%] 2xl:grid-cols-12  xl:grid-cols-12  lg:grid-cols-12 2xl:grid xl:grid lg:grid mt-4'>
            <div className="col-span-8">
              <h1 className='font1 font-bold text-[18px] text-[#282c3f] '>Select Delivery Address</h1>

              <h1 className='font1 text-[#535766] text-[12px] font-bold mt-3'>DEFAULT ADDRESS</h1>

              <div className='rounded-sm shadow-md shadow-slate-300 w-full h-max hover:border-[1px] hover:border-slate-200 border-[1px] border-slate-100 mt-2 py-4 px-8'>
                <div className='flex items-center'><input type="radio" className='-ml-5 accent-pink-500' checked={true} /> <h1 className='font1 ml-3 capitalize'> {user.name} </h1></div>

                <h1 className='text-[#424553] mt-3 text-[13px] capitalize'>{user.address.address1}, {user.address.address2}</h1>
                <h1 className='text-[#424553] text-[13px] capitalize'>{user.address.citystate}, {user.address.pincode}</h1>
                <h1 className='text-[#424553] mt-3 text-[13px] capitalize'>Mobile:&nbsp; <span className='font1'> {user.phonenumber}</span></h1>

                <li className='text-[#424553] mt-3 text-[14px] capitalize list-disc'>pay on delivery Available</li>

                <button className='mt-4 font1 text-[#282c3f] border-[#282c3f] px-4 py-1 text-sm border-[1px] rounded-sm' onClick={() => setedit('block')}>EDIT</button>

              </div>
            </div>

            <div className="col-span-4 mx-2 border-l-[0px] border-slate-200 pl-4 text-[14px] 2xl:ml-4 xl:ml-4 lg:ml-4 2xl:border-l-[1px] xl:border-l-[1px] lg:border-l-[1px] ">
              {
                bagloading === false &&
                <div>
                  <h1 className='font1 text-[#535766] text-[13px] mt-4'>DELIVERY ESTIMATES</h1>
                  {
                    bag.orderItems.map((e) =>
                      <div className='grid grid-cols-12 py-2 border-b-[1px] border-slate-200'>
                        <div className="col-span-2 "><img src={e.product.images[0].url} alt="" className='w-full' /></div>
                        <div className="text-center items-center flex justify-center capitalize text-xs col-span-10 h-full"> <h1> Estimated delivery by &nbsp;<span className='font-bold'>Tommorrow</span> </h1></div>
                      </div>
                    )
                  }

                  <div className="col-span-5 text-[14px] ">
                    <div className='mt-2 '>
                      <h1 className='font1 text-[#535766] text-[12px]'>PRICE DETAILS<span className='text-[12px]'>&nbsp;({bagloading === false && bag.orderItems.length} items)</span></h1>
                      <div className='text-[#535766] relative mt-2'>Total MRP<span className='absolute right-0'>&#8377;&nbsp;{mrp}</span></div>
                      <div className='text-[#535766] relative mt-2'>Discount on MRP<span className='absolute right-0 text-[#0db7af]'>-&#8377;&nbsp;{Math.round(ds)}</span></div>
                      <div className='text-[#535766] relative mt-2 mb-2'> Convenience Fee<span className='absolute right-0 '><span className='line-through'>-&#8377;&nbsp;99</span> <span className='no-underline text-[#0db7af]'>FREE</span> </span></div>
                      <div className='py-2 border-t-[1px] border-slate-200 bg-white 2xl:relative xl:relative lg:relative'>
                        <div className='relative font1 text-base'>Total Amount<span className='absolute right-0'>&#8377;&nbsp;{Math.round(sp)}</span></div>

                        <button className='mt-2 bg-[#ff3f6c] text-center w-full py-3 font1 text-bold text-white'> CONTINUE </button>
                      </div>
                    </div>

                  </div>
                </div>
              }

            </div>
          </div>

          <div className={`${edit} fixed top-0 bg-[#24242468] w-full h-full z-10`} >

            <div className='w-full 2xl:w-[31.33%] xl:w-[31.33%] lg:w-[31.33%] 2xl:mx-auto xl:mx-auto lg:mx-auto 2xl:h-max xl:h-max 
                lg:h-max h-full bg-white 2xl:mt-4 xl:mt-4 lg:mt-4 rounded-md border-[1px] border-slate-200  pt-5'>
              <h1 className='font1 font-bold flex relative px-4 border-b-[1px] pb-5'><span className='text-[#4f525d] text-[14px]'>EDIT ADDRESS</span><span className='absolute right-4 text-xl cursor-pointer' onClick={() => setedit('hidden')}><GrClose /></span></h1>
              <h1 className='font1 text-[13px] px-4 mt-4'>CONTACT DETAILS</h1>
              <div className='px-4'>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Name*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Mobile No*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.phonenumber} onChange={(e) => setphonenumber(e.target.value)} />
                </div>
                <h1 className='font1 text-[13px] px-4 mt-4'>ADDRESS</h1>

                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Pincode*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.address.pincode} onChange={(e) => setpincode(e.target.value)} />
                </div>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Address ( House No, Building, Street, Area )*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.address.address1} onChange={(e) => setaddress1(e.target.value)} />
                </div>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Address 2 </label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.address.address2} onChange={(e) => setaddress2(e.target.value)} />
                </div>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Locality / Town*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.address.citystate} onChange={(e) => setcitystate(e.target.value)} />
                </div>

              </div>

              <div className='py-2 px-2 bg-white mt-4'>
                <button className='bg-[#ff3f6c] font1 text-white text-base font-bold w-full py-3 ' onClick={saveaddress}>SAVE ADDRESS</button>

              </div>

            </div>



          </div>
        </Fragment>

      }

    </Fragment>
  )
}

export default Address