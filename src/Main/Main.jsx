import React, {Component} from "react";
import Header from "../Components/Header/Header";
import ToDo from "../Container/ToDo/ToDo";
import Footer from "../Components/Footer/Footer";


class Main extends Component {
    render() {
        return (
            <div className='ui container'>
                <Header title='To Do list'/>
                <ToDo/>
                <Footer/>
            </div>
        )
    }
}

export default Main;