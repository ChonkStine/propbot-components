import React from 'react'

function Headings() {
  return (
    <div className='hidden md:block'>
        <div className='
        grid grid-cols-5 p-1 px-[5vw] rounded min-h-[40px] min-w-[80%]
        bg-white text-[#828282] font-semibold text-[12px]
        justify-center items-center'>
        <div className='px-3'>Name</div>
        <div className='px-3'>Company</div>
        <div className='px-3'>Email</div>
        <div className='px-3'>Membership</div>
        <div className='px-3'>Actions</div>
    </div>
    </div>
  )
}

export default Headings