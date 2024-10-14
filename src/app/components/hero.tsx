import Image from "next/image";
import HeroBS from "../../../public/assets/bg-hero.png";
import Button from "./button";

export function Hero() {
    return (
        <section className="relative" id="home">
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroBS.src})` }}
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-10 md:pt-24 pt-5">
                    <div className="flex flex-col gap-7 md:gap-14 items-start text-left w-full md:w-1/2 pt-32 pb-10 lg:pb-40">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-abril text-primary-white">
                            <span className="text-primary-yellow">Domine</span> técnicas de cortes, barbas, bigodes, degradês, e efeitos do <span className="text-primary-yellow">mercado</span>, e <span className="text-primary-yellow">lucre</span> muito na área de barbearia!
                        </h1>
                        <Button
                            name='QUERO ME MATRICULAR'
                            link='#register'
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center relative z-10 py-8">
                    <button>
                        <Image src="/icons/arrow-button.svg" alt="Conheça mais!" width={50} height={50}></Image>
                        <link href="#access" />
                    </button>
                </div>
            </div>
        </section>
    );
}
