import '../css/searchbar.css';
import '../css/body.css';
import '../css/bootstrap.css';

import { Component } from 'react';

class SearchBar extends Component{
    render(){
        return(
            <div className="d-flex align-items-center justify-content-end py-4 h-100">
                <label className="text-white me-2" htmlFor="search">Search : </label>
                <input type="text"/>
                <button className="btn btn-outline-success text-white ms-2">Go</button>
            </div>
        );
    };
};

export default SearchBar;