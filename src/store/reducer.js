import {
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    MODIFY_COUNTER,
    POST_COUNTER_ERROR,
    POST_COUNTER_REQUEST,
    POST_COUNTER_SUCCESS,
} from "./actions";

const initialState = {
    counter: 10,
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MODIFY_COUNTER:
            return {...state, counter: state.counter + action.value};
        case FETCH_COUNTER_REQUEST:
        case POST_COUNTER_REQUEST:
            return {...state, loading: true};
        case FETCH_COUNTER_SUCCESS:
        case POST_COUNTER_SUCCESS:
            return {...state, loading: false, counter: action.counter};
        case FETCH_COUNTER_ERROR:
        case POST_COUNTER_ERROR:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};

export default reducer;