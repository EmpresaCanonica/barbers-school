import Image from "next/image";

export function Footer() {
    return (
        <div className="w-full md:h-[20rem] h-full bg-primary-black flex justify-center items-center px-[2rem]">
            <div className="w-[76rem] md:flex-row flex-col flex justify-between items-center md:h-[11rem] h-full py-[4rem] md:py-0 mx-auto my-auto gap-y-[4rem]">
                <div>
                    <a href='#' >
                        <Image
                            className=' h-full'
                            alt='https://www.freepik.com/free-photo/front-view-male-barber-holding-scissors-barbershop_14833851.htm#fromView=search&page=1&position=39&uuid=d462b5f2-2cd5-4774-8f53-33bcb9a3e3f8'
                            src={"/assets/logoBS-footer.svg"}
                            width={180}
                            height={180}
                        />
                    </a>
                </div>

                <div className="text-white flex flex-col justify-between h-full font-sourceSerif text-center md:text-left">
                    
                        <ul className="font-bold text-lg">Entre em Contato</ul>
                        <ul>(88) 9.999-9999</ul>
                        <ul>barbeariaschool@gmail.com</ul>
                        <ul>@barberSchool</ul>
                    
                </div>
                
                <div className="text-white flex flex-col justify-between h-full font-sourceSerif text-center md:text-left">
                        
                        <ul className="font-bold text-lg">Sessões</ul>
                        <a href="#" className="hover:underline underline-offset-4 "><ul>Início</ul></a>
                        <a href="#" className="hover:underline underline-offset-4 "><ul>Feedback</ul></a>
                        <a href="#" className="hover:underline underline-offset-4 "><ul>Nosso Time</ul></a>
                        <a href="#" className="hover:underline underline-offset-4 "><ul>Conteudo Programático</ul></a>
                        <a href="#" className="hover:underline underline-offset-4 "><ul>Inscreva-se</ul></a>
                        
                    
                </div>
                

            </div>
        </div>
    );
}