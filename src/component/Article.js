import { Component } from 'react';
import '../css/article.css';
import '../css/body.css';
import '../css/bootstrap.css';
import tartine from '../img/pain.jpg';

class Article extends Component{
    render(){
        return(
            <div className="py-5 container">
                <div className="row">
                    <div className="col-6">
                        <img className="w-50" src={tartine} alt=""/>
                    </div>
                    <div className="col-6">
                        <h1 className="text-success">Mon Premier article</h1>
                        <p className="text-white text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facere eveniet veritatis, consectetur saepe alias aliquid ut, nisi obcaecati ipsa tempora mollitia, cumque odio repudiandae repellat temporibus? Doloribus laborum labore quia, architecto voluptatibus hic amet, a similique sunt suscipit fugiat animi voluptatem maxime dignissimos possimus nam porro natus earum veniam, nostrum obcaecati ipsa cumque. Eveniet, dolores! Voluptas sed velit sequi esse commodi, iusto necessitatibus ipsum sapiente numquam officia eos quod quidem adipisci neque incidunt veritatis animi reiciendis pariatur labore consectetur quasi expedita. Ullam est animi cupiditate omnis aliquam itaque ab ad voluptates, reiciendis vitae harum vero error et! Animi, delectus, rem dolores</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default Article;