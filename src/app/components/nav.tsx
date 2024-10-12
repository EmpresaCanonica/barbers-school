'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Nav() {
    return (
        <nav className='flex justify-between items-center'>
            <ul className='hidden md:flex items-center md:gap-14 text-primary-white text-xs lg:text-base font-normal font-abril whitespace-nowrap'>
                <li>
                    <Link href="/home" className="hover:border-b">
                        INÍCIO
                    </Link>
                </li>
                <li>
                    <Link href="/aboutUs" className="hover:border-b">
                        NOSSO TIME
                    </Link>
                </li>
                <Image
                    src= "/assets/LogoBS.svg"
                    alt="Barber's School"
                    width={140}
                    height={80}
                    className="md:w-[180px] md:h-[100px]"
                />
                <li>
                    <Link href="/benefits" className="hover:border-b">
                        CONTEÚDO
                    </Link>
                </li>
                <li>
                    <Link href="/register" className="hover:border-b">
                        Inscreva-se já!
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
