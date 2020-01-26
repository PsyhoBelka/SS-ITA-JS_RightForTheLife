import { GET_NEWS, NEWS_RECEIVED } from "../constants";

const NewsReducer = (state = {arr: null, loading: false}, action) => {
  switch (action.type) {
    case GET_NEWS: {
      return {arr: null, loading: true};
    }

    case NEWS_RECEIVED: {
      return {arr: action.json, loading: false};
    }

    default: {
      return state;
    }
  }
};

export default NewsReducer;