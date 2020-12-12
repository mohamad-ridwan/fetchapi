import React, { Component } from 'react'
import CardProduct from '../../cardproduct/CardProduct'
import './Product.scss'

class Product extends Component{

    state = {
        order : 4
    }

    handleCounterChange = (newValue)=>{
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <>
            <div className="wrapper-product">
                <div className="nav-product">
                    <h1 className="brand">
                        Ebi Store
                    </h1>

                    <i className="fas fa-shopping-cart"></i>

                    <p className="indikator-total">
                        {this.state.order}
                    </p>
                </div>

                <CardProduct
                    onCounterChange={(value)=> this.handleCounterChange(value)}
                />
            </div>
            </>
        )
    }
}

export default Product