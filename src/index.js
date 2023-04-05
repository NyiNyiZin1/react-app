import react from "react";
import reactDom from "react-dom";
import Hello from "./Components/Hello";
import Link from "./Components/Link";

// function component
function Hello1(){
    const component = "function component"
    return <h1>Hello {component}</h1>;
}

// function component
function Link1(){
    return <a href="#">Link to my web site</a>
}

reactDom.render(
<>
<Hello />
<Link />
<Hello1 />
<Link1 />
</>
, document.getElementById("root"));