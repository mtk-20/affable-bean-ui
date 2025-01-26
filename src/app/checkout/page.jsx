'use client'
import {useContext} from "react";
import {ShoppingCartContext} from "/src/app/layout";

export default function CheckoutPage() {
    const {cartItems, itemTotal} = useContext(ShoppingCartContext)

    async function HandleForm(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const customerInfo = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
        }
        const requestInfo = {
            customer: customerInfo,
            purchaseItems: cartItems
        }
        console.log('Customer Information *** ', requestInfo);
    }

    return (
        <>
            <div className="container">

                <div className="row p-3">
                    <div className="col">
                        <h3 className="fw-bolder lead">CHECKOUT</h3>
                        <p>In order to purchase items in your shopping cart, pleas provide us the following
                            information </p>
                        <form onSubmit={HandleForm}>
                            <div>
                                <label className="form-label mt-2">Name</label>
                                <input type="text" name="name" className="form-control"/>
                            </div>
                            <div>
                                <label className="form-label mt-2">Email</label>
                                <input type="text" name="email" className="form-control"/>
                            </div>
                            <div>
                                <label className="form-label mt-2">Phone</label>
                                <input type="text" name="phone" className="form-control"/>
                            </div>
                            <div>
                                <label className="form-label mt-2">Address</label>
                                <input type="text" name="address" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </form>
                    </div>
                    <div className="col mt-4">
                        <ul>
                            <li>Next day delivery is guaranteed.</li>
                            <li>$3 delivery charge is applied to all purchase orders.</li>
                            <table className="table rounded-3 table-borderless table-info p-3 mt-5">
                                <tbody>
                                <tr>
                                    <td className="text-end">Subtotal</td>
                                    <td className="text-end">${itemTotal}</td>
                                </tr>
                                <tr>
                                    <td className="text-end">Delivery Charges</td>
                                    <td className="text-end">$3</td>
                                </tr>
                                <tr>
                                    <td className="text-end">Total</td>
                                    <td className="text-end">${itemTotal + 3}</td>
                                </tr>
                                </tbody>
                            </table>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}