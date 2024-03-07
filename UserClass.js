// It is a class based Component.
import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            userInfo:{
                name:"User",
                Location : "Earth",
                avatar_url:"https//dummy.com"
            }
        }
        // console.log("Child Constructor")
    }

    async componentDidMount(){
        // console.log("Child component did mount")
        const data = await fetch("https://api.github.com/users/Harshsharma9810");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate(){
        // console.log("Child Component did update")
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount")
     }


    render(){

        // console.log("Child Render")

        const {name,location,avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: harshsharma9810@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass
