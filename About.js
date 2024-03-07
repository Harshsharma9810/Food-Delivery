import React from "react";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent Constructor")
    }

    componentDidMount(){
        // console.log("Parent component did mount")
    }

    render(){
        // console.log("Parent Render")
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>I am harsh sharma learning react </h2>
                {/* "build": "postcss index.css -o dist/index.css" */}

                <UserClass name = {"First"} Location={"Delhi(class)"}/>
            </div>
        )};
}
    
export default About




