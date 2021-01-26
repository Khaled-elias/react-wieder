
import React, { Component } from 'react'



class NavigationMobile extends Component {
    state = {
        isShown: false
    }
    toggleIsShown = () => {
       
        this.setState({ isShown: !this.state.isShown });
    }
    render() { 
        return ( 
            <div >
            <h1 Class="burger"  onClick={this.toggleIsShown}>X</h1>
                <nav style={{ display: this.state.isShown ? 'block' : 'none' }} >
                {/* <nav className={`menu ${this.state.isShown ? 'show' : 'none'}`}> */}
               

                <ul id="hideburger" >
                   <li><a href="/"> Home</a></li>
                   <li><a href="/contact">Contact</a></li>
                   <li><a href="/about">About</a></li>
                   <li><a href="/blog">Blog</a></li>
                   <li><a href="/counter">Counter</a></li>
               </ul>
                </nav>
            
            </div>
         );
    }
}
 
export default NavigationMobile;