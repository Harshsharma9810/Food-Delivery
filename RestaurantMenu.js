//Displaying the data 
import React, { useState } from 'react'
import Shimmer from "./Shimmer"
import { IoMdStar,IoMdTime} from "react-icons/io";
import { BsCurrencyRupee } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId)

    const[showIndex,setShowIndex] = useState(0);

    if(resInfo===null) <Shimmer/> ; 

    const {
        name , 
        cuisines , 
        costForTwoMessage,
        areaName,
        avgRating,
        totalRatingsString
    } = resInfo?.cards?.[0]?.card?.card?.info || {};

    const {lastMileTravelString,deliveryTime} = resInfo?.cards?.[0]?.card?.card?.info?.sla || {};
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || c.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory')
    
    // console.log(categories)
    
    
  return (
    <div className='menu items-center justify-center'>
        <div className='info1 flex w-2/5 h-44 mx-auto justify-between px-6 py-10 border-dashed border-b-2 border-gray-200'>
            <div className='info1-left'>
                <h2 className='font-semibold text-2xl '>{name}</h2>
                <p>{cuisines && cuisines.length > 0 ? cuisines.join(", ") : ""}</p>
                <p>{areaName}, {lastMileTravelString}</p>
            </div>
            <div className='info1-right cursor-pointer h-24 rounded-xl border-gray-200 border-2 border-solid overflow-hidden transition-transform transform hover:shadow-xl'>
                <div className='icons flex h-1/2 items-center justify-center border-solid border-b-2 border-gray-100'>
                    <IoMdStar className=''/>
                    <p className='rating font-bold text-lg text-green-700'>{avgRating}</p>
                </div >
                <p className='no-rating text-base my-2 p-2 '>{totalRatingsString}</p>
            </div>
        </div>

        {/* <div className='line h-1 bg-black'></div> */}

        <div className='info2  w-2/5 h-44 justify-around mx-auto border-solid border-b-2 border-gray-200'>
            <div className='upper flex px-6 p-4 text-lg font-semibold items-center'>
                <span><IoMdTime/></span>
                <span className='time mr-2'>{deliveryTime} mins</span>
                <span className='cost'>{costForTwoMessage}</span>
                
            </div>
            <div className="lower py-2 px-6">
                <span className='offer p-2 border-2 border-solid text-lg font-bold border-gray-200 rounded-xl'>{resInfo?.cards?.[0]?.card?.card?.info?.aggregatedDiscountInfoV2?.descriptionList?.[0]?.meta}</span>
            </div>
            <div className='m-2 mx-5 flex items-center'>
                <input type="checkbox" name="" id="" />
                <span className='realtive mx-2 my-2'>Veg only</span>       
            </div>
        </div>
        
        {/* <h2>Menu</h2>
        <ul>
            {itemCards && itemCards.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} -{" Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
        </ul> */}
            {categories && categories.map((category,index)=>
                <RestaurantCategory 
                key={category?.card?.card?.title} data={category?.card?.card}
                showItems={index===showIndex ? true:false}
                setShowIndex = {()=>setShowIndex(index)}
                />)}
    </div>
  )
}

export default RestaurantMenu;







