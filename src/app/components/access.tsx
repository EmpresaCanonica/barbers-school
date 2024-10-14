import Image from "next/image";
import check from "../../../public/icons/check.svg"

export function Access() {
    return (
        <div className='flex flex-col' id="access">
            <div className='bg-primary-yellow flex flex-col md:flex-row w-full justify-center py-8 gap-14 px-8 md:px-24'>
                <div className='flex flex-col gap-4 hover:scale-110 transition duration-300 items-center'>
                    <Image src={check} alt="" width={30} height={30}></Image>
                    <h1 className='text-white text-center font-sourceSerif font-bold text-xl md:text-2xl'>Do Iniciante ao Profissional</h1>
                    <p className='text-white text-center font-sourceSerif font-medium text-sm max-w-96'>
                        Comece do nivel básico e avance até se tornar um especialista na área!</p>
                </div>
                <div className='flex flex-col gap-4 hover:scale-110 transition duration-300 items-center'>
                    <Image src={check} alt="" width={30} height={30}></Image>
                    <h1 className='text-white text-center font-sourceSerif font-bold text-xl md:text-2xl'>70+ aulas preparatórias</h1>
                    <p className='text-white text-center font-sourceSerif font-medium text-sm max-w-96'>
                        Nosso curso conta com mais de 70 aulas didáticas preparadas para você!</p>
                </div>
                <div className='flex flex-col gap-4 hover:scale-110 transition duration-300 items-center'>
                    <Image src={check} alt="" width={30} height={30}></Image>
                    <h1 className='text-white text-center font-sourceSerif font-bold text-xl md:text-2xl'>Certificação</h1>
                    <p className='text-white text-center font-sourceSerif font-medium text-sm max-w-96'>
                        Tenha no final do curso a certificação que passou por todas as etapas do nosso curso</p>
                </div>
            </div>
        </div>
    );
}