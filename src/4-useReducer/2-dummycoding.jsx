// import React,{ useReducer, useEffect } from "react";
// // import { act } from "react-dom/test-utils";

//     const reducer = (state, action) => {
//         if (action.type === "UPDATE_USERS_DATA"){
//             return{
//                 ...state,
//                 userData:action.payload,
//             }
            
//         }
//         return state;
//     };

//     const Advanced = () => {

//         const fetchUsersData = async (URL) => {
//             dispatch({type:"LOADING",payload:true})
//             dispatch({type:"ERROR",payload:{ status: false, msg:""}})
//             try {
//                 const response = await fetch(URL);
//                 const data = await response.json();
//                 // console.log(data);
//                 dispatch({type:"UPDATE_USERS_DATA",payload:data});
//                 dispatch({type:"LOADING",payload:false})
//                 dispatch({type:"ERROR",payload:{ status: false, msg:""}})
//             } catch (error) {
//             console.log(error);
//             dispatch({type:"LOADING",payload:false})
//             dispatch({
//                 type:"ERROR",
//                 payload:{ status: true, msg: error.message },
//             });
//             // dispatch({type:"ERROR", payload:error})
//         }
//     };

//         useEffect(() => {
//             fetchUsersData('https://jsonplaceholder.typicode.com/users')
//         },[])

//     const initialState = {
//         userData: [],
//         isLoading: false,
//         isError: {status:false, msg:""}
//     };

//     const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//         {/* <h1>User Information</h1> */}
//         {
//             state.userData.map((eachUser) => {
//                 const { id, name, email } = eachUser;
//                 return (
//                     <div key={id}>
//                         <h3>{name}</h3>
//                             <p>{email}</p>

//                     </div>
//                 )
//             })
//         }
//         </div>
//         );
    
// }
// export default Advanced;


