import React, { Component } from 'react'
// imrc
// cc
class Counter extends Component {
    state = { 
        counter: 0
     }
     handleCounter=()=>{
        //  ss
         this.setState({ counter:this.state.counter + 1  });
     }
     handleMinus = ()=>{
         this.setState({ counter:this.state.counter -1  });
     }
     handleReset = ()=>{
        this.setState({ counter:0 });
    }
    render() { 
        return ( 
            <div>

                <h1>{this.state.counter}</h1>
                <div>
                    <button onClick={this.handleCounter}>+</button>
                    <button onClick={this.handleMinus}>-</button>
                    <button onClick={this.handleReset}>Restart</button>
                </div>

            </div>
         );
    }
}
 
export default Counter;