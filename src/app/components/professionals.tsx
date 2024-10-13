import React from 'react'
import Image from 'next/image'



export function Professionals() {
  return (
    <div className='w-full h-[64rem] bg-img_bg_professionals bg-cover justify-center flex items-center my-auto '>
        <div className='md:w-[58.5rem] w-full md:mx-auto mx-[2rem] md:h-[40rem] md:py-0 py-[2rem] h-full flex flex-col items-center justify-between '>
        
            <div className='text-white w-full'>
                <h1 className='text-3xl pb-[1rem] font-abril'> 
                    Nosso Time 
                </h1>
                <h3 className='text-sm pb-[2rem] font-sourceSerif'> 
                    Conheça nosso time de profissionais que irão te acompanhar nessa jornada de aprendizado.        
                </h3>
                
                <div className='flex flex-wrap justify-between w-full gap-y-4'>

                    <div className="relative group">
                        <a href='#' >
                                <Image
                                    className='rounded-xl border-4 border-white md:w-[12rem] w-[9rem] md:h-[12rem] h-[9rem] '
                                    alt='https://www.freepik.com/free-photo/front-view-male-barber-holding-scissors-barbershop_14833851.htm#fromView=search&page=1&position=39&uuid=d462b5f2-2cd5-4774-8f53-33bcb9a3e3f8'
                                    src={"/assets/barber1.jpg"}
                                    width={200}
                                    height={200}
                                />
                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img src="/assets/instagram-icon2.png" alt="https://br.freepik.com/psd-gratuitas/logotipo-da-aplicacao-instagram_206467801.htm" className="w-[3rem] h-[3rem] mb-2" />
                                    <span className="text-white text-lg">@BrunoBarber</span>
                                </div>
                        </a>
                    </div>

                    <div className="relative group">
                        <a href='#' >
                                <Image
                                    className='rounded-xl border-4 border-white md:w-[12rem] w-[9rem] md:h-[12rem] h-[9rem] '
                                    alt='https://www.freepik.com/free-photo/front-view-male-barber-holding-scissors-barbershop_14833851.htm#fromView=search&page=1&position=39&uuid=d462b5f2-2cd5-4774-8f53-33bcb9a3e3f8'
                                    src={"/assets/barber2.jpg"}
                                    width={200}
                                    height={200}
                                />
                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img src="/assets/instagram-icon2.png" alt="https://br.freepik.com/psd-gratuitas/logotipo-da-aplicacao-instagram_206467801.htm" className="w-[3rem] h-[3rem] mb-2" />
                                    <span className="text-white text-lg">@MarcosBarber</span>
                                </div>
                        </a>
                    </div>

                    <div className="relative group">
                        <a href='#' >
                                <Image
                                    className='rounded-xl border-4 border-white md:w-[12rem] w-[9rem] md:h-[12rem] h-[9rem] '
                                    alt='https://www.freepik.com/free-photo/front-view-male-barber-holding-scissors-barbershop_14833851.htm#fromView=search&page=1&position=39&uuid=d462b5f2-2cd5-4774-8f53-33bcb9a3e3f8'
                                    src={"/assets/barber3.jpg"}
                                    width={200}
                                    height={200}
                                />
                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img src="/assets/instagram-icon2.png" alt="https://br.freepik.com/psd-gratuitas/logotipo-da-aplicacao-instagram_206467801.htm" className="w-[3rem] h-[3rem] mb-2" />
                                    <span className="text-white text-lg">@PabloBarber</span>
                                </div>
                        </a>
                    </div>

                    <div className="relative group">
                        <a href='#' >
                                <Image
                                    className='rounded-xl border-4 border-white md:w-[12rem] w-[9rem] md:h-[12rem] h-[9rem] '
                                    alt='https://www.freepik.com/free-photo/front-view-male-barber-holding-scissors-barbershop_14833851.htm#fromView=search&page=1&position=39&uuid=d462b5f2-2cd5-4774-8f53-33bcb9a3e3f8'
                                    src={"/assets/barber4.jpg"}
                                    width={200}
                                    height={200}
                                />
                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img src="/assets/instagram-icon2.png" alt="https://br.freepik.com/psd-gratuitas/logotipo-da-aplicacao-instagram_206467801.htm" className="w-[3rem] h-[3rem] mb-2" />
                                    <span className="text-white text-lg">@FranciscoBarber</span>
                                </div>
                        </a>
                    </div>


                    
                
                    

                </div>
            </div>

            <div className='text-white flex flex-col my-[3rem] md:my-0 '>
                <h1 className='text-3xl text-center pb-[2rem]'> 
                    Um pouco sobre a BARBER’S SCHOOL
                </h1>
                <h3 className='text-sm text-center'> 
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"      
                </h3>
            </div>


        </div>

    </div>
  )
}