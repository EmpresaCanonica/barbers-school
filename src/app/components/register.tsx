'use client'; 

import React from 'react'
import Image from 'next/image'
import {Button} from "@nextui-org/button";

export function Register() {
  return (
    <div className='w-full mx-h-[56rem] bg-img_bg_register bg-center flex justify-center items-center my-auto mx-auto bg-repeat' id='register'>
        <div className='h-full max-w-[40rem] md:w-[50%] w-full md:px-0 px-[2rem] flex flex-col justify-center items-center mx-auto'>
            <div className='w-full h-[38rem] px-[1.5rem] flex flex-col justify-between items-center my-auto mx-auto md:py-0 py-[3rem]'>
                <div className='w-full md:text-left text-center'>
                    <h1 className='text-3xl pb-[1rem] text-white font-abril'> 
                        Nosso Time 
                    </h1>
                    <h3 className='text-sm pb-[2rem] text-white font-sourceSerif'> 
                        Conheça nosso time de profissionais que irão te acompanhar nessa jornada de aprendizado.        
                    </h3>
                </div>

                <div className='w-full h-fit '>
                    <form className=" rounded-lg  gap-4 flex flex-col justify-between ">

                        <input
                        className="rounded-xl w-full text-gray-700  focus:outline-none focus:shadow-outline pl-4 py-2"
                        id="name"
                        type="text"
                        placeholder="Nome Completo"
                        />

                        <input
                        className="rounded-xl w-full text-gray-700  focus:outline-none focus:shadow-outline pl-4 py-2"
                        id="name"
                        type="text"
                        placeholder="C.P.F"
                        />

                        <input
                        className="rounded-xl w-full text-gray-700  focus:outline-none focus:shadow-outline pl-4 py-2"
                        id="name"
                        type="tel"
                        placeholder="Contato"
                        />

                        <input
                        className="rounded-xl w-full text-gray-700  focus:outline-none focus:shadow-outline pl-4 py-2"
                        id="name"
                        type="email"
                        placeholder="Email"
                        />
                        
                        <input
                        className="rounded-xl w-full text-gray-700  focus:outline-none focus:shadow-outline pl-4 py-2"
                        id="name"
                        type="password"
                        placeholder="Senha"
                        />

                        <input
                        className="rounded-xl w-full text-gray-700  focus:outline-none focus:shadow-outline pl-4 py-2"
                        id="name"
                        type="password"
                        placeholder="Confirme a senha"
                        />

                    </form>
                </div>
                <Button className='bg-primary-yellow w-[60%]'>
                    Inscrever-se
                </Button>
                
            </div>
        </div>
        <div className='h-full w-[50%]  md:flex hidden  '>
            <a href='#' >
                    <Image
                        className='h-full w-full max-w-[50rem]'
                        alt='https://www.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_7377929.htm#fromView=search&page=1&position=2&uuid=92654744-56b6-494c-977f-cbad3658c8d3'
                        src={"/assets/register_img.jpg"}
                        width={2000}
                        height={2000}
                    />
            </a>
        </div>
    </div>
  )
}
