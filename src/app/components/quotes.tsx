import { Avatar} from "@nextui-org/avatar";
import { RiDoubleQuotesR } from "react-icons/ri";

type QuoteProps = {
    name: string;
    description?: string;
    src: string;
    feedback: string;
}

export const Quotes: React.FC<QuoteProps> = ({ name, description = "Barbeiro", src, feedback }) => {
    return (
        <div className="bg-primary-white p-8 rounded-xl shadow-md max-w-96 flex flex-col gap-7 font-source text-primary-black  hover:scale-110 transition duration-300">
                <div className="flex justify-end">
                    <RiDoubleQuotesR className="w-20 h-20 text-primary-yellow"/>
                </div>
                <p>{feedback}</p>
            <div className="flex flex-row gap-6 items-center">
                <Avatar src={src} className="w-20 h-20"/>
                <div className="flex flex-col">
                    <p className="text-xl md:text-2xl font-semibold justify-start">{name}</p>
                    <p className="text-sm md:text-base font-light justify-start text-justify">{description}</p>
                </div>
            </div>
        </div>

    )
}