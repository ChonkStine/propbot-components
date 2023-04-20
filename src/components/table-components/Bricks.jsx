import React from 'react';

function Brick({ name, email, company, isPayingMember }) {
  return (
    <div className="
         min-h-[220px] py-8 px-[3vw] text-[12px] gap-[8px] min-w-[45vw]
        bg-white rounded-xl
        md:grid md:justify-center md:items-center md:grid-cols-5 md:p-1 md:px-[5vw] md:min-h-[70px] md:min-w-[80%]
        flex flex-col justify-center text-[rgb(130,130,130)]
      "
    >
      <div className="px-3 flex sm:gap-2 break-normal sm:flex-row flex-col :gap-[1px]">
        <span className="font-bold md:hidden">Name:</span>
        <span className="break-all">{name}</span>
      </div>
      <div className="px-3 flex sm:gap-2 sm:flex-row flex-col gap-[1px]">
        <span className="font-bold md:hidden ">Company:</span>
        <span className="break-all">{company}</span>
      </div>
      <div className="px-3 flex sm:gap-2 sm:flex-row flex-col gap-[1px]">
        <span className="font-bold md:hidden">Email:</span>
        <span className="break-all">{email}</span>
      </div>
      <div className="px-3 flex sm:gap-2 sm:flex-row flex-col gap-[1px]">
        <span className="font-bold md:hidden">Membership:</span>
        <span className="break-all">{isPayingMember ? 'Premium' : 'Free'}</span>
      </div>

      <div className="px-3 flex justify-end gap-[4px] mt-[2vw] md:mt-0 min-w-full">
        <button className="min-w-[45%] border-[1px] border-[#b3b3b3] p-1 px-[2vw] rounded-md hover:bg-[#b3b3b3] hover:text-white">
          Edit
        </button>
        <button className="min-w-[45%] border-[1px] border-[#b3b3b3] p-1 px-[2vw] rounded-md hover:bg-[#b3b3b3] hover:text-white">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Brick;
