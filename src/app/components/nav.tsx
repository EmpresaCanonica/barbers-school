'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Button from './button';

export function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center'>
            <ul className='hidden md:flex items-center md:gap-14 text-primary-white text-xs lg:text-base font-normal font-abril whitespace-nowrap'>
                <li>
                    <Link href="#home" className="hover:border-b-2 border-primary-yellow">
                        INÍCIO
                    </Link>
                </li>
                <li>
                    <Link href="#team" className="hover:border-b-2 border-primary-yellow">
                        NOSSO TIME
                    </Link>
                </li>
                <li>
                    <Link href="#content" className="hover:border-b-2 border-primary-yellow">
                        CONTEÚDO
                    </Link>
                </li>
                <Image
                    src="/assets/LogoBS.svg"
                    alt="Barber's School"
                    width={140}
                    height={80}
                    className="md:w-[180px] md:h-[100px]"
                />
                <li>
                    <Link href="#graduates" className="hover:border-b-2 border-primary-yellow">
                        FEEDBACKS
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className="hover:border-b-2 border-primary-yellow">
                        CONTATO
                    </Link>
                </li>
                <li>
                    <Button
                        name='Inscreva-se já!'
                        link='#register'>
                    </Button>
                </li>
            </ul>

            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    {isMobileMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>

            <div className={`absolute top-0 right-0 w-52 h-screen px-5 py-10 bg-primary-yellow text-white ${isMobileMenuOpen ? 'visible' : 'hidden'}`}>
                <div className='flex flex-col items-center justify-center gap-7 border-b-2 border-white relative'>
                    <Image
                        src="/assets/LogoBS.svg"
                        width={140}
                        height={36}
                        alt='Barbers School'
                    />
                    <div className='flex flex-col gap-3 py-3'>

                        <a href="#team" className='p-2 flex flex-row gap-3 hover:bg-primary-white hover:text-primary-yellow hover:rounded-e-xl transition-all duration-300' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <BsFillPeopleFill className='rounded-full p-0.5 bg-primary-yellow w-25 h-25' />
                            Nosso Time
                        </a>

                        <a href="#content" className='p-2 flex flex-row gap-3 hover:bg-primary-white hover:text-primary-yellow hover:rounded-e-xl transition-all duration-300' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <MdLibraryBooks className='rounded-full p-0.5 bg-primary-yellow w-25 h-25' />
                            Conteúdo
                        </a>

                        <a href="#graduates" className='p-2 flex flex-row gap-3 hover:bg-primary-white hover:text-primary-yellow hover:rounded-e-xl transition-all duration-300' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <IoChatboxEllipses className='rounded-full p-0.5 bg-primary-yellow w-25 h-25' />
                            Feedbacks
                        </a>

                        <a href="#contact" className='p-2 flex flex-row gap-3 hover:bg-primary-white hover:text-primary-yellow hover:rounded-e-xl transition-all duration-300' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <FaPhoneSquareAlt className='rounded-full p-0.5 bg-primary-yellow w-25 h-25' />
                            Contato
                        </a>

                    </div>
                    <div className='pb-5 hover:cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <IoMdCloseCircle className='bg-white rounded-full p-0.5 text-primary-yellow' />
                    </div>
                </div>
            </div>
        </nav >
    );
}
