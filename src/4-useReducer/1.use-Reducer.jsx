import React, { useReducer } from "react";

const reducer = (state, action) => {
    // console.log(state);
    // console.log(action);
    if (action.type === "DELETE_PERSON") {
        const newPersons = state.data.filter((eachPerson) => {
            return eachPerson.id !== action.payload;
        });
        // console.log(newPersons);
        return {
            ...state,
            data: newPersons,
            length: state.length-1, 
        }
    }
    return state
    
    

}

const Final = () => {

    const initialState = {
        data: [
            { id: "1234", firstName: 'srikanth', email: "srikanth@gmail.com" },
            { id: "12341", firstName: "shravani", email: "shravani@gmail.com" },
        ],
        length: 2,
    };

    // console.log(useReducer(reducer, initialState));
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDelete = (id) => {
        // console.log(id);
        dispatch({
            type: 'DELETE_PERSON',
            payload: id
        })

    };

    const handleEdit = (id => {
        dispatch ( {
            type:"UPDATE_PERSON",
            payload:id,
        })
    })

    return (
        <div>
            <h1>Current users length : {state.length}</h1>
            {
                state.data.map((eachItem) => {
                    const { id, firstName, email } = eachItem
                    return <div key={id}>
                        <h3>{firstName}</h3>
                        <p>{email}</p>
                        <button onClick={() => handleDelete(id)} >delete</button>
                        <button onClick={() => handleEdit(id)}>edit</button>
                    </div>
                })
            }
        </div>
    );
};

export default Final; 