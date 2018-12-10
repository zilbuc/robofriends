import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
 } from './constants.js';

// export const setSearchField = (text) => ({
//   type: CHANGE_SEARCH_FIELD,
//   payload: text
// })

// returns new state (an object)
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


// In this case new state is not an object, but a function, thus Mdlwr (thunk) sends a dispatch to call actions
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING }); // Without a payload
  fetch('https://jsonplaceholder.typicode.com/users') // asynchronous request
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
