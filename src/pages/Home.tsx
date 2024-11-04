import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import HeroRectangleOne from "../assets/images/rectangleOne.svg";
import HeroRectangleTwo from "../assets/images/rectangleTwo.svg";

import Button from "../components/Button";
import Card from "../components/Card";
import PricingCard from '../components/PricingCard';
import FeedbackCard from '../components/FeedbackCard';

import "../styles/home.css";

import FoodIcon from "../assets/icons/food.svg";
import DeliverIcon from "../assets/icons/deliver.svg";
import PigIcon from "../assets/icons/pig-money.svg";


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
                            Delivery sem complicação é <span className='red-color'>afood</span>, só pedir que entregamos para você!
                        </h1>

                        <p>
                            Precisando de um delivery rápido e barato para sua empresa? Somos a solução, nossa equipe conta com os melhores <span className='red-color'>motoboys</span> da cidade.
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

                        <div className='t-1'>
                            <PricingCard callAtention='PRA COMEÇAR' text='Pacote mensal' subtext='Valor mensal' price="R$49,90"/>
                        </div>

                        <div className='t-2'>
                            <PricingCard callAtention='MELHOR PREÇO' text='Pacote anual' subtext='Valor mensal' price="R$24,90"/>
                        </div>

                        <div className='t-1'>
                            <PricingCard callAtention='O BÁSICO' text='Pacote semanal' subtext='Valor semanal' price="R$39,90"/>
                        </div>

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
                        <div className='t-1'>
                            <Card text='Pedido que chega quentinho' subtext='Na velocidade da luz!' src={DeliverIcon}/>
                        </div>

                        <div className='t-2'>
                            <Card text='Entrega em até 30 minutos!' subtext='Garanta satisfação!' src={FoodIcon}/>
                        </div>

                        <div className='t-1'>
                            <Card text='Barato, ágil e econômico!' subtext='O melhor para seu bolso!' src={PigIcon}/>
                        </div>
                    </div>
            </section>

            <section id="feedback-section">

                    <div className='feedback-text'>
                        <h3>
                            Nossos preços
                        </h3>

                        <h1>
                            Cada cliente importa
                        </h1>

                        <p>
                            Com um preço que cabe no seu bolso, melhore seu atendimento delivery com a afood.
                        </p>
                    </div>

                    <div className="feedback-row">

                        <div>
                            <FeedbackCard callAtention='Manuel Gomes' text='Pacote mensal' subtext='Valor mensal'/>
                        </div>

                        <div>
                            <FeedbackCard callAtention='Guilherme Ricardo' text='Pacote mensal' subtext='Valor mensal'/>
                        </div>

                        <div>
                            <FeedbackCard callAtention='PRA COMEÇAR' text='Pacote mensal' subtext='Valor mensal'/>
                        </div>

                    </div>
            </section>
        </BrowserRouter>
    )
}