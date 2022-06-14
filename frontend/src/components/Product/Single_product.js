import React, { Fragment, useEffect } from 'react'
import './Single_product.css'
import { AiFillStar } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'
import { IoIosHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';



const Single_product = ({ pro }) => {


    let slideIndex = 1;

    const currentSlide = (n) => {

        showSlides(slideIndex = n);
    }

    const showSlides = (n) => {

        let i;
        let slides = document.getElementsByClassName(pro.style_no);
        let dots = document.getElementsByClassName(`${pro.style_no}1`);

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");

        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    const showdiv = () => {
        let dotsdiv = document.getElementsByClassName(`${pro.style_no}hover`);
        dotsdiv[0].className += " 2xl:block lg:block xl:block";
    }

    const notshowdiv = () => {

        document.querySelector(`.${pro.style_no}hover`).classList.remove('2xl:block')
        document.querySelector(`.${pro.style_no}hover`).classList.remove('lg:block')
        document.querySelector(`.${pro.style_no}hover`).classList.remove('xl:block')
    }
    // showSlides(slideIndex);
    var timer;

    const changeimg = () => {
        let i = 1;
        timer = setInterval(function () {

            let slides = document.getElementsByClassName(pro.style_no);
            if (i > slides.length) { i = 0 }
            i++
            currentSlide(i)


        }, 1000);
    }

    function stopchangeimg() {
        clearInterval(timer);
        currentSlide(1)
    }

    useEffect(() => {
        showSlides(slideIndex)

    }, [showSlides]);

    return (
        <Fragment>
            {
                pro.images[0].url &&

                <Fragment>
                    <Link to={`/products/${pro._id}`} target='_blank' >
                        <li className=' w-full border-[1px] 
            border-slate-200 grid-cols-1 2xl:border-none xl:border-none lg:border-none 
              relative ' onMouseEnter={() => (showdiv(), changeimg())} onMouseLeave={() => (notshowdiv(), stopchangeimg())}>

                            <div className="slideshow-container min-h-[200px]">

                                {
                                    pro.images.map((im) => (

                                        <div className={`${pro.style_no} fade relative `} >
                                            <LazyLoadImage src={im.url}  className="w-full" width='100%'  alt='product' effect='blur' />
                                            {/* <div className='absolute bottom-2 left-2 bg-white rounded-full px-2 text-[10px] font1 flex py-[2px] items-center'>
                                                3.6&nbsp;<AiFillStar className='text-[#0db7af]' />&nbsp;|&nbsp;2k</div> */}
                                        </div>
                                    ))
                                }

                            </div>

                            <div className='relative pb-6'>
                                <p className='font1 text-base px-2'>{pro.brand}</p>
                                <p className='overflow-hidden px-2 text-xs text-left text-ellipsis h-4 whitespace-nowrap text-slate-400'>{pro.title}</p>
                                <p className=' flex px-2'><span className='flex items-center text-sm font-medium'><BiRupee />{Math.round(pro.sellingPrice)}</span >&nbsp;
                                    <span className='flex items-center text-sm font-medium text-slate-400 line-through'><BiRupee />{Math.round(pro.mrp)}</span>&nbsp;&nbsp;
                                    <span className='flex items-center text-xs font-medium text-[#f26a10]'>( {-Math.round(pro.sellingPrice / pro.mrp * 100 - 100)}% OFF )</span></p>
                            </div>

                            <div className={`${pro.style_no}hover hidden absolute pb-6 bottom-0 w-full bg-[#ffffff]  mx-auto `}>
                                <div className='text-center mb-2'>
                                    {pro.images.map((img, i) => (
                                        <span className={`${pro.style_no}1 dot `} onClick={() => (currentSlide(i + 1))} ></span>

                                    ))}
                                </div>

                                <div className='w-12/12 text-center flex items-center justify-center py-1 font1 border-[1px] border-slate-300 cursor-pointer' >
                                    <IoIosHeartEmpty className='text-lg mr-1' /><span>WISHLIST</span></div>
                                <div className='relative '>
                                    <p className='font1 text-xm px-2 text-[#5f5f5f9e]'>Sizes: {pro.size}</p>
                                    <p className=' flex px-2'><span className='flex items-center text-sm font-medium'><BiRupee />{Math.round(pro.sellingPrice)}</span >&nbsp;
                                        <span className='flex items-center text-sm font-medium text-slate-400 line-through'><BiRupee />{Math.round(pro.mrp)}</span>&nbsp;&nbsp;
                                        <span className='flex items-center text-xs font-medium text-[#f26a10]'>({Math.round(pro.sellingPrice / pro.mrp * 100 - 100)}% OFF)</span></p>
                                </div>

                            </div>

                        </li>
                    </Link>


                </Fragment>

            }
        </Fragment>

    )
}

export default Single_product