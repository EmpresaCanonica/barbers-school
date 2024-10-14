import AccordionItem from './accordionItem';

const Accordion: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 mb-10">
            <AccordionItem
                title="Fundamentos da Barbearia"
                description="Conheça a história e a evolução da barbearia, entendendo seu papel cultural e econômico. 
                Esta etapa cobre os conceitos básicos, como ferramentas essenciais, postura profissional, 
                e noções de visagismo para atender diferentes tipos de clientes com excelência."
            />
            <AccordionItem
                title="Técnicas de corte e estilo"
                description="Domine as principais técnicas de corte, desde o clássico ao moderno. 
                Aprenda a executar cortes degradê, undercuts, fade, tesouras e máquinas. 
                O módulo também inclui práticas sobre finalização e aplicação de produtos para criar estilos únicos e personalizados."
            />
            <AccordionItem
                title="Barba, bigode e cuidados com o rosto"
                description="Desenvolva habilidades específicas para aparar, modelar e alinhar barbas e bigodes, 
                além de aprender sobre tratamentos faciais e cuidados com a pele. 
                Inclui técnicas de toalha quente e aplicação de produtos para proporcionar conforto e bem-estar ao cliente."
            />
            <AccordionItem
                title="Higiene, Organização e Segurança"
                description="Garanta a saúde e segurança no ambiente de trabalho com práticas corretas de higiene e esterilização de ferramentas. 
                Este módulo aborda organização do espaço, normas sanitárias, e protocolos de biossegurança para oferecer um atendimento seguro e profissional."
            />
            <AccordionItem
                title="Gestão e Marketing para barbearias"
                description="Prepare-se para o mercado com noções de empreendedorismo, administração financeira e gestão de equipe. 
                Além disso, aprenda sobre marketing digital e estratégias para atrair e fidelizar clientes, aumentando a visibilidade e o sucesso da sua barbearia."
            />
        </div>
    );
};

export default Accordion;
