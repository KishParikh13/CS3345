import { useState, useEffect } from "react";
// import { ProductsRepository } from "../api/productRepository";
import { Link } from 'react-router-dom'
import { CartService } from "../services/cartService";

export const MyCart = props => {
    const [ cart, setCart ] = useState({});
    const cartService = new CartService();

    useEffect(() => {
        setCart(cartService.getCart());
    }, [] );

    return (
        <table className="table table-condensed table-striped">
            <thead>
                <tr>
                    <th>Qty</th>
                    <th>Product</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.items ?
                        cart.items.map((x, i) =>
                        <tr key={i}>
                            <td>
                                <Link to={ `products/${cart.items[i].product.id}` }>{ cart.items[i].quantity }</Link>
                            </td>
                            <td>{ cart.items[i].product.name }<span className="text-secondary"> - { cart.items[i].product.price }/each</span></td>
                            <td>{ cart.items[i].totalPrice }</td>
                        </tr> )
                    :
                        <>Loading cart...</>
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td className="font-weight-bold">{ cart.total }</td>
                </tr>
            </tbody>
        </table>
    )
}