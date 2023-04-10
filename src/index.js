import react from "react";
import reactDom from "react-dom";
import Hello from "./Components/Hello";
import Link from "./Components/Link";
import App from "./Components/App"
import State from "./Components/state/State"
import Props from "./Components/props/Props"
import Rest from "./Components/apicall/Rest"
import Memeapp from "./Components/meme/Memeapp"

// function component
function Hello1(){
    const component = "function component"
    return <h1>Hello {component}</h1>;
}

// function component
function Link1(){
    return <a href="#">Link to my web site</a>
}

//function and class component
// reactDom.render(
// <>
// <Hello />
// <Link />
// <Hello1 />
// <Link1 />
// <App />
// </>
// , document.getElementById("root"));

//Event Listeners
//reactDom.render(<App />, document.getElementById("root"))

//state as props
//reactDom.render(<State />, document.getElementById("root"))

//props
//reactDom.render(<Props />, document.getElementById("root"))

//rest api call
//reactDom.render(<Rest />, document.getElementById("root"))

//Meme
reactDom.render(<Memeapp />, document.getElementById("root"))