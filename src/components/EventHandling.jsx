export const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Hey i am onClick event")
    // }

    const handleButtonClick = (event) => {
       console.log(event);
       console.log(event.target);
       console.log(event.type);
        alert("Hey i am onClick event")
    }

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user},Welcome to my world`);
    }

    return (
        <>
        <button onClick={handleButtonClick}>Click Me</button>
        <br />
        <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
        <br />
        {/* inline event handler */}
        <button  onClick={(event) => console.log(event.target)}>Inline Function</button>
        <br />
        <button onClick={() => alert("Hey i am inline event function")}>Inline Arr fun</button>
        <br />
        {/* <button onClick={handleWelcomeUser}>Click Me</button> */}
        {/* you cant pass argument here */}
        <button onClick={() => handleWelcomeUser("Karan")}>Click Me</button>
        <br />
        <button onClick={() => handleWelcomeUser("Eren")}>Click Me</button>
        </>
    )
}

