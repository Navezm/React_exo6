import '../css/header.css';
import '../css/body.css';
import '../css/bootstrap.css';

import { Component } from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

class Header extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row border-bottom border-success border-5">
                    <div className="col-6 text-start px-5">
                        <Navigation />
                    </div>
                    <div className="col-6 text-end px-5">
                        <SearchBar />
                    </div>
                </div>
            </div>
        );
    };
};

export default Header;