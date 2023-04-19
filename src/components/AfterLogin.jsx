import React from 'react';
import { FaMoneyBillAlt, FaShieldAlt } from 'react-icons/fa';

function Modal() {
  return (
    <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
      <p className="text-2xl font-bold text-gray-600 mb-6 text-center">Select to proceed further</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <a href="#" className="w-full h-32 md:w-56 bg-blue-500 text-center flex flex-col justify-center items-center rounded-lg hover:bg-blue-600 transition duration-200">
          <FaMoneyBillAlt className="text-white text-4xl mb-2" />
          <p className="text-white font-medium text-sm">Sales</p>
        </a>
        <a href="#" className="w-full h-32 md:w-56 bg-blue-500 text-center flex flex-col justify-center items-center rounded-lg hover:bg-blue-600 transition duration-200">
          <FaShieldAlt className="text-white text-4xl mb-2" />
          <p className="text-white font-medium text-sm">Security</p>
        </a>
      </div>
    </div>
  );
}

export default Modal;
