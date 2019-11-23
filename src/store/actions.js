import axios from "../axios-counter";
export const MODIFY_COUNTER = "MODIFY_COUNTER";
export const FETCH_COUNTER_SUCCESS = "FETCH_COUNTER_SUCCESS";
export const FETCH_COUNTER_ERROR ="FETCH_COUNTER_ERROR";
export const FETCH_COUNTER_REQUEST = "FETCH_COUNTER_REQUEST";
export const CHANGE_COUNTER = "CHANGE_COUNTER";

export const changeCounterSuccess = (value) => {
    return {type: CHANGE_COUNTER, value}
};


export const modifyCounterBy = (value) => {
    changeCounter(value);
    return {type: MODIFY_COUNTER, value}
};

export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};

export const fetchCounterSuccess = (counter) => {
    return {type: FETCH_COUNTER_SUCCESS, counter};
};

export const fetchCounterError = (error) => {
    return {type: FETCH_COUNTER_ERROR, error}
};

export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.get("/counter.json").then(response => {
            const counter =response.data;
            dispatch(fetchCounterSuccess(counter));
        }, err => {
            dispatch(fetchCounterError(err));
        })
    };
};



export const changeCounter = (value) => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.put("/counter.json", ).then(response => {
            const counter = response.data;
            dispatch(changeCounterSuccess(counter));
        }, err => {
            dispatch(fetchCounterError(err));
        });
    };
};