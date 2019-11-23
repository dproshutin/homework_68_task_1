import axios from "../axios-counter";

export const MODIFY_COUNTER = "MODIFY_COUNTER";
export const FETCH_COUNTER_SUCCESS = "FETCH_COUNTER_SUCCESS";
export const FETCH_COUNTER_ERROR = "FETCH_COUNTER_ERROR";
export const FETCH_COUNTER_REQUEST = "FETCH_COUNTER_REQUEST";
export const POST_COUNTER_SUCCESS = "POST_COUNTER_SUCCESS";
export const POST_COUNTER_ERROR = "POST_COUNTER_ERROR";
export const POST_COUNTER_REQUEST = "POST_COUNTER_REQUEST";

export const modifyCounterBy = (value) => {
    return {type: MODIFY_COUNTER, value}
};

export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};
export const fetchCounterSuccess = (counter) => {
    return {type: FETCH_COUNTER_SUCCESS, counter};
};
export const fetchCounterError = (error) => {
    return {type: FETCH_COUNTER_ERROR, error};
};

export const postCounterRequest = () => {
    return {type: POST_COUNTER_REQUEST};
};
export const postCounterSuccess = (counter) => {
    return {type: POST_COUNTER_SUCCESS, counter};
};
export const postCounterError = (error) => {
    return {type: POST_COUNTER_ERROR, error};
};

export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.get("/task1/counter.json").then(response => {
            const counter = response.data;
            dispatch(fetchCounterSuccess(counter));
        }, err => {
            dispatch(fetchCounterError(err));
        });
    };
};

export const postCounter = () => {
    return (dispatch, getState) => {
        dispatch(postCounterRequest());
        const {counter} = getState();
        axios.put("/task1/counter.json", counter).then(response => {
            dispatch(postCounterSuccess(counter));
        }, err => {
            dispatch(postCounterError(err));
        });

    };
};