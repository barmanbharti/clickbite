import {React , useState} from 'react'
import { featuresData } from './data/data';
import Testimonials from './Testimonials';
import Businessplans from './Businessplans';
import Plancomparison from './Plancomparison';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';

function Home() {
   const [data, setData] = useState(featuresData);
  const { staticFeatures: descriptions, dynamicFeatures: features, cardsData, testimonials, pricingPlans, pricingData, faqs } = data;

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  
  const popUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <>
    {/* Section-1-start */}
    <motion.section className="mt-8 md:px-5 px-3 lg:px-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
    <div className="">
    <div className="flex justify-center md:justify-start">
    <div className="bg-[#F3F4F6] text-[#6B7280] font-semibold px-3 py-[0.2rem] rounded-full text-sm  w-[400px] sm:w-[350px] flex justify-between items-center">
        <p className='bg-[#1A56DB] px-3 py-[0.2rem] t rounded-xl text-white font-normal text-[12px]'>New</p> 
        <p className=' sm:text-[14px] text-[12px] font-medium'>Clickbite v2 is out! See what's new </p>
        <img src="/Vector.svg" alt="" className='w-[0.4rem] py-2'/>
      </div>
      </div>
      <h1 className="text-[36px] font-extrabold md:text-[60px] leading-[36px] md:leading-[60px] text-black mt-4 text-center md:text-left ">
        We invest in the world's potential
      </h1>
      <p className="text-[#6B7280] text-[16px] font-normal md:text-[20px] leading-[150%]  mt-4 text-center md:text-left ">
        Here at Clickbite, we focus on markets where technology, innovation, and capital can unlock long-term value.
      </p>
     <div className="flex justify-center md:justify-start">
    <div className="relative w-full sm:w-3/5  mt-7 ">
  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
  <img src="/user.svg" alt="" />
  </span>
  <input 
    type="email" 
    placeholder="Enter your email here" 
    className="border-2 border-[#D1D5DB] focus:outline-none text-[16px] rounded-lg px-12 py-3 w-full bg-[#F9FAFB] placeholder-[#6B7280]-400"
  />
</div>
     </div>
    </div>

    <div className="flex justify-end items-center ">
    <img src="/mockup.webp" alt="Mockup" loading="lazy" className="w-full md-w-full lg:w-1/1.5" />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
  {descriptions.map((feature, index) => (
    <div key={index}>
      <div className="flex items-center space-x-2">
        <img 
          src={feature.icon} 
          alt={feature.title} 
          className="w-6 h-6 object-contain"
        />
        <span className="font-bold text-[20px] leading-[125%] ">{feature.title}</span>
      </div>
      <p className="text-[#6B7280] font-normal text-[16px] leading-[150%] ml-7 mt-2">
        {feature.description}
      </p>
    </div>
  ))}
</div>
   </motion.section>
  {/* Section-1-end */}


    {/* Section-2-start */}
    <motion.section className=" md:mt-32 mt-10  px-5 lg:px-20 md:mb-16 mb-8 "  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
<div className="">
<div className="w-full md:max-w-3xl">
  <h2 className="text-[30px] md:text-[36px] leading-[125%] font-extrabold">
    Designed for business teams like yours
  </h2>
  <p className="text-[#6B7280] text-[16px] md:text-[20px] leading-[150%] font-normal  mt-4">
    Here we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
  </p>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:mt-16 mt-12">
        {features.map((feature, index) => (
          <div key={index}>
            <div className=" items-center space-x-3">
              <img src={feature.icon} alt={feature.title} className="w-15 h-15" />
              <h3 className="font-bold text-xl md:text-1xl mt-6">{feature.title}</h3>
            </div>

            <ul className="mt-3 space-y-2 ">
  {feature.points?.map((point, i) => (
    <li
      key={i}
      className="flex items-center space-x-3 text-[#6B7280] text-[16px]    font-medium leading-[200%]"
    >
       <img src={feature.bulletIcon} alt="Bullet" className="w-4.5 h-4.5" />
      <span>{point}</span>
    </li>
  ))}
</ul>

          </div>
        ))}
      </div>
    </div>
   </motion.section >
   {/* Section-2-end */}


    {/* section-3-start */}
    <motion.section className=" md:py-24 py-5 bg-[#F9FAFB] px-3  lg:px-20 border-1 border-[#F3F4F6]" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popUp}>

      <div className="md:text-center text-left mb-10 ">
        <h2 className="md:text-[36px] text-[30px]  leading-[125%] font-extrabold ">
          What you can do with Clickbite
        </h2>
        <p className="mt-3 text-[16px] md:text-[20px] leading-[150%] text-[#6B7280]  max-w-3xl mx-auto font-normal">
          Here at Clickbite, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:mt-20 mt-3 ">
        {cardsData.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] border-1 border-[#F3F4F6]">
            <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4" />
            <h3 className="text-[18px]  font-semibold text-black">{feature.title}</h3>
            <p className="text-[#6B7280] text-[16px] font-normal leading-[170%] py-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
    {/* section-3-end */}


 {/* section-4-start */}
 <motion.section  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
  <Testimonials testimonials={testimonials} />
  </motion.section>
    {/* section-4-end */}

    {/* section-5-start */}
    <motion.section  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
    <Businessplans plans={pricingPlans} />
    </motion.section>
    {/* section-5-end */}

    {/* section-6-start */}
    <Plancomparison plansComp={pricingData} />
    {/* section-6-end */}
    
 {/* section-7-start */}
    <section className="mt-10  mb-10 md:mb-24" >
    <div className="w-full md:max-w-3xl mx-auto">
      <h2 className="md:text-[36px] text-[30px]  leading-[125%] font-extrabold text-center mb-8 md:mb-16">
      Frequently Asked Questions
        </h2>
        <div className="space-y-4">
        {faqs.map((faq, index) => (
  <Disclosure key={index} defaultOpen={index === 0}>
    {({ open }) => (
      <div className="border-b border-[#E5E7EB]">
        <DisclosureButton className="flex justify-between w-full px-4 py-3 text-left focus:outline-none">
          <div className="flex items-center gap-3">
            <img src="/question-mark.svg" alt="icon" className="w-5 h-5" />
            <span className={`text-[16px] md:text-[18px] font-medium transition-colors duration-200 ${open ? "text-[#111928]" : "text-[#6B7280]"}`}>
              {faq.question}
            </span>
          </div>
          <ChevronUpIcon
            className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </DisclosureButton>

        <DisclosurePanel className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
  <p
    className="px-4 pb-3 text-[16px] leading-[160%] text-[#6B7280] font-normal"
    dangerouslySetInnerHTML={{ __html: faq.answer.replaceAll("\n", "<br />") }}
  />
</DisclosurePanel>  
      </div>
    )}
  </Disclosure>
          ))}

      </div>
      </div>
    </section>
     {/* section-7-start */}

 {/* section-8-start */}
     <section className="mb-16" > 
     <div className="flex flex-col items-center justify-center w-full md:py-16 py-8 px-4 bg-gray-50">
      <h2 className="text-[30px] md:text-[36px] font-extrabold text-black text-center leading-[125%]">
        Get started with Clickbite today
      </h2>
      <p className=" text-18px md:text-[20px] text-[#6B7280] text-center mt-3 max-w-3xl leading-[150%] font-normal">
        Connecting with your audience has never been easier with Clickbite straightforward email marketing and automation tools.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-md sm:max-w-lg mt-10 ">
        <div className="relative flex-grow">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-[#D1D5DB] focus:outline-none text-[16px] rounded-lg px-12 py-3 w-full bg-[#ffffff] placeholder-[#6B7280]-400 "
          />
          <span className="absolute left-3 top-3 text-gray-500">
        <img src="/envelope.svg" alt="envelop" className="py-1 px-1"/>
          </span>
        </div>
        <button className="bg-[#1A56DB] text-white text-[16px] px-5 py-3 rounded-lg font-medium  transition">
          Try for 30 days
        </button>
      </div>

      <p className="text-gray-500 text-sm mt-2 text-left sm:mr-60 ">
        Instant signup. No credit card required.
      </p>
    </div>
     </section>
 {/* section-8-end */}
    </>



  )
}

export default Home