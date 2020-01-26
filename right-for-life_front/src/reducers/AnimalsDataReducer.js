import { GET_ANIMALS_DATA } from "../constants";
import { ANIMALS_DATA_RECEIVED } from "../constants";

const AnimalsDataReducer = (state = {arr: null, loading: false}, action) => {
  switch (action.type) {
    case GET_ANIMALS_DATA: {
      return {state, arr: null, loading: true};
    }

    case ANIMALS_DATA_RECEIVED: {
      return {arr: action.json, loading: false};
    }

    default: {
      return state;
    }
  }
};

export default AnimalsDataReducer;