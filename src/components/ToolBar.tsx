import { NavLink } from 'react-router-dom';
import { ReactComponent as Brand } from '../assets/icons/pront-exame.svg';

const ToolBar = () => {
    return (
        <nav className="toolBar">
            <div className="container-elements">
                <div className="container-logo">
                    <Brand></Brand>
                </div>
                <div className="nav-elements">
                    <div>
                        Dashboard
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ToolBar;