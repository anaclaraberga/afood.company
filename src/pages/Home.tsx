import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

export default function Home() {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}