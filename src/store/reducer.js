import {
    CHANGE_COUNTER,
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    MODIFY_COUNTER
} from "./actions";

const initialState = {
    counter: 0,
    loading: false,
    error: null
};

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case MODIFY_COUNTER:
            return {...state, counter: state.counter + action.value};
        case FETCH_COUNTER_REQUEST:
            return {...state, loading: true};
        case FETCH_COUNTER_SUCCESS:
            return {...state, loading: false, counter: action.counter};
        case FETCH_COUNTER_ERROR:
            return {...state, loading: false, error: action.error};
        case CHANGE_COUNTER:
            console.log(state.counter + action.value);
            return {...state, loading: false, counter: state.counter + action.value};
        default:
            return state;
    }
};

export default reducer;