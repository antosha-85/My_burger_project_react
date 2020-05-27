import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummare] componentWillUpdate')
    }
    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
            return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}</li>
        })
        return (
        <Aux>
            <h3>Your Order</h3>
            <p>A decilicous burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        )
    }
}


export default OrderSummary;