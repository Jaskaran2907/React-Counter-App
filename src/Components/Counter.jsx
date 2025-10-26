import React from "react";

function Counter(){

    const  [count , setCount] = React.useState(0);
    const [increment , setIncrement] = React.useState(0);
    var [colorr , setColorr] = React.useState("black")

    function handleIncrease(){
        var numI = +increment
        setCount(prevCount => prevCount + numI)
    };

    function handleIncrement(event){
        setIncrement(event.target.value);
    };

    function handleDecrement(){
        var numI = +increment
        setCount(prevcount => prevcount - numI)
    };

    function handleReset(){
        setCount(0)
    }
    
    React.useEffect(() => {
        var colorrr = count>0 ? "green" : count === 0 ? "black" : "red";
        setColorr(colorrr)
    }, [count]);

    return(
        <div className="counter"> 
            <div className="comp">
                <br/>
                <h1 style={{fontSize:"5rem" , color:colorr}}>{count}</h1>
                
                <input placeholder="Increment value" onChange={handleIncrement} style={{backgroundColor:"#B6ADE1" , border:"solid 1px black"}}></input>
                <div className="Buttonss">
                    <button type="button" class="btn btn-success" onClick={handleIncrease}>+</button>
                    <button type="button" class="btn btn-danger" onClick={handleDecrement}>-</button>
                    <button type="button" class="btn btn-warning" onClick={handleReset}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                    </svg>
                    </button>
                </div>
                
                <br/>
            </div>
            
        </div>
    );
};

export default Counter;