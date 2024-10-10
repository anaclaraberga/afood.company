import "../styles/header.css";
import "../styles/utility.css";
import "../styles/card.css";

import ProfileImage from "../assets/images/testimonial-user-cover-001.svg";

interface IFeedbackCardProps {
    callAtention: string;
    text: string;
    subtext: string;
    price: string;
}

export default function FeedbackCard({ callAtention, text, subtext, price }: IFeedbackCardProps) {
    
    return (
        <div id="feedback-card">

        <img src={ProfileImage} alt="Imagem perfil cliente" />
        
        <span className="testimony">
            <p>
                Certamente o mercado chinês de eletricos está bombando, só existe
                uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
            </p>
        </span>
        
        <span className="rating">

            <img src={Star} alt="ícone estrela" width={22} height={20} />
            <img src={Star} alt="ícone estrela" width={22} height={20} />
            <img src={Star} alt="ícone estrela" width={22} height={20} />
            <img src={Star} alt="ícone estrela" width={22} height={20} />
            <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                
        </span>
        
            <span className="names">
                <p className="bold">Ellon Ma</p>
                <p>CEO BING CHILLING</p>
            </span>
            
        </div>
    )
}