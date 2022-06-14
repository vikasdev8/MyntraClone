import React,{Fragment} from 'react'
import { useTransition, animated } from 'react-spring'
import studio from '../../images/studio-logo-new.svg'
import img from '../../images/sudio-nav-banner.png'


const Studio = ({show, CMenu, parentCallback}) => {

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
        <div className={`container max-w-[40%] w-[40%] mx-auto h-[480px] ${CMenu}  Mmenu bg-white `}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className='px-8 py-8 '>
            <div className=' w-full'>
                <img src={studio} alt="studio" className='mx-auto ' />
                <h1 className='mx-auto font1 text-center '>Your daily inspiration for everything fashion</h1>
                <br />
                <img src={img} alt="banner" className='mx-auto' />
                <br />
                <button className=' font1 font-light border-[1px] ml-[33.33%] px-3 py-2 border-[#d4d5d8] '>EXPLORE&nbsp;STUDIO&nbsp;> </button>
            </div>
           

          </div>

        </div>
        </animated.div>
      )}
      </div>
   </Fragment>
  )
}

export default Studio