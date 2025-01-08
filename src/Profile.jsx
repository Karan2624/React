function Profile() {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
            name = "Alice"
            age ={30}
            greeting = {
                <div>
                <strong>Hi Alice, have a wonderful day!</strong>
              </div>
            }
            >
                {/* // childrens */}
            <p>Hobbies : Reading , Hiking</p> 
            <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;



function ProfileCard(props) {
        // you can destructure more by using const
    return (
        <>
        <h2>Name : {props.name}</h2>
        <p>Age : {props.age}</p>
        <p>{props.greeting}</p>
        <div>{props.children}</div> 
        {/* for childerns */}
        </>
    )
}