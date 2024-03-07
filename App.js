import React, { lazy,Suspense, useEffect, useState } from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body';
import About from './components/About';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const Grocery = lazy(()=>import('./components/Grocery'));

const AppLayout = ()=>{
    const[UserName,setUserName]= useState();

    useEffect(()=>{
        const data = {
            name:"Harsh",
        };
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{LoggedInUser:UserName , setUserName}}>
                <div className='app'>
                    <Header />
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            },
        ],
        errorElement:<Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router = {appRouter} />)

