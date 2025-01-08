import { useState } from "react";

const ShortCircuitExample = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [user,setUser] = useState("");
    return (
        <section className="container short-container">
            <h1>Welcome to the short circuit evaluation</h1>

            {isLoggedIn && <p>Your are logged in</p>}

            {user ? `Hello ${user}` : "please login!"}

            <div className="grid-three-cols">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <buttton onClick={() => setUser("eren yeager")}>set Users</buttton>
                <button onClick={()=> setUser("")}>Clear User</button>
            </div>
        </section>
    )
}

export default ShortCircuitExample;