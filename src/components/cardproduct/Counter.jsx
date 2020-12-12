import React, { Component } from 'react'
import './Counter.scss'
import {connect} from 'react-redux'

class Counter extends Component{

    state = {
        order : 4
    }

    handleCounterChange = (newValue)=>{
        this.props.onCounterChange(newValue)
    }

    handlePlus = ()=>{
        this.setState({
            order : this.state.order + 1
        }, ()=>{
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = ()=>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, ()=>{
                this.handleCounterChange(this.state.order)
            })
        } 
    }

    render(){
        // console.log(this.props);

        return(
            <>
            <div className="box-input">
                    <button className="btn-minus btnGroup"
                        onClick={this.handleMinus}
                    >
                        -
                    </button>
                    <input type="text" className="txt-input" value={this.state.order}/>
                    <button className="btn-plus btnGroup"
                        onClick={this.handlePlus}
                    >
                        +
                    </button>
                </div>
            </>
        )
    }
}

// const mapStateToProps = (state)=>{
//     return {
//         order : state.totalOrder
//     }
// }

export default Counter