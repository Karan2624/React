import { useState } from "react";
export const State = () => {
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
    // }

    console.log("Parent Component rendered");
    // console value us coming twice because of twice checking due to react.strictmode
    const [count,setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(() => count+1);
    };
    return (
        <>
        <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </section>
        <ChildComponent count = {count}/>
        </>
    )
}

function ChildComponent({count}) {
    console.log("Child Component rendered");
    return(<div className="main-div">
        <h2>Child Component -{count}</h2>
    </div>
    ) ;
}

export function Sibiling() {
    console.log("Sibiling Component rendered");
    return ( <div className="main-div">
        <h2>Sibiling Component</h2>
    </div>
    );
}