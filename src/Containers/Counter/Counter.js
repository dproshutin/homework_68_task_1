import React, {Component} from 'react';
import './Counter.css';
import {connect} from 'react-redux';
import {modifyCounterBy, fetchCounter, changeCounter} from "../../store/actions";

class Counter extends Component {
    componentDidMount() {
        this.props.fetchCounter();
    }

    render() {
        let number = 10;
        return(
            <div className="Counter">
                <h1>{this.props.counter}</h1>
                <button onClick={() => this.props.changeCounter(1)}>Increase</button>
                <button onClick={() => this.props.changeCounter(-1)}>Decrease</button>
                <button onClick={() => this.props.changeCounter(number)}>Increase by {number}</button>
                <button onClick={() => this.props.changeCounter(-number)}>Decrease by {number}</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeCounter: (value) => dispatch(changeCounter(value)),
        fetchCounter: () => dispatch(fetchCounter())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);