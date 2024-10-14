"use client";
import { useState } from 'react';

type AccordionItemProps = {
  title: string;
  description: string;
  time?: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, description, time = "10h" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-detail-green/50 mt-3 rounded-tr-3xl rounded-bl-3xl font-source'>
      <button
        className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="text-lg md:text-2xl font-semibold">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-270 text-primary-black' : '-rotate-90'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`px-6 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <p className="py-4 text-primary-black">{description}</p>
        <div className='flex justify-end'>
          <p className="py-4 text-primary-black">Tempo do módulo: <span className='font-bold'>{time}</span></p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
