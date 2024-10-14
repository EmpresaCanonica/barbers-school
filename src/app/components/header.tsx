import Image from 'next/image';
import { Nav } from './nav';


export function Header() {
    return (
        <header className='absolute top-0 left-0 right-0 z-50 bg-primary-white/20 backdrop-blur-sm py-4 px-4 md:py-1 flex items-center justify-center'>
            {/* <div className='flex items-center justify-between md:px-7'>
                <Image
                    src= "/assets/LogoBS.svg"
                    alt="Barber's School"
                    width={140}
                    height={80}
                    className="md:hidden block md:w-[180px] md:h-[100px] items-right"
                />
            </div> */}
            <Nav/>
        </header>
    )
}