
export const initialPageState = {
  controltype: 'text',
  controls: [],
  isFetching: false,
  error: ''
}

export function pageReducer(state = initialPageState, action) {

  switch (action.type) {

    case 'GET_LIST_CONTROLS':
        return { ...state, isFetching: true, error: '' }
    case 'GET_LIST_CONTROLS_SUCCESS':
        return { ...state, controls: action.payload, isFetching: false, error: '' }
    case 'GET_LIST_CONTROLS_FAIL':
        return { ...state, error: action.payload.message, isFetching: false }

    default:
      return state
  }
}
