import { NavLink } from 'react-router-dom';
import { ReactComponent as Brand } from '../assets/icons/pront-exame.svg';

const ToolBar = () => {
    return (
        <nav className="toolBar">
            <div className="container-elements">
                <div className="container-logo">
                    <Brand></Brand>
                </div>
                <div> | </div>
                <div> Dashboard </div>
            </div>
        </nav>
    )
}

export default ToolBar;