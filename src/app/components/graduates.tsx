import { Quotes } from "./quotes";
import Julian from "../../../public/assets/feedbacks-profiles/julian.jpg"
import Marcio from "../../../public/assets/feedbacks-profiles/Marcio.jpg"
import Reginaldo from "../../../public/assets/feedbacks-profiles/reginaldo.jpg";

export function Graduates() {
    return (
        <div className="flex flex-col justify-center items-center w-full max-w-[1280px] mx-auto my-10 gap-24 px-8" id="graduates">
            <div className="flex flex-col items-center justify-center text-left md:text-center max-w-[936px] gap-4">
                <h1 className="text-2xl md:text-3xl font-abril font-bold">Feedbacks: Alunos de Sucesso!</h1>
                <p className="font-source text-base md:text-xl font-light">Confira o que nossos alunos dizem sobre sua experiência!
                    Aqui, você encontra depoimentos sinceros de quem já passou pelo nosso curso de barbeiro e agora está preparado para transformar seu futuro.
                    Acreditamos que cada opinião nos ajuda a melhorar continuamente e garantir uma formação completa e de qualidade.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <Quotes
                    name="Márcio Portela"
                    src={Marcio.src}
                    feedback="O curso superou minhas expectativas! As aulas práticas me deram muita confiança para atender clientes de verdade. Os instrutores foram pacientes e compartilharam várias técnicas modernas e tradicionais. Agora estou pronto para abrir meu próprio negócio!"
                ></Quotes>
                <Quotes
                    name="Reginaldo Silva"
                    src={Reginaldo.src}
                    feedback="Adorei a estrutura do curso. Tínhamos todos os materiais e ferramentas à disposição para aprender da melhor forma possível. Além disso, o ambiente era super acolhedor, o que fez toda a diferença na minha experiência de aprendizado."
                ></Quotes>
                <Quotes
                    name="Julian Porceil"
                    src={Julian.src}
                    feedback="O curso foi muito bom e aprendi bastante, principalmente sobre cortes degradê e alinhamento de barba. No entanto, acho que poderia ter mais módulos voltados para administração e marketing, o que é essencial para quem quer abrir uma barbearia."
                ></Quotes>
            </div>
        </div>
    );
}