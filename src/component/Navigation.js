import '../css/navigation.css';
import '../css/body.css';
import '../css/bootstrap.css';
import { Component } from 'react';

class Navigation extends Component{
    log = () => {
        console.log("Accueil");
    }

    survol = () => {
        console.log("Galerie");
    }

    dblClick = () => {
        console.log("Contact");
    }

    render(){
        return(
            <div className="d-flex align-items-center h-100">
                <div className="py-4">
                    <a onClick={this.log} className="text-white text-decoration-none p-1 me-2 border border-success" href="#"><span>Link 1</span></a>
                    <a onMouseOver={this.survol} className="text-white text-decoration-none p-1 me-2 border border-success" href="#"><span>Link 2</span></a>
                    <a onDoubleClick={this.dblClick} className="text-white text-decoration-none p-1 me-2 border border-success" href="#"><span>Link 3</span></a>
                </div>
            </div>
        );
    };
};

export default Navigation;