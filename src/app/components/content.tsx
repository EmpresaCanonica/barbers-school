import Accordion from "./accordion";

export default function Content() {
    return (
        <div className="w-full mx-auto bg-primary-white" id="content">
            <div className="flex flex-col justify-center items-center py-10 mb-10 gap-16 px-8">
                <div className="flex flex-col items-center justify-center text-left md:text-center max-w-[936px] gap-4">
                    <h1 className="text-2xl md:text-3xl font-abril font-bold">Conteúdo Programático do Curso</h1>
                    <p className="font-source text-base md:text-xl font-light">Descubra tudo o que você vai aprender no nosso curso! Da teoria à prática,
                        abordamos desde técnicas clássicas e modernas de cortes e barbas até higiene, visagismo e atendimento ao cliente.
                        Nosso conteúdo é estruturado para preparar você para o mercado, incluindo módulos sobre gestão de barbearia e tendências do setor.</p>
                </div>
                <div>
                    <Accordion></Accordion>
                </div>
            </div>
        </div>
    )
}