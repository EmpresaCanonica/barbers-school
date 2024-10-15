'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@nextui-org/button";

export function Register() {
  // Definindo o estado para cada campo
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Função para limpar os campos
  const clearFields = () => {
    setName('');
    setCpf('');
    setContact('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

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
            <form className="rounded-lg gap-4 flex flex-col justify-between">
              <input
                className="rounded-xl w-full text-gray-700 focus:outline-none focus:shadow-outline pl-4 py-2"
                id="name"
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="rounded-xl w-full text-gray-700 focus:outline-none focus:shadow-outline pl-4 py-2"
                id="cpf"
                type="text"
                placeholder="C.P.F"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />

              <input
                className="rounded-xl w-full text-gray-700 focus:outline-none focus:shadow-outline pl-4 py-2"
                id="contact"
                type="tel"
                placeholder="Contato"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />

              <input
                className="rounded-xl w-full text-gray-700 focus:outline-none focus:shadow-outline pl-4 py-2"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="rounded-xl w-full text-gray-700 focus:outline-none focus:shadow-outline pl-4 py-2"
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                className="rounded-xl w-full text-gray-700 focus:outline-none focus:shadow-outline pl-4 py-2"
                id="confirmPassword"
                type="password"
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </form>
          </div>

          <Button className='bg-primary-yellow w-[60%]' onPress={clearFields}>
            Inscrever-se
          </Button>
        </div>
      </div>
      <div className='h-full w-[50%] md:flex hidden'>
        <a>
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
  );
}
