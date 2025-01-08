export const EventsProps = () => {

const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
}

const handleHover = () => {
    alert(`Hey Thanks for hovering me`);
}
    return (
        <>
        <WelcomeUser onClick={() => HandleWelcomeUser("Karan")} 
            onMouseEnter={handleHover} />
        </>
    );
};

const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log(`Hey User,Welcome`);
        onClick();
    }

    return (
        <>
        <button onClick={props.onClick}>Click</button>
        <br />
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <br />
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}