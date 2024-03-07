import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = ({items})=>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch()

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return(
        <div className="flex justify-between text-cente m-5 p-5">
            <div className="w-5/12 mr-24">
                <h1 className="font-bold text-2xl mb-8">Cart</h1>
                <div className="">
                    <button className="bg-black text-white m-2 p-2 text-xl rounded-xl hover:scale-105 ease-in-out duration-75" 
                        onClick={handleClearCart}
                        >Clear Cart</button>
                    <div>
                        {cartItems.length===0 && (<h1>Cart is empty. Add Items to your cart!</h1>)}
                        <ItemList items={cartItems}/>
                        </div>
                </div>
            </div>

            {/* <div className="">
            {items && items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 mr-4 border-b-2 relative border-gray-300">
                    <div className="flex justify-between">
                        <div className="w-9/12 mx-2">
                            <p className="font-bold text-base">{item.card.info.name}</p>
                            <p className="text-base"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                            </div>
                            </div>            
                            </div>))}            
                            </div>             */}
                            
                <div className="w-4/12 h-[100px] rounded-lg bg-yellow-400 shadow-lg ">
                <h2 className="text-bold text-xl">Bill:</h2>
                <div className="">
                    <div className="flex justify-between">
                        <span className=""></span>
                        <span>Price</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Name of the item</span>
                        <span>Price</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Name of the item</span>
                        <span>Price</span>
                    </div>

                    <h1 className="h-1 bg-gray-100 mt-4 mb-4"></h1>

                    <div className="flex text-bold justify-between">
                        <span>Total Amount:</span>
                        <span>400RS</span>
                    </div>
                    <div className="mt-4 flex justify-around ">
                        <div className="items-center">
                            <input className="mr-2" type="radio" name="cash on delivery" id="cod" />
                            <label htmlFor="cod">Cash on Delivery</label>
                        </div>
                        
                        <img className="h-16 hover:shadow-lg shadow-black hover:scale-105 ease-in-out cursor-pointer rounded-lg" src="data:image/png;base64,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" alt="Gpay" />
                        <img className="h-16 hover:shadow-lg bg-white shadow-black hover:scale-105 ease-in-out cursor-pointer rounded-lg " src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png" alt="Gpay" />
                        <img className="h-16 hover:shadow-lg shadow-black hover:scale-105 ease-in-out cursor-pointer rounded-lg " src="https://pbs.twimg.com/media/DSAO_LcXUAAP6jL.jpg" alt="Gpay" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;