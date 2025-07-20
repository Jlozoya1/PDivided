import { TreePalm, User } from 'lucide-react';
import { useState } from 'react';

export default function Header(){
const [open, setOpen] = useState(false);

  return(
    <>
      <nav className='h-19 justify-between flex items-center border-b border-gray-400 '>
        <div className='flex align-middle items-center p-4 font-sans text-2xl'>
          <TreePalm className='mr-1 h-7 w-7'/>
          ParaisoDrinks
        </div>

        <button 
          className='flex rounded-2xl items-center bg-[#343434] hover:bg-[#464545] px-6.5 py-2 text-white cursor-pointer mr-6 relative'
          onClick={ () => setOpen(!open) }
        >
          <User className='w-5 h-5 mr-1'/>
          Admin
        </button>

        {open && (
          <div className="absolute right-2 mt-32 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <a
                href="#configuracion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Configuración
              </a>
              <a
                href="#logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </div>
        )}
        
    </nav>


    </>
    )
}
