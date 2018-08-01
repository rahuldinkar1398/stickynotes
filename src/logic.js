const FETCH_DATA = 'FETCH_DATA'
const ADD_DATA = 'ADD_DATA'
const DELETE_DATA = 'DELETE_DATA'
const EDIT_DATA = 'EDIT_DATA'

const INTITAL_DATA = {
  data: []
} 

export const fetchDataAction = payload => {
  return {
    type: FETCH_DATA,
    payload
  }
}

export const addDataAction = payload => {
  return {
    type: ADD_DATA,
    payload
  }
}

export const deleteDataAction = payload => {
  return {
    type: DELETE_DATA,
    payload
  }
}

export const editDataAction = payload => {
  return {
    type: EDIT_DATA,
    payload
  }
}

export function fetchDataReducer (state = INTITAL_DATA, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return state
    }

    case ADD_DATA: {
      return {
        data: [...state.data, action.payload]
      }
    }

    case DELETE_DATA: {
      return {
        data: [...action.payload]
      }
    }

    case EDIT_DATA: {
      return {
        data: [...action.payload]
      }
    }

    default:
      return state
  }
}