import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    // console.log(data)
    const handleclick =()=>{
        setShowIndex();
    }
 
    return (
        <div className="">
             {/* ({length && data.itemCards.length  || data.category.length}) */}
            <div className="accodian-header  border-b-8 my-4 w-2/5 shadow-lg p-4 mx-auto border-gray-250 ">
                <div onClick={handleclick} className="flex cursor-pointer justify-between">
                    <span className="font-bold text-lg">{data.title} ({(data?.itemCards?.length === undefined) ? "0" : data?.itemCards?.length})</span>
                    <span><IoIosArrowDown /></span>
                </div>
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory