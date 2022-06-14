import React, { Fragment, useState, useEffect } from 'react'
import './Login.css'
import { clearErrors, updateuser, getuser } from '../../action/useraction'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { GoVerified } from 'react-icons/go'
import GoogleLogin from 'react-google-login';
import {useAlert} from 'react-alert'



const Registeruser = () => {
    const Alert =useAlert()
    const redirect = useNavigate()
    const mobile = JSON.parse(localStorage.getItem('mobileno'))
    const { user, error, loading } = useSelector(state => state.updateuser)
    const H = window.innerHeight
    const Hpx = H - 56
    const [name, setname] = useState('')
    const [gender, setgender] = useState('')
    const [email, setemail] = useState('')
    const [address1, setaddress1] = useState('')
    const [address2, setaddress2] = useState('')
    const [citysate, setcitysate] = useState('')
    const [pincode, setpincode] = useState('')
    const dispatch = useDispatch()

    const signin_google = (response) => {
        const myForm = {
            name: response.profileObj.name,
            email: response.profileObj.email,
        }
        dispatch(updateuser(myForm))
        

    }

    const onsubmit = (e) => {
        e.preventDefault();
        const myForm = {
            name: name,
            gender: gender,
            email: email,
            address: {
                pincode: Number(pincode),
                address1: address1,
                address2: address2,
                citystate: citysate

            }
        }
        dispatch(updateuser(myForm))
    }


    const [state, setstate] = useState(false)

    if (state === false && user.name) {
        dispatch(getuser())
        setstate(true)
        redirect('/dashboard')
        Alert.success('Login successfully')
    }


    useEffect(() => {
        
        if(error){
            dispatch(clearErrors())
        }
        
    }, [ error, dispatch]);

    return (
       
                    <Fragment>
                        <form
                            encType="multipart/form-data"
                            onSubmit={(e) => onsubmit(e)}
                        >
                            <div className={`w-[100%] h-screen bg-[#fcecf4] py-10`}>
                                <div className='h-max bg-white mx-auto w-[100vw] sm:w-[430px] md:w-[430px] lg:w-[430px] xl:w-[430px] 2xl:w-[430px] pt-3'>

                                    <div className='mx-auto w-[330px] my-8'>

                                        <p className='text-sm z-0 text-slate-600 font-light '>Mobile&nbsp;Number</p>
                                        <p className='text-xl z-0 text-slate-600 mb-5 font-normal '>{mobile.phonenumber}
                                            <span className='float-right right-5 text-[#0db7af] top-1'><GoVerified /></span></p>
                                        <input type="text" name="name" className='w-full h-10 border-[1px] 
                                        focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none mb-5'
                                            placeholder='Full Name*' onChange={(e) => setname(e.target.value)} />

                                        <label className='font1 text-base mr-4 mb-5'>Gender</label>
                                        <input type="radio" name="gender" value="Men" className='mb-5 accent-pink-500' onClick={() => setgender('men')} />
                                        <label for="Men" className='font1 text-sm mr-4 mb-5'>Men</label>
                                        <input type="radio" name="gender" value="Women" className='mb-5 accent-pink-500' onClick={() => setgender('women')} />
                                        <label for="Women" className='font1 text-sm mr-4 mb-5' >Women</label>

                                        <input type="text" name="email" className='w-full h-10 border-[1px] 
                                            focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none '
                                            placeholder='E-Mail (Optional)' onChange={(e) => setemail(e.target.value)} />
                                        <button >

                                            <GoogleLogin
                                                clientId='667896313498-k77vitq087j4jhfne9fnd7i31abf2ok1.apps.googleusercontent.com'
                                                buttonText={<FcGoogle />}
                                                icon={false}
                                                onSuccess={signin_google}
                                                onFailure={signin_google}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </button>

                                        <input type="text" name="address1" className='w-full h-10 border-[1px] 
                                            focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none mb-5'
                                            placeholder='House No, Building, Street Area (Optional)' onChange={(e) => setaddress1(e.target.value)} />

                                        <input type="text" name="area" className='w-full h-10 border-[1px] 
                                            focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none mb-5'
                                            placeholder='Locality Town (Optional)' onChange={(e) => setaddress2(e.target.value)} />
                                        <input type="text" name="city" className='w-full h-10 border-[1px] 
                                            focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none mb-5'
                                            placeholder='City District & State (Optional)' onChange={(e) => setcitysate(e.target.value)} />
                                        <input type="text" name="pincode" className='w-full h-10 border-[1px] 
                                            focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none mb-5'
                                            placeholder='Pincode (Optional)' onChange={(e) => setpincode(e.target.value)} />

                                        <p id='error' className='text-xs text-red-500 '></p>

                                        <button type='submit' className='bg-[#ee5f73] text-white w-full font-semibold text-lg py-[6px] my-5' > {loading !== false? 'CREATE ACCOUNT': 'Loading...'} </button>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </Fragment>
            

    )
}

export default Registeruser