import { useContext, useEffect, useState } from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = ()=>{

  const [listOfRestaurants,setlistOfRestaurant] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant] = useState([]); 
  const [searchText,setsearchText] = useState("")

  const  {LoggedInUser , setUserName} = useContext(UserContext);

  //listofrestaurants will have the orignal data from the api everytime . When i search something the filteredrestuarant got updated and set it and rerenders the component.
  //Next time when i will filter, it will filter from listofrestaurants.

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData =async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.949756&lng=77.6997624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json)
    // console.log(listOfRestaurants);
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){ 
    return(
      <h1>Looks like you are offline.Please Check your internet connection.</h1>
    )};

    return listOfRestaurants.length === 0 ?(<Shimmer />) : (
        <div className="body">
            <div className='filter flex ml-32'>

              <div className="search m-2 px-2 py-2 rounded-lg">
                <input type="text" placeholder="Search for restaurant and food" className="search-box px-2 py-2 w-96 border rounded-lg border-solid border-black "
                 value={searchText} 
                 onChange={(e)=>{setsearchText(e.target.value)}}/>
                <button className= "px-4 py-2 rounded-md bg-green-100 m-4" onClick={()=>{
                  const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setfilteredRestaurant(filteredRestaurant);
                  console.log(filteredRestaurant)
                  setsearchText(''); 
                }}>Search </button>
              </div>

              <div className="search m-4 px-2 py-2 rounded-md hover:scale-105 ease-in-out flex items-center">
                  <button className='filter-btn px-4 py-2 rounded-lg border-black bg-green-100' 
                  onClick={()=>{
                    const filteredList = listOfRestaurants.filter
                    ((res)=>res.info.avgRating>4.3);
                    setfilteredRestaurant(filteredList);
                  }
                  }>Rating: 4.3+
                  </button>
              </div>
              
              <div className="search m-4 px-2 py-2 rounded-md flex items-center hover:scale-105 ease-in-out">
                  <button className='filter-btn px-4 py-2 rounded-lg border-black bg-green-100' 
                  onClick={()=>{
                    const filteredtimeList = listOfRestaurants.filter
                    ((res)=>res.info.sla.deliveryTime<25);
                    setfilteredRestaurant(filteredtimeList);
                  }
                  }>Fast Delivery
                  </button>
              </div>

              {/* <div className="search px-4 py-10">
                <label>Username :</label>
                  <input type="text" className="border-black border p-2" placeholder="Type here" value={LoggedInUser} 
                    onChange={(e)=>setUserName(e.target.value)}
                    />
              </div> */}

            </div>
            <div className='rest-container flex flex-wrap items-center justify-center mx-auto'>
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                      <RestaurantCard resData={restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body