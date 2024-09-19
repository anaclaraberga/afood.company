import "../styles/header.css";
import "../styles/utility.css";
import "../styles/card.css";

import Button from "./Button";

interface ICardProps {
    src: string;
    text: string;
    subtext: string;
}

export default function Card({ src, text, subtext }: ICardProps) {
    
    return (
        <div className="card">

            <div className="card-text">
                <img className="card-icon" src={src} alt="card icon"></img>

                <h2>
                    {text}
                </h2>

                <div>
                    {subtext}
                </div>
            </div>

            <span>
                <Button text="Cadastre-se" />
            </span>
            
        </div>
    )
}