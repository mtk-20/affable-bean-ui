'use client'
import React, {useContext} from "react";
import {ShoppingCartContext} from "@/app/layout";
import Image from "next/image";
import {CartComponent} from "@/components/CartComponent";
import Link from "next/link";

export default function CartView() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        itemTotal,
        clearCart
    } = useContext(ShoppingCartContext)
    const handleRemoveFromCart = (product) => removeFromCart(product);
    const handleIncreaseItem = (product) => increaseQuantity(product);
    const handleDecreaseItem = (product) => decreaseQuantity(product);
    const handleClearCart = () => clearCart();

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-warning text-dark d-inline-flex justify-content-between">
                                <h3>Cart Items</h3>
                                <CartComponent/>
                            </div>
                            <div className="card-body bg-warning">
                                <table className="table table-striped table-dark">
                                    <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Update</th>
                                        <th>Total Price</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        cartItems && cartItems.map(product => (
                                            <tr key={product.id}>
                                                <td>
                                                    <Image src={`/images/products/${product.name}.png`} alt={product.name}
                                                           width={142} height={70}/>
                                                </td>
                                                <td className="text-capitalize">{product.name}</td>
                                                <td>$ {product.price}</td>
                                                <td>{product.quantity}</td>
                                                <td>
                                                    <button className="btn btn-success"
                                                            onClick={() => handleIncreaseItem(product)}> +
                                                    </button>
                                                    <button className="btn btn-danger ms-2"
                                                            onClick={() => handleDecreaseItem(product)}> -
                                                    </button>
                                                </td>
                                                <td>{(product.quantity * product.price)}</td>
                                                <td>
                                                    <button className="btn btn-outline-danger"
                                                            onClick={() => handleRemoveFromCart(product)}>Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                                <h3 className="text-end">Total : $ {itemTotal}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <Link href="/" className="btn btn-warning me-2">Continue Shopping</Link>
                        <Link href="/checkout" className="btn btn-warning me-2">Check Out</Link>
                        <button onClick={handleClearCart} className="btn btn-warning">Clear Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}