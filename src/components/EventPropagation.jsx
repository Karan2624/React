export const EventPropagation = () => {

    const handleGrandParent = () => {
        console.log("GrandParent clicked");
    };

    const handleParentClick  = () => {
        console.log("Parent clicked");
        event.stopPropagation();
    }

    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropagation(); // to stop further calling of parent fucntions
        console.log("Child clicked");
    }
    return (
        <section className="main-div">
            {/* <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div> */}
            {/* for capturingPhase */}
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    )
}