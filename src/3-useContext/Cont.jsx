import { createContext } from "react";
import Level2 from "./Level2"

const AuthContext = createContext();
const AjayContext = createContext();

const authState = { userId: 123, loggin: true };
const ajayData = {
    name: "Ajay ",
    nickname: "Tinku",
    lastname: 'yadavanshi',
    gmail: "majay805@gmail.com"
}

function Cont() {
    return (
        <>
            <h1>Cont</h1>
            <AuthContext.Provider value={authState}>
                <AjayContext.Provider value={ajayData}>
                    <Level2 />
                    {/* <Level2 outhState={authState}/> */}
                </AjayContext.Provider>
            </AuthContext.Provider>
        </>
    );


}
export default Cont;
export { AuthContext };
export { AjayContext };