import React,{Component} from 'react'
import './NavStyles.css'
import {NavItems} from  './NavItems';
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {AiOutlineClose as Close} from "react-icons/ai"; 
export default class Navbar extends Component {

    state = {clicked : false}

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='nav-logo'>Zoom Rentals</h1>
  
                <div className='menu-icons' onClick={this.handleClick}>
                <i>
                    {this.state.clicked?<Close/>:<FaBars/>}
                </i>
                </div>


                <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
                    {NavItems.map((item, index) => {
                        return(
                        <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i>{item.icon}</i>
                        {item.title}
                        </Link>
                        </li>
                        )
                    })}
                <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}