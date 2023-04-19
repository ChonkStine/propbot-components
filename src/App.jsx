import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./components/Login"
import Signup from './components/Signup'
import Pricing from './components/Pricing'
import AfterLogin from './components/AfterLogin'
import Tables from './components/Tables'
function App() {
  const [count, setCount] = useState(0)
  const data = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      status: 'Active',
      payingMember: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: 'Inactive',
      payingMember: false,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      status: 'Active',
      payingMember: true,
    },
  ];
  
  return (
    <div className="bg-neutral-200">
      <div className='min-h-screen flex justify-center items-center'>
        < Login />
      </div>
      <div className='bg-slate-300 min-h-screen flex justify-center items-center'>
        < AfterLogin />
      </div>
      <div className='min-h-screen flex justify-center items-center '>
        < Signup />
      </div>
      <div className='bg-slate-300 min-h-screen flex justify-center items-center py-8'>
        < Pricing />
      </div>
      <div className=' min-h-screen flex justify-center items-center'>
        < Tables data={data} />
      </div>
    </div>
  )
}

export default App
