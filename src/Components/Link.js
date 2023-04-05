import react from "react";
import reactDom from "react-dom";

// function component in class
function Link2(){
    return <a href="#">Link to my web site</a>
}

//class component
class Link extends react.Component{
    render(){
        return <a href="#">Link to my web site</a>
    }
}
export default Link;