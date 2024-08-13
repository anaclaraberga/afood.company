import { BrowserRouter } from 'react-router-dom';
import ToolBar from '../components/ToolBar';

export default function Home() {
    return (
        <BrowserRouter>
            <ToolBar />
        </BrowserRouter>
    )
}