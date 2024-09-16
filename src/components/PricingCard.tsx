import "../styles/header.css";
import "../styles/utility.css";
import "../styles/card.css";

import Button from "./Button";

interface IPricingCardProps {
    text: string;
    subtext: string;
    price: string;
}

export default function PricingCard({ text, subtext, price }: IPricingCardProps) {
    
    return (
        <div id="pricing-card">

            <div className="card-text">
                <h1>
                    {text}
                </h1>

                <p>
                    {subtext}
                </p>

                <p className="card-price">
                    {price}
                </p>
            </div>

            <p className="line"> </p>

            <span>
                <Button text="Experimente!" />
            </span>
            
        </div>
    )
}