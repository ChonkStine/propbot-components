import React from 'react';

function Table() {
  const data = [
    { name: 'John Doe', email: 'johndoe@example.com', status: 'Active', isPayingMember: true },
    { name: 'Jane Smith', email: 'janesmith@example.com', status: 'Inactive', isPayingMember: false },
    { name: 'Bob Johnson', email: 'bobjohnson@example.com', status: 'Active', isPayingMember: true },
    { name: 'Mary Lee', email: 'marylee@example.com', status: 'Active', isPayingMember: false },
    { name: 'Tom Williams', email: 'tomwilliams@example.com', status: 'Inactive', isPayingMember: true },
  ];

  return (
    <div className="w-full md:w-[800px] mx-auto">
      <div className="bg-white shadow-md rounded-md overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-800">Name</th>
              <th className="px-4 py-2 text-left text-gray-800">Email</th>
              <th className="px-4 py-2 text-left text-gray-800">Status</th>
              <th className="px-4 py-2 text-left text-gray-800">Paying Member</th>
              <th className="px-4 py-2 text-left text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.email} className="border-t border-gray-100">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.status}</td>
                <td className="px-4 py-3">
                  {item.isPayingMember ? (
                    <span className="bg-green-500 text-white font-semibold py-1 px-2 rounded-md">
                      Yes
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white font-semibold py-1 px-2 rounded-md">
                      No
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-start items-center space-x-2">
                    <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
          Add
        </button>
      </div>
    </div>
  );
}

export default Table;
