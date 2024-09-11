import "../styles/header.css";
import "../styles/utility.css";
import "../styles/card.css";

interface ICardProps {
    src: string;
    text: string;
    subtext: string;
}

export default function Card({ src, text, subtext }: ICardProps) {
    
    return (
        <section className="card">
            <img src={src}></img>

            <h1>
                {text}
            </h1>

            <div>
                {subtext}
            </div>
        </section>
    )
}