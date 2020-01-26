import {
  GET_EMERGENCY_DATA,
  EMERGENCY_DATA_RECEIVED,
} from "../constants";

const EmergencyDataReducer = (state = {arr: null, loading: false}, action) => {
  switch (action.type) {
    case GET_EMERGENCY_DATA: {
      return {state, arr: null, loading: true};
    }

    case EMERGENCY_DATA_RECEIVED: {
      return {arr: action.json, loading: false};
    }

    default: {
      return state;
    }
  }
};

export default EmergencyDataReducer;