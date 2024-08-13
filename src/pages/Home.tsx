import { BrowserRouter } from 'react-router-dom';
import ToolBar from '../components/ToolBar';

export default function Home() {
    return (
        <BrowserRouter>
            <ToolBar />
            <div>
                Hello, wie geth's?
            </div>
        </BrowserRouter>
    )
}