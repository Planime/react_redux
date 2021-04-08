import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, INIT_TASK} from "../constans";
import {load} from "redux-localstorage-simple/dist/index";


export const initTask =  () => {
    return async function(dispatch) {

    let response = await fetch("https://5fec128e573752001730b0f1.mockapi.io/todoredux");
    response = await response.json();

        dispatch({
            type: INIT_TASK,
            tasks: response
        })
    }
};

export const addTask = (text, isCompleted) => {
    return async function(dispatch) {
        let options = {
            method: "POST",
            body: JSON.stringify(
                {
                    isCompleted,
                    text
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }

        };
        let response = await fetch("https://5fec128e573752001730b0f1.mockapi.io/todoredux", options);
        response = await response.json();


        dispatch({
            type: ADD_TASK,
            ...response
        })

    }
};

export const deleteTask = (id) => {
  return async function(dispatch) {
      let options = {
          method: "DELETE"
      };

      let response = await fetch(`https://5fec128e573752001730b0f1.mockapi.io/todoredux/${id}`, options);
      response = await response.json();
      dispatch({
          type: DELETE_TASK,
          id: response.id
      })
  }
};

export const completeTask = (id, isCompleted) => {
   return async function(dispatch) {
       let options = {
           method: "PUT",
           body: JSON.stringify({
               isCompleted: !isCompleted
           }),

           headers: {
               "Content-Type": "application/json"
           }
       };
       let response = await fetch(`https://5fec128e573752001730b0f1.mockapi.io/todoredux/${id}`, options)
       response = await response.json();

       dispatch({
           type: COMPLETE_TASK,
           changedTask: response
       })

   }
};