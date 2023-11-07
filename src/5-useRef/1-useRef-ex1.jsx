import React, { useState, useEffect, useRef  } from "react";

const Final = () => {

    const [firstName, setFirstName] = useState("");
    const inputDom = useRef("")

    useEffect(() => {
        // setRenderCount((prevCount) => setRenderCount(prevCount + 1))
        // console.log(renderCount);
        console.log(inputDom);
        // renderCount.current = renderCount.current+1
    });

    const focus = () => {
        inputDom.current.focus();
    };

    return (
        <div>
            <input 
            ref={inputDom}
            type="text"
             name="firstName"
            id="firstName"
            onChange={(e) => {
                setFirstName(e.target.value);
                }}
            />
            <h5>Typing: {firstName}</h5>
             {/* <h5>Component renderd {renderCount.current} times</h5> */}
                <button onClick={focus}>focus</button>
        </div>

    );

};

export default Final;