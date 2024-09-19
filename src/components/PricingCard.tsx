import "../styles/header.css";
import "../styles/utility.css";
import "../styles/card.css";

import Button from "./Button";

interface IPricingCardProps {
    callAtention: string;
    text: string;
    subtext: string;
    price: string;
}

export default function PricingCard({ callAtention, text, subtext, price }: IPricingCardProps) {
    
    return (
        <div id="pricing-card">

            <div className="top-content">
                {callAtention}
            </div>

            <div className="pricing-content">

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

                <div className="card-text">

                    <p>
                        - Reembolso garantido.
                    </p>

                    <p>
                        - Reembolso garantido.
                    </p>

                    <p>
                        - Reembolso garantido.
                    </p>
                </div>

                <span>
                    <Button text="Experimente!" />
                </span>

            </div>
            
        </div>
    )
}