import {useState, createContext, useContext} from "react";
const UserContext = createContext();

function Component1 () {
    const [user, setUser] = useState("user1");
    // return (
    //     <>
    //         <h4>Hello {user}</h4>
    //         <Component2 user={user}></Component2>
    //     </>
    // );

    return (
        <UserContext.Provider value={user}>
            <h4>Hello {user}</h4>
            <Component2 user={user}></Component2>
        </UserContext.Provider>
    );
}

function Component2({user}) {
    return (
        <>
            <h4>Component 2</h4>
            <Component3 user={user}></Component3>
        </>
    );
}

function Component3({user}) {
    return (
        <>
            <h4>Component 3</h4>
            <Component4 user={user}></Component4>
        </>
    );
}

function Component4({user}) {
    return (
        <>
            <h4>Component 4</h4>
            {/*<Component5 user={user}/>*/}
            <Component5/>
        </>
    );
}

function Component5() {
/*    return (
        <>
            <h4>Component 5 Hello again {user}</h4>
        </>
    );*/
const user = useContext(UserContext);
return (
    <>
        <h4>Component 5 Hello {user} again, This is coming from context</h4>
    </>
);

}

export default Component1;