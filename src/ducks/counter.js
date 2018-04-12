const initialState = {
 currentValue: 0,
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// action creater
export function increment(num) {
 return {
   type: INCREMENT,
   payload: num
 }
}
export function decrement(num) {
 return {
   type: DECREMENT,
   payload: num
 }
}
//redux invokes the reducer from the createStore method

export default function reducer(state = initialState, action) {
 switch (action.type) {
  case INCREMENT: 
    // return currentValue: state.currentValue + action.payload
    return Object.assign({}, state, {currentValue: state.currentValue + action.payload})

  case DECREMENT: 
    return {
     currentValue: state.currentValue - action.payload
    }
  default:
   return state;
 }
}