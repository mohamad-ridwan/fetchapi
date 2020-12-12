import React, { Component } from 'react'
import './CardProduct.scss'
import img from '../../img/satu.jpg'
import Counter from './Counter'

class CardProduct extends Component{

        
        render(){
        return(
            <>
            <div className="wrapper-card">
                <img src={img} alt="" className="img-card"/>
                
                <p className="nameP">
                    Makaroni Original
                </p>
                <p className="priceP">
                    Rp 2.000
                </p>

                <Counter onCounterChange={(value)=> this.props.onCounterChange(value)}/>
            </div>
            </>
        )
    }
}

export default CardProduct