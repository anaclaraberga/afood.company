import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import HeroRectangleOne from "../assets/images/rectangleOne.svg";
import HeroRectangleTwo from "../assets/images/rectangleTwo.svg";

import Button from "../components/Button";
import Card from "../components/Card";
import PricingCard from '../components/PricingCard';

import "../styles/home.css";

import FoodIcon from "../assets/icons/food.svg";


export default function Home() {
    return (
        <BrowserRouter>
            <Header />

            <section id="hero">

                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>

                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                    <div className="container-content">
                        <h1>
                            Olá!
                        </h1>

                        <h1>
                            Comida de mãe direto no seu apê, é só pedir que entregamos para você!
                        </h1>

                        <p>
                            Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
                        </p>

                        <div className="flex gap-1">
                            <span>
                                <Button text="Cadastre-se" />
                            </span>
                        
                            <span className="desktop-only">
                                <Button text="Veja mais" secondary />
                            </span>
                        </div>
                    </div>
            </section>

            <section id="pricing-section">

                    <div className='pricing-text'>
                        <h2>
                            Nossos preços
                        </h2>

                        <h1>
                            que cabem no seu bolso
                        </h1>
                    </div>

                    <div className="pricing-row">
                        <PricingCard text='Frete grátis!' subtext='Peça agora!' price="25,00"/>
                    </div>
            </section>

            <section id="card-section">

                    <div className='card-primary-text'>
                        <h2>
                            Sua comida
                        </h2>

                        <h1>
                            do jeitinho que você precisa!
                        </h1>

                        <p>
                            Pensado e planejado para você.
                        </p>
                    </div>

                    <div className="card-row">
                        <Card text='Comida quentinha' subtext='Peça agora!' src={FoodIcon}/>

                        <Card text='Entrega em até 30 minutos!' subtext='Peça agora!' src={FoodIcon}/>

                        <Card text='Frete grátis!' subtext='Peça agora!' src={FoodIcon}/>
                    </div>
            </section>
        </BrowserRouter>
    )
}