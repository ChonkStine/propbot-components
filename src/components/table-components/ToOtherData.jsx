import React from 'react'

function ToOtherData() {
    function hehe(){}
  return (
    <div className='flex gap-1'>
        <div onClick={hehe} 
        className='cursor-pointer select-none rounded-lg h-8 w-8 bg-[#b3b3b3] font-semibold text-white hover:bg-[#5f5f5f] flex justify-center items-center text-[12px]'>
            <p>1</p>
        </div>
        <div onClick={hehe} 
        className='cursor-pointer select-none rounded-lg h-8 w-8 bg-[#b3b3b3] font-semibold text-white hover:bg-[#5f5f5f] flex justify-center items-center text-[12px]'>
            <p>2</p>
        </div>
        <div onClick={hehe} 
        className='cursor-pointer select-none rounded-lg h-8 w-8 bg-[#b3b3b3] font-semibold text-white hover:bg-[#5f5f5f] flex justify-center items-center text-[12px]'>
            <p>3</p>
        </div>
        <div onClick={hehe} 
        className='cursor-pointer select-none rounded-lg h-8 w-8 bg-[#b3b3b3] font-semibold text-white hover:bg-[#5f5f5f] flex justify-center items-center text-[12px]'>
            <p>4</p>
        </div>
    </div>
  )
}

export default ToOtherData