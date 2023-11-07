// import React, { useReducer, useEffect } from "react";

// // Define a reducer function to handle state updates
// const reducer = (state, action) => {
//   if (action.type === "UPDATE_USERS_DATA") {
//     // If the action type is 'UPDATE_USERS_DATA', update the 'userData' property
//     return {
//       ...state,
//       userData: action.payload,
//     };
//   }
//   //for handling loding ***
//   if (action.type === 'LOADING') {
//     return {
//         ...state,
//         isLoading:action.payload 
//     };
//   }
//   // For other action types, return the state unchanged
//   return state;
// };

// const Advanced = () => {
//   // Define an async function to fetch user data from an API
//   const fetchUsersData = async (URL) => {
//     // Dispatch an action to set 'isLoading' to true
//     dispatch({ type: "LOADING", payload: true });
//     // Dispatch an action to reset the error status
//     dispatch({ type: "ERROR", payload: { status: false, msg: "" } });

//     try {
//       // Fetch data from the specified URL
//       const response = await fetch(URL);
//       const data = await response.json();
      
//       // Dispatch an action to update 'userData' with the fetched data
//       dispatch({ type: "UPDATE_USERS_DATA", payload: data });
      
//       // Dispatch an action to set 'isLoading' to false
//       dispatch({ type: "LOADING", payload: false });
//       // Dispatch an action to reset the error status
//       dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
//     } catch (error) {
//       console.log(error);
//       // Dispatch an action to set 'isLoading' to false
//       dispatch({ type: "LOADING", payload: false });
//       // Dispatch an action to set 'isError' to true and provide an error message
//       dispatch({
//         type: "ERROR",
//         payload: { status: true, msg: error.message },
//       });
//     }
//   };

//   // Use the useEffect hook to fetch user data when the component mounts
//   useEffect(() => {
//     fetchUsersData('https://jsonplaceholder.typicode.com/users');
//   }, []);

//   // Define the initial state for the component
//   const initialState = {
//     userData: [], // Store user data
//     isLoading: false, // Indicates whether data is loading
//     isError: { status: false, msg: "" }, // Indicates if an error occurred
//   };

//   // Use the useReducer hook to manage the component's state
//   const [state, dispatch] = useReducer(reducer, initialState);

//   if(state.isLoading) {
//     return (
//         <div>
//             <h3> Loading...</h3>
//         </div>
//     )
//   }

//   return (
//     <div>
//       {/* Map over the 'userData' array and display user information */}
//       {state.userData.map((eachUser) => {
//         const { id, name, email } = eachUser;
//         return (
//           <div key={id} style={{ background:"lightblue"}}>
//             <h3>{name}</h3>
//             <p>{email}</p>
//             <button>delete</button>
//             <button>edit</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Advanced;
