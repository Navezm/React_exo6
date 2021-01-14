import Article from "./Article";
import Header from "./Header";
import Footer from "./Footer";

import '../css/bootstrap.css';

let Body = () => {
    return(
        <div className="bg-dark">
            <Header />
            <Article></Article>
            <Article></Article>
            <Footer />
        </div>
    );
};

export default Body;