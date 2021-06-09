const initialState = {
  data: []
}

function cakesReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'cakes/setCakes') {
      return { ...state, data: payload }
  } 
  return state
}

export default cakesReducer
