import React, { Fragment, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {Allproduct} from '../../action/productaction'
import {useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'

const Search = () => {
    
    const [state, setstate] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate ()
    function searchenter(e) {
        e.preventDefault();
        if (state.trim()) {
            navigate(`/products?keyword=${state}`)
            dispatch(Allproduct())
        } else {
            navigate('/products')
        }
     
    }
    return (
        <Fragment>
            <form className=" self-center mt-[5%] " onSubmit={searchenter}>
            <span className='search_div h-full  justify-center items-center lg:w-72'>
                <button className='searchbtn' onClick={searchenter}><FiSearch  /></button>
            <input type="text" placeholder='Search for products, brands and more' 
            className=' search caret-[#ff2459]' onChange={(e)=>setstate(e.target.value)}/>
            </span>
            </form>
           
         
            
        </Fragment>
    )
}

export default Search