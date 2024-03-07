import { useDispatch } from "react-redux";
import {CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({items}) => {
    // console.log(items)
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const dispatch = useDispatch() 

    const handleAddItem = (item)=>{
        dispatch(addItem(item))

        setSelectedItem(item);
        setPopupVisible(true);
    
        setTimeout(() => {
        setPopupVisible(false);
        setSelectedItem(null);
      }, 1500);
    }

    return(
        <div className="">
            {items && items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 mr-4 border-b-2 relative border-gray-300">
                    <div className="flex justify-between">
                        <div className="w-9/12 mx-2">
                            <p className="font-bold text-base">{item.card.info.name}</p>
                            <p className="text-base"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                            <p className="pt-2 text-sm">{item.card.info.description}</p>
                        </div>

                        <div className="w-3/12 relative">
                            <button className="absolute border-solid border-2 hover:shadow-lg rounded-lg font-bold bottom-2 right-2 transform -translate-x-1/2 bg-white text-green-400 px-4 py-2"
                            onClick={()=>handleAddItem(item)}    
                                >Add</button>
                            <img className=" border-solid border-2 border-gray-50 h-max w-max" src={CDN_URL + item.card.info.imageId} />
                        </div>
                    </div>

                     {isPopupVisible && selectedItem === item && (
                        <div className="popup bg-pink-400">
                            <div className="px-2 mx-auto text-sm text-center bg-green-400 text-white border-black rounded-md">Item added to the cart!</div>
                        </div>
                        )}
                </div>
            ))}    
        </div>
    )
}

export default ItemList

