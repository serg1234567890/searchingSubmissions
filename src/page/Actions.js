
import { Httpservice } from '../services/Httpservice';

export function getControls() {
  return (dispatch) => {  
    dispatch({ type: 'GET_LIST_CONTROLS' })
    Httpservice.get('api/search/search')
      .then(data => dispatch({ type: 'GET_LIST_CONTROLS_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'GET_LIST_CONTROLS_FAIL', error: true, payload: error }) )
  }
}

