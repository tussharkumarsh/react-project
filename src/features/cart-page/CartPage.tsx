import { useState } from "react";
function CartPage() {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };
    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };
    return <div className="container my-5">
        <h1>Cart Page</h1>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="wh-100" alt="img" />
                        <h5 className="card-title">Product 1</h5>
                        <p className="card-text">Price: $100</p>
                        <div className="flex items-center gap-4 p-4 border rounded-lg w-fit">
                            <button onClick={decreaseQuantity}> - </button>
                            <span> {quantity} </span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
export default CartPage;
