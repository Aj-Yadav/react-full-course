import React, { useReducer, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // Import the TailSpin loader

const reducer = (state, action) => {
  if (action.type === "UPDATE_USERS_DATA") {
    return {
      ...state,
      userData: action.payload,
    };
  }
  if (action.type === 'LOADING') {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  return state;
};

const Advanced = () => {
  const fetchUsersData = async (URL) => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });

    try {
      const response = await fetch(URL);
      const data = await response.json();
      
      dispatch({ type: "UPDATE_USERS_DATA", payload: data });
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: error.message },
      });
    }
  };

  useEffect(() => {
    fetchUsersData('https://jsonplaceholder.typicode.com/users');
  }, []);

  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.isLoading) {
    // Display a loading spinner while loading
    return (
        // <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="centered-loader">
        <TailSpin // Use the TailSpin loader
          color="#00BFFF" // Set the spinner color
          height={80} // Set the spinner height
          width={80} // Set the spinner width
        />
      </div>
      
    );
  }

  // After loading is complete, display user data
  return (
    <div className="user-grid">
      {state.userData.map((eachUser) => {
        const { id, name, email } = eachUser;
        return (
          <div key={id} className="user-card" >
            <h3>{name}</h3>
            <p>{email}</p>
            <button>delete</button>
            <button>edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Advanced;
