import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";

const Businessplans = ({ plans }) => {
  return (
 <div className=" px-3   lg:px-20  ">
    
    <div className="md:text-center text-left mb-10 mt-10 md:mt-0 ">
        <h2 className="md:text-[36px] text-[30px]  leading-[125%] font-extrabold ">
        Choose the right plan for your business
        </h2>
        <p className="mt-3 text-[16px] md:text-[20px] leading-[150%] text-[#6B7280]  max-w-3xl mx-auto font-normal">
        Here at Clickbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
      </div>
       <div className="w-full  mx-auto my-10">
      <Tabs.Root defaultValue="monthly" className="w-full">
        <Tabs.List className="flex bg-gray-100 rounded-lg p-1 sm:w-80 w-full mx-auto">
          <Tabs.Trigger
            value="monthly"
            className="flex-1 text-center text-[14px] font-medium  py-2 rounded-md data-[state=active]:bg-[#111928] data-[state=active]:text-white transition-all"
          >
            Monthly
          </Tabs.Trigger>
          <Tabs.Trigger
            value="yearly"
            className="flex-1 text-center py-2 text-[14px] font-medium rounded-md data-[state=active]:bg-[#111928] data-[state=active]:text-white transition-all"
          >
            Yearly
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="monthly" className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key="monthly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 sm:grid-cols-2 gap-6"
            >
              {plans.monthly.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: plan.id * 0.1 }}
                  className="border-2 border-[#E5E7EB] rounded-lg px-8 py-8 shadow-md bg-white flex flex-col shadow-[0_4px_6px_rgba(0,0,0,0.1)] "
                >
                  <h3 className="text-[24px] leading-[150%] font-semibold text-center">{plan.title}</h3>
                  <p className="text-[18px] leading-[150%] text-center text-[#6B7280] mt-4">{plan.description}</p>
                  <p className="text-[48px] font-bold mt-4 text-center">${plan.price} <sub className="text-[18px] text-[#6B7280] font-medium">/month</sub></p>

                  <ul className="mt-4 text-[#111928] space-y-2 ">
                    {plan.features.map((feature, index) => (
                       <li key={index} className="flex items-center space-x-2 text-[16px] leading-[180%]">
                       <img src="/check.svg" alt="check" />
                       <span dangerouslySetInnerHTML={{ __html: feature.replaceAll("\n", "<br />") }}></span>
                     </li>
                    ))}
                  </ul>

                  <button className="mt-8 bg-[#1A56DB] text-white py-3 px-4 rounded-lg w-full hover:bg-[#1A56DB] transition-all text-[14px] font-medium">
                    Get started
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs.Content>

        <Tabs.Content value="yearly" className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key="yearly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 sm:grid-cols-2 gap-6"
            >
              {plans.yearly.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: plan.id * 0.1 }}
                  className="border-2 border-[#E5E7EB] rounded-lg px-8 py-8 shadow-md bg-white flex flex-col shadow-[0_4px_6px_rgba(0,0,0,0.1)] "
                >
                  <h3 className="text-[24px] leading-[150%] font-semibold text-center">{plan.title}</h3>
                  <p className="text-[18px] leading-[150%] text-center text-[#6B7280] mt-4">{plan.description}</p>
                  <p className="text-[48px] font-bold mt-4 text-center">${plan.price} <sub className="text-[18px] text-[#6B7280] font-medium">/year</sub></p>

                  <ul className="mt-4 text-[#111928] space-y-2 ">
                    {plan.features.map((feature, index) => (
                       <li key={index} className="flex items-center space-x-2 text-[16px] leading-[180%]">
                       <img src="/check.svg" alt="check" />
                       <span dangerouslySetInnerHTML={{ __html: feature.replaceAll("\n", "<br />") }}></span>
                     </li>
                    ))}
                  </ul>

                  <button className="mt-8 bg-[#1A56DB] text-white py-3 px-4 rounded-lg w-full hover:bg-[#1A56DB] transition-all text-[14px] font-medium">
                    Get started
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs.Content>
      </Tabs.Root>
    </div>
 </div>
  );
};

export default Businessplans;
