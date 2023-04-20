import React from 'react';
import Headings from './table-components/Headings';
import Brick from './table-components/Bricks';
import ToOtherData from './table-components/ToOtherData';

function Table() {
  const data = [
    { name: 'John Doe', email: 'johndoe@example.com', company: 'Kepsilog', isPayingMember: true },
    { name: 'Jane Smith', email: 'janesmith@example.com', company: 'Junakers', isPayingMember: false },
    { name: 'Bob Johnson', email: 'bobjohnson@example.com', company: 'Avyan Global', isPayingMember: true },
    { name: 'Mary Lee', email: 'marylee@example.com', company: 'Smart Communications', isPayingMember: false },
    { name: 'Tom Williams', email: 'tomwilliams@example.com', company: 'The Theorist', isPayingMember: true },
  ];

  return (
    
    <div className='flex flex-col gap-3 mx-2'>
      < Headings />

      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        {data.map(({ name, email, company, isPayingMember }) => (
          <Brick
            key={email}
            name={name}
            email={email}
            company={company}
            isPayingMember={isPayingMember}
          />
        ))}
      </div>
        
    <div className='flex justify-center  p-2 rounded-md'>
      < ToOtherData />
    </div>

      <div className='flex justify-end'>
          <button className="font-semibold text-[#fff] p-4 text-[12px] min-w-[100%]  bg-[#b3b3b3] hover:bg-[#5f5f5f] px-[2vw] rounded-md hover:text-white">
            Add
          </button>
      </div>
    </div>
  );
}

export default Table;
