// import React from "./react";
import { useContext } from "react";
import { AuthContext } from "./Cont";
function Level1() {
    const authContext = useContext(AuthContext);
    console.log(authContext);

    function add() {
        authContext["add"] = 123;
        console.log(authContext);
        // document.getElementById('rock').textContent = text

    }
    return (
        <div className="Level1">
            <h3>Leve1</h3>
            <button onClick={add}>Add to context</button>
            <p id="rock">{JSON.stringify(authContext,null,2)}</p>
            {/* <p >{text}</p> */}
        </div>
    )

}

export default Level1;