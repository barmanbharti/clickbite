import React from 'react'

function Footer() {
  return (
    <footer className="bg-white px-4 md:py-8 py-1 lg:px-20">
    <div className="max-w-10xl mx-auto flex flex-col md:flex-row justify-between items-start md:gap-25 ">
      
   
      <div className="md:w-1/3 md:mb-16">
        <div className="flex items-center space-x-2">
          <img src="/Logo.svg" alt="Clickbite Logo" />
        </div>
        <p className="text-[16px] text-[#6B7280] font-normal leading-[150%] mt-4">
          We are an open-source library of over <strong>400+</strong> web components and interactive elements built with the utility classes from CSS.
        </p>
        <div className="flex space-x-4 mt-4 ">
          <img src="/github.svg" alt="github" />
          <img src="/twitter.svg" alt="twitter" />
          <img src="/dribbble.svg" alt="dribbble" />
          <img src="/facebook.svg" alt="facebook" />
        </div>
      </div>
  

      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-8 md:w-2/3 mt-10 md:mt-0 ">
        
        <div>
          <h3 className="text-[14px] leading-[150%] font-semibold">COMPANY</h3>
          <ul className="mt-3 space-y-2 text-[16px] leading-[150%] font-normal text-[#6B7280]">
            <li>About</li>
            <li>Premium</li>
            <li>Blog</li>
            <li>Affiliate Program</li>
            <li>Get Coupon</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-[14px] leading-[150%] font-semibold">HELP AND SUPPORT</h3>
          <ul className="mt-3 space-y-2 text-[16px] leading-[150%] font-normal text-[#6B7280]">
            <li>Contact Us</li>
            <li>Knowledge Center</li>
            <li>Premium Support</li>
            <li>Sponsorships</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-[14px] leading-[150%] font-semibold">RESOURCES</h3>
          <ul className="mt-3 space-y-2 text-[16px] leading-[150%] font-normal text-[#6B7280]">
            <li>Third-Party Tools</li>
            <li>Illustrations</li>
            <li>Themesberg</li>
            <li>Bluehost</li>
            <li>Stock Photos</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-[14px] leading-[150%] font-semibold">LEGAL</h3>
          <ul className="mt-3 space-y-2 text-[16px] leading-[150%] font-normal text-[#6B7280]">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>EULA</li>
          </ul>
        </div>
      </div>
    </div>
  

    <div className="border-t border-[#6b728036] mt-8 md:pt-8 pt-5 pb-5 md:pb-0 text-center text-[16px] text-[#6B7280] font-normal leading-[150%]">
      © 2022 Clickbite, Inc. All rights reserved.
    </div>
  </footer>
  
  )
}

export default Footer