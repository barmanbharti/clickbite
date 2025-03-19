import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Testimonials = ({ testimonials }) => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);
  
    const showMore = () => {
      setVisibleCount(testimonials.length);
    };
  return (
 
    <div className="flex flex-col md:flex-row gap-10 md:gap-20  px-4 md:py-26 py-5 lg:px-20">
      <div className="w-full md:w-1/3 space-y-4">
      <AnimatePresence>
  {testimonials.slice(0, visibleCount).map((testimonial) => (
    <motion.div
      key={testimonial.id}
      onClick={() => setSelectedTestimonial(testimonial)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-lg cursor-pointer mb-5 transition-all flex flex-col gap-2  ${
        selectedTestimonial.id === testimonial.id
          ? "bg-[#F9FAFB] "
          : "bg-white hover:bg-[#F9FAFB] hover:scale-105"
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-7 h-7 rounded-full"
        />
        <h3 className="font-semibold text-[18px] text-black">{testimonial.name}</h3>
      </div>

      <p className="text-[14px] font-normal text-[#6B7280]">{testimonial.role}</p>
    </motion.div>
  ))}
</AnimatePresence>

        {visibleCount < testimonials.length && (
          <button
            onClick={showMore}
            className="mt-3 text-blue-600 font-medium flex items-center text-[14px]"
          >
            View other {testimonials.length - visibleCount} testimonials <span className="ml-3"><img src="/arrow-right-outline.svg" alt="" /></span>
          </button>
        )}
      </div>
      <div className="w-full md:w-2/3">
        <motion.div
          key={selectedTestimonial.id} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className=""
        >
          <img src="/comment.svg" alt="" />
          <p className="mt-3 text-[24px] font-semibold">{selectedTestimonial.title}</p>
          <article
  className="mt-3 text-[18px] leading-[163%] text-[#6B7280] text-lg font-normal"
  dangerouslySetInnerHTML={{ 
    __html: selectedTestimonial.feedback.replace(/\n/g, "<br />") 
  }}
></article>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
