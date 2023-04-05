import react from "react";
import reactDom from "react-dom";

//function component
function Hello2(){
    const component = "function component in class"
    return <h1>Hello {component}</h1>;
}

//class component
class Hello extends react.Component{
    render(){
        const component = "class component"
        return <h1>Hello {component}</h1>;
    }
}

export default Hello;