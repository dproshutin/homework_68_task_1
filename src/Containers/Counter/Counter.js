import React, {Component} from 'react';
import './Counter.css';
import {connect} from "react-redux";
import {fetchCounter, modifyCounterBy, postCounter} from "../../store/actions";

class Counter extends Component {
    componentDidMount() {
        this.props.fetchCounter();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.counter !== this.props.counter) {
            this.props.postCounter();
        }
    }

    render() {
        let number = 5;
        return (
            <div className="Counter">
                <h1>{this.props.counter}</h1>
                <button onClick={() => this.props.modifyCounterBy(1)}>Increase</button>
                <button onClick={() => this.props.modifyCounterBy(-1)}>Decrease</button>
                <button onClick={() => this.props.modifyCounterBy(number)}>Increase by {number}</button>
                <button onClick={() => this.props.modifyCounterBy(-number)}>Decrease by {number}</button>
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
        modifyCounterBy: (value) => dispatch(modifyCounterBy(value)),
        fetchCounter: () => dispatch(fetchCounter()),
        postCounter: () => dispatch(postCounter())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);