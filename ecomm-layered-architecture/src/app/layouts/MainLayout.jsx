import { Outlet } from 'react-router';
import Navbar from './../../shared/ui/components/Navbar';

const MainLayout = () => {
  
  return <div className='bg-black flex flex-col gap-5 min-h-screen w-full text-white'>
    
    <div>
      <Navbar />
    </div>
    <div>
      <Outlet />
    </div>
  </div>
  
}

export default MainLayout