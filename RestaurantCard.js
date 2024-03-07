import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props)=>{
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info
    // const {
    //     header,
    //     subHeader
    // } = resData?.info?.aggregatedDiscountInfoV3

    const {deliveryTime} = resData?.info?.sla
    // console.log(resData?.info?.aggregatedDiscountInfoV3?.header + resData?.info?.aggregatedDiscountInfoV3?.subHeader) 
    // style={{ fontFamily: 'Kanit', fontFamily: 'sans-serif' }}

    const {LoggedInUser} = useContext(UserContext);
    
    return (
        <div className="res-card my-2 p-4 w-[330px] rounded-2xl hover:scale-105 overflow-hidden transition-transform transform hover:shadow-xl ease-in-out ">
            <div className="relative">
                {/* <p className="font-display text-white font-mono font-[1800] text-xl px-4 pb-1 absolute inset-x-0 bottom-0 ">{header + " "+subHeader}</p> */}
                <img className='res-logo rounded-xl w-[330px] h-[240px] ' src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            </div>
            <div className="mx-2">
                <h3 className="py-2 text-2xl font-semibold">{name}</h3>
                <div className="flex items-center">
                    <span className="pr-1">{<MdStars/>}</span>
                    <h4 className="font-semibol">{avgRating}</h4>
                    <h4 className="font-semibold px-2">• {deliveryTime} mins</h4>
                </div>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                {/* <h4>{LoggedInUser}</h4> */}
            </div>
        </div>
    )
}

//WPL is a higher order compmonet. input- restuarant card , output-flat120 off

// export const withPromotedLabel = (RestaurantCard)=>{
//     return ()=>{
//         return(
//             <div>   
//                 <label>Promoted</label>
//                 <RestaurantCard/>
//             </div>
//         )
//     }
// }

export default RestaurantCard