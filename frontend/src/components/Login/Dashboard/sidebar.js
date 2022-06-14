import React, {Fragment} from 'react'

const sidebar = () => {
  return (
    <Fragment>
        <div className=''>
         <ul>
           <li className='text-sm py-6 border-b-[1px] mr-6 text-slate-500'>OVERVIEW</li>

           <h1 className='text-slate-400 text-sm pt-6'>ORDERS</h1>
           <li className='text-sm pb-6 pt-3 border-b-[1px] mr-6 text-slate-500'>Orders & Returns</li>

           <h1 className='text-slate-400 text-sm pt-6'>ACCOUNT</h1>
           <li className='text-sm pt-3 mr-6 text-slate-500'>Profile</li>
           <li className='text-sm mr-6 text-slate-500'>Saves Cards</li>
           <li className='text-sm mr-6 text-slate-500'>Addresses</li>
           <li className='text-sm pb-6 border-b-[1px] mr-6 text-slate-500'>Myntra Insider</li>

           <h1 className='text-slate-400 text-sm pt-6'>ACCOUNT</h1>
           <li className='text-sm pt-3 mr-6 text-slate-500'>Terms of Use</li>
           <li className='text-sm pb-6 border-b-[1px] mr-6 text-slate-500'>Privacy Policy</li>

         </ul>
        </div>
    </Fragment>
  )
}

export default sidebar