import {React,useState,useEffect} from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Plancomparison = ({ plansComp }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        if (window.innerWidth < 640) {
          setIsOpen(false); 
        } else {
          setIsOpen(true); 
        }
    
        const handleResize = () => {
          const width = window.innerWidth;
          setScreenSize(width);
          if (width < 640) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <section className="px-3 lg:px-20">
        <div className="mx-auto ">
        <h2
        className="text-center text-[16px] text-[#1A56DB] font-medium cursor-pointer mt-16 md:mb-16 mb-10 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Show Detailed Plan Comparison{" "}
        {!isOpen ? (
          <FaChevronUp className="ml-2 text-[#1A56DB] transition-transform duration-300" />
        ) : (
          <FaChevronDown className="ml-2 text-[#1A56DB] transition-transform duration-300" />
        )}
      </h2>
      {isOpen && (
          <div className="mt-4 overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F3F4F6] text-left text-[#111928] text-[14px] font-medium">
                  <th className="px-4 py-3 w-1/4">CSS Code</th>
                  <th className="px-4 py-3 w-1/4">Starter</th>
                  <th className="px-4 py-3 w-1/4">Company</th>
                  <th className="px-4 py-3 w-1/4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {plansComp.map((category, index) => (
                  <>
                    {category.category && (
                      <tr key={index} className="bg-[#F3F4F6] text-[#111928] text-[15px] font-semibold">
                        <td colSpan="4" className="px-4 py-3">
                          {category.category}
                        </td>
                      </tr>
                    )}
                    
                    {category.features.map((feature, idx) => (
                      <tr key={`${index}-${idx}`} className="border-y border-[#E5E7EB] hover:bg-gray-50 transition-all duration-200">
                        <td className="p-4 text-[14px] text-[#6B7280] font-normal w-1/4">
                          {feature.name}{" "}
                          {feature.link && (
                           <>
                           <span className="text-#6B7280">(</span>
                           <a href={feature.link} className="text-blue-500 hover:underline">
                             {feature.link}
                           </a>
                           <span className="text-#6B7280">)</span>
                         </>
                          )}
                        </td>
                        {feature.values.map((value, i) => (
                          <td key={i} className="p-4 ml-3 text-left w-1/4">
                          <img 
                            src={value ? "/check.svg" : "/cross.svg"} 
                            alt={value ? "Check Mark" : "Cross"} 
                            className="w-4 h-4 " 
                          />
                        </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
            <div className="flex sm:justify-end justify-center w-full mt-10 md:mb-24 mb-8">
  <div className="w-10/14">
    <div className="grid sm:grid-cols-3 md:gap-10 gap-5">
      <button className="bg-[#1A56DB] text-white py-3 px-6 rounded-lg hover:bg-[#174BBC] transition-all text-[14px] font-medium">
        Get started
      </button>
      <button className="bg-[#1A56DB] text-white py-3 px-6 rounded-lg hover:bg-[#174BBC] transition-all text-[14px] font-medium">
        Get started
      </button>
      <button className="bg-[#1A56DB] text-white py-3 px-6 rounded-lg hover:bg-[#174BBC] transition-all text-[14px] font-medium">
        Get started
      </button>
    </div>
  </div>
</div>





          </div>




          
      )}
        </div>

        
      </section>
    );
  };
  

export default Plancomparison
