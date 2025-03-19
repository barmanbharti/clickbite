import  { useState ,React } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <header className="bg-white  px-5 md:py-8 py-5 lg:px-20">
          <div className="flex justify-between items-center ">
            
            <div className="flex items-center space-x-5 lg:space-x-8">
              <img src="/Logo.svg" alt="Logo" className="h-8" />
    
              <nav className="hidden md:flex space-x-6 text-black text-[16px]  leading-[150%] font-medium">
                <a href="#" className="hover:font-bold">Company</a>
                <a href="#" className="hover:font-bold">Marketplace</a>
                <a href="#" className="hover:font-bold">Features</a>
                <a href="#" className="hover:font-bold">Team</a>
                <a href="#" className="hover:font-bold">Contact</a>
              </nav>
            </div>
    
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <button className=" text-[16px] font-medium hover:font-bold">Log In</button>
              <button className="bg-[#1A56DB] text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get started
              </button>
            </div>
    
            <button
              className="block md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src="/bars.svg" alt="Menu" className="h-6 w-6" />
            </button>
          </div>
    
          {isOpen && (
            <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4 text-black text-base font-medium">
              <a href="#" className="hover:font-bold">Company</a>
              <a href="#" className="hover:font-bold">Marketplace</a>
              <a href="#" className="hover:font-bold">Features</a>
              <a href="#" className="hover:font-bold">Team</a>
              <a href="#" className="hover:font-bold">Contact</a>
              <button className=" hover:font-bold">Log In</button>
              <button className="bg-[#1A56DB] text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get started
              </button>
            </div>
          )}
        </header>
      );
    }

export default Header