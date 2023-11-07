import Level1 from "./Level1.jsx";
import { useContext } from "react";
import { AjayContext } from "./Cont.jsx";
function Level2() {
    const user = useContext(AjayContext);
    return (
        <div className="Level2">

            <h2>Level2</h2>
            <p>Name: {user.name}</p>
            <p>nickname:{user.nickname}</p>
            <p>lastname:{user.lastname}</p>
            <p>Email: {user.gmail}</p>

            <Level1 />
        </div>
    )

}

export default Level2;